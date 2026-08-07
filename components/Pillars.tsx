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
    label: 'Uma plataforma em que podes confiar',
    title: 'A forma como o Auxio foi pensado faz a diferença.',
    desc: 'Desde o primeiro dia, o Auxio foi pensado para simplificar o trabalho de quem vive de marcações. Isso significa uma plataforma simples de usar, construída com segurança desde a base e suficientemente flexível para acompanhar a forma como trabalhas.',
    pillars: [
      { title: 'Confiança', desc: 'Os dados dos teus clientes merecem o mesmo cuidado que o teu trabalho. Toda a informação é armazenada na União Europeia e a plataforma foi desenvolvida para cumprir o RGPD desde o primeiro dia.' },
      { title: 'Simplicidade', desc: 'Já tens trabalho suficiente com os teus clientes. O Auxio foi desenhado para ser intuitivo desde o primeiro dia, sem configurações complicadas nem horas de formação. Sem formação técnica necessária.' },
      { title: 'Automatização', desc: 'O Auxio trata das tarefas repetitivas por ti. Lembretes, alertas, recibos e outras rotinas acontecem automaticamente para que possas dedicar esse tempo aos teus clientes.' },
      { title: 'Autonomia', desc: 'Os teus dados são teus. Podes exportá-los quando quiseres e adaptar a plataforma à forma como trabalhas, sem ficares preso ao software.' },
    ],
  },
  en: {
    label: 'A platform you can rely on',
    title: 'The way Auxio was built makes the difference.',
    desc: 'From day one, Auxio was designed to simplify the work of people who live off appointments. That means a platform that is simple to use, built securely from the ground up and flexible enough to keep up with the way you work.',
    pillars: [
      { title: 'Trust', desc: 'Your clients’ data deserves the same care as your work. All information is stored in the European Union and the platform was built to comply with GDPR from day one.' },
      { title: 'Simplicity', desc: 'You already have enough work with your clients. Auxio was designed to be intuitive from the first day, with no complicated setup and no hours of training. No technical background required.' },
      { title: 'Automation', desc: 'Auxio takes care of the repetitive tasks for you. Reminders, alerts, receipts and other routines happen automatically, so you can give that time back to your clients.' },
      { title: 'Autonomy', desc: 'Your data is yours. You can export it whenever you want and adapt the platform to the way you work, without being locked into the software.' },
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
