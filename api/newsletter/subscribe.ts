import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getSupabaseAdminClient } from '../_lib/supabaseAdmin.js'
import { requireEnv } from '../_lib/env.js'

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

    const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#0b1220;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0b1220;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="width:640px;max-width:100%;background:#0f172a;border:1px solid rgba(148,163,184,0.22);border-radius:18px;overflow:hidden;">
          <tr>
            <td style="padding:18px 22px;border-bottom:1px solid rgba(148,163,184,0.14);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-weight:900;letter-spacing:0.02em;color:#ffffff;font-size:16px;">Metaclass</div>
                    <div style="margin-top:6px;color:rgba(255,255,255,0.60);font-size:13px;line-height:18px;">Newsletter</div>
                  </td>
                  <td align="right">
                    <div style="display:inline-block;padding:6px 10px;border-radius:999px;background:rgba(0,201,235,0.12);border:1px solid rgba(0,201,235,0.28);color:#00c9eb;font-size:11px;font-weight:800;">Inscrição</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:26px 22px 8px;">
              <div style="font-size:22px;line-height:30px;font-weight:900;color:#ffffff;margin:0;">Inscrição confirmada</div>
              <div style="margin-top:10px;color:rgba(255,255,255,0.72);font-size:14px;line-height:22px;">
                Você foi inscrito(a) com sucesso na newsletter da Metaclass.
              </div>
              <div style="margin-top:10px;color:rgba(255,255,255,0.58);font-size:13px;line-height:20px;">
                Você vai receber conteúdos quinzenais sobre engenharia, arquitetura, produto e mercado.
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:14px 22px 22px;">
              <div style="background:rgba(148,163,184,0.08);border:1px solid rgba(148,163,184,0.14);border-radius:14px;padding:14px 14px;">
                <div style="color:rgba(255,255,255,0.70);font-size:12px;line-height:18px;">
                  E-mail inscrito:
                  <strong style="color:#ffffff;">${email}</strong>
                </div>
              </div>

              <div style="margin-top:14px;color:rgba(255,255,255,0.52);font-size:12px;line-height:18px;">
                Se você não solicitou, ignore este e-mail.
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 22px;border-top:1px solid rgba(148,163,184,0.14);">
              <div style="color:rgba(255,255,255,0.55);font-size:12px;line-height:18px;">
                Política de Privacidade:
                <a href="${privacyUrl}" style="color:#00c9eb;text-decoration:underline;">${privacyUrl}</a>
                <br />
                Termos de Uso:
                <a href="${termsUrl}" style="color:#00c9eb;text-decoration:underline;">${termsUrl}</a>
              </div>
              <div style="margin-top:10px;color:rgba(255,255,255,0.42);font-size:11px;line-height:16px;">
                ${siteUrl}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    await resend.emails.send({
      from,
      to: email,
      subject,
      html,
      replyTo,
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('newsletter subscribe: unhandled error', err)
    res.status(500).json({ error: 'Internal error' })
  }
}
