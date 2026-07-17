'use client';
import { useEffect, useRef, useMemo } from 'react';
import { useLang } from '@/lib/i18n';
import s from './Hero.module.css';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor';

const copy = {
  pt: {
    badge: 'Early access aberto',
    h1a: 'Tu tratas dos clientes.',
    h1b: 'O Auxio trata ',
    h1mark: 'do resto',
    sub: 'Agenda com lembretes prontos a enviar, finanças em tempo real e o histórico de cada cliente num só lugar. Sem folhas de cálculo, sem mensagens perdidas.',
    ctaPrimary: 'Quero acesso antecipado',
    ctaGhost: 'Ver como funciona',
    
    today: 'Hoje',
    count: '4 marcações',
    appointments: [
      { name: 'Ana Ferreira', type: 'Fisioterapia', time: '10:00', badge: 'confirmed', badgeLabel: 'Confirmada ✓', color: 'var(--argila)', active: true },
      { name: 'Pedro Costa',  type: 'Consulta',     time: '11:30', badge: 'pending',   badgeLabel: 'Pendente ⏳', color: 'var(--castanho-medio)', active: false },
      { name: 'Sofia Lopes',  type: 'Avaliação',    time: '14:00', badge: 'new',       badgeLabel: 'Nova',        color: 'var(--oliva)', active: false },
      { name: 'Marta Cunha',  type: 'Manutenção',   time: '16:00', badge: 'confirmed', badgeLabel: 'Confirmada ✓', color: 'var(--argila-dark)', active: false },
    ],
    stats: [['€840', 'Esta semana', ''], ['0', 'Faltas', 'var(--oliva)'], ['97%', 'Confirmados', '']],
    chipWhatsTitle: 'Ana confirmou a consulta',
    chipWhatsSub: 'Respondeu SIM via WhatsApp · agora mesmo',
    chipPayTitle: 'Pagamento registado',
    chipPaySub: 'Pedro Costa · €45 · Consulta',
    marqueeLabel: 'Profissões que usam o Auxio',
    professions: [
      'Fisioterapeutas', 'Psicólogos', 'Esteticistas', 'Nutricionistas',
      'Personal Trainers', 'Osteopatas', 'Coaches', 'Advogados',
      'Fotógrafos', 'Contabilistas',
    ],
    weekdays: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    months: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
  },
  en: {
    badge: 'Early access open · Made in Portugal',
    h1a: 'You take care of clients.',
    h1b: 'Auxio handles ',
    h1mark: 'the rest',
    sub: 'A calendar with reminders ready to send, real-time finances and every client’s history in one place. No spreadsheets, no lost messages.',
    ctaPrimary: 'Get early access',
    ctaGhost: 'See how it works',
    note: 'The first 15 professionals get a discount for the first 3 months.',
    today: 'Today',
    count: '4 appointments',
    appointments: [
      { name: 'Ana Ferreira', type: 'Physiotherapy', time: '10:00', badge: 'confirmed', badgeLabel: 'Confirmed ✓', color: 'var(--argila)', active: true },
      { name: 'Pedro Costa',  type: 'Consultation',  time: '11:30', badge: 'pending',   badgeLabel: 'Pending ⏳',  color: 'var(--castanho-medio)', active: false },
      { name: 'Sofia Lopes',  type: 'Assessment',    time: '14:00', badge: 'new',       badgeLabel: 'New',         color: 'var(--oliva)', active: false },
      { name: 'Marta Cunha',  type: 'Follow-up',     time: '16:00', badge: 'confirmed', badgeLabel: 'Confirmed ✓', color: 'var(--argila-dark)', active: false },
    ],
    stats: [['€840', 'This week', ''], ['0', 'No-shows', 'var(--oliva)'], ['97%', 'Confirmed', '']],
    chipWhatsTitle: 'Ana confirmed her appointment',
    chipWhatsSub: 'Replied YES via WhatsApp · just now',
    chipPayTitle: 'Payment recorded',
    chipPaySub: 'Pedro Costa · €45 · Consultation',
    marqueeLabel: 'Professions using Auxio',
    professions: [
      'Physiotherapists', 'Psychologists', 'Estheticians', 'Nutritionists',
      'Personal Trainers', 'Osteopaths', 'Coaches', 'Lawyers',
      'Photographers', 'Accountants',
    ],
    weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const t = copy[lang];

  const { dayLabel, dateLabel } = useMemo(() => {
    const now = new Date();
    const dayLabel = `${t.today} · ${t.weekdays[now.getDay()]}`;
    const dateLabel = `${now.getDate()} ${t.months[now.getMonth()]} ${now.getFullYear()}`;
    return { dayLabel, dateLabel };
  }, [t]);

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
          <div className={`${s.badge} fade-up`}>
            <span className={s.dot} /> {t.badge}
          </div>
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
          <div className={s.cardTilt}>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <div>
                  <div className={s.cardLabel}>{dayLabel}</div>
                  <div className={s.cardDate}>{dateLabel}</div>
                </div>
                <span className={s.cardCount}>{t.count}</span>
              </div>
              <div>
                {t.appointments.map((a, i) => (
                  <div key={i} className={`${s.row} ${a.active ? s.rowActive : ''}`}>
                    <div className={s.rowDot} style={{ background: a.color }} />
                    <div className={s.rowInfo}>
                      <div className={s.rowName}>{a.name}</div>
                      <div className={s.rowType}>{a.type}</div>
                    </div>
                    <div className={s.rowTime}>{a.time}</div>
                    <div className={`${s.rowBadge} ${s[a.badge]}`}>{a.badgeLabel}</div>
                  </div>
                ))}
              </div>
              <div className={s.cardStats}>
                {t.stats.map(([val, label, color], i) => (
                  <div key={i} className={s.stat}>
                    <div className={s.statVal} style={color ? { color } : {}}>{val}</div>
                    <div className={s.statLabel}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${s.chip} ${s.chipWhats}`}>
              <div className={s.chipIcon}>✅</div>
              <div>
                <div className={s.chipTitle}>{t.chipWhatsTitle}</div>
                <div className={s.chipSub}>{t.chipWhatsSub}</div>
              </div>
            </div>

            <div className={`${s.chip} ${s.chipPay}`}>
              <div className={s.chipIcon}>💶</div>
              <div>
                <div className={s.chipTitle}>{t.chipPayTitle}</div>
                <div className={s.chipSub}>{t.chipPaySub}</div>
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
