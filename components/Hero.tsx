'use client';
import { useEffect, useRef, useMemo } from 'react';
import s from './Hero.module.css';

const WEEKDAYS = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
const MONTHS   = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

const appointments = [
  { name: 'Ana Ferreira', type: 'Fisioterapia', time: '10:00', badge: 'confirmed', badgeLabel: 'Confirmada ✓', color: 'var(--argila)', active: true },
  { name: 'Pedro Costa',  type: 'Consulta',     time: '11:30', badge: 'pending',   badgeLabel: 'Pendente ⏳', color: 'var(--castanho-medio)', active: false },
  { name: 'Sofia Lopes',  type: 'Avaliação',    time: '14:00', badge: 'new',       badgeLabel: 'Nova',        color: 'var(--oliva)', active: false },
  { name: 'Marta Cunha',  type: 'Manutenção',   time: '16:00', badge: 'confirmed', badgeLabel: 'Confirmada ✓', color: 'var(--argila-dark)', active: false },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { dayLabel, dateLabel } = useMemo(() => {
    const now = new Date();
    const dayLabel = `Hoje · ${WEEKDAYS[now.getDay()]}`;
    const dateLabel = `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
    return { dayLabel, dateLabel };
  }, []);
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
      <div className={s.left}>
        <div className={`${s.badge} fade-up`}>
          <span className={s.dot} /> MVP em desenvolvimento · Portugal
        </div>
        <h1 className={`${s.h1} fade-up`} style={{ transitionDelay: '0.1s' }}>
          O teu negócio,<br /><em>finalmente</em><br />sob controlo.
        </h1>
        <p className={`${s.sub} fade-up`} style={{ transitionDelay: '0.2s' }}>
          Agenda, clientes, finanças e comunicação - tudo num só lugar. 
          O Auxio elimina o trabalho manual para que se possa focar nos seus clientes.
        </p>
        <div className={`${s.actions} fade-up`} style={{ transitionDelay: '0.3s' }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className={s.btnPrimary}>
            Subscrever
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#agenda" className={s.btnGhost}>Ver o que faz</a>
        </div>
        <div className={`${s.proof} fade-up`} style={{ transitionDelay: '0.4s' }}>
          {/* <div className={s.avatars}>
            {[['AF','var(--argila)'],['JP','var(--oliva)'],['SL','var(--castanho-medio)'],['MC','var(--argila-dark)']].map(([init, bg], i) => (
              <div key={i} className={s.av} style={{ background: bg, marginLeft: i === 0 ? 0 : '-8px' }}>{init}</div>
            ))}
          </div>
          <p className={s.proofText}><strong>Profissionais como tu</strong> estão na lista de espera.<br />Junta-te agora — lançamento em breve.</p> */}
        </div>
      </div>

      <div className={`${s.right} fade-up`} style={{ transitionDelay: '0.2s' }}>
        <div className={s.card}>
          <div className={s.cardHeader}>
            <div>
              <div className={s.cardLabel}>{dayLabel}</div>
              <div className={s.cardDate}>{dateLabel}</div>
            </div>
            <span className={s.cardCount}>4 marcações</span>
          </div>
          <div>
            {appointments.map((a, i) => (
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
            {[['€840','Esta semana',''],['0','Faltas','var(--oliva)'],['97%','Confirmados','']].map(([val, label, color], i) => (
              <div key={i} className={s.stat}>
                <div className={s.statVal} style={color ? { color } : {}}>{val}</div>
                <div className={s.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={s.notif}>
          <div className={s.notifIcon}>✅</div>
          <div>
            <div className={s.notifTitle}>Ana confirmou a consulta</div>
            <div className={s.notifSub}>Respondeu SIM via WhatsApp · agora mesmo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
