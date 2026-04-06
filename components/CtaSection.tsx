import FadeSection from './FadeSection';
import s from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={s.section} id="lista-espera">
      <div className={s.container}>
        
        <FadeSection delay={0.1}>
          <h2 className={s.title}>Sê dos primeiros a usar.<br /><em>Garante um desconto nos primeiros 3 meses.</em></h2>
        </FadeSection>
        <FadeSection delay={0.2}>
          <p className={s.desc}>Subscreve já e recebe acesso antecipado antes do lançamento oficial. Os primeiros 15 profissionais tem um desconto nos primeiros 3 meses da mensalidade.</p>
        </FadeSection>
        <FadeSection delay={0.3}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className={s.btn}
          >
            Subscrever →
          </a>
          <p className={s.sub}>Sem spam. Só avisamos quando estiver pronto.</p>
        </FadeSection>
      </div>
    </section>
  );
}
