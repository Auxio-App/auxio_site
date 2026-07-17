'use client';

import FadeSection from './FadeSection';
import { useLang } from '@/lib/i18n';
import s from './Pricing.module.css';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor';

const copy = {
  pt: {
    label: 'Preços',
    title: 'Simples. Sem surpresas.',
    desc: 'Sem custos de instalação, sem contratos anuais obrigatórios, sem letras pequenas.',
    period: 'por mês · cancela quando quiseres',
    cta: 'Subscrever',
    plans: [
      {
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
        subtitle: 'Auxio Basic · Lançamento',
        price: '19',
        featured: true,
        cta: true,
        features: [
          '1 profissional · clientes ilimitados',
          'Agenda completa com drag & drop',
          'Ficha completa do cliente com histórico e notas',
          'Lembretes WhatsApp personalizados — enviados com um toque',
          'Gestão financeira',
          'Registo de custos e resultado líquido mensal',
          'Controlo de plafond anual',
          'Apuramento trimestral para contabilista',
        ],
      },
      {
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
    ],
  },
  en: {
    label: 'Pricing',
    title: 'Simple. No surprises.',
    desc: 'No setup fees, no mandatory annual contracts, no fine print.',
    period: 'per month · cancel anytime',
    cta: 'Subscribe',
    plans: [
      {
        subtitle: 'Auxio Pro - Coming soon',
        price: '39',
        featured: false,
        cta: false,
        features: [
          '1 professional · unlimited clients',
          'Everything in the Basic plan',
          'Reliability score per client',
          'Cancellation prediction in advance',
          'Revenue forecast for the next 2 weeks',
          'Revenue by service type and time slot',
          'Profit margin per service',
          'AI WhatsApp chatbot — replies 24/7',
          'Voice appointment summaries (Whisper)',
        ],
      },
      {
        subtitle: 'Auxio Basic · Launch',
        price: '19',
        featured: true,
        cta: true,
        features: [
          '1 professional · unlimited clients',
          'Full calendar with drag & drop',
          'Complete client profile with history and notes',
          'Personalised WhatsApp reminders — sent in one tap',
          'Financial management',
          'Cost tracking and monthly net result',
          'Annual VAT threshold tracking',
          'Quarterly summary for your accountant',
        ],
      },
      {
        subtitle: 'Auxio Team - Coming soon',
        price: '79',
        featured: false,
        cta: false,
        features: [
          'Up to 5 professionals included',
          'Everything in the Pro plan',
          'Consolidated calendar with per-professional view',
          'Multi-room and multi-resource mode',
          'Team management: invite, remove and set permissions',
          'Distinct roles: Admin, Professional, Staff',
          'Revenue and KPIs per professional',
          'Unified clinic dashboard',
          'AI-personalised WhatsApp reminders',
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
                <div className={s.period}>{t.period}</div>
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
