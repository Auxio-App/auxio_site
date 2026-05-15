import FadeSection from "./FadeSection";
import s from "./PainSection.module.css";

const pains = [
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
];

export default function PainSection() {
    return (
        <section className={s.section} id="problema">
            <div className={s.container}>

                <FadeSection>
                    <p className={s.label}>O problema</p>
                </FadeSection>

                <FadeSection delay={0.1}>
                    <h2 className={s.title}>
                        Gerir o teu negócio em várias ferramentas <br />
                        não é sustentável.
                    </h2>
                </FadeSection>

                <FadeSection delay={0.2}>
                    <p className={s.desc}>Processos dispersos criam erros, perdas e consomem o teu tempo.</p>
                </FadeSection>

                <div className={s.list}>
                    {pains.map((pain, i) => (
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
                    <p className={`${s.desc} ${s.descBold}`}>Simplifica a gestão do teu negócio</p>
                </FadeSection>

                <FadeSection delay={0.5}>
                    <div className={s.footer}>
                        <a href="#agenda" className={s.cta}>
                            Ver como o Auxio resolve isto →
                        </a>                        
                    </div>
                </FadeSection>

            </div>
        </section>
    );
}
