import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  COOKIE_CONSENT_OPEN_EVENT,
  getCookieConsentStatus,
  setCookieConsentStatus,
  type CookieConsentStatus,
} from '../lib/cookieConsent'

export default function CookieConsentBanner() {
  const location = useLocation()
  const [consent, setConsent] = useState<CookieConsentStatus>(null)
  const [isOpen, setIsOpen] = useState(false)

  const shouldAutoOpen =
    location.pathname === '/' ||
    location.pathname === '/contato' ||
    location.pathname === '/lgpd' ||
    location.pathname === '/termos' ||
    location.pathname === '/privacidade'

  useEffect(() => {
    setConsent(getCookieConsentStatus())
  }, [location.pathname])

  useEffect(() => {
    if (shouldAutoOpen) {
      setIsOpen(true)
      return
    }
    setIsOpen(false)
  }, [shouldAutoOpen, location.pathname])

  useEffect(() => {
    const syncConsent = () => setConsent(getCookieConsentStatus())
    const openPreferences = () => setIsOpen(true)

    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, syncConsent)
    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, openPreferences)
    window.addEventListener('storage', syncConsent)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, syncConsent)
      window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, openPreferences)
      window.removeEventListener('storage', syncConsent)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="mx-auto max-w-6xl rounded-2xl border border-slate-700/60 bg-slate-950 shadow-2xl shadow-black/60 overflow-hidden">

        {/* grade decorativa de fundo */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,201,235,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,235,0.4) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* barra de acento superior */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-totvs-cyan/60 to-transparent" />

        <div className="relative flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          {/* ícone + texto */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-totvs-cyan/15 border border-totvs-cyan/25 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck className="h-5 w-5 text-totvs-cyan" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">
                Privacidade e Cookies{' '}
                <span className="text-totvs-cyan font-bold">·</span>{' '}
                LGPD
              </p>
              <p className="mt-1.5 text-sm text-white/55 leading-relaxed max-w-2xl">
                {consent === null ? (
                  <>
                    Utilizamos cookies estritamente necessários para o funcionamento do site. Mediante seu
                    consentimento, também utilizamos cookies analíticos para mensurar audiência e aprimorar
                    nossos serviços.
                  </>
                ) : (
                  <>
                    Gestão de consentimento: cookies analíticos estão atualmente{' '}
                    <strong className="text-white font-semibold">
                      {consent === 'granted' ? 'ativados' : 'desativados'}
                    </strong>
                    . Você pode revisar sua escolha a qualquer momento.
                  </>
                )}{' '}
                Consulte nossa{' '}
                <Link
                  to="/privacidade"
                  className="text-totvs-cyan underline underline-offset-2 hover:brightness-125 transition-all"
                >
                  Política de Privacidade
                </Link>{' '}
                e nossos{' '}
                <Link
                  to="/termos"
                  className="text-totvs-cyan underline underline-offset-2 hover:brightness-125 transition-all"
                >
                  Termos de Uso
                </Link>
                .
              </p>
            </div>
          </div>

          {/* botões */}
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
            <button
              className="h-10 rounded-full border border-slate-700 text-white/70 px-5 text-sm font-semibold hover:border-slate-500 hover:text-white transition-all duration-200"
              onClick={() => {
                setCookieConsentStatus('denied')
                setConsent('denied')
                setIsOpen(false)
              }}
            >
              Recusar analíticos
            </button>

            <button
              className="h-10 rounded-full bg-totvs-cyan text-slate-950 px-5 text-sm font-bold hover:brightness-110 hover:shadow-lg hover:shadow-totvs-cyan/30 transition-all duration-200"
              onClick={() => {
                setCookieConsentStatus('granted')
                setConsent('granted')
                setIsOpen(false)
              }}
            >
              Aceitar analíticos
            </button>

            <button
              className="h-10 rounded-full border border-slate-700 text-white/70 px-5 text-sm font-semibold hover:border-slate-500 hover:text-white transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
