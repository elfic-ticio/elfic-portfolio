'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { es, type Translations } from './es'
import { en } from './en'

type Lang = 'es' | 'en'

interface LangContextType {
  lang: Lang
  t: Translations
  toggle: (next: Lang) => void
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  t: es,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'es' || saved === 'en') {
      setLang(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const toggle = (next: Lang) => {
    setLang(next)
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
  }

  return (
    <LangContext.Provider value={{ lang, t: lang === 'es' ? es : en, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
