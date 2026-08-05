'use client';

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./AgendaSection.module.css";

const START_HOUR = 9;
const HOURS = 6;

// posição em meias-horas a contar de START_HOUR — "10:30" → 3
const half = (t: string) => (+t.slice(0, 2) - START_HOUR) * 2 + (+t.slice(3) >= 30 ? 1 : 0);

const events = [
    { day: 0, from: '10:00', to: '11:00', tone: 'green' },
    { day: 0, from: '12:30', to: '13:30', tone: 'blue'  },
    { day: 1, from: '09:00', to: '10:00', tone: 'amber' },
    { day: 1, from: '11:30', to: '12:30', tone: 'sand'  },
    { day: 2, from: '09:30', to: '10:30', tone: 'green' },
    { day: 2, from: '12:00', to: '13:00', tone: 'blue'  },
    { day: 3, from: '09:00', to: '10:00', tone: 'green' },
    { day: 3, from: '11:00', to: '12:00', tone: 'red'   },
    { day: 3, from: '13:00', to: '14:00', tone: 'sand'  },
    { day: 4, from: '10:00', to: '11:00', tone: 'green' },
    { day: 4, from: '12:30', to: '13:30', tone: 'amber' },
    { day: 5, from: '09:30', to: '10:30', tone: 'blue'  },
    { day: 5, from: '11:30', to: '12:30', tone: 'sand'  },
    { day: 6, from: '10:30', to: '11:30', tone: 'green' },
];

const copy = {
    pt: {
        kicker: 'Funcionalidades',
        sectionTitle: 'Quatro áreas. Tudo ligado, sem trabalho a dobrar.',
        label: 'Agenda',
        title: 'A semana toda de relance, sem sobreposições.',
        desc: 'Vista de dia, semana e mês. Arrasta para remarcar, define pacotes de sessões e vê quem confirmou. As faltas aparecem no dashboard antes de te custarem dinheiro.',
        items: [
            'Vistas de dia, semana e mês com arrastar para remarcar.',
            'Confirmações e lembretes automáticos por SMS ou email.',
            'Pacotes de sessões com contagem automática do que falta.',
        ],
        views: ['Dia', 'Semana', 'Mês'],
        today: 'Hoje',
        range: '20–26 julho',
        filters: 'Filtros',
        days: [
            { name: 'Seg', num: '20' },
            { name: 'Ter', num: '21' },
            { name: 'Qua', num: '22' },
            { name: 'Qui', num: '23' },
            { name: 'Sex', num: '24' },
            { name: 'Sáb', num: '25' },
            { name: 'Dom', num: '26' },
        ],
        names: ['Miguel S.', 'Rita M.', 'Inês C.', 'Pilates', 'Pedro S.', 'Ana S.',
                'Carlos S.', 'Marta N.', 'Hugo M.', 'Ana S.', 'Carlos S.', 'Duarte P.',
                'Avaliações', 'Sofia L.'],
    },
    en: {
        kicker: 'Features',
        sectionTitle: 'Four areas. All connected, no double work.',
        label: 'Calendar',
        title: 'Your whole week at a glance, no overlaps.',
        desc: 'Day, week and month views. Drag to reschedule, define session packs and see who confirmed. No-shows land on the dashboard before they cost you money.',
        items: [
            'Day, week and month views with drag to reschedule.',
            'Automatic confirmations and reminders by SMS or email.',
            'Session packs that count down what is left on their own.',
        ],
        views: ['Day', 'Week', 'Month'],
        today: 'Today',
        range: '20–26 July',
        filters: 'Filters',
        days: [
            { name: 'Mon', num: '20' },
            { name: 'Tue', num: '21' },
            { name: 'Wed', num: '22' },
            { name: 'Thu', num: '23' },
            { name: 'Fri', num: '24' },
            { name: 'Sat', num: '25' },
            { name: 'Sun', num: '26' },
        ],
        names: ['Miguel S.', 'Rita M.', 'Inês C.', 'Pilates', 'Pedro S.', 'Ana S.',
                'Carlos S.', 'Marta N.', 'Hugo M.', 'Ana S.', 'Carlos S.', 'Duarte P.',
                'Assessments', 'Sofia L.'],
    },
};

export default function AgendaSection() {
    const { lang } = useLang();
    const t = copy[lang];

    return (
        <section className={s.section} id="agenda">
            <div className={s.container}>
                <FadeSection>
                    <div className={s.kicker}>{t.kicker}</div>
                    <h2 className={s.sectionTitle}>{t.sectionTitle}</h2>
                </FadeSection>

                <div className={s.split}>
                    <div className={s.left}>
                        <FadeSection>
                            <div className={s.pill}>
                                <svg viewBox="0 0 16 16" width="13" height="13" fill="none"
                                     stroke="currentColor" strokeWidth="1.4"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1.5" y="3" width="13" height="11.5" rx="2" />
                                    <path d="M4.5 1.5v3M11.5 1.5v3M1.5 7h13" />
                                </svg>
                                {t.label}
                            </div>
                        </FadeSection>
                        <FadeSection delay={0.1}>
                            <h3 className={s.title}>{t.title}</h3>
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

                    <FadeSection delay={0.25} className={s.right}>
                        <div className={s.calCard}>
                            <div className={s.calBar}>
                                <div className={s.segmented}>
                                    {t.views.map((v, i) => (
                                        <span key={v} className={`${s.seg} ${i === 1 ? s.segActive : ''}`}>{v}</span>
                                    ))}
                                </div>
                                <span className={s.navBtn}>‹</span>
                                <span className={s.navBtn}>{t.today}</span>
                                <span className={s.navBtn}>›</span>
                                <span className={s.range}>{t.range}</span>
                                <span className={s.filters}>{t.filters}</span>
                            </div>

                            <div className={s.calHead}>
                                <span />
                                {t.days.map((d) => (
                                    <div key={d.num} className={s.dayHead}>
                                        <span className={s.dayName}>{d.name}</span>
                                        <span className={s.dayNum}>{d.num}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={s.calBody}>
                                <div className={s.lines} />
                                {Array.from({ length: HOURS }, (_, i) => (
                                    <span key={i} className={s.hour} style={{ gridRow: i * 2 + 1 }}>
                                        {String(START_HOUR + i).padStart(2, '0')}:00
                                    </span>
                                ))}
                                {events.map((e, i) => (
                                    <div
                                        key={i}
                                        className={`${s.event} ${s[`ev_${e.tone}`]}`}
                                        style={{
                                            gridColumn: e.day + 2,
                                            gridRow: `${half(e.from) + 1} / span ${half(e.to) - half(e.from)}`,
                                        }}
                                    >
                                        <span className={s.evTime}>{e.from}</span>
                                        <span className={s.evName}>{t.names[i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
}
