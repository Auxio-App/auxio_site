'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './Pillars.module.css';

/* confiança · simplicidade · inteligência · autonomia */
const icons = [
  <g key="0"><path d="M8 1.5l5 2v4.2c0 3.2-2.1 5.6-5 6.8-2.9-1.2-5-3.6-5-6.8V3.5l5-2z" /><path d="M5.8 8l1.6 1.6L10.4 6.5" /></g>,
  <g key="1"><path d="M8 1.8l1.6 4.3 4.3 1.6-4.3 1.6L8 13.6l-1.6-4.3L2.1 7.7l4.3-1.6L8 1.8z" /></g>,
  <g key="2"><path d="M6.2 12.5h3.6M6.8 14.2h2.4" /><path d="M8 1.8a4.4 4.4 0 0 0-2.6 7.9c.4.3.6.8.6 1.3h4c0-.5.2-1 .6-1.3A4.4 4.4 0 0 0 8 1.8z" /></g>,
  <g key="3"><path d="M9 2.5h3a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H9" /><path d="M2.5 8h6.5M6.8 5.5L9.3 8l-2.5 2.5" /></g>,
];

const copy = {
  pt: {
    label: 'Os nossos valores',
    title: 'Construído com um propósito.',
    desc: 'O Auxio foi desenhado para te ajudar a gerir o teu negócio. Dados na UE, RGPD cumprido e sem lock-in.',
    pillars: [
      { title: 'Confiança', desc: 'Os dados dos teus clientes são tratados com máxima responsabilidade. Dados sempre na Europa, RGPD desde o primeiro dia.' },
      { title: 'Simplicidade', desc: 'O profissional já tem a vida complicada. Menos cliques, menos dúvidas, mais tempo. Sem formação técnica necessária.' },
      { title: 'Inteligência', desc: 'O Auxio prepara o trabalho repetitivo por ti: lembretes prontos a enviar, recibos e alertas de pagamento, para que não tenhas de pensar nisso.' },
      { title: 'Autonomia', desc: 'Exportação de dados fácil, sem lock-in, configuração flexível. O produto serve-te, não o contrário.' },
    ],
  },
  en: {
    label: 'Our values',
    title: 'Built with a purpose.',
    desc: 'Auxio was designed to help you run your business. Data in the EU, GDPR compliant and no lock-in.',
    pillars: [
      { title: 'Trust', desc: 'Your clients’ data is handled with the utmost responsibility. Data always in Europe, GDPR from day one.' },
      { title: 'Simplicity', desc: 'Your life is complicated enough. Fewer clicks, fewer doubts, more time. No technical training required.' },
      { title: 'Intelligence', desc: 'Auxio prepares the repetitive work for you: reminders ready to send, receipts and payment alerts, so you never have to think about it.' },
      { title: 'Autonomy', desc: 'Easy data export, no lock-in, flexible configuration. The product serves you, not the other way around.' },
    ],
  },
};

export default function Pillars() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <FadeSection><div className={s.label}>{t.label}</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>{t.title}</h2></FadeSection>
        <FadeSection delay={0.2}><p className={s.desc}>{t.desc}</p></FadeSection>
        <div className={s.grid}>
          {t.pillars.map((p, i) => (
            <FadeSection key={i} delay={i * 0.1 + 0.1}>
              <div className={s.card}>
                <span className={s.icon}>
                  <svg viewBox="0 0 16 16" width="20" height="20" fill="none"
                       stroke="currentColor" strokeWidth="1.3"
                       strokeLinecap="round" strokeLinejoin="round">
                    {icons[i]}
                  </svg>
                </span>
                <h3 className={s.cardTitle}>{p.title}</h3>
                <p className={s.cardDesc}>{p.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
