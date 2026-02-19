import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, FileText, Clock3, Send, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type LgpdRequestType =
  | 'access'
  | 'correction'
  | 'deletion'
  | 'portability'
  | 'consent_revocation'
  | 'opposition'

const lgpdTypeLabel: Record<LgpdRequestType, string> = {
  access: 'Acesso aos dados',
  correction: 'Correção de dados',
  deletion: 'Eliminação de dados',
  portability: 'Portabilidade',
  consent_revocation: 'Revogação de consentimento',
  opposition: 'Oposição ao tratamento',
}

export default function CanalLgpd() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [requestType, setRequestType] = useState<LgpdRequestType>('access')
  const [consentAccepted, setConsentAccepted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const details = String(formData.get('details') || '').trim()

    if (!name || !phone || !email || !details) {
      alert('Preencha nome, celular, e-mail e detalhes da solicitação.')
      return
    }

    if (!consentAccepted) {
      alert('Você precisa aceitar os Termos de Uso e a Política de Privacidade.')
      return
    }

    setLoading(true)

    // Criar mailto link como fallback
    const subject = `Canal LGPD - ${lgpdTypeLabel[requestType]}`
    const body = `Nome: ${name}
Celular: ${phone}
E-mail: ${email}
Tipo de Solicitação: ${lgpdTypeLabel[requestType]}

Detalhes:
${details}

---
Concordo com os Termos de Uso e Política de Privacidade da Metaclass.`

    const mailtoLink = `mailto:contato@metaclass.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Abrir cliente de e-mail
    window.location.href = mailtoLink

    setTimeout(() => {
      setSubmitted(true)
      setConsentAccepted(false)
      form.reset()
      setRequestType('access')
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20">
        {/* Hero Header */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(0, 201, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 201, 235, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/20 backdrop-blur border border-brand-blue/30">
                <ShieldCheck className="h-7 w-7 text-brand-blue" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold sm:text-4xl">Canal LGPD</h1>
                <p className="mt-1 text-sm text-white/70 sm:text-base">
                  Solicite seus direitos de privacidade de forma dedicada e segura.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
            {/* Info Cards */}
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/20 border border-brand-blue/30">
                  <FileText className="h-6 w-6 text-brand-blue" />
                </div>
                <h2 className="font-display text-lg font-semibold text-gray-900 mb-3">
                  Quando usar este canal
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>• Confirmar se tratamos seus dados pessoais</li>
                  <li>• Solicitar acesso, correção, portabilidade ou eliminação</li>
                  <li>• Revogar consentimento ou se opor ao tratamento</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/20 border border-brand-blue/30">
                  <Clock3 className="h-6 w-6 text-brand-blue" />
                </div>
                <h2 className="font-display text-lg font-semibold text-gray-900 mb-3">
                  Como respondemos
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Nosso time analisa cada solicitação e responde pelos canais oficiais cadastrados,
                  observando os prazos legais aplicáveis.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-900/30 border border-green-500/30 text-green-400">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-gray-900">
                      Solicitação enviada
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-gray-600">
                      Recebemos sua solicitação LGPD. Retornaremos pelos dados de contato informados.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:border-brand-blue hover:text-brand-blue transition-all duration-300 font-medium"
                    >
                      Nova solicitação
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-xl font-semibold text-gray-900">
                      Enviar solicitação LGPD
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      Preencha os dados abaixo para registrarmos seu pedido com rastreabilidade.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="lgpd-name" className="text-sm font-medium text-gray-700">
                            Nome
                          </label>
                          <input
                            id="lgpd-name"
                            name="name"
                            type="text"
                            placeholder="Seu nome"
                            required
                            className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lgpd-phone" className="text-sm font-medium text-gray-700">
                            Celular
                          </label>
                          <input
                            id="lgpd-phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            placeholder="(11) 99999-9999"
                            required
                            className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lgpd-email" className="text-sm font-medium text-gray-700">
                          E-mail
                        </label>
                        <input
                          id="lgpd-email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lgpd-type" className="text-sm font-medium text-gray-700">
                          Tipo de solicitação
                        </label>
                        <select
                          id="lgpd-type"
                          value={requestType}
                          onChange={(e) => setRequestType(e.target.value as LgpdRequestType)}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                          required
                        >
                          {Object.entries(lgpdTypeLabel).map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lgpd-details" className="text-sm font-medium text-gray-700">
                          Detalhes da solicitação
                        </label>
                        <textarea
                          id="lgpd-details"
                          name="details"
                          placeholder="Descreva claramente o que você deseja solicitar."
                          required
                          rows={6}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                        />
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-gray-50 p-3">
                        <label
                          htmlFor="lgpd-consent"
                          className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer"
                        >
                          <input
                            id="lgpd-consent"
                            type="checkbox"
                            checked={consentAccepted}
                            onChange={(e) => setConsentAccepted(e.target.checked)}
                            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                            required
                          />
                          <span>
                            Concordo com os{' '}
                            <Link
                              to="/termos"
                              className="font-medium text-brand-blue hover:text-brand-blue underline underline-offset-2"
                            >
                              Termos de Uso
                            </Link>
                            {' '}e a{' '}
                            <Link
                              to="/privacidade"
                              className="font-medium text-brand-blue hover:text-brand-blue underline underline-offset-2"
                            >
                              Política de Privacidade
                            </Link>
                            .
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={loading || !consentAccepted}
                        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-brand-blue to-brand-blue hover:shadow-lg hover:shadow-brand-blue/30 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          'Enviando...'
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Enviar solicitação
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
