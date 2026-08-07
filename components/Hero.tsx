'use client';
import { useEffect, useRef } from 'react';
import { useLang } from '@/lib/i18n';
import s from './Hero.module.css';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor';

const copy = {
  pt: {
    h1a: 'Tu tratas dos clientes.',
    h1b: 'O Auxio trata ',
    h1mark: 'do resto',
    sub: 'Enquanto estás focado em atender clientes, o Auxio mantém o resto do negócio a funcionar. Agenda, confirmações automáticas, histórico de cada cliente, pagamentos e comunicação ficam reunidos num único painel, para que deixes de perder tempo entre o WhatsApp, folhas de cálculo e aplicações diferentes.',
    ctaPrimary: 'Quero acesso antecipado',
    ctaGhost: 'Ver como funciona',

    mockDay: 'Quarta-feira, 5 de agosto',
    mockHello: 'Bom dia',
    headTitle: 'Marcações de hoje',
    headMeta: '3 marcações · 2 por fazer',
    nextLabel: 'A seguir',
    nextTime: '14:00',
    nextIn: 'em 29 min',
    nextName: 'Beatriz Fernandes',
    nextService: 'Fisioterapia · 60 min',
    nextBadge: 'Em risco',
    nextNote: 'Ainda sem confirmação. Envia o lembrete ou liga.',
    confirmBtn: 'Marcar como confirmada',
    rows: [
      { from: '12:00', to: '13:00', ini: 'AC', name: 'Ana Sofia Costa',   service: 'Fisioterapia', status: 'Concluído', tone: 'done' },
      { from: '14:00', to: '15:00', ini: 'BF', name: 'Beatriz Fernandes', service: 'Fisioterapia', status: 'Em risco',  tone: 'risk' },
      { from: '15:00', to: '15:45', ini: 'CT', name: 'Catarina Trindade', service: 'Massagem',     status: 'Em risco',  tone: 'risk' },
    ],
    msgTitle: 'Mensagens por enviar',
    msgMeta: '5 por enviar',
    msgs: [
      { name: 'Beatriz Fernandes', when: 'Hoje às 14:00 · Fisioterapia' },
      { name: 'Catarina Trindade', when: 'Hoje às 15:00 · Massagem' },
      { name: 'Ana Sofia Costa',   when: 'Amanhã às 10:00 · Fisioterapia' },
      { name: 'Beatriz Fernandes', when: 'Amanhã às 11:00 · Pilates' },
    ],
    payTitle: 'Pagamentos pendentes',
    payMeta: '85,00 €',
    pays: [
      { ini: 'BF', name: 'Beatriz Fernandes', phone: '+351 912 345 678', val: '35,00 €' },
      { ini: 'AC', name: 'Ana Sofia Costa',   phone: '914 555 333',      val: '50,00 €' },
    ],

    marqueeLabel: 'Profissões que usam o Auxio',
    professions: [
      'Fisioterapeutas', 'Psicólogos', 'Esteticistas', 'Nutricionistas',
      'Personal Trainers', 'Osteopatas', 'Coaches', 'Advogados',
      'Fotógrafos', 'Contabilistas',
    ],
  },
  en: {
    h1a: 'You take care of clients.',
    h1b: 'Auxio handles ',
    h1mark: 'the rest',
    sub: 'While you stay focused on seeing clients, Auxio keeps the rest of the business running. Calendar, automatic confirmations, every client’s history, payments and messaging all come together in a single dashboard, so you stop losing time between WhatsApp, spreadsheets and different apps.',
    ctaPrimary: 'Get early access',
    ctaGhost: 'See how it works',

    mockDay: 'Wednesday, 5 August',
    mockHello: 'Good morning',
    headTitle: 'Today’s bookings',
    headMeta: '3 bookings · 2 to handle',
    nextLabel: 'Up next',
    nextTime: '14:00',
    nextIn: 'in 29 min',
    nextName: 'Beatriz Fernandes',
    nextService: 'Physio · 60 min',
    nextBadge: 'At risk',
    nextNote: 'Still unconfirmed. Send the reminder or call.',
    confirmBtn: 'Mark as confirmed',
    rows: [
      { from: '12:00', to: '13:00', ini: 'AC', name: 'Ana Sofia Costa',   service: 'Physio',  status: 'Done',    tone: 'done' },
      { from: '14:00', to: '15:00', ini: 'BF', name: 'Beatriz Fernandes', service: 'Physio',  status: 'At risk', tone: 'risk' },
      { from: '15:00', to: '15:45', ini: 'CT', name: 'Catarina Trindade', service: 'Massage', status: 'At risk', tone: 'risk' },
    ],
    msgTitle: 'Messages to send',
    msgMeta: '5 to send',
    msgs: [
      { name: 'Beatriz Fernandes', when: 'Today at 14:00 · Physio' },
      { name: 'Catarina Trindade', when: 'Today at 15:00 · Massage' },
      { name: 'Ana Sofia Costa',   when: 'Tomorrow at 10:00 · Physio' },
      { name: 'Beatriz Fernandes', when: 'Tomorrow at 11:00 · Pilates' },
    ],
    payTitle: 'Pending payments',
    payMeta: '85.00 €',
    pays: [
      { ini: 'BF', name: 'Beatriz Fernandes', phone: '+351 912 345 678', val: '35.00 €' },
      { ini: 'AC', name: 'Ana Sofia Costa',   phone: '914 555 333',      val: '50.00 €' },
    ],

    marqueeLabel: 'Professions using Auxio',
    professions: [
      'Physiotherapists', 'Psychologists', 'Estheticians', 'Nutritionists',
      'Personal Trainers', 'Osteopaths', 'Coaches', 'Lawyers',
      'Photographers', 'Accountants',
    ],
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const t = copy[lang];

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={s.hero} ref={ref}>
      {/* fundo decorativo */}
      <div className={s.bg} aria-hidden="true">
        <div className={s.blobA} />
        <div className={s.blobB} />
        <div className={s.grid} />
      </div>

      <div className={s.inner}>
        <div className={s.left}>
          <h1 className={`${s.h1} fade-up`} style={{ transitionDelay: '0.08s' }}>
            {t.h1a}<br />
            {t.h1b}<span className={s.mark}>{t.h1mark}<svg className={s.markStroke} viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M3 10 C 60 3, 160 3, 217 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/></svg></span>.
          </h1>
          <p className={`${s.sub} fade-up`} style={{ transitionDelay: '0.16s' }}>
            {t.sub}
          </p>
          <div className={`${s.actions} fade-up`} style={{ transitionDelay: '0.24s' }}>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>
              {t.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#agenda" className={s.btnGhost}>{t.ctaGhost}</a>
          </div>

        </div>

        <div className={`${s.right} fade-up`} style={{ transitionDelay: '0.18s' }}>
          <div className={s.mock}>
            <div className={s.mockHead}>
              <p className={s.mockDay}>{t.mockDay}</p>
              <p className={s.mockHello}>{t.mockHello}</p>
            </div>

            <div className={s.mockGrid}>
            <div className={s.card}>
              <div className={s.cardHead}>
                <span className={s.headIcon}>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none"
                       stroke="currentColor" strokeWidth="1.4"
                       strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1.8" y="3" width="12.4" height="11.2" rx="2" />
                    <path d="M4.8 1.5v3M11.2 1.5v3M1.8 7h12.4" />
                  </svg>
                </span>
                <span className={s.headTitle}>{t.headTitle}</span>
                <span className={s.headMeta}>{t.headMeta}</span>
              </div>

              <div className={s.next}>
                <div className={s.nextWhen}>
                  <span className={s.nextLabel}>{t.nextLabel}</span>
                  <span className={s.nextTime}>{t.nextTime}</span>
                  <span className={s.nextIn}>{t.nextIn}</span>
                </div>
                <div className={s.nextInfo}>
                  <p className={s.nextName}>{t.nextName}</p>
                  <p className={s.nextService}>
                    {t.nextService}
                    <span className={`${s.pill} ${s.risk}`}><i className={s.pillDot} />{t.nextBadge}</span>
                  </p>
                  <p className={s.nextNote}>{t.nextNote}</p>
                  <span className={s.confirmBtn}>
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none"
                         stroke="currentColor" strokeWidth="1.5"
                         strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6.5" cy="5.5" r="2.8" />
                      <path d="M1.5 13.5c0-2.4 2.2-3.8 5-3.8M10.5 11l1.7 1.7L15 9.8" />
                    </svg>
                    {t.confirmBtn}
                  </span>
                </div>
              </div>

              <div className={s.rows}>
                {t.rows.map((r, i) => (
                  <div key={i} className={s.row}>
                    <i className={`${s.rowBar} ${s[`bar_${r.tone}`]}`} />
                    <span className={s.rowTimes}>
                      <b className={s.rowFrom}>{r.from}</b>
                      <span className={s.rowTo}>{r.to}</span>
                    </span>
                    <span className={s.rowAvatar}>{r.ini}</span>
                    <span className={s.rowInfo}>
                      <span className={s.rowName}>{r.name}</span>
                      <span className={s.rowService}>{r.service}</span>
                    </span>
                    <span className={`${s.pill} ${s[r.tone]}`}><i className={s.pillDot} />{r.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={s.side}>
              <div className={s.card}>
                <div className={s.cardHead}>
                  <span className={s.headIcon}>
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none"
                         stroke="currentColor" strokeWidth="1.4"
                         strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 4.2A1.7 1.7 0 0 1 3.7 2.5h7A1.7 1.7 0 0 1 12.4 4.2v4A1.7 1.7 0 0 1 10.7 10H5.6L3 12v-2h-.3A1.7 1.7 0 0 1 2 8.2v-4z" />
                    </svg>
                  </span>
                  <span className={s.headTitle}>{t.msgTitle}</span>
                  <span className={s.headMeta}>{t.msgMeta}</span>
                </div>
                {t.msgs.map((m, i) => (
                  <div key={i} className={s.msgRow}>
                    <span className={s.msgIcon}>
                      <svg viewBox="0 0 16 16" width="11" height="11" fill="none"
                           stroke="currentColor" strokeWidth="1.4"
                           strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.5 7a4.5 4.5 0 0 0-9 0c0 4-1.5 5-1.5 5h12s-1.5-1-1.5-5M9.3 14a1.5 1.5 0 0 1-2.6 0" />
                      </svg>
                    </span>
                    <span className={s.msgInfo}>
                      <span className={s.msgName}>{m.name}</span>
                      <span className={s.msgWhen}>{m.when}</span>
                    </span>
                    <span className={s.msgBtn}>
                      <svg viewBox="0 0 16 16" width="9" height="9" fill="none"
                           stroke="currentColor" strokeWidth="1.5"
                           strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 8L13 3l-3 10-2.5-4.2L2.5 8z" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>

              <div className={s.card}>
                <div className={s.cardHead}>
                  <span className={s.headIcon}>
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none"
                         stroke="currentColor" strokeWidth="1.4"
                         strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 2h7M4.5 14h7M5.5 2v2.6L8 7l2.5-2.4V2M5.5 14v-2.6L8 9l2.5 2.4V14" />
                    </svg>
                  </span>
                  <span className={s.headTitle}>{t.payTitle}</span>
                  <span className={s.headMeta}>{t.payMeta}</span>
                </div>
                {t.pays.map((p, i) => (
                  <div key={i} className={s.payRow}>
                    <span className={s.rowAvatar}>{p.ini}</span>
                    <span className={s.msgInfo}>
                      <span className={s.msgName}>{p.name}</span>
                      <span className={s.msgWhen}>{p.phone}</span>
                    </span>
                    <span className={s.payVal}>{p.val}</span>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* faixa de profissões */}
      <div className={`${s.marquee} fade-up`} style={{ transitionDelay: '0.35s' }} aria-label={t.marqueeLabel}>
        <div className={s.marqueeTrack}>
          {[...t.professions, ...t.professions].map((p, i) => (
            <span key={i} className={s.marqueeItem} aria-hidden={i >= t.professions.length}>
              {p}<span className={s.marqueeDot}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
