import FadeSection from "./FadeSection";
import s from "./FinanceSection.module.css";

const items = [
  'Dashboard com receita, custos e lucro líquido do mês',
  'Estado de pagamento por marcação - Pago, Pendente, Parcial ou Isento',
  'Controlo do plafond anual com alertas',
  'Apuramento trimestral pronto a enviar ao contabilista',
];

export default function FinanceSection() {
  return (
    <section className={s.section} id="financas">
      <div className={s.container}>
        <FadeSection>
          <div className={s.label}>Painel Financeiro</div>
        </FadeSection>
        <FadeSection delay={0.1}>
          <h2 className={s.title}>Painel Financeiro com tudo o que<br />precisas de saber</h2>
        </FadeSection>
        <FadeSection delay={0.2}>
          <p className={s.desc}>
            O estado do teu negócio num só ecrã, em tempo real. Quanto faturaste, quem te deve,
            qual o teu lucro líquido. Três perguntas respondidas em menos de 10 segundos.
            Sem folhas de cálculo, sem confusão.
          </p>
        </FadeSection>
        <FadeSection delay={0.3}>
          <h3 className={s.subtitle}>Gere o teu dinheiro sem seres contabilista</h3>
        </FadeSection>
        <FadeSection delay={0.4}>
          <ul className={s.list}>
            {items.map((item, i) => (
              <li key={i}>
                <span className={s.check}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </FadeSection>
      </div>
    </section>
  );
}
