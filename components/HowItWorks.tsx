import FadeSection from './FadeSection';
import s from './HowItWorks.module.css';

const steps = [
  { num: '1', title: 'Crias a tua conta', desc: 'Registo em 3 passos. Defines os teus serviços, horários e preços.' },
  { num: '2', title: 'Adicionas os clientes', desc: 'Adicionas os teus clientes manualmente em minutos. Nome, contacto, notas e preferências — tudo num só sítio.' },
  { num: '3', title: 'O Auxio trata do resto', desc: 'Confirmações, lembretes, recibos e alertas — tudo automático, no WhatsApp.' },
  { num: '4', title: 'Recuperas o teu tempo', desc: '6 horas por semana de volta. Focas-te nos clientes, não na gestão.' },
];

export default function HowItWorks() {
  return (
    <section className={s.section} id="como-funciona">
      <div className={s.container}>
        <FadeSection><div className={s.label}>Como funciona</div></FadeSection>
        <FadeSection delay={0.1}><h2 className={s.title}>Do registo ao primeiro cliente<br />em menos de 10 minutos.</h2></FadeSection>
        <div className={s.steps}>
          {steps.map((step, i) => (
            <FadeSection key={i} delay={i * 0.1 + 0.1}>
              <div className={s.step}>
                <div className={s.num}>{step.num}</div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
