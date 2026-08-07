'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './Pricing.module.css';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor';

const copy = {
  pt: {
    label: 'Preços',
    title: 'Tudo o que precisas para gerir o teu negócio.',
    desc: 'Começa com o essencial e evolui quando precisares. Sem contratos longos, sem custos escondidos e com a liberdade de cancelar quando quiseres',
    period: 'por mês · para profissionais individuais',
    cta: 'Subscrever',
    plans: [
      {
        subtitle: 'Auxio Pro - Em breve',
        price: '29',
        featured: false,
        cta: false,
        features: [
          'Tudo o que está no plano Basic',
          'Previsão de cancelamentos com antecedência',
          'Previsão de receita para as próximas semanas',
          'Análise de receita por serviço e horário',
          'Chatbot com IA',
          'Resumo de consulta por voz (Whisper)',
        ],
      },
      {
        subtitle: 'Auxio Basic · Lançamento',
        price: '15',
        featured: true,
        cta: true,
        features: [
          '1 profissional · clientes ilimitados',
          'Agenda completa com drag & drop',
          'Ficha completa do cliente com histórico e notas',
          'Painel financeiro com receitas, despesas e lucro líquido',
          'Notificações de confirtmação e lembretes semi-automáticos',
          'App instalável no telemóvel e computador',
        ],
      },
      {
        subtitle: 'Auxio Team - Em breve',
        price: '79',
        period: 'por mês · para equipas e clínicas',
        featured: false,
        cta: false,
        features: [
          'Até 5 profissionais incluídos',
          'Tudo o que está no plano Pro',
          'Agenda consolidada por profissional',
          'Gestão de salas e recursos',
          'Gestão de equipa: convidar, remover e definir permissões',
          'Diferentes níveis de acesso: Admin, Profissional e Staff',
          'Painel de gestão unificado da clínica',
        ],
      },
    ],
  },
  en: {
    label: 'Pricing',
    title: 'Everything you need to run your business.',
    desc: 'Start with the essentials and move up when you need to. No long contracts, no hidden costs and the freedom to cancel whenever you want',
    period: 'per month · for individual professionals',
    cta: 'Subscribe',
    plans: [
      {
        subtitle: 'Auxio Pro - Coming soon',
        price: '29',
        featured: false,
        cta: false,
        features: [
          'Everything in the Basic plan',
          'Cancellation prediction in advance',
          'Revenue forecast for the coming weeks',
          'Revenue analysis by service and time slot',
          'AI chatbot',
          'Voice appointment summaries (Whisper)',
        ],
      },
      {
        subtitle: 'Auxio Basic · Launch',
        price: '15',
        featured: true,
        cta: true,
        features: [
          '1 professional · unlimited clients',
          'Full calendar with drag & drop',
          'Complete client profile with history and notes',
          'Personalised WhatsApp reminders',
          'Cost tracking with profit calculated automatically',
        ],
      },
      {
        subtitle: 'Auxio Team - Coming soon',
        price: '79',
        period: 'per month · for teams and clinics',
        featured: false,
        cta: false,
        features: [
          'Up to 5 professionals included',
          'Everything in the Pro plan',
          'Consolidated calendar with per-professional view',
          'Multi-room and multi-resource mode',
          'Team management: invite, remove and set permissions',
          'Distinct roles: Admin, Professional, Staff',
          'Unified clinic dashboard',
        ],
      },
    ],
  },
};

export default function Pricing() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className={s.section} id="precos">
      <div className={s.container}>
        <FadeSection><div className={s.label}>{t.label}</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>{t.title}</h2></FadeSection>
        <FadeSection delay={0.2}><p className={s.desc}>{t.desc}</p></FadeSection>
        <div className={s.grid}>
          {t.plans.map((plan, i) => (
            <FadeSection key={i} delay={i * 0.1 + 0.2} className={plan.featured ? s.featuredWrapper : ''}>
              <div className={`${s.card} ${plan.featured ? s.cardFeatured : ''}`}>
                <div className={s.plan}>{plan.subtitle}</div>
                <div className={s.price}><sup>€</sup>{plan.price}</div>
                <div className={s.period}>{'period' in plan ? plan.period : t.period}</div>
                <ul className={s.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}><span className={s.check}>✓</span>{f}</li>
                  ))}
                </ul>
                {plan.cta && <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${plan.featured ? s.btnFeatured : ''}`}>{t.cta}</a>}
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
