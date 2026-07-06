'use client';

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./PainSection.module.css";

const copy = {
    pt: {
        label: 'O problema',
        title: <>Gerir o teu negócio em várias ferramentas <br />não é sustentável.</>,
        desc: 'Processos dispersos criam erros, perdas e consomem o teu tempo.',
        pains: [
            {
                title: 'Confirmações feitas manualmente',
                body: 'Responde a cada mensagem. Confirma, cancela e reagenda individualmente.',
                conclusion: 'Quando não respondes a tempo, a marcação perde-se.',
            },
            {
                title: 'Falta de controlo financeiro',
                body: 'Registos incompletos ou inexistentes.',
                conclusion: 'Sem visibilidade clara sobre receitas, dívidas e desempenho.',
            },
            {
                title: 'Faltas sem aviso prévio',
                body: 'Clientes que não comparecem.',
                conclusion: 'Tempo perdido e receita que não chega a entrar.',
            },
            {
                title: 'Informação de clientes dispersa',
                body: 'Sem histórico centralizado. Sem contexto entre marcações.',
                conclusion: 'Dificuldade em acompanhar cada cliente com consistência.',
            },
        ],
        bold: 'Simplifica a gestão do teu negócio',
        cta: 'Ver como o Auxio resolve isto →',
    },
    en: {
        label: 'The problem',
        title: <>Running your business across several tools <br />is not sustainable.</>,
        desc: 'Scattered processes create errors, losses and eat up your time.',
        pains: [
            {
                title: 'Confirmations done by hand',
                body: 'You reply to every message. You confirm, cancel and reschedule one by one.',
                conclusion: 'When you don’t answer in time, the booking is lost.',
            },
            {
                title: 'No financial control',
                body: 'Incomplete records — or none at all.',
                conclusion: 'No clear visibility over revenue, debts and performance.',
            },
            {
                title: 'No-shows without warning',
                body: 'Clients who simply don’t turn up.',
                conclusion: 'Wasted time and revenue that never comes in.',
            },
            {
                title: 'Client information all over the place',
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
                                <span className={s.num}>0{i + 1}</span>
                                <div className={s.itemBody}>
                                    <p className={s.itemTitle}>{pain.title}</p>
                                    <p className={s.itemText}>{pain.body}</p>
                                    <p className={s.itemText}>{pain.conclusion}</p>
                                </div>
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
