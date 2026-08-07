'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './FinalCTA.module.css';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor';

const copy = {
  pt: {
    title: 'Começa a recuperar o teu tempo',
    desc: 'Deixa para trás a agenda desorganizada, as mensagens perdidas e o controlo manual do negócio. Cria a tua conta, configura os teus serviços e começa a gerir tudo num único lugar.',
    ctaPrimary: 'Marcar demonstração',
    ctaGhost: 'Ver as funcionalidades',
  },
  en: {
    title: 'Start next month organised.',
    desc: 'Create your account, set up your services and have the calendar running the same day.',
    ctaPrimary: 'Book a demo',
    ctaGhost: 'See the features',
  },
};

export default function FinalCTA() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <FadeSection>
          <div className={s.card}>
            <h2 className={s.title}>{t.title}</h2>
            <p className={s.desc}>{t.desc}</p>
            <div className={s.actions}>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>
                <svg viewBox="0 0 16 16" width="15" height="15" fill="none"
                     stroke="currentColor" strokeWidth="1.4"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.4 9.6C4.8 8 5.6 4.4 8.4 2.4c1.6-1.2 3.6-1 5.2-.8.2 1.6.4 3.6-.8 5.2-2 2.8-5.6 3.6-7.2 2z" />
                  <path d="M6.4 9.6L3.6 9l.8-2 2 .6M6.4 9.6l.6 2 2-.8-.6-2M4.4 11.6l-2 2" />
                </svg>
                {t.ctaPrimary}
              </a>
              <a href="#agenda" className={s.btnGhost}>
                <svg viewBox="0 0 16 16" width="15" height="15" fill="none"
                     stroke="currentColor" strokeWidth="1.4"
                     strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1.8" y="3" width="12.4" height="11.2" rx="2" />
                  <path d="M4.8 1.5v3M11.2 1.5v3M1.8 7h12.4" />
                </svg>
                {t.ctaGhost}
              </a>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
