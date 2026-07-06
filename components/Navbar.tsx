'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLang, type Lang } from '@/lib/i18n';
import s from './Navbar.module.css';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor';

const copy = {
  pt: {
    links: [
      { href: '#agenda', label: 'Funcionalidades' },
      { href: '#como-funciona', label: 'Como funciona' },
      { href: '#precos', label: 'Preços' },
    ],
    cta: 'Subscrever',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  en: {
    links: [
      { href: '#agenda', label: 'Features' },
      { href: '#como-funciona', label: 'How it works' },
      { href: '#precos', label: 'Pricing' },
    ],
    cta: 'Subscribe',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
};

function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`${s.langToggle} ${className}`} role="group" aria-label="Idioma / Language">
      {(['pt', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          className={`${s.langBtn} ${lang === l ? s.langBtnActive : ''}`}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const t = copy[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <Link href="/" className={s.logo}>
        <Image src="/Logo4.png" alt="Auxio" className={s.logoImg} width={32} height={32} />
        Auxio
      </Link>

      <ul className={s.links}>
        {t.links.map((l) => (
          <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
        ))}
        <li><LangToggle /></li>
        <li>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={s.cta}>{t.cta}</a>
        </li>
      </ul>

      <button
        className={s.burger}
        aria-label={open ? t.closeMenu : t.openMenu}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className={`${s.burgerLine} ${open ? s.burgerTopOpen : ''}`} />
        <span className={`${s.burgerLine} ${open ? s.burgerMidOpen : ''}`} />
        <span className={`${s.burgerLine} ${open ? s.burgerBotOpen : ''}`} />
      </button>

      <div className={`${s.mobileMenu} ${open ? s.mobileMenuOpen : ''}`}>
        {t.links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <LangToggle className={s.langToggleMobile} />
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={s.mobileCta}
          onClick={() => setOpen(false)}
        >
          {t.cta}
        </a>
      </div>
    </nav>
  );
}
