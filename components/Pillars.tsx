'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './Pillars.module.css';

const copy = {
  pt: {
    label: 'Os nossos valores',
    title: 'Construído com um propósito.',
    desc: 'O Auxio foi desenhado para te ajudar a gerir o teu negócio. Dados na UE, RGPD cumprido e sem lock-in.',
    pillars: [
      { emoji: '🤝', title: 'Confiança', desc: 'Os dados dos teus clientes são tratados com máxima responsabilidade. Dados sempre na Europa, RGPD desde o primeiro dia.' },
      { emoji: '✨', title: 'Simplicidade', desc: 'O profissional já tem a vida complicada. Menos cliques, menos dúvidas, mais tempo. Sem formação técnica necessária.' },
      { emoji: '🧠', title: 'Inteligência', desc: 'O Auxio prepara o trabalho repetitivo por ti: lembretes prontos a enviar, recibos e alertas de pagamento, para que não tenhas de pensar nisso.' },
      { emoji: '🚀', title: 'Autonomia', desc: 'Exportação de dados fácil, sem lock-in, configuração flexível. O produto serve-te, não o contrário.' },
    ],
  },
  en: {
    label: 'Our values',
    title: 'Built with a purpose.',
    desc: 'Auxio was designed to help you run your business. Data in the EU, GDPR compliant and no lock-in.',
    pillars: [
      { emoji: '🤝', title: 'Trust', desc: 'Your clients’ data is handled with the utmost responsibility. Data always in Europe, GDPR from day one.' },
      { emoji: '✨', title: 'Simplicity', desc: 'Your life is complicated enough. Fewer clicks, fewer doubts, more time. No technical training required.' },
      { emoji: '🧠', title: 'Intelligence', desc: 'Auxio prepares the repetitive work for you: reminders ready to send, receipts and payment alerts, so you never have to think about it.' },
      { emoji: '🚀', title: 'Autonomy', desc: 'Easy data export, no lock-in, flexible configuration. The product serves you, not the other way around.' },
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
                <span className={s.emoji}>{p.emoji}</span>
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
