import FadeSection from './FadeSection';
import s from './Features.module.css';

const features = [
  { emoji: '📅', title: 'Agenda Inteligente', color: 'c1', desc: 'Vista semanal com drag & drop. O sistema confirma marcações e gere faltas sozinho.', items: ['Lembretes automáticos por WhatsApp','Confirmação SIM/NÃO pelo cliente','Bloqueios de horário recorrentes','Relatório mensal de faltas e custo estimado'] },
  { emoji: '👤', title: 'Ficha Completa do Cliente', color: 'c2', desc: 'Perfil completo de cada cliente — histórico, notas, documentos e comportamento.', items: ['Histórico de todos os atendimentos','Notas e ficheiros por consulta','Etiquetas personalizadas (VIP, alergia…)','Timeline visual cronológica'] },
  { emoji: '💰', title: 'Financeiro Claro', color: 'c3', desc: 'Sabe exatamente quanto faturaste, o que está pendente e o que tens de receber.', items: ['Recibos em PDF enviados automaticamente','Controlo de plafond anual com alertas','Registo de custos e resultado líquido mensal','Apuramento trimestral para contabilista'] },
];

export default function Features() {
  return (
    <section className={s.section} id="features">
      <div className={s.container}>
        <FadeSection><div className={s.label}>Funcionalidades</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>Tudo o que precisas,<br />num único painel.</h2></FadeSection>
        <FadeSection delay={0.2}><p className={s.desc}>Acabaram-se o WhatsApp para confirmar marcações, o Excel para as contas e o Google Calendar que não se integra com nada.</p></FadeSection>
        <div className={s.grid}>
          {features.map((f, i) => (
            <FadeSection key={i} delay={i * 0.1 + 0.1}>
              <div className={`${s.card} ${s[f.color]}`}>
                <div className={`${s.icon} ${s[f.color]}`}>{f.emoji}</div>
                <h3 className={s.cardTitle}>{f.title}</h3>
                <p className={s.cardDesc}>{f.desc}</p>
                <ul className={s.list}>{f.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
