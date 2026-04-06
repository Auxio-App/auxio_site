import FadeSection from './FadeSection';
import s from './Pillars.module.css';

const pillars = [
  { emoji: '🤝', title: 'Confiança', desc: 'Os dados dos teus clientes são tratados com máxima responsabilidade. Dados sempre na Europa, RGPD desde o primeiro dia.' },
  { emoji: '✨', title: 'Simplicidade', desc: 'O profissional já tem a vida complicada. Menos cliques, menos dúvidas, mais tempo. Sem formação técnica necessária.' },
  { emoji: '🧠', title: 'Inteligência', desc: 'O Auxio automatiza o trabalho repetitivo — lembretes, recibos, alertas de pagamento — para que não tenhas de pensar nisso.' },
  { emoji: '🚀', title: 'Autonomia', desc: 'Exportação de dados fácil, sem lock-in, configuração flexível. O produto serve-te — não o contrário.' },
];

export default function Pillars() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <FadeSection><div className={s.label}>Os nossos valores</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>Construído com um propósito.</h2></FadeSection>
        <FadeSection delay={0.2}><p className={s.desc}>O Auxio foi desenhado para o profissional ibérico — dados na EU, RGPD cumprido e sem lock-in.</p></FadeSection>
        <div className={s.grid}>
          {pillars.map((p, i) => (
            <FadeSection key={i} delay={i * 0.1 + 0.1}>
              <div className={s.card}>
                <span className={s.emoji}>{p.emoji}</span>
                <h3 className={s.cardTitle}>{p.title}</h3>
                <p className={s.cardDesc}>{p.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
