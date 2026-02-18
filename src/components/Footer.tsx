import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, LucideInstagram, LucideLinkedin, LucideYoutube, LucideGithub } from 'lucide-react'
import { openCookieConsentPreferences } from '../lib/cookieConsent'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('E-mail inválido.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source: 'footer' }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(typeof data?.error === 'string' ? data.error : 'Não foi possível concluir a inscrição.')
        return
      }

      setSubmitted(true)
    } catch {
      setError('Falha de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* linha cyan topo */}
        <div className="w-12 h-[3px] bg-totvs-cyan" />

        <div className="py-14 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* texto */}
          <div>
            <p className="text-xs font-bold text-totvs-cyan uppercase tracking-[0.18em] mb-4">
              Newsletter
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Conteúdo técnico que vale<br className="hidden sm:block" /> seu tempo
            </h3>
            <p className="mt-4 text-gray-500 leading-relaxed max-w-md">
              Insights sobre engenharia, arquitetura, produto e mercado de tecnologia.
              Sem ruído — quinzenalmente.
            </p>
          </div>

          {/* formulário */}
          <div>
            {submitted ? (
              <div className="flex items-start gap-3 py-2">
                <CheckCircle2 className="w-5 h-5 text-totvs-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Inscrição confirmada.</p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    <span className="font-medium text-gray-700">{email}</span> foi adicionado à nossa lista.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError('') }}
                      className={`w-full h-12 bg-white border-b-2 px-0 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors duration-200 ${
                        error ? 'border-red-400' : 'border-gray-200 focus:border-totvs-cyan'
                      }`}
                    />
                    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-12 flex items-center gap-2 bg-gray-900 text-white px-6 text-sm font-semibold hover:bg-totvs-cyan hover:text-slate-950 transition-all duration-200 whitespace-nowrap"
                  >
                    {loading ? 'Enviando...' : 'Inscrever-se'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                  Protegido pela{' '}
                  <Link to="/privacidade" className="underline underline-offset-2 hover:text-totvs-cyan transition-colors">
                    Política de Privacidade
                  </Link>{' '}
                  · LGPD · Cancele quando quiser.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <NewsletterSection />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Coluna esquerda — Logo, descrição, redes */}
          <div className="space-y-6 lg:col-span-4">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/1.png"
                alt="Metaclass Logo"
                className="h-28 w-auto"
                loading="lazy"
              />
            </a>

            <p className="max-w-sm text-sm text-gray-400 leading-relaxed">
              Desenvolvendo soluções tecnológicas inovadoras que transformam negócios e impulsionam resultados.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-totvs-cyan/30 bg-slate-900 px-2.5 py-1 text-xs text-gray-400">
                Enterprise
              </span>
              <span className="rounded-full border border-totvs-cyan/30 bg-slate-900 px-2.5 py-1 text-xs text-gray-400">
                Cloud Native
              </span>
              <span className="rounded-full border border-totvs-cyan/30 bg-slate-900 px-2.5 py-1 text-xs text-gray-400">
                24/7 Support
              </span>
            </div>

            {/* Redes sociais */}
            <div>
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-3">Nossas redes</h3>
              <div className="flex gap-2">
                {[
                  { icon: LucideInstagram, href: 'https://instagram.com/metaclass.tech', label: 'Instagram' },
                  { icon: LucideLinkedin, href: 'https://linkedin.com/company/metaclass', label: 'LinkedIn' },
                  { icon: LucideYoutube, href: 'https://youtube.com/@metaclass', label: 'YouTube' },
                  { icon: LucideGithub, href: 'https://github.com/metaclass', label: 'GitHub' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-gray-400 hover:text-totvs-cyan hover:border-totvs-cyan/40 hover:bg-slate-800 transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Colunas de links */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Produtos</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="/beautygest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-totvs-cyan transition-colors"
                  >
                    <div>BeautyGest</div>
                    <div className="text-xs text-gray-500">by Metaclass</div>
                  </a>
                </li>
                <li>
                  <Link to="/produtos" className="hover:text-totvs-cyan transition-colors">
                    Ver portfólio
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="hover:text-totvs-cyan transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link to="/cases" className="hover:text-totvs-cyan transition-colors">
                    Cases de sucesso
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Empresa</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link to="/quem-somos" className="hover:text-totvs-cyan transition-colors">
                    Quem somos
                  </Link>
                </li>
                <li>
                  <Link to="/trabalhe-conosco" className="hover:text-totvs-cyan transition-colors">
                    Trabalhe conosco
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="hover:text-totvs-cyan transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Jurídico</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link to="/termos" className="hover:text-totvs-cyan transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link to="/privacidade" className="hover:text-totvs-cyan transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="/lgpd" className="hover:text-totvs-cyan transition-colors">
                    Canal LGPD
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openCookieConsentPreferences}
                    className="hover:text-totvs-cyan transition-colors text-left"
                  >
                    Preferências de Cookies
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">
              © {currentYear} Metaclass. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500">
              Feito com tecnologia de ponta no Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
