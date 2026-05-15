import s from "./CRMSection.module.css";

const clients = [
    { initials: 'AS', name: 'Ana Silva',    email: 'ana.silva@email.com',    badge: 'VIP',  badgeColor: '#6B7A3A', avatarBg: '#e8f0e9', avatarColor: '#4a7c59', bar: 92, estado: 'Ativo',   estadoColor: '#e8f0e9', estadoText: '#4a7c59', verActive: true  },
    { initials: 'TR', name: 'Tiago Rocha',  email: 'tiago.rocha@email.com',  badge: null,   badgeColor: '',        avatarBg: '#fdf0ea', avatarColor: '#b85c2a', bar: 68, estado: 'Ativo',   estadoColor: '#e8f0e9', estadoText: '#4a7c59', verActive: false },
    { initials: 'CF', name: 'Carla Fontes', email: 'carla.fontes@email.com', badge: null,   badgeColor: '',        avatarBg: '#f0eaf8', avatarColor: '#7c4abf', bar: 45, estado: 'Inativo', estadoColor: '#f4f0eb', estadoText: '#aaa',    verActive: false },
    { initials: 'MO', name: 'Miguel Oliv.', email: 'miguel.o@email.com',     badge: 'VIP',  badgeColor: '#6B7A3A', avatarBg: '#e8f0e9', avatarColor: '#4a7c59', bar: 88, estado: 'Ativo',   estadoColor: '#e8f0e9', estadoText: '#4a7c59', verActive: false },
];

const navItems = [
    { label: 'Finanças',  icon: 'finance'  },
    { label: 'Agenda',    icon: 'calendar' },
    { label: 'Serviços',  icon: 'services' },
    { label: 'Clientes',  icon: 'clients', active: true },
    { label: 'Perfil',    icon: 'profile'  },
];

function NavIcon({ icon, active }: { icon: string; active?: boolean }) {
    const c = active ? '#fff' : '#bbb';
    const op = active ? '1' : '0.7';
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {icon === 'finance'  && <><rect x="2" y="2" width="8" height="8" rx="2" fill={c} fillOpacity={op}/><rect x="12" y="2" width="8" height="8" rx="2" fill={c} fillOpacity={op}/><rect x="2" y="12" width="8" height="8" rx="2" fill={c} fillOpacity={op}/><rect x="12" y="12" width="8" height="8" rx="2" fill={c} fillOpacity={op}/></>}
            {icon === 'calendar' && <><rect x="2" y="4" width="18" height="15" rx="2.5" stroke={c} strokeOpacity={op} strokeWidth="1.8"/><path d="M6 2v3M16 2v3" stroke={c} strokeOpacity={op} strokeWidth="1.8" strokeLinecap="round"/><path d="M2 9h18" stroke={c} strokeOpacity={op} strokeWidth="1.5"/></>}
            {icon === 'services' && <><path d="M3 19V8l8-5 8 5v11H3z" stroke={c} strokeOpacity={op} strokeWidth="1.8" strokeLinejoin="round"/><rect x="7" y="11" width="8" height="8" rx="1.5" fill={c} fillOpacity="0.25"/></>}
            {icon === 'clients'  && <><circle cx="11" cy="7.5" r="4" stroke={c} strokeOpacity={op} strokeWidth="1.8"/><path d="M3 19c0-4.418 3.582-7 8-7s8 2.582 8 7" stroke={c} strokeOpacity={op} strokeWidth="1.8" strokeLinecap="round"/></>}
            {icon === 'profile'  && <><circle cx="11" cy="11" r="8" stroke={c} strokeOpacity={op} strokeWidth="1.8"/><path d="M11 7v4l2.5 2" stroke={c} strokeOpacity={op} strokeWidth="1.8" strokeLinecap="round"/></>}
        </svg>
    );
}

export default function AuxioTabletMockup() {
    return (
        <div className={s.scene}>
            <div className={s.tabletWrap}>
                {/* Physical buttons */}
                <div className={s.btnLeft1} />
                <div className={s.btnLeft2} />
                <div className={s.btnRight} />

                <div className={s.tablet}>
                    {/* Camera */}
                    <div className={s.cameraStrip}>
                        <div className={s.cameraLens} />
                    </div>

                    {/* Bezel + Screen */}
                    <div className={s.bezel}>
                        <div className={s.screen}>
                            <div className={s.screenInner}>

                                {/* ── Sidebar ── */}
                                <div className={s.sidebar}>
                                    <div className={s.logo}>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <rect width="28" height="28" rx="7" fill="#6B7A3A"/>
                                            <path d="M8 20l4-12 4 12M10 16h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span className={s.logoText}>auxio</span>
                                    </div>

                                    <nav className={s.nav}>
                                        {navItems.map((n, i) => (
                                            <div key={i} className={`${s.navItem} ${n.active ? s.navItemActive : ''}`}>
                                                <NavIcon icon={n.icon} active={n.active} />
                                                <span className={`${s.navLabel} ${n.active ? s.navLabelActive : ''}`}>{n.label}</span>
                                            </div>
                                        ))}
                                    </nav>

                                    <div className={s.userCard}>
                                        <div className={s.userAvatar}>MS</div>
                                        <div>
                                            <div className={s.userName}>Maria Santos</div>
                                            <div className={s.userPlan}>Plano Pro</div>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Main ── */}
                                <div className={s.main}>
                                    <div className={s.topBar}>
                                        <h1 className={s.pageTitle}>Clientes</h1>
                                        <button className={s.btnPrimary}>+ Novo Cliente</button>
                                    </div>

                                    {/* Search */}
                                    <div className={s.searchWrap}>
                                        <svg className={s.searchIcon} width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <circle cx="8" cy="8" r="5.5" stroke="#bbb" strokeWidth="1.5"/>
                                            <path d="M12.5 12.5L16 16" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                        <input className={s.search} readOnly placeholder="Pesquisar clientes…" />
                                    </div>

                                    {/* Filter tabs */}
                                    <div className={s.filterRow}>
                                        {['Todos', 'VIP', 'Ativos', 'Inativos'].map((t, i) => (
                                            <button key={i} className={`${s.filterTab} ${i === 0 ? s.filterTabActive : ''}`}>{t}</button>
                                        ))}
                                    </div>

                                    {/* Stats strip */}
                                    <div className={s.statsStrip}>
                                        {[
                                            { lbl: 'TOTAL',           val: '248', badge: null },
                                            { lbl: 'VIP',             val: '32',  badge: null },
                                            { lbl: 'NOVOS (MÊS)',     val: '12',  badge: '+8%' },
                                            { lbl: 'TAXA RETENÇÃO',   val: '87%', badge: null },
                                        ].map((c, i) => (
                                            <div key={i} className={s.statCard}>
                                                <span className={s.statLbl}>{c.lbl}</span>
                                                <span className={s.statVal}>
                                                    {c.val}
                                                    {c.badge && <em className={s.statBadge}>{c.badge}</em>}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Table */}
                                    <div className={s.tableWrap}>
                                        <table className={s.table}>
                                            <thead>
                                                <tr>
                                                    <th className={s.th}>Cliente</th>
                                                    <th className={s.th}>Visitas</th>
                                                    <th className={s.th}>Estado</th>
                                                    <th className={s.th}></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {clients.map((c, i) => (
                                                    <tr key={i} className={s.tr}>
                                                        <td className={s.td}>
                                                            <div className={s.clientCell}>
                                                                <div className={s.leftBar} style={{ background: c.avatarColor }} />
                                                                <div className={s.avatar} style={{ background: c.avatarBg, color: c.avatarColor }}>{c.initials}</div>
                                                                <div>
                                                                    <div className={s.clientName}>
                                                                        {c.name}
                                                                        {c.badge && <span className={s.inlineBadge} style={{ background: c.avatarBg, color: c.badgeColor }}>{c.badge}</span>}
                                                                    </div>
                                                                    <div className={s.clientEmail}>{c.email}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className={s.td}>
                                                            <div className={s.barWrap}>
                                                                <div className={s.barTrack}>
                                                                    <div className={s.barFill} style={{ width: `${c.bar}%`, background: c.avatarColor }} />
                                                                </div>
                                                                <span className={s.barPct}>{c.bar}%</span>
                                                            </div>
                                                        </td>
                                                        <td className={s.td}>
                                                            <span className={s.estadoBadge} style={{ background: c.estadoColor, color: c.estadoText }}>{c.estado}</span>
                                                        </td>
                                                        <td className={s.td}>
                                                            <button className={`${s.verFicha} ${c.verActive ? s.verFichaActive : ''}`}>Ver ficha</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div className={s.tableFooter} style={{ padding: '12px 16px' }}>
                                            <span className={s.footerText}>Mostrando 4 de 248</span>
                                            <div className={s.pages}>
                                                {[1, 2, 3].map((p) => (
                                                    <button key={p} className={`${s.pageBtn} ${p === 1 ? s.pageBtnActive : ''}`}>{p}</button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Keyboard */}
                <div className={s.keyboard}>
                    <div className={s.kbBody}>
                        <div className={s.kbKeys}>
                            <div className={s.kbRow} />
                            <div className={s.kbRow} />
                            <div className={s.kbRow} />
                        </div>
                        <div className={s.kbTrackpad} />
                    </div>
                </div>
            </div>
        </div>
    );
}
