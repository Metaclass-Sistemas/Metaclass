type NewsletterSubscribedTemplateInput = {
  email: string
  siteUrl: string
  privacyUrl: string
  termsUrl: string
}

export function getNewsletterSubscribedEmailHtml(input: NewsletterSubscribedTemplateInput): string {
  const subject = 'Inscrição confirmada — Metaclass Newsletter'
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fb; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(15,23,42,0.12);">
          <tr>
            <td style="background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #0c1a2e 100%); padding: 38px 28px; text-align: center;">
              <div style="margin: 0; color: #00c9eb; font-size: 30px; font-weight: 900; letter-spacing: 0.3px;">Metaclass</div>
              <div style="margin: 10px 0 0; color: rgba(255,255,255,0.75); font-size: 15px;">Newsletter</div>
            </td>
          </tr>

          <tr>
            <td style="padding: 34px 28px 10px;">
              <div style="display: inline-block; background: rgba(0,201,235,0.10); border: 1px solid rgba(0,201,235,0.30); color: #00c9eb; border-radius: 999px; padding: 6px 10px; font-size: 12px; font-weight: 800;">Inscrição</div>
              <h2 style="margin: 14px 0 10px; color: #0f172a; font-size: 24px; line-height: 1.25;">Inscrição confirmada</h2>
              <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.7;">
                Você foi inscrito(a) com sucesso na newsletter da Metaclass.
              </p>
              <p style="margin: 14px 0 0; color: #64748b; font-size: 14px; line-height: 1.7;">
                Você vai receber conteúdos quinzenais sobre engenharia, arquitetura, produto e mercado.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 28px 26px;">
              <div style="border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 14px; background: #ffffff;">
                <div style="color: #64748b; font-size: 13px; line-height: 18px;">E-mail inscrito</div>
                <div style="margin-top: 6px; color: #0f172a; font-size: 14px; font-weight: 700;">${input.email}</div>
              </div>

              <div style="margin-top: 16px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding: 14px 0 0;">
                      <a href="${input.siteUrl}" style="display: inline-block; background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #0c1a2e 100%); color: #00c9eb; text-decoration: none; padding: 14px 34px; border-radius: 10px; font-size: 15px; font-weight: 800; box-shadow: 0 10px 22px rgba(15,23,42,0.22); border: 1px solid rgba(0,201,235,0.25);">
                        Acessar o site
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <p style="margin: 18px 0 0; color: #94a3b8; font-size: 12px; line-height: 1.6;">
                Se você não solicitou, ignore este e-mail.
              </p>
            </td>
          </tr>

          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 28px; text-align: center;">
              <p style="margin: 0 0 10px; color: #64748b; font-size: 12px; line-height: 1.6;">
                Política de Privacidade: <a href="${input.privacyUrl}" style="color: #00c9eb; text-decoration: underline;">${input.privacyUrl}</a><br />
                Termos de Uso: <a href="${input.termsUrl}" style="color: #00c9eb; text-decoration: underline;">${input.termsUrl}</a>
              </p>
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">© ${new Date().getFullYear()} Metaclass</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export function getNewsletterSubscribedEmailText(input: NewsletterSubscribedTemplateInput): string {
  return [
    'Inscrição confirmada — Metaclass Newsletter',
    '',
    'Você foi inscrito(a) com sucesso na newsletter da Metaclass.',
    'Você vai receber conteúdos quinzenais sobre engenharia, arquitetura, produto e mercado.',
    '',
    `E-mail inscrito: ${input.email}`,
    '',
    `Site: ${input.siteUrl}`,
    `Política de Privacidade: ${input.privacyUrl}`,
    `Termos de Uso: ${input.termsUrl}`,
    '',
    'Se você não solicitou, ignore este e-mail.',
  ].join('\n')
}

type NewsletterInternalNotifyTemplateInput = {
  email: string
  source: string
  subscribedAtIso: string
  messageId?: string
}

export function getNewsletterInternalNotifyEmailHtml(input: NewsletterInternalNotifyTemplateInput): string {
  const subject = 'Novo inscrito — Metaclass Newsletter'
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fb; padding: 28px 18px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(15,23,42,0.12);">
          <tr>
            <td style="background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #0c1a2e 100%); padding: 26px 24px;">
              <div style="color: #00c9eb; font-size: 18px; font-weight: 900;">Metaclass</div>
              <div style="margin-top: 6px; color: rgba(255,255,255,0.75); font-size: 13px;">Notificação de Newsletter</div>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 24px 8px;">
              <h2 style="margin: 0 0 10px; color: #0f172a; font-size: 20px;">Novo inscrito</h2>
              <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.7;">
                Um novo e-mail se inscreveu na newsletter.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 24px 24px;">
              <div style="border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 14px; background: #ffffff;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 0 0 10px; color: #64748b; font-size: 13px; width: 130px;">E-mail</td>
                    <td style="padding: 0 0 10px; color: #0f172a; font-size: 13px; font-weight: 800;">${input.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 0 0 10px; color: #64748b; font-size: 13px;">Origem</td>
                    <td style="padding: 0 0 10px; color: #0f172a; font-size: 13px; font-weight: 700;">${input.source}</td>
                  </tr>
                  <tr>
                    <td style="padding: 0 0 10px; color: #64748b; font-size: 13px;">Data</td>
                    <td style="padding: 0 0 10px; color: #0f172a; font-size: 13px; font-weight: 700;">${input.subscribedAtIso}</td>
                  </tr>
                  <tr>
                    <td style="padding: 0; color: #64748b; font-size: 13px;">Message ID</td>
                    <td style="padding: 0; color: #0f172a; font-size: 13px; font-weight: 700;">${input.messageId ?? '-'}</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export function getNewsletterInternalNotifyEmailText(input: NewsletterInternalNotifyTemplateInput): string {
  return [
    'Novo inscrito — Metaclass Newsletter',
    '',
    `E-mail: ${input.email}`,
    `Origem: ${input.source}`,
    `Data: ${input.subscribedAtIso}`,
    `Message ID: ${input.messageId ?? '-'}`,
  ].join('\n')
}
