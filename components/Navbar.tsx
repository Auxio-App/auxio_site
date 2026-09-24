'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLang, type Lang } from '@/lib/i18n';
import { featureCatalog } from '@/lib/features';
import s from './Navbar.module.css';

const copy = {
  pt: {
    links: [
      { href: '#como-funciona', label: 'Como funciona' },
      { href: '#precos', label: 'Preços' },
    ],
    features: 'Funcionalidades',
    cta: 'Agendar demo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  en: {
    links: [
      { href: '#como-funciona', label: 'How it works' },
      { href: '#precos', label: 'Pricing' },
    ],
    features: 'Features',
    cta: 'Book a demo',
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

function FeatureIcon({ slug }: { slug: string }) {
  const paths: Record<string, ReactNode> = {
    'agenda-horarios': <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18" /></>,
    lembretes: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    'fichas-clientes': <><circle cx="12" cy="8" r="4" /><path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6" /></>,
    'servicos-pacotes': <><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5" /><path d="M3 12h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z" /><path d="M9 16h6" /></>,
    'sessoes-grupo': <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20c.6-4 2.7-6 6-6s5.4 2 6 6M15 15c3 0 4.8 1.7 5.3 5" /></>,
    'faturacao-recibos': <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9 8h6M9 12h6" /></>,
    'visao-negocio': <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  };

  return <svg className={s.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[slug]}</svg>;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const pathname = usePathname();
  const t = copy[lang];
  const homeHref = (href: string) => pathname === '/' ? href : `/${href}`;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setFeaturesOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFeaturesOpen(false);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <nav ref={navRef} className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <Link href="/" className={s.logo}>
        <Image src="/logo.png" alt="Auxio" className={s.logoImg} width={32} height={32} />
        Auxio
      </Link>

      <ul className={s.links}>
        <li className={s.featuresItem}>
          <button
            className={s.featuresButton}
            aria-expanded={featuresOpen}
            aria-haspopup="menu"
            onClick={() => setFeaturesOpen((value) => !value)}
          >
            {t.features}<svg className={s.featuresChevron} viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" /></svg>
          </button>
          {featuresOpen && (
            <div className={s.featuresMenu} role="menu">
              {featureCatalog[lang].map((feature) => (
                <Link key={feature.slug} href={`/funcionalidades/${feature.slug}`} role="menuitem" onClick={() => setFeaturesOpen(false)}>
                  <FeatureIcon slug={feature.slug} />
                  <span><strong>{feature.label}</strong><small>{feature.detail}</small></span>
                </Link>
              ))}
            </div>
          )}
        </li>
        {t.links.map((l) => (
          <li key={l.href}><Link href={homeHref(l.href)}>{l.label}</Link></li>
        ))}
        <li><LangToggle /></li>
        <li>
          <Link href="/demo" className={s.cta}>{t.cta}</Link>
        </li>
      </ul>

      <button
        className={s.burger}
        aria-label={open ? t.closeMenu : t.openMenu}
        aria-expanded={open}
        onClick={() => {
          setOpen((value) => !value);
          setFeaturesOpen(false);
        }}
      >
        <span className={`${s.burgerLine} ${open ? s.burgerTopOpen : ''}`} />
        <span className={`${s.burgerLine} ${open ? s.burgerMidOpen : ''}`} />
        <span className={`${s.burgerLine} ${open ? s.burgerBotOpen : ''}`} />
      </button>

      <div className={`${s.mobileMenu} ${open ? s.mobileMenuOpen : ''}`}>
        <button className={s.mobileFeaturesButton} aria-expanded={featuresOpen} onClick={() => setFeaturesOpen((value) => !value)}>
          {t.features}<svg className={s.featuresChevron} viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" /></svg>
        </button>
        {featuresOpen && (
          <div className={s.mobileFeatures}>
            {featureCatalog[lang].map((feature) => (
              <Link key={feature.slug} href={`/funcionalidades/${feature.slug}`} onClick={() => { setOpen(false); setFeaturesOpen(false); }}>
                {feature.label}
              </Link>
            ))}
          </div>
        )}
        {t.links.map((l) => (
          <Link key={l.href} href={homeHref(l.href)} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <LangToggle className={s.langToggleMobile} />
        <Link
          href="/demo"
          className={s.mobileCta}
          onClick={() => setOpen(false)}
        >
          {t.cta}
        </Link>
      </div>
    </nav>
  );
}
