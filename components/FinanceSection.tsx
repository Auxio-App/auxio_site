'use client';

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./FinanceSection.module.css";

const copy = {
  pt: {
    label: 'Painel Financeiro',
    title: <>Painel Financeiro com tudo o que<br />precisas de saber</>,
    desc: 'O estado do teu negócio num só ecrã, em tempo real. Quanto faturaste, quem te deve, qual o teu lucro líquido. Três perguntas respondidas em menos de 10 segundos. Sem folhas de cálculo, sem confusão.',
    subtitle: 'Gere o teu dinheiro sem seres contabilista',
    items: [
      'Dashboard com receita, custos e lucro líquido do mês',
      'Estado de pagamento por marcação - Pago, Pendente, Parcial ou Isento',
      'Controlo do plafond anual com alertas',
      'Apuramento trimestral pronto a enviar ao contabilista',
    ],
  },
  en: {
    label: 'Financial Dashboard',
    title: <>A Financial Dashboard with everything<br />you need to know</>,
    desc: 'The state of your business on one screen, in real time. How much you invoiced, who owes you, what your net profit is. Three questions answered in under 10 seconds. No spreadsheets, no confusion.',
    subtitle: 'Manage your money without being an accountant',
    items: [
      'Dashboard with the month’s revenue, costs and net profit',
      'Payment status per appointment - Paid, Pending, Partial or Exempt',
      'Annual VAT threshold tracking with alerts',
      'Quarterly summary ready to send to your accountant',
    ],
  },
};

export default function FinanceSection() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className={s.section} id="financas">
      <div className={s.container}>
        <FadeSection>
          <div className={s.label}>{t.label}</div>
        </FadeSection>
        <FadeSection delay={0.1}>
          <h2 className={s.title}>{t.title}</h2>
        </FadeSection>
        <FadeSection delay={0.2}>
          <p className={s.desc}>{t.desc}</p>
        </FadeSection>
        <FadeSection delay={0.3}>
          <h3 className={s.subtitle}>{t.subtitle}</h3>
        </FadeSection>
        <FadeSection delay={0.4}>
          <ul className={s.list}>
            {t.items.map((item, i) => (
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
