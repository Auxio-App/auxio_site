import FadeSection from './FadeSection';
import s from './Personas.module.css';

export default function Personas() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <FadeSection><div className={s.label}>Para quem é</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>Desenhado para profissionais<br />que atendem clientes todos os dias.</h2></FadeSection>
        <div className={s.grid}>
          <FadeSection delay={0.1}>
            <div className={s.card}>
              <div className={s.header}>
                <div className={s.avatar} style={{ background: 'var(--argila)' }}>AF</div>
                <div><div className={s.name}>Andreia, 48 anos — Fisioterapeuta</div><div className={s.role}>Conta própria · 25 pacientes/semana</div></div>
              </div>
              <div className={s.pain}>&ldquo;Perco 1 hora por dia a confirmar marcações pelo WhatsApp.&rdquo;</div>
              <div className={s.hook}>→ Recupera 5 horas por semana ainda este mês.</div>
            </div>
          </FadeSection>
          <FadeSection delay={0.2}>
            <div className={s.card}>
              <div className={s.header}>
                <div className={s.avatar} style={{ background: 'var(--oliva)' }}>SL</div>
                <div><div className={s.name}>Sofia, 29 anos — Esteticista</div><div className={s.role}>Conta própria · Espaço partilhado</div></div>
              </div>
              <div className={s.pain}>&ldquo;Não sei quanto ganhei este mês até fazer as contas no fim.&rdquo;</div>
              <div className={s.hook}>→ O Auxio faz as contas por ti, em tempo real.</div>
            </div>
          </FadeSection>
        </div>
        <FadeSection delay={0.3}>
          <div className={s.also}>
            <p>O Auxio serve também <strong>psicólogos, nutricionistas, osteopatas, personal trainers, coaches, advogados, contabilistas e fotógrafos</strong> — todos os profissionais de serviços que dependem de marcações.</p>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
