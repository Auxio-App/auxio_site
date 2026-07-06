'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './CtaSection.module.css';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor';

const copy = {
  pt: {
    title: <>Sê dos primeiros a usar.<br /><em>Garante um desconto nos primeiros 3 meses.</em></>,
    desc: 'Subscreve já e recebe acesso antecipado antes do lançamento oficial. Os primeiros 15 profissionais têm desconto nos primeiros 3 meses da mensalidade.',
    btn: 'Subscrever →',
    sub: 'Sem spam. Só avisamos quando estiver pronto.',
  },
  en: {
    title: <>Be among the first to use it.<br /><em>Lock in a discount for the first 3 months.</em></>,
    desc: 'Subscribe now and get early access before the official launch. The first 15 professionals get a discount on the first 3 months of their subscription.',
    btn: 'Subscribe →',
    sub: 'No spam. We only reach out when it’s ready.',
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
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={s.btn}
          >
            {t.btn}
          </a>
          <p className={s.sub}>{t.sub}</p>
        </FadeSection>
      </div>
    </section>
  );
}
