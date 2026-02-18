export type CookieConsentStatus = 'granted' | 'denied' | null

const COOKIE_CONSENT_STORAGE_KEY = 'metaclass_cookie_consent'

export const COOKIE_CONSENT_CHANGED_EVENT = 'metaclass_cookie_consent_changed'
export const COOKIE_CONSENT_OPEN_EVENT = 'metaclass_cookie_consent_open'

export function getCookieConsentStatus(): CookieConsentStatus {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (raw === 'granted' || raw === 'denied') return raw
    return null
  } catch {
    return null
  }
}

export function setCookieConsentStatus(status: Exclude<CookieConsentStatus, null>) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, status)
  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT))
}

export function openCookieConsentPreferences() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT))
}
