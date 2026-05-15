import FadeSection from "./FadeSection";
import s from "./AgendaSection.module.css";

const items = [
    'Confirmação automática via WhatsApp com resposta SIM/NÃO',
    'Reorganização rápida com funcionalidade drag & drop',
    'Bloqueios recorrentes para almoço, folgas e formações',
    'Relatório mensal de faltas com cálculo de receita perdida',
    'Vistas diária, semanal e mensal',
];

export default function AgendaSection() {
    return (
        <section className={s.section} id="agenda">
            <div className={s.container}>
                <FadeSection><div className={s.label}>Agenda</div></FadeSection>
                <FadeSection delay={0.1}>
                    <h2 className={s.title}>Agenda Inteligente que confirma<br />marcações automaticamente</h2>
                </FadeSection>
                <FadeSection delay={0.2}>
                    <p className={s.desc}>
                        O sistema envia confirmações automáticas 24 horas antes via WhatsApp, 
                        analisando autonomamento respostas SIM/NÃO. Sempre que ocorre um cancelamento, 
                        é notificado de imediato para poder gerir a vaga de forma eficiente.</p>
                </FadeSection>


                <div className={s.split}>
                    <FadeSection delay={0.1} className={s.left}>
                        <h3 className={s.leftTitle}>Diga adeus às marcações perdidas</h3>                        
                        <ul className={s.list}>
                        {items.map((item, i) => (
                            <li key={i}>
                            <span className={s.check}>✓</span>
                            {item}
                            </li>
                        ))}
                        </ul>                        
                    </FadeSection>
 
                    <FadeSection delay={0.25} className={s.right}>
                        <div className={s.phoneScene}>
                            <div className={s.phoneWrap}>
                            <div className={s.phone}>
                                
                                <div className={s.screen}>
                                {/* Status bar */}
                                <div className={s.notchBar}>
                                    <span className={s.notchTime}>9:41</span>
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
                                    <span className={s.appTitle}>Agenda</span>
                                    <span className={s.newBtn}>+ Nova Marcação</span>
                                    </div>

                                    <div className={s.statsRow}>
                                    {[
                                        { label: 'Confirmadas', val: '8', dot: '#6B7A3A' },
                                        { label: 'Pendentes',   val: '3', dot: '#C4704F' },
                                        { label: 'Canceladas',  val: '1', dot: '#aaa'    },
                                        { label: 'Ocupação',    val: '75%', dot: null, green: true },
                                    ].map((s2, i) => (
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
                                    {['Dia', 'Semana', 'Mês'].map((t, i) => (
                                        <span key={i} className={`${s.tab} ${i === 0 ? s.tabActive : s.tabInactive}`}>{t}</span>
                                    ))}
                                    <span className={s.tabBlock}>Bloquear</span>
                                    </div>

                                    <div className={s.dateNav}>
                                    <span className={s.dateNavArr}>‹</span>
                                    <span className={s.dateNavText}>Quarta, 9 Abril 2026</span>
                                    <span className={s.dateNavArr}>›</span>
                                    </div>
                                </div>

                                {/* Slots */}
                                <div className={s.slots}>
                                    {[
                                    { time: '08:00', name: 'Ana Silva',      sub: 'Psicologia · 08:00 – 09:00',    status: 'Confirmada', color: 'green' },
                                    { time: '09:00', name: 'Carla Nunes',    sub: 'Fisioterapia · 09:00 – 10:00',  status: 'Pendente',   color: 'yellow' },
                                    { time: '10:00', name: 'Almoço · Bloqueado', sub: '10:00 – 11:00',             status: null,         color: 'neutral' },
                                    { time: '11:00', name: 'Inês Ferreira',  sub: 'Estética · 11:00 – 12:00',      status: 'Cancelada',  color: 'red' },
                                    { time: '12:00', name: 'Tiago Lopes',    sub: 'Consulta Geral · 12:00 – 13:00',status: 'Confirmada', color: 'green' },
                                    ].map((a, i) => (
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
                                    {[
                                    { label: 'Finanças', active: false },
                                    { label: 'Agenda',   active: true  },
                                    { label: 'Serviços', active: false },
                                    { label: 'Clientes', active: false },
                                    { label: 'Perfil',   active: false },
                                    ].map((n, i) => (
                                    <div key={i} className={s.navItem}>
                                        <div className={`${s.navIcon} ${n.active ? s.navIconActive : ''}`}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            {i === 0 && <><rect x="1" y="1" width="6" height="6" rx="1.5" fill="#5C3820" opacity="0.5"/><rect x="9" y="1" width="6" height="6" rx="1.5" fill="#5C3820" opacity="0.5"/><rect x="1" y="9" width="6" height="6" rx="1.5" fill="#5C3820" opacity="0.5"/><rect x="9" y="9" width="6" height="6" rx="1.5" fill="#5C3820" opacity="0.5"/></>}
                                            {i === 1 && <><rect x="1" y="3" width="14" height="11" rx="2" stroke={n.active ? '#6B7A3A' : '#5C3820'} strokeWidth="1.5" strokeOpacity={n.active ? 1 : 0.5}/><path d="M4 1v3M12 1v3" stroke={n.active ? '#6B7A3A' : '#5C3820'} strokeWidth="1.5" strokeLinecap="round" strokeOpacity={n.active ? 1 : 0.5}/><path d="M1 7h14" stroke={n.active ? '#6B7A3A' : '#5C3820'} strokeWidth="1.2" strokeOpacity={n.active ? 1 : 0.5}/></>}
                                            {i === 2 && <><path d="M2 14V6l6-4 6 4v8H2z" stroke="#5C3820" strokeWidth="1.4" strokeOpacity="0.5" strokeLinejoin="round"/><rect x="5.5" y="8" width="5" height="6" rx="1" fill="#5C3820" fillOpacity="0.2"/></>}
                                            {i === 3 && <><circle cx="8" cy="5.5" r="3" stroke="#5C3820" strokeWidth="1.4" strokeOpacity="0.5"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#5C3820" strokeWidth="1.4" strokeOpacity="0.5" strokeLinecap="round"/></>}
                                            {i === 4 && <><circle cx="8" cy="8" r="6" stroke="#5C3820" strokeWidth="1.4" strokeOpacity="0.5"/><path d="M8 5v3l2 1.5" stroke="#5C3820" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5"/></>}
                                        </svg>
                                        </div>
                                        <span className={`${s.navLabel} ${n.active ? s.navLabelActive : ''}`}>{n.label}</span>
                                    </div>
                                    ))}
                                </div>
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