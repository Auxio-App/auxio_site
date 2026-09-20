'use client';

import FadeSection from './FadeSection';
import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import s from './Pricing.module.css';

const copy = {
  pt: {
    label: 'Preços',
    title: 'Tudo o que precisas para gerir o teu negócio',
    desc: 'Começa com o essencial e evolui quando precisares. Experimenta o Auxio gratuitamente durante 7 dias, sem contratos longos, custos escondidos ou compromissos.',
    cta: 'Agendar demo',
    priceTBA: 'Preço a anunciar',
    plans: [
      {
        subtitle: 'Auxio Pro - Em breve',
        featured: false,
        cta: false,
        features: [
          'Tudo o que está no plano Basic',
          'Envio automático de lembretes e confirmações',
          'Painel financeiro completo: custos fixos e variáveis, lucro líquido e evolução',
          'Previsão de receita para as próximas semanas',
          'Análise de receita por serviço e horário',
          'Alertas de risco de falta, aprendidos com o teu histórico',
          'Chatbot com IA',
          'Resumo de consulta por voz',
        ],
      },
      {
        subtitle: 'Auxio Basic · Lançamento',
        price: '19',
        period: 'por mês · para profissionais individuais',
        featured: true,
        cta: true,
        features: [
          '1 profissional · clientes ilimitados',
          'Agenda completa com drag & drop',
          'Ficha completa do cliente com histórico e notas',
          'Receita do mês e pagamentos pendentes',
          'Mensagens de lembrete e confirmação prontas a enviar',
          'App instalável no telemóvel e computador',
        ],
      },
      {
        subtitle: 'Auxio Team - Em breve',
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
    title: 'Everything you need to run your business',
    desc: 'Start with the essentials and move up when you need to. Try Auxio free for 7 days, with no long contracts, hidden costs or commitments.',
    cta: 'Book a demo',
    priceTBA: 'Price to be announced',
    plans: [
      {
        subtitle: 'Auxio Pro - Coming soon',
        featured: false,
        cta: false,
        features: [
          'Everything in the Basic plan',
          'Automatic sending of reminders and confirmations',
          'Complete financial dashboard: fixed and variable costs, net profit and evolution',
          'Revenue forecast for the coming weeks',
          'Revenue analysis by service and time slot',
          'Failure-risk alerts, learned from your history',
          'AI chatbot',
          'Voice appointment summaries',
        ],
      },
      {
        subtitle: 'Auxio Basic · Launch',
        price: '19',
        period: 'per month · for individual professionals',
        featured: true,
        cta: true,
        features: [
          '1 professional · unlimited clients',
          'Full calendar with drag & drop',
          'Complete client profile with history and notes',
          'Monthly revenue and pending payments',
          'Reminder and confirmation messages ready to send',
          'Installable app on phone and computer',
        ],
      },
      {
        subtitle: 'Auxio Team - Coming soon',
        featured: false,
        cta: false,
        features: [
          'Up to 5 professionals included',
          'Everything in the Pro plan',
          'Consolidated calendar by professional',
          'Room and resource management',
          'Team management: invite, remove and set permissions',
          'Different access levels: Admin, Professional and Staff',
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
                {plan.price ? (
                  <div className={s.price}><sup>€</sup>{plan.price}</div>
                ) : (
                  <div className={s.period}>{t.priceTBA}</div>
                )}
                <ul className={s.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}><span className={s.check}>✓</span>{f}</li>
                  ))}
                </ul>
                {plan.cta && <Link href="/demo" className={`${s.btn} ${plan.featured ? s.btnFeatured : ''}`}>{t.cta}</Link>}
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
