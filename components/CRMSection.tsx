"use client";

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./CRMSection.module.css";

const copy = {
    pt: {
        label: 'Fichas de cliente',
        title: 'Tudo sobre cada cliente, no mesmo sítio',
        desc: 'Abre a ficha do cliente e continua exatamente onde a última sessão terminou. Toda a informação importante fica reunida no mesmo lugar, desde notas e documentos até consentimentos e pagamentos pendentes.',
        items: [
            'Guarda notas, documentos e consentimentos em cada ficha.',
            'Vê imediatamente se existem pagamentos por regularizar.',
            'Encontra qualquer cliente em segundos.',
        ],
        name: 'Beatriz Fernandes',
        initials: 'BF',
        sub: '28 anos · Cliente desde 07/2026',
        tag: 'Desportista',
        tabs: ['Dados Pessoais', 'Marcações', 'Pacotes', 'Pagamentos', 'Recibos'],
        cards: [
            { title: 'Identificação', fields: [
                ['Nome completo', 'Beatriz Fernandes'],
                ['Data de nascimento', '16/05/1998 (28 anos)'],
                ['NIF', '123456789'],
            ]},
            { title: 'Preferências de agendamento', fields: [
                ['Dias preferidos', 'Sexta'],
                ['Hora preferida', '17:00'],
                ['Frequência recomendada', 'Quinzenal'],
            ]},
        ],
        contactsTitle: 'Contactos',
        contacts: [
            ['Telemóvel', '+351 912 345 678'],
            ['Nº alternativo', '—'],
            ['Email', 'beatriz.f@email.pt'],
            ['Morada', '—'],
            ['Código postal', '2000-000'],
            ['Localidade', 'Lisboa'],
        ],
    },
    en: {
        label: 'Client records',
        title: 'Everything about each client, in one place',
        desc: 'Open a client record and pick up exactly where the last session ended. All the information that matters sits in the same place, from notes and documents to consents and outstanding payments.',
        items: [
            'Keep notes, documents and consents on every record.',
            'See straight away whether there are payments still to settle.',
            'Find any client in seconds.',
        ],
        name: 'Beatriz Fernandes',
        initials: 'BF',
        sub: '28 years old · Client since 07/2026',
        tag: 'Athlete',
        tabs: ['Personal details', 'Bookings', 'Packs', 'Payments', 'Receipts'],
        cards: [
            { title: 'Identification', fields: [
                ['Full name', 'Beatriz Fernandes'],
                ['Date of birth', '16/05/1998 (28)'],
                ['Tax number', '123456789'],
            ]},
            { title: 'Scheduling preferences', fields: [
                ['Preferred days', 'Friday'],
                ['Preferred time', '17:00'],
                ['Recommended frequency', 'Fortnightly'],
            ]},
        ],
        contactsTitle: 'Contacts',
        contacts: [
            ['Mobile', '+351 912 345 678'],
            ['Alternative no.', '—'],
            ['Email', 'beatriz.f@email.pt'],
            ['Address', '—'],
            ['Postcode', '2000-000'],
            ['City', 'Lisbon'],
        ],
    },
};

/* editar · arquivar · eliminar · fechar */
const actionIcons = [
    <path key="e" d="M11.3 2.2a1.7 1.7 0 0 1 2.5 2.4L5.6 12.8l-3.1.7.7-3.1 8.1-8.2z" />,
    <><rect key="r" x="2" y="5" width="12" height="6" rx="3" /><circle key="c" cx="5.5" cy="8" r="1.6" /></>,
    <><path key="l" d="M3 4.5h10M6.3 4.5V3a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v1.5" /><path key="b" d="M4.4 4.5l.6 8a1 1 0 0 0 1 .9h4a1 1 0 0 0 1-.9l.6-8" /></>,
    <path key="x" d="M4 4l8 8M12 4l-8 8" />,
];

/* ícones das tabs, na ordem de t.tabs */
const tabIcons = [
    <><rect x="2" y="3" width="12" height="10" rx="2" /><circle cx="6" cy="7" r="1.5" /><path d="M3.5 11.5c0-1.4 1.1-2.2 2.5-2.2s2.5.8 2.5 2.2M10.5 6.5h2M10.5 9h2" /></>,
    <><rect x="2" y="3" width="12" height="11" rx="2" /><path d="M5 1.5v3M11 1.5v3M2 7h12" /></>,
    <><rect x="2" y="3" width="12" height="11" rx="2" /><path d="M2 6.5h12M5 10h6" /></>,
    <><path d="M11 4.2A4 4 0 0 0 5.2 10.5 4 4 0 0 0 11 11.8M3 7.2h4.5M3 9.2h4.5" /></>,
    <><rect x="3" y="2" width="10" height="12" rx="1.5" /><path d="M5.5 5h5M5.5 7.5h5M5.5 10h3" /></>,
];

export default function CRMSection() {
    const { lang } = useLang();
    const t = copy[lang];

    return (
        <section className={s.section} id="CRM">
            <div className={s.container}>
                <div className={s.split}>

                    {/* ── Coluna esquerda: ficha do cliente ── */}
                    <FadeSection className={s.mockCol}>
                        <div className={s.modal}>
                            <div className={s.modalHead}>
                                <div className={s.headRow}>
                                    <span className={s.avatar}>{t.initials}</span>
                                    <div>
                                        <p className={s.clientName}>{t.name}</p>
                                        <p className={s.clientSub}>{t.sub}</p>
                                    </div>
                                    <div className={s.actions}>
                                        {actionIcons.map((icon, i) => (
                                            <span key={i} className={`${s.action} ${i === 2 ? s.actionDanger : ''}`}>
                                                <svg viewBox="0 0 16 16" width="10" height="10" fill="none"
                                                     stroke="currentColor" strokeWidth="1.5"
                                                     strokeLinecap="round" strokeLinejoin="round">
                                                    {icon}
                                                </svg>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <span className={s.tag}><i className={s.tagDot} />{t.tag}</span>
                            </div>

                            <div className={s.tabs}>
                                {t.tabs.map((tab, i) => (
                                    <span key={tab} className={`${s.tab} ${i === 0 ? s.tabActive : ''}`}>
                                        <svg viewBox="0 0 16 16" width="11" height="11" fill="none"
                                             stroke="currentColor" strokeWidth="1.3"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            {tabIcons[i]}
                                        </svg>
                                        {tab}
                                    </span>
                                ))}
                            </div>

                            <div className={s.modalBody}>
                                <div className={s.cardRow}>
                                    {t.cards.map((c) => (
                                        <div key={c.title} className={s.infoCard}>
                                            <p className={s.infoTitle}>{c.title}</p>
                                            {c.fields.map(([k, v]) => (
                                                <div key={k} className={s.field}>
                                                    <span className={s.fieldLabel}>{k}</span>
                                                    <span className={s.fieldValue}>{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                <div className={s.infoCard}>
                                    <p className={s.infoTitle}>{t.contactsTitle}</p>
                                    <div className={s.contactGrid}>
                                        {t.contacts.map(([k, v]) => (
                                            <div key={k} className={s.field}>
                                                <span className={s.fieldLabel}>{k}</span>
                                                <span className={s.fieldValue}>{v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
                                    <path d="M1.5 4a1.5 1.5 0 0 1 1.5-1.5h3L7.5 4h5.5A1.5 1.5 0 0 1 14.5 5.5v7A1.5 1.5 0 0 1 13 14H3a1.5 1.5 0 0 1-1.5-1.5V4z" />
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
