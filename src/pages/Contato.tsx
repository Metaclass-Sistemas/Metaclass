import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contato() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [consentAccepted, setConsentAccepted] = useState(false)
  const [subject, setSubject] = useState<string>('proposal')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const nameTrimmed = name.trim()
    const emailTrimmed = email.trim()
    const phoneTrimmed = phone.trim()
    const messageTrimmed = message.trim()
    const phoneDigits = phoneTrimmed.replace(/\D/g, '')

    if (!nameTrimmed || !emailTrimmed || !phoneTrimmed || !messageTrimmed) {
      setError('Preencha nome, telefone, e-mail e mensagem.')
      return
    }

    if (!subject) {
      setError('Selecione um assunto.')
      return
    }

    if (phoneDigits.length < 10) {
      setError('Informe um telefone válido.')
      return
    }

    if (!consentAccepted) {
      setError('Você precisa aceitar os Termos de Uso e a Política de Privacidade.')
      return
    }

    setLoading(true)
    const subjectText = `Contato - ${subject}`
    const body = [
      `Nome: ${nameTrimmed}`,
      `Telefone: ${phoneTrimmed}`,
      `Email: ${emailTrimmed}`,
      `Assunto: ${subject}`,
      '',
      messageTrimmed,
    ].join('\n')

    const mailto = `mailto:contato@metaclass.com.br?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSubmitted(true)
    setConsentAccepted(false)
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 201, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 201, 235, 0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-brand-blue font-semibold uppercase tracking-wide text-sm">Fale com a Metaclass</p>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                Vamos mapear seu cenário e montar a{' '}
                <span className="text-brand-blue">proposta ideal</span>
              </h1>
              <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-2xl">
                Em uma conversa objetiva com nosso time técnico, você recebe diagnóstico, direcionamento e
                estimativa — sem burocracia e sem compromisso.
              </p>

              {/* Trust strip */}
              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { icon: Clock, text: 'Retorno em até 1 dia útil' },
                  { icon: ShieldCheck, text: 'Conversa sem compromisso' },
                  { icon: MapPin, text: 'Atendimento 100% online' },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-2 text-sm text-white/70">
                    <t.icon className="w-4 h-4 text-brand-blue" />
                    {t.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-start">

              {/* ── SIDEBAR ESQUERDA ── */}
              <div className="lg:col-span-4 space-y-6">

                {/* Canais de contato */}
                <div className="rounded-3xl border border-gray-100 bg-white shadow-lg p-8">
                  <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-6">Canais de contato</div>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: 'E-mail comercial',
                        value: 'contato@metaclass.com.br',
                        href: 'mailto:contato@metaclass.com.br',
                      },
                      {
                        icon: MessageSquare,
                        title: 'Retorno',
                        value: 'Até 1 dia útil após o contato',
                        href: null,
                      },
                      {
                        icon: MapPin,
                        title: 'Atendimento',
                        value: 'Brasil · 100% online',
                        href: null,
                      },
                    ].map((c) => (
                      <div key={c.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center flex-shrink-0">
                          <c.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{c.title}</div>
                          {c.href ? (
                            <a href={c.href} className="text-brand-blue text-sm font-medium hover:underline">
                              {c.value}
                            </a>
                          ) : (
                            <div className="text-sm text-gray-600">{c.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* O que acontece depois */}
                <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8">
                  <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-6">O que acontece depois</div>
                  <div className="space-y-4">
                    {[
                      { step: '01', text: 'Recebemos sua mensagem e analisamos o contexto' },
                      { step: '02', text: 'Um especialista entra em contato em até 1 dia útil' },
                      { step: '03', text: 'Agendamos uma conversa técnica de 30 minutos' },
                      { step: '04', text: 'Apresentamos diagnóstico e proposta personalizada' },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[10px] font-bold text-brand-blue">{s.step}</span>
                        </div>
                        <div className="text-sm text-white/70 leading-relaxed">{s.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Garantias */}
                <div className="rounded-3xl border border-gray-100 bg-white shadow-lg p-6">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Compromissos</div>
                  <div className="space-y-3">
                    {[
                      'Dados protegidos por LGPD',
                      'Sem spam ou compartilhamento de dados',
                      'Resposta garantida em até 1 dia útil',
                      'Nenhum compromisso na conversa inicial',
                    ].map((t) => (
                      <div key={t} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── FORMULÁRIO ── */}
              <div className="lg:col-span-8">
                <div className="rounded-3xl border border-gray-100 bg-white shadow-xl p-8 sm:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-20 h-20 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-6">
                        <CheckCircle className="h-10 w-10 text-brand-blue" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Mensagem enviada!</h3>
                      <p className="text-gray-600 max-w-sm leading-relaxed mb-8">
                        Nosso time vai analisar seu cenário e retornar em até 24 horas úteis com um direcionamento inicial.
                      </p>
                      <a
                        href="/servicos"
                        className="inline-flex items-center gap-2 text-brand-blue font-bold hover:underline text-sm"
                      >
                        Enquanto isso, conheça nossos serviços
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="font-display text-2xl font-bold text-slate-900">Solicite uma proposta</h2>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                          Preencha o formulário e nosso time técnico retorna com um direcionamento personalizado
                          para o seu cenário.
                        </p>
                      </div>

                      {error && (
                        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700" htmlFor="name">
                              Nome completo
                            </label>
                            <input
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Seu nome"
                              required
                              className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/25 focus:border-brand-blue transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700" htmlFor="email">
                              E-mail corporativo
                            </label>
                            <input
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              placeholder="seu@email.com"
                              required
                              className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/25 focus:border-brand-blue transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                              Telefone / WhatsApp
                            </label>
                            <input
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              type="tel"
                              inputMode="tel"
                              placeholder="(11) 99999-9999"
                              required
                              onInput={(e) => {
                                const input = e.currentTarget
                                input.value = input.value.replace(/[^0-9()\-\s+]/g, '')
                              }}
                              className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/25 focus:border-brand-blue transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700" htmlFor="subject">
                              Como podemos ajudar?
                            </label>
                            <select
                              id="subject"
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                              className="h-12 w-full rounded-xl border border-slate-200 px-4 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/25 focus:border-brand-blue transition-colors"
                            >
                              <option value="proposal">Quero uma proposta</option>
                              <option value="saas">Quero conhecer um produto (SaaS)</option>
                              <option value="squad">Quero squad / projeto</option>
                              <option value="integrations">Integrações / automação</option>
                              <option value="partnership">Parcerias</option>
                              <option value="support">Suporte</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700" htmlFor="message">
                            Descreva seu cenário
                          </label>
                          <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Conte o objetivo, prazo e o que já existe hoje. Quanto mais contexto, melhor o direcionamento inicial."
                            required
                            rows={5}
                            className="w-full rounded-xl border border-slate-200 p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-blue/25 focus:border-brand-blue transition-colors"
                          />
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                          <label htmlFor="contact-consent" className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                            <input
                              id="contact-consent"
                              type="checkbox"
                              checked={consentAccepted}
                              onChange={(e) => setConsentAccepted(e.target.checked)}
                              className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-brand-blue"
                              required
                            />
                            <span>
                              Concordo com os{' '}
                              <Link to="/termos" className="font-semibold text-slate-900 underline underline-offset-2 hover:text-brand-blue">
                                Termos de Uso
                              </Link>{' '}
                              e a{' '}
                              <Link to="/privacidade" className="font-semibold text-slate-900 underline underline-offset-2 hover:text-brand-blue">
                                Política de Privacidade
                              </Link>
                              . Meus dados serão usados exclusivamente para responder a este contato.
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <p className="text-xs text-gray-400">
                            Retorno em até 1 dia útil · Atendimento 100% online
                          </p>
                          <button
                            type="submit"
                            disabled={loading || !consentAccepted}
                            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 font-bold text-slate-950 text-sm hover:brightness-110 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {loading ? (
                              'Enviando...'
                            ) : (
                              <>
                                <Send className="h-4 w-4" />
                                Enviar mensagem
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de diferenciais */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Por que nos escolher</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
                O que você pode esperar da conversa
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Clock,
                  title: 'Resposta rápida',
                  text: 'Retornamos em até 1 dia útil com uma análise inicial do seu cenário.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Sem compromisso',
                  text: 'A conversa inicial é gratuita e sem nenhum tipo de compromisso de compra.',
                },
                {
                  icon: MessageSquare,
                  title: 'Diagnóstico técnico',
                  text: 'Nosso time analisa seu contexto e traz direcionamento técnico real na primeira conversa.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Proposta clara',
                  text: 'Escopo, prazo e investimento documentados antes de qualquer avanço.',
                },
              ].map((d) => (
                <div key={d.title} className="rounded-3xl border border-gray-100 bg-gray-50 p-7 hover:shadow-lg transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center mb-5">
                    <d.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-base">{d.title}</div>
                  <div className="mt-2 text-sm text-gray-600 leading-relaxed">{d.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
