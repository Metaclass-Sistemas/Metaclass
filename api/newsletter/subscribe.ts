import type { IncomingMessage, ServerResponse } from 'http'
import { getSupabaseAdminClient } from '../_lib/supabaseAdmin'
import { requireEnv } from '../_lib/env'
import {
  getNewsletterInternalNotifyEmailHtml,
  getNewsletterInternalNotifyEmailText,
  getNewsletterSubscribedEmailHtml,
  getNewsletterSubscribedEmailText,
} from '../_lib/newsletterTemplates'

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

type ApiRequest = IncomingMessage & { method?: string; body?: any }
type ApiResponse = ServerResponse & {
  status: (code: number) => ApiResponse
  json: (body: any) => void
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const emailRaw = body?.email

    if (!emailRaw || typeof emailRaw !== 'string') {
      res.status(400).json({ error: 'Email is required' })
      return
    }

    const email = normalizeEmail(emailRaw)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'Invalid email' })
      return
    }

    const supabase = getSupabaseAdminClient()
    const now = new Date().toISOString()

    const { error: upsertError } = await supabase
      .from('newsletter_subscribers')
      .upsert(
        {
          email,
          status: 'subscribed',
          consent_at: now,
          updated_at: now,
          source: body?.source ?? 'footer',
        },
        { onConflict: 'email' },
      )

    if (upsertError) {
      console.error('newsletter subscribe: supabase upsert error', upsertError)
      res.status(500).json({ error: 'Database error: newsletter_subscribers' })
      return
    }

    const from = requireEnv('NEWSLETTER_FROM_EMAIL')
    const replyTo = process.env.NEWSLETTER_REPLY_TO || undefined
    const { Resend } = await import('resend')
    const resend = new Resend(requireEnv('RESEND_API_KEY'))

    const siteUrl = requireEnv('SITE_URL').replace(/\/$/, '')
    const privacyUrl = `${siteUrl}/privacidade`
    const termsUrl = `${siteUrl}/termos`

    const subject = 'Inscrição confirmada — Metaclass Newsletter'

    const html = getNewsletterSubscribedEmailHtml({
      email,
      siteUrl,
      privacyUrl,
      termsUrl,
    })
    const text = getNewsletterSubscribedEmailText({
      email,
      siteUrl,
      privacyUrl,
      termsUrl,
    })

    const { data: userEmailData, error: userEmailError } = await resend.emails.send({
      from,
      to: email,
      subject,
      html,
      text,
      replyTo,
    })

    if (userEmailError) {
      console.error('newsletter subscribe: resend send error (user confirmation)', {
        message: userEmailError.message,
        name: (userEmailError as any).name,
        email,
        source: body?.source ?? 'footer',
      })
      res.status(500).json({ error: 'Email delivery failed' })
      return
    }

    const internalTo = process.env.NEWSLETTER_INTERNAL_NOTIFY_TO
    if (internalTo) {
      const internalSubject = 'Novo inscrito — Metaclass Newsletter'
      const internalSource = body?.source ?? 'footer'
      const internalHtml = getNewsletterInternalNotifyEmailHtml({
        email,
        source: internalSource,
        subscribedAtIso: now,
        messageId: userEmailData?.id,
      })
      const internalText = getNewsletterInternalNotifyEmailText({
        email,
        source: internalSource,
        subscribedAtIso: now,
        messageId: userEmailData?.id,
      })

      const { error: internalEmailError } = await resend.emails.send({
        from,
        to: internalTo,
        subject: internalSubject,
        html: internalHtml,
        text: internalText,
        replyTo,
      })

      if (internalEmailError) {
        console.error('newsletter subscribe: resend send error (internal notify)', {
          message: internalEmailError.message,
          name: (internalEmailError as any).name,
          internalTo,
          email,
        })
      }
    }

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('newsletter subscribe: unhandled error', err)
    res.status(500).json({ error: 'Internal error' })
  }
}
