import FadeSection from './FadeSection';
import s from './Pricing.module.css';

const features = [
  '1 profissional · clientes ilimitados',
  'Agenda completa com drag & drop',
  'Ficha completa do cliente com histórico e notas',
  'Lembretes WhatsApp automáticos',
  'Gestão financeira',
  'Registo de custos e resultado líquido mensal',
  'Controlo de plafond anual',
  'Apuramento trimestral para contabilista',
];

export default function Pricing() {
  return (
    <section className={s.section} id="precos">
      <div className={s.container}>
        <FadeSection><div className={s.label}>Preços</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>Simples. Sem surpresas.</h2></FadeSection>
        <FadeSection delay={0.2}><p className={s.desc}>Sem custos de instalação, sem contratos anuais obrigatórios, sem letras pequenas.</p></FadeSection>
        <FadeSection delay={0.2}>
          <div className={s.card}>
            <div className={s.plan}>Auxio Basic · Lançamento</div>
            <div className={s.price}><sup>€</sup>19</div>
            <div className={s.period}>por mês · cancela quando quiseres</div>
            <ul className={s.features}>
              {features.map((f, i) => (
                <li key={i}><span className={s.check}>✓</span>{f}</li>
              ))}
            </ul>
            <a href="#lista-espera" className={s.btn}>Subscrever</a>
            <div className={s.note}>Em breve: Plano Pro com IA e voz · Plano Team para equipas.</div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
