'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Navbar from '@/components/Navbar';
import { useLang } from '@/lib/i18n';
import s from './page.module.css';

const formEndpoint = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/formResponse';

const copy = {
  pt: {
    titleA: 'Vamos mostrar-te', titleB: 'o Auxio no ', titleEm: 'teu dia a dia.',
    intro: 'Vê como podes reunir agenda, clientes, pagamentos e as mensagens que precisas de enviar num único lugar.',
    benefits: ['Sem compromisso', 'Adaptada à tua profissão', 'Espaço para todas as tuas perguntas'],
    cardTitle: 'Agenda a tua demo', cardIntro: 'Deixa-nos os teus dados e falamos contigo para encontrar um horário.',
    name: 'Nome', profession: 'Profissão', choose: 'Seleciona', email: 'Email', message: 'Mensagem', optional: '(opcional)', placeholder: 'Tens alguma dúvida específica?',
    submit: 'Pedir demonstração', sending: 'A enviar…', note: 'Usamos estes dados apenas para te contactar sobre a demonstração.',
    successTitle: 'Pedido recebido.', successText: 'Obrigado! Entramos em contacto contigo em breve para combinar a demonstração.', back: 'Voltar ao Auxio',
    professions: [['Fisioterapeuta', 'Fisioterapeuta'], ['Psicólogo', 'Psicólogo/a'], ['Nutricionista', 'Nutricionista'], ['Esteticista', 'Esteticista'], ['Personal Trainer', 'Personal Trainer'], ['Outra', 'Outra']],
  },
  en: {
    titleA: 'Let us show you', titleB: 'Auxio in ', titleEm: 'your daily work.',
    intro: 'See how you can bring your calendar, clients, payments and the messages you need to send together in one place.',
    benefits: ['No commitment', 'Tailored to your profession', 'Time for all your questions'],
    cardTitle: 'Book your demo', cardIntro: 'Leave us your details and we will contact you to find a suitable time.',
    name: 'Name', profession: 'Profession', choose: 'Select', email: 'Email', message: 'Message', optional: '(optional)', placeholder: 'Is there anything specific you would like to see?',
    submit: 'Request a demo', sending: 'Sending…', note: 'We only use these details to contact you about the demo.',
    successTitle: 'Request received.', successText: 'Thank you! We will contact you shortly to arrange your demo.', back: 'Back to Auxio',
    professions: [['Fisioterapeuta', 'Physiotherapist'], ['Psicólogo', 'Psychologist'], ['Nutricionista', 'Nutritionist'], ['Esteticista', 'Esthetician'], ['Personal Trainer', 'Personal Trainer'], ['Outra', 'Other']],
  },
};

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { lang } = useLang();
  const t = copy[lang];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    const data = new FormData(event.currentTarget);

    await fetch(formEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'entry.1318412330': String(data.get('email')),
        'entry.1403160824': String(data.get('name')),
        'entry.1085012175': String(data.get('profession')),
      }),
    });

    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <>
      <Navbar />
      <main className={s.page}>
      <section className={s.content}>
        <div className={s.intro}>
          <h1>{t.titleA}<br />{t.titleB}<em>{t.titleEm}</em></h1>
          <p>{t.intro}</p>
          <ul className={s.benefits}>
            {t.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </div>

        <div className={s.card}>
          {submitted ? (
            <div className={s.success} role="status">
              <span className={s.successIcon}>✓</span>
              <h2>{t.successTitle}</h2>
              <p>{t.successText}</p>
              <Link href="/" className={s.back}>{t.back}</Link>
            </div>
          ) : (
            <>
              <h2>{t.cardTitle}</h2>
              <p className={s.cardIntro}>{t.cardIntro}</p>
              <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.formRow}>
                  <label>
                    {t.name} *
                    <input name="name" autoComplete="name" required />
                  </label>
                  <label>
                    {t.profession} *
                    <select name="profession" defaultValue="" required>
                      <option value="" disabled>{t.choose}</option>
                      {t.professions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                    </select>
                  </label>
                </div>
                <label>
                  {t.email} *
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  {t.message} {t.optional}
                  <textarea name="message" rows={4} placeholder={t.placeholder} />
                </label>
                <button type="submit" disabled={submitting}>
                  {submitting ? t.sending : t.submit}
                  <span aria-hidden="true">→</span>
                </button>
              </form>
              <p className={s.note}>{t.note}</p>
            </>
          )}
        </div>
      </section>
      </main>
    </>
  );
}
