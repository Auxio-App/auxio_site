'use client';

import FadeSection from './FadeSection';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import s from './CtaSection.module.css';

const copy = {
  pt: {
    title: <>Vê o Auxio aplicado<br /><em>ao teu dia a dia.</em></>,
    desc: 'Numa demonstração breve, mostramos-te como organizar clientes, marcações e pagamentos num único lugar.',
    btn: 'Agendar demo →',
    sub: 'Sem compromisso. Falamos contigo para encontrar o melhor horário.',
  },
  en: {
    title: <>See Auxio applied<br /><em>to your daily work.</em></>,
    desc: 'In a short demo, we show you how to organise clients, bookings and payments in one place.',
    btn: 'Book a demo →',
    sub: 'No commitment. We will contact you to find the best time.',
  },
};

export default function CtaSection() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className={s.section} id="lista-espera">
      <div className={s.blobA} aria-hidden="true" />
      <div className={s.blobB} aria-hidden="true" />
      <div className={s.container}>

        <FadeSection delay={0.1}>
          <h2 className={s.title}>{t.title}</h2>
        </FadeSection>
        <FadeSection delay={0.2}>
          <p className={s.desc}>{t.desc}</p>
        </FadeSection>
        <FadeSection delay={0.3}>
          <Link href="/demo" className={s.btn}>
            {t.btn}
          </Link>
          <p className={s.sub}>{t.sub}</p>
        </FadeSection>
      </div>
    </section>
  );
}
