'use client';

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./PainSection.module.css";

const icons = [
    // calendário com X — confirmações manuais
    <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18M9.5 14.5l5 4M14.5 14.5l-5 4" /></>,
    // gráfico — controlo financeiro
    <><rect x="3" y="4" width="18" height="17" rx="3" /><path d="M8 16v-3M12 16v-6M16 16v-4" /></>,
    // pessoa ausente — faltas
    <><circle cx="10" cy="8" r="4" /><path d="M3 21c0-3.9 3.1-6 7-6M16 15l5 5M21 15l-5 5" /></>,
    // pastas dispersas — informação de clientes
    <><rect x="3" y="6" width="11" height="9" rx="2" /><path d="M17 9h4v9a2 2 0 0 1-2 2H8" /></>,
];

const copy = {
    pt: {
        label: 'Para quem trabalha por conta própria',
        title: <>Gerir o teu negócio em várias ferramentas <br />não é sustentável.</>,
        desc: 'Processos dispersos criam erros, perdas e consomem o teu tempo.',
        pains: [
            {
                title: 'Marcações dispersas',
                body: 'Entre o caderno, o WhatsApp e o que ficou por escrever, há sempre uma que escapa.',
            },
            {
                title: 'Falta de controlo financeiro',
                body: 'O mês fecha sem saberes ao certo o que entrou e o que ficou por receber.',
            },
            {
                title: 'Faltas de última hora',
                body: 'A mensagem da véspera fica por enviar e o cliente não aparece. A hora fica vazia e a receita não entra.',
            },
            {
                title: 'Histórico incompleto',
                body: 'Sem histórico centralizado. Sem contexto entre marcações.',
                conclusion: 'Dificuldade em acompanhar cada cliente com consistência.',
            },
        ],
        bold: 'Simplifica a gestão do teu negócio',
        cta: 'Ver como o Auxio resolve isto →',
    },
    en: {
        label: 'For people working for themselves',
        title: <>Running your business across several tools <br />is not sustainable.</>,
        desc: 'Scattered processes create errors, losses and eat up your time.',
        pains: [
            {
                title: 'Scattered bookings',
                body: 'Between the notebook, WhatsApp and whatever never got written down, there is always one that slips.',
            },
            {
                title: 'No financial control',
                body: 'The month ends without you knowing exactly what came in and what is still owed.',
            },
            {
                title: 'Last-minute no-shows',
                body: 'Yesterday’s message never gets sent and the client doesn’t turn up. The slot sits empty and the revenue never comes in.',
            },
            {
                title: 'Incomplete history',
                body: 'No central history. No context between appointments.',
                conclusion: 'Hard to follow each client with consistency.',
            },
        ],
        bold: 'Simplify how you run your business',
        cta: 'See how Auxio solves this →',
    },
};

export default function PainSection() {
    const { lang } = useLang();
    const t = copy[lang];

    return (
        <section className={s.section} id="problema">
            <div className={s.container}>

                <FadeSection>
                    <p className={s.label}>{t.label}</p>
                </FadeSection>

                <FadeSection delay={0.1}>
                    <h2 className={s.title}>{t.title}</h2>
                </FadeSection>

                <FadeSection delay={0.2}>
                    <p className={s.desc}>{t.desc}</p>
                </FadeSection>

                <div className={s.list}>
                    {t.pains.map((pain, i) => (
                        <FadeSection key={i} delay={0.1 + i * 0.08}>
                            <div className={s.item}>
                                <span className={s.icon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="1.6"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        {icons[i]}
                                    </svg>
                                </span>
                                <p className={s.itemTitle}>{pain.title}</p>
                                <p className={s.itemText}>{pain.body} {pain.conclusion}</p>
                            </div>
                        </FadeSection>
                    ))}
                </div>

                <FadeSection delay={0.2}>
                    <p className={`${s.desc} ${s.descBold}`}>{t.bold}</p>
                </FadeSection>

                <FadeSection delay={0.5}>
                    <div className={s.footer}>
                        <a href="#agenda" className={s.cta}>
                            {t.cta}
                        </a>
                    </div>
                </FadeSection>

            </div>
        </section>
    );
}
