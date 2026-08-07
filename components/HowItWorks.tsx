'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './HowItWorks.module.css';

const copy = {
  pt: {
    label: 'Como funciona',
    title: <>Da criação da conta à gestão do<br/>teu negócio em poucos minutos</>,
    steps: [
      { num: '1', title: 'Cria a tua conta', desc: 'Configura os teus serviços, horários e preços. O Auxio fica pronto para começar contigo.' },
      { num: '2', title: 'Organiza os teus clientes', desc: 'Cria a ficha dos teus clientes em segundos e mantém tudo organizado num só lugar.' },
      { num: '3', title: 'O Auxio trata do resto', desc: 'Lembretes, recibos e alertas de pagamento ficam automatizados para não perderes tempo.' },
      { num: '4', title: 'Foca-te no que importa', desc: 'Menos tarefas de gestão, mais tempo para te dedicares aos teus clientes.' },
    ],
  },
  en: {
    label: 'How it works',
    title: <>From creating your account to running<br />your business in just a few minutes</>,
    steps: [
      { num: '1', title: 'Create your account', desc: 'Set up your services, hours and prices. Auxio is ready to start alongside you.' },
      { num: '2', title: 'Organise your clients', desc: 'Create your client records in seconds and keep everything organised in one place.' },
      { num: '3', title: 'Auxio handles the rest', desc: 'Reminders, receipts and payment alerts are automated so you don’t lose time.' },
      { num: '4', title: 'Focus on what matters', desc: 'Fewer admin tasks, more time to dedicate to your clients.' },
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
