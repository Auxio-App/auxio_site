'use client';

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./FinanceSection.module.css";

/* altura das barras em % — mesma série nas duas línguas */
const chart = [52, 68, 45, 74, 61, 88];

/* faturado · em atraso · despesas */
const statIcons = [
  <g key="0"><rect x="1.5" y="4" width="13" height="8" rx="1.5" /><circle cx="8" cy="8" r="2" /></g>,
  <g key="1"><path d="M4.5 2h7M4.5 14h7M5.5 2v2.6L8 7l2.5-2.4V2M5.5 14v-2.6L8 9l2.5 2.4V14" /></g>,
  <g key="2"><path d="M3.5 1.8h9v12.4l-1.8-1.2-1.8 1.2-1.8-1.2-1.8 1.2-1.8-1.2V1.8z" /><path d="M6 5h4M6 7.5h4" /></g>,
];

const copy = {
  pt: {
    label: 'Painel financeiro',
    title: 'Sabe sempre como está o teu negócio',
    desc: 'Abre o painel financeiro e percebe, em segundos, quanto faturaste, o que ainda tens por receber e quanto realmente sobrou. As despesas recorrentes, comissões e restantes custos ficam registados automaticamente para que tenhas sempre uma visão atualizada do negócio.',
    items: [
      'Vê quem tem pagamentos em atraso e envia um lembrete em segundos.',
      'Vê o estado de pagamento de cada marcação, incluindo pagamentos parciais.',
      'Automatiza despesas recorrentes e o cálculo de comissões.',
    ],
    period: 'Agosto 2026',
    badge: 'Em dia',
    stats: [
      { val: '3.240,00 €', strong: 'faturado', rest: ' no mês',   tone: 'green' },
      { val: '225,00 €',   strong: '3 clientes', rest: ' em atraso', tone: 'amber' },
      { val: '610,00 €',   strong: 'despesas', rest: ' no mês',   tone: 'red'   },
    ],
    chartTitle: 'Últimos 6 meses',
    chartDelta: '+18% vs julho',
    months: ['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    rowsTitle: 'Contas a receber',
    rowsHint: 'Quem me deve',
    rows: [
      { ini: 'MN', name: 'Marta Nogueira', phone: '+351 912 345 678', late: '12 dias em atraso', val: '45,00 €' },
      { ini: 'CS', name: 'Carlos Silva',   phone: '+351 933 221 100', late: '4 dias em atraso',  val: '120,00 €' },
      { ini: 'AC', name: 'Ana Sofia C.',   phone: '+351 961 004 872', late: '2 dias em atraso',  val: '60,00 €' },
    ],
  },
  en: {
    label: 'Financial dashboard',
    title: 'Always know how your business is doing',
    desc: 'Open the financial dashboard and see in seconds how much you invoiced, what you still have to collect and how much actually stayed with you. Recurring expenses, commissions and other costs are logged automatically, so your view of the business is always up to date.',
    items: [
      'See who has overdue payments and send a reminder in seconds.',
      'See the payment status of every booking, including partial payments.',
      'Automate recurring expenses and commission calculations.',
    ],
    period: 'August 2026',
    badge: 'Up to date',
    stats: [
      { val: '3,240.00 €', strong: 'invoiced', rest: ' this month', tone: 'green' },
      { val: '225.00 €',   strong: '3 clients', rest: ' overdue',   tone: 'amber' },
      { val: '610.00 €',   strong: 'expenses', rest: ' this month', tone: 'red'   },
    ],
    chartTitle: 'Last 6 months',
    chartDelta: '+18% vs July',
    months: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    rowsTitle: 'Accounts receivable',
    rowsHint: 'Who owes me',
    rows: [
      { ini: 'MN', name: 'Marta Nogueira', phone: '+351 912 345 678', late: '12 days overdue', val: '45.00 €' },
      { ini: 'CS', name: 'Carlos Silva',   phone: '+351 933 221 100', late: '4 days overdue',  val: '120.00 €' },
      { ini: 'AC', name: 'Ana Sofia C.',   phone: '+351 961 004 872', late: '2 days overdue',  val: '60.00 €' },
    ],
  },
};

export default function FinanceSection() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className={s.section} id="financas">
      <div className={s.container}>
        <div className={s.split}>

          {/* ── Coluna esquerda: painel ── */}
          <FadeSection className={s.mockCol}>
            <div className={s.panel}>
              <div className={s.panelHead}>
                <span className={s.period}>{t.period}</span>
                <span className={s.badge}>{t.badge}</span>
              </div>

              <div className={s.stats}>
                {t.stats.map((st, i) => (
                  <div key={i} className={s.stat}>
                    <span className={`${s.statIcon} ${s[`t_${st.tone}`]}`}>
                      <svg viewBox="0 0 16 16" width="15" height="15" fill="none"
                           stroke="currentColor" strokeWidth="1.4"
                           strokeLinecap="round" strokeLinejoin="round">
                        {statIcons[i]}
                      </svg>
                    </span>
                    <span className={s.statBody}>
                      <span className={s.statVal}>{st.val}</span>
                      <span className={s.statLabel}>
                        <b className={s[`t_${st.tone}`]}>{st.strong}</b>{st.rest}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className={s.chartCard}>
                <div className={s.chartHead}>
                  <span className={s.chartTitle}>{t.chartTitle}</span>
                  <span className={s.chartDelta}>{t.chartDelta}</span>
                </div>
                <div className={s.bars}>
                  {chart.map((h, i) => (
                    <div key={i} className={s.barCol}>
                      <div
                        className={`${s.bar} ${i === chart.length - 1 ? s.barLast : ''}`}
                        style={{ height: `${h}%` }}
                      />
                      <span className={s.barLabel}>{t.months[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={s.rowsCard}>
                <div className={s.rowsHead}>
                  <svg viewBox="0 0 16 16" width="15" height="15" fill="none"
                       stroke="currentColor" strokeWidth="1.4"
                       strokeLinecap="round" strokeLinejoin="round" className={s.rowsIcon}>
                    <path d="M4.5 2h7M4.5 14h7M5.5 2v2.6L8 7l2.5-2.4V2M5.5 14v-2.6L8 9l2.5 2.4V14" />
                  </svg>
                  <span className={s.rowsTitle}>{t.rowsTitle}</span>
                  <span className={s.rowsHint}>{t.rowsHint}</span>
                </div>

                {t.rows.map((r) => (
                  <div key={r.name} className={s.row}>
                    <span className={s.rowAvatar}>{r.ini}</span>
                    <span className={s.rowInfo}>
                      <span className={s.rowName}>{r.name}</span>
                      <span className={s.rowMeta}>
                        <svg viewBox="0 0 16 16" width="10" height="10" fill="none"
                             stroke="currentColor" strokeWidth="1.5"
                             strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 2.5h2.5l1 3-1.5 1a8 8 0 0 0 3.5 3.5l1-1.5 3 1V13a1 1 0 0 1-1 1A10.5 10.5 0 0 1 2 3.5a1 1 0 0 1 1-1z" />
                        </svg>
                        {r.phone}
                        <i className={s.rowSep}>·</i>
                        <b className={s.rowLate}>{r.late}</b>
                      </span>
                    </span>
                    <span className={s.rowVal}>{r.val}</span>
                    <span className={s.rowBtn}>
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="none"
                           stroke="currentColor" strokeWidth="1.5"
                           strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 8L13 3l-3 10-2.5-4.2L2.5 8z" />
                      </svg>
                    </span>
                    <span className={`${s.rowBtn} ${s.rowBtnDone}`}>
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="none"
                           stroke="currentColor" strokeWidth="1.8"
                           strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8.5l3.2 3.2L13 5" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>

          {/* ── Coluna direita: texto ── */}
          <div className={s.textCol}>
            <FadeSection>
              <div className={s.pill}>
                <svg viewBox="0 0 16 16" width="13" height="13" fill="none"
                     stroke="currentColor" strokeWidth="1.4"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12.5V7M6 12.5V4M10 12.5V9M14 12.5V2.5" />
                </svg>
                {t.label}
              </div>
            </FadeSection>
            <FadeSection delay={0.1}>
              <h2 className={s.title}>{t.title}</h2>
            </FadeSection>
            <FadeSection delay={0.2}>
              <p className={s.desc}>{t.desc}</p>
            </FadeSection>
            <FadeSection delay={0.3}>
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

        </div>
      </div>
    </section>
  );
}
