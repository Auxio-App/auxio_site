import FadeSection from './FadeSection';
import s from './Pricing.module.css';

const plans = [
  {
    name: 'Pro',
    subtitle: 'Auxio Pro - Em breve',
    price: '39',
    featured: false,
    cta: false,
    features: [
      '1 profissional · clientes ilimitados',
      'Tudo o que está no plano Basic',
      'Score de confiabilidade por cliente',
      'Previsão de cancelamentos com antecedência',
      'Previsão de receita para as próximas 2 semanas',
      'Receita por tipo de serviço e por slot horário',
      'Margem de lucro por serviço',
      'Chatbot WhatsApp com IA — responde 24/7',
      'Resumo de consulta por voz (Whisper)',
    ],
  },
  {
    name: 'Basic',
    subtitle: 'Auxio Basic · Lançamento',
    price: '19',
    featured: true,
    cta: true,
    features: [
      '1 profissional · clientes ilimitados',
      'Agenda completa com drag & drop',
      'Ficha completa do cliente com histórico e notas',
      'Lembretes WhatsApp automáticos',
      'Gestão financeira',
      'Registo de custos e resultado líquido mensal',
      'Controlo de plafond anual',
      'Apuramento trimestral para contabilista',
    ],
  },
  {
    name: 'Team',
    subtitle: 'Auxio Team - Em breve',
    price: '79',
    featured: false,
    cta: false,
    features: [
      'Até 5 profissionais incluídos',
      'Tudo o que está no plano Pro',
      'Agenda consolidada com vista por profissional',
      'Modo multi-sala e multi-recurso',
      'Gestão de equipa: convidar, remover e definir permissões',
      'Roles diferenciados: Admin, Profissional, Staff',
      'Receita e KPIs por profissional',
      'Dashboard unificado da clínica',
      'Lembretes WhatsApp personalizados com IA',
    ],
  },
];

export default function Pricing() {
  return (
    <section className={s.section} id="precos">
      <div className={s.container}>
        <FadeSection><div className={s.label}>Preços</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>Simples. Sem surpresas.</h2></FadeSection>
        <FadeSection delay={0.2}><p className={s.desc}>Sem custos de instalação, sem contratos anuais obrigatórios, sem letras pequenas.</p></FadeSection>
        <div className={s.grid}>
          {plans.map((plan, i) => (
            <FadeSection key={i} delay={i * 0.1 + 0.2}>
              <div className={`${s.card} ${plan.featured ? s.cardFeatured : ''}`}>
                {/* {plan.badge && <div className={s.badge}>{plan.badge}</div>} */}
                <div className={s.plan}>{plan.subtitle}</div>
                <div className={s.price}><sup>€</sup>{plan.price}</div>
                <div className={s.period}>por mês · cancela quando quiseres</div>
                <ul className={s.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}><span className={s.check}>✓</span>{f}</li>
                  ))}
                </ul>
                {plan.cta && <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className={`${s.btn} ${plan.featured ? s.btnFeatured : ''}`}>Subscrever</a>}
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
