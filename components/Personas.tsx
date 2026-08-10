'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './Personas.module.css';

const copy = {
  pt: {
    label: 'Para quem é',
    title: <>Desenhado para profissionais<br />que atendem clientes todos os dias</>,
    personas: [
      {
        initials: 'AF', color: 'var(--argila)',
        name: 'Andreia, 48 anos - Fisioterapeuta',
        role: 'Trabalhadora independente',
        pain: '“Perco 1 hora por dia a confirmar marcações pelo WhatsApp.”',
        hook: '→ Recupera horas todas as semanas ainda este mês.',
      },
      {
        initials: 'SL', color: 'var(--oliva)',
        name: 'Sofia, 29 anos - Esteticista',
        role: 'Trabalhadora independente · Espaço partilhado',
        pain: '“Não sei quanto ganhei este mês até fazer as contas no fim.”',
        hook: '→ O Auxio faz as contas por ti, em tempo real.',
      },
    ],
    alsoPre: 'O Auxio serve também ',
    alsoBold: 'psicólogos, nutricionistas, osteopatas, personal trainers, coaches, advogados, contabilistas e fotógrafos',
    alsoPost: ' - todos os profissionais de serviços que dependem de marcações.',
  },
  en: {
    label: 'Who it’s for',
    title: <>Designed for professionals<br />who see clients every single day</>,
    personas: [
      {
        initials: 'AF', color: 'var(--argila)',
        name: 'Andreia, 48 - Physiotherapist',
        role: 'Self-employed',
        pain: '“I lose an hour a day confirming appointments on WhatsApp.”',
        hook: '→ Get hours back every week, starting this month.',
      },
      {
        initials: 'SL', color: 'var(--oliva)',
        name: 'Sofia, 29 - Aesthetician',
        role: 'Self-employed · Shared space',
        pain: '“I don’t know what I earned this month until I do the maths at the end.”',
        hook: '→ Auxio does the maths for you, in real time.',
      },
    ],
    alsoPre: 'Auxio also works for ',
    alsoBold: 'psychologists, nutritionists, osteopaths, personal trainers, coaches, lawyers, accountants and photographers',
    alsoPost: ' - every service professional who depends on appointments.',
  },
};

export default function Personas() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <FadeSection><div className={s.label}>{t.label}</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>{t.title}</h2></FadeSection>
        <div className={s.grid}>
          {t.personas.map((p, i) => (
            <FadeSection key={i} delay={0.1 + i * 0.1}>
              <div className={s.card}>
                <div className={s.header}>
                  <div className={s.avatar} style={{ background: p.color }}>{p.initials}</div>
                  <div><div className={s.name}>{p.name}</div><div className={s.role}>{p.role}</div></div>
                </div>
                <div className={s.pain}>{p.pain}</div>
                <div className={s.hook}>{p.hook}</div>
              </div>
            </FadeSection>
          ))}
        </div>
        <FadeSection delay={0.3}>
          <div className={s.also}>
            <p>{t.alsoPre}<strong>{t.alsoBold}</strong>{t.alsoPost}</p>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
