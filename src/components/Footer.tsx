import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react'
import { openCookieConsentPreferences } from '../lib/cookieConsent'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, insira um e-mail válido.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div className="border-b border-slate-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 overflow-hidden">
          {/* accent line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-totvs-cyan/50 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-8 items-center p-8 md:p-10">
            {/* texto */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl bg-totvs-cyan/15 border border-totvs-cyan/25 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-totvs-cyan" />
                </div>
                <span className="text-xs font-bold text-totvs-cyan uppercase tracking-widest">Newsletter</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                Conteúdo técnico que vale seu tempo
              </h3>
              <p className="mt-3 text-white/55 text-sm leading-relaxed max-w-md">
                Insights sobre engenharia de software, arquitetura, LGPD, produto e mercado de tecnologia —
                sem spam, direto ao ponto, quinzenalmente.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Engenharia & Arquitetura', 'Produto & SaaS', 'Mercado Tech'].map((tag) => (
                  <span key={tag} className="text-xs font-semibold border border-slate-700 bg-slate-900 text-slate-400 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* formulário */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex items-start gap-4 rounded-xl border border-totvs-cyan/20 bg-totvs-cyan/5 p-6">
                  <CheckCircle2 className="w-6 h-6 text-totvs-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Inscrição confirmada!</p>
                    <p className="text-white/55 text-sm mt-1">
                      Ótimo, <span className="text-totvs-cyan font-semibold">{email}</span> foi adicionado à nossa lista.
                      Você receberá nosso próximo conteúdo em breve.
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
                        className={`w-full h-12 rounded-full bg-slate-800 border px-5 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-totvs-cyan/60 focus:ring-2 focus:ring-totvs-cyan/15 ${
                          error ? 'border-red-500/60' : 'border-slate-700'
                        }`}
                      />
                      {error && <p className="mt-1.5 ml-4 text-xs text-red-400">{error}</p>}
                    </div>
                    <button
                      type="submit"
                      className="h-12 flex items-center justify-center gap-2 bg-totvs-cyan text-slate-950 px-6 rounded-full font-bold text-sm hover:brightness-110 hover:shadow-lg hover:shadow-totvs-cyan/30 transition-all duration-200 whitespace-nowrap"
                    >
                      Quero receber
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-white/30 ml-1">
                    Seus dados são protegidos conforme a{' '}
                    <Link to="/privacidade" className="text-white/50 underline underline-offset-2 hover:text-totvs-cyan transition-colors">
                      Política de Privacidade
                    </Link>{' '}
                    e a LGPD. Cancele quando quiser.
                  </p>
                </form>
              )}
            </div>
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
          <div className="space-y-4 lg:col-span-4">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/1.png"
                alt="Metaclass Logo"
                className="h-28 w-auto"
                loading="lazy"
              />
            </a>

            <p className="max-w-sm text-sm text-gray-400">
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
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Produtos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
                <li className="text-gray-500">Mais produtos em breve...</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <h3 className="text-sm font-semibold text-white mb-4">Jurídico</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Metaclass. Todos os direitos reservados.</p>
          <p>Feito com tecnologia de ponta no Brasil 🇧🇷</p>
        </div>
      </div>
    </footer>
  )
}
