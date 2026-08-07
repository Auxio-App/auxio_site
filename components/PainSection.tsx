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
        title: <>Gerir o teu negócio em várias ferramentas <br />não é sustentável</>,
        desc: 'O problema não é falta de organização. É estares constantemente a saltar entre aplicações para fazer coisas que deviam acontecer automaticamente.',
        pains: [
            {
                title: 'Marcações perdidas ou trocadas',
                body: 'Entre o WhatsApp, chamadas, um caderno e notas soltas, basta uma alteração esquecida para criar horários trocados, clientes à espera e tempo perdido.',
            },
            {
                title: 'Pagamentos por confirmar',
                body: 'Sabes que trabalhaste muito, mas no final do mês continua difícil perceber quanto recebeste, o que ainda está por cobrar ou quais os serviços que realmente dão mais lucro.',
            },
            {
                title: 'Faltas de última hora',
                body: 'Um simples lembrete pode evitar uma consulta perdida. Quando essa mensagem depende de te lembrares de a enviar, as faltas aumentam e acabas por perder tempo e faturação.',
            },
            {
                title: 'Cada cliente tem informação espalhada',
                body: 'Notas, documentos e histórico acabam divididos entre aplicações, papéis e mensagens. Sempre que precisas de recuperar informação, perdes tempo à procura em vez de acompanhar o cliente com confiança.',
            },
        ],
        bold: 'Simplifica a gestão do teu negócio',
        cta: 'Ver como o Auxio resolve isto →',
    },
    en: {
        label: 'For people working for themselves',
        title: <>Running your business across several tools <br />is not sustainable.</>,
        desc: 'The problem is not a lack of organisation. It is constantly jumping between apps to do things that should happen on their own.',
        pains: [
            {
                title: 'Bookings lost or mixed up',
                body: 'Between WhatsApp, phone calls, a notebook and loose notes, one forgotten change is enough to create clashing slots, clients left waiting and time wasted.',
            },
            {
                title: 'Payments left unconfirmed',
                body: 'You know you worked hard, but at the end of the month it is still hard to tell how much came in, what is still owed or which services actually make the most profit.',
            },
            {
                title: 'Last-minute no-shows',
                body: 'A simple reminder can save an appointment. When that message depends on you remembering to send it, no-shows go up and you end up losing time and revenue.',
            },
            {
                title: 'Every client’s information is scattered',
                body: 'Notes, documents and history end up split between apps, paper and messages. Every time you need to find something, you lose time searching instead of following the client with confidence.',
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
