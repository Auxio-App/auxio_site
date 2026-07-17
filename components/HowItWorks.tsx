'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './HowItWorks.module.css';

const copy = {
  pt: {
    label: 'Como funciona',
    title: <>Do registo ao primeiro cliente<br />em menos de 10 minutos.</>,
    steps: [
      { num: '1', title: 'Crias a tua conta', desc: 'Registo em 3 passos. Defines os teus serviços, horários e preços.' },
      { num: '2', title: 'Adicionas os clientes', desc: 'Crias a ficha de cada cliente em segundos — nome e contacto chegam para começar.' },
      { num: '3', title: 'O Auxio trata do resto', desc: 'Lembretes prontos a enviar, recibos e alertas de pagamento — o Auxio prepara tudo por ti.' },
      { num: '4', title: 'Recuperas o teu tempo', desc: '5 horas por semana de volta. Focas-te nos clientes, não na gestão.' },
    ],
  },
  en: {
    label: 'How it works',
    title: <>From sign-up to your first client<br />in under 10 minutes.</>,
    steps: [
      { num: '1', title: 'Create your account', desc: 'Sign up in 3 steps. Set your services, hours and prices.' },
      { num: '2', title: 'Add your clients', desc: 'Create each client’s profile in seconds — a name and contact are enough to start.' },
      { num: '3', title: 'Auxio handles the rest', desc: 'Reminders ready to send, receipts and payment alerts — Auxio prepares it all for you.' },
      { num: '4', title: 'Get your time back', desc: '5 hours a week returned. You focus on clients, not admin.' },
    ],
  },
};

export default function HowItWorks() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className={s.section} id="como-funciona">
      <div className={s.container}>
        <FadeSection><div className={s.label}>{t.label}</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>{t.title}</h2></FadeSection>
        <div className={s.steps}>
          {t.steps.map((step, i) => (
            <FadeSection key={i} delay={i * 0.1 + 0.1}>
              <div className={s.step}>
                <div className={s.num}>{step.num}</div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
