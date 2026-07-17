'use client';

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./AgendaSection.module.css";

const copy = {
    pt: {
        label: 'Agenda',
        title: <>Agenda inteligente com lembretes<br />prontos a enviar</>,
        desc: 'Personalizas o lembrete de cada cliente e envia-lo pelo WhatsApp com um toque: a mensagem abre já escrita, é só carregar em enviar. Sempre que ocorre um cancelamento, és notificado de imediato para poderes preencher a vaga.',
        leftTitle: 'Diz adeus às marcações perdidas',
        items: [
            'Lembretes por WhatsApp com um toque — mensagem já escrita',
            'Reorganização rápida com funcionalidade drag & drop',
            'Bloqueios recorrentes para almoço, folgas e formações',
            'Relatório mensal de faltas com cálculo de receita perdida',
            'Vistas diária, semanal e mensal',
        ],
        appTitle: 'Agenda',
        newBtn: '+ Nova Marcação',
        stats: [
            { label: 'Confirmadas', val: '8', dot: '#6B7A3A' },
            { label: 'Pendentes',   val: '3', dot: '#C4704F' },
            { label: 'Canceladas',  val: '1', dot: '#aaa'    },
            { label: 'Ocupação',    val: '75%', dot: null, green: true },
        ],
        tabs: ['Dia', 'Semana', 'Mês'],
        tabBlock: 'Bloquear',
        dateNav: 'Quarta, 9 Abril 2026',
        slots: [
            { time: '08:00', name: 'Ana Silva',      sub: 'Psicologia · 08:00 – 09:00',    status: 'Confirmada', color: 'green' },
            { time: '09:00', name: 'Carla Nunes',    sub: 'Fisioterapia · 09:00 – 10:00',  status: 'Pendente',   color: 'yellow' },
            { time: '10:00', name: 'Almoço · Bloqueado', sub: '10:00 – 11:00',             status: null,         color: 'neutral' },
            { time: '11:00', name: 'Inês Ferreira',  sub: 'Estética · 11:00 – 12:00',      status: 'Cancelada',  color: 'red' },
            { time: '12:00', name: 'Tiago Lopes',    sub: 'Consulta Geral · 12:00 – 13:00',status: 'Confirmada', color: 'green' },
        ],
        nav: ['Finanças', 'Agenda', 'Serviços', 'Clientes', 'Perfil'],
        chipTitle: 'Lembretes por enviar',
        chipSub: 'WhatsApp · toque para enviar',
    },
    en: {
        label: 'Calendar',
        title: <>A smart calendar with reminders<br />ready to send</>,
        desc: 'You personalise each client’s reminder and send it over WhatsApp in one tap: the message opens ready-written, you just hit send. Whenever a cancellation happens, you are notified immediately so you can fill the slot.',
        leftTitle: 'Say goodbye to lost appointments',
        items: [
            'One-tap WhatsApp reminders — message ready-written',
            'Quick reorganisation with drag & drop',
            'Recurring blocks for lunch, days off and training',
            'Monthly no-show report with lost revenue estimate',
            'Daily, weekly and monthly views',
        ],
        appTitle: 'Calendar',
        newBtn: '+ New Booking',
        stats: [
            { label: 'Confirmed', val: '8', dot: '#6B7A3A' },
            { label: 'Pending',   val: '3', dot: '#C4704F' },
            { label: 'Cancelled', val: '1', dot: '#aaa'    },
            { label: 'Occupancy', val: '75%', dot: null, green: true },
        ],
        tabs: ['Day', 'Week', 'Month'],
        tabBlock: 'Block',
        dateNav: 'Wednesday, 9 April 2026',
        slots: [
            { time: '08:00', name: 'Ana Silva',      sub: 'Psychology · 08:00 – 09:00',     status: 'Confirmed', color: 'green' },
            { time: '09:00', name: 'Carla Nunes',    sub: 'Physiotherapy · 09:00 – 10:00',  status: 'Pending',   color: 'yellow' },
            { time: '10:00', name: 'Lunch · Blocked', sub: '10:00 – 11:00',                 status: null,        color: 'neutral' },
            { time: '11:00', name: 'Inês Ferreira',  sub: 'Esthetics · 11:00 – 12:00',      status: 'Cancelled', color: 'red' },
            { time: '12:00', name: 'Tiago Lopes',    sub: 'General visit · 12:00 – 13:00',  status: 'Confirmed', color: 'green' },
        ],
        nav: ['Finances', 'Calendar', 'Services', 'Clients', 'Profile'],
        chipTitle: 'Reminder sent to Carla',
        chipSub: 'WhatsApp · tap to send',
    },
};

export default function AgendaSection() {
    const { lang } = useLang();
    const t = copy[lang];

    return (
        <section className={s.section} id="agenda">
            <div className={s.container}>
                <div className={s.split}>
                    <div className={s.left}>
                        <FadeSection><div className={s.label}>{t.label}</div></FadeSection>
                        <FadeSection delay={0.1}>
                            <h2 className={s.title}>{t.title}</h2>
                        </FadeSection>
                        <FadeSection delay={0.2}>
                            <p className={s.desc}>{t.desc}</p>
                        </FadeSection>
                        <FadeSection delay={0.3}>
                            <h3 className={s.leftTitle}>{t.leftTitle}</h3>
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

                    <FadeSection delay={0.25} className={s.right}>
                        <div className={s.phoneScene}>
                            <div className={s.phoneWrap}>
                            <div className={s.phone}>
                                <div className={s.screen}>
                                {/* Status bar */}
                                <div className={s.notchBar}>
                                    <span className={s.notchTime}>9:41</span>
                                    <span className={s.island} />
                                    <div className={s.notchIcons}>
                                    <svg width="14" height="10" viewBox="0 0 14 10">
                                        <rect x="0" y="3" width="2" height="7" rx="1" fill="#1E140E" opacity="0.3"/>
                                        <rect x="3" y="2" width="2" height="8" rx="1" fill="#1E140E" opacity="0.5"/>
                                        <rect x="6" y="0" width="2" height="10" rx="1" fill="#1E140E" opacity="0.7"/>
                                        <rect x="9" y="0" width="2" height="10" rx="1" fill="#1E140E"/>
                                    </svg>
                                    <div className={s.battery} />
                                    </div>
                                </div>

                                {/* App header */}
                                <div className={s.appHeader}>
                                    <div className={s.appTitleRow}>
                                    <span className={s.appTitle}>{t.appTitle}</span>
                                    <span className={s.newBtn}>{t.newBtn}</span>
                                    </div>

                                    <div className={s.statsRow}>
                                    {t.stats.map((s2, i) => (
                                        <div key={i} className={s.statPill}>
                                        <span className={s.statLabel}>{s2.label}</span>
                                        <span className={s.statVal} style={s2.green ? { color: '#6B7A3A' } : {}}>
                                            {s2.dot && <span className={s.statDot} style={{ background: s2.dot }} />}
                                            {s2.val}
                                        </span>
                                        </div>
                                    ))}
                                    </div>

                                    <div className={s.tabsRow}>
                                    {t.tabs.map((tab, i) => (
                                        <span key={i} className={`${s.tab} ${i === 0 ? s.tabActive : s.tabInactive}`}>{tab}</span>
                                    ))}
                                    <span className={s.tabBlock}>{t.tabBlock}</span>
                                    </div>

                                    <div className={s.dateNav}>
                                    <span className={s.dateNavArr}>‹</span>
                                    <span className={s.dateNavText}>{t.dateNav}</span>
                                    <span className={s.dateNavArr}>›</span>
                                    </div>
                                </div>

                                {/* Slots */}
                                <div className={s.slots}>
                                    {t.slots.map((a, i) => (
                                    <div key={i} className={`${s.slot} ${s[`slot_${a.color}`]}`}>
                                        <span className={s.slotTime}>{a.time}</span>
                                        <div className={`${s.slotBar} ${s[`bar_${a.color}`]}`} />
                                        <div className={s.slotBody}>
                                        <span className={s.slotName} style={a.color === 'neutral' ? { color: '#5C3820' } : {}}>{a.name}</span>
                                        <span className={s.slotSub}>{a.sub}</span>
                                        {a.status && (
                                            <span className={`${s.badgeSm} ${s[`badge_${a.color}`]}`}>{a.status}</span>
                                        )}
                                        </div>
                                    </div>
                                    ))}
                                </div>

                                {/* Bottom nav */}
                                <div className={s.bottomNav}>
                                    {t.nav.map((label, i) => {
                                    const active = i === 1;
                                    return (
                                    <div key={i} className={s.navItem}>
                                        <div className={`${s.navIcon} ${active ? s.navIconActive : ''}`}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            {i === 0 && <><rect x="1" y="1" width="6" height="6" rx="1.5" fill="#5C3820" opacity="0.5"/><rect x="9" y="1" width="6" height="6" rx="1.5" fill="#5C3820" opacity="0.5"/><rect x="1" y="9" width="6" height="6" rx="1.5" fill="#5C3820" opacity="0.5"/><rect x="9" y="9" width="6" height="6" rx="1.5" fill="#5C3820" opacity="0.5"/></>}
                                            {i === 1 && <><rect x="1" y="3" width="14" height="11" rx="2" stroke={active ? '#6B7A3A' : '#5C3820'} strokeWidth="1.5" strokeOpacity={active ? 1 : 0.5}/><path d="M4 1v3M12 1v3" stroke={active ? '#6B7A3A' : '#5C3820'} strokeWidth="1.5" strokeLinecap="round" strokeOpacity={active ? 1 : 0.5}/><path d="M1 7h14" stroke={active ? '#6B7A3A' : '#5C3820'} strokeWidth="1.2" strokeOpacity={active ? 1 : 0.5}/></>}
                                            {i === 2 && <><path d="M2 14V6l6-4 6 4v8H2z" stroke="#5C3820" strokeWidth="1.4" strokeOpacity="0.5" strokeLinejoin="round"/><rect x="5.5" y="8" width="5" height="6" rx="1" fill="#5C3820" fillOpacity="0.2"/></>}
                                            {i === 3 && <><circle cx="8" cy="5.5" r="3" stroke="#5C3820" strokeWidth="1.4" strokeOpacity="0.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#5C3820" strokeWidth="1.4" strokeOpacity="0.5" strokeLinecap="round"/></>}
                                            {i === 4 && <><circle cx="8" cy="8" r="6" stroke="#5C3820" strokeWidth="1.4" strokeOpacity="0.5"/><path d="M8 5v3l2 1.5" stroke="#5C3820" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5"/></>}
                                        </svg>
                                        </div>
                                        <span className={`${s.navLabel} ${active ? s.navLabelActive : ''}`}>{label}</span>
                                    </div>
                                    );
                                    })}
                                </div>
                                </div>
                            </div>

                            <div className={s.phoneChip}>
                                <div className={s.phoneChipIcon}>💬</div>
                                <div>
                                    <div className={s.phoneChipTitle}>{t.chipTitle}</div>
                                    <div className={s.phoneChipSub}>{t.chipSub}</div>
                                </div>
                            </div>
                            </div>
                            <div className={s.shadowPlane} />
                        </div>
                    </FadeSection>
                </div>
             </div>
        </section>
    );
}
