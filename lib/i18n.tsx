'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'pt' | 'en';

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'pt',
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    if (localStorage.getItem('auxio-lang') === 'en') setLang('en');
  }, []);

  useEffect(() => {
    localStorage.setItem('auxio-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
