'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Navbar from '@/components/Navbar';
import s from './page.module.css';

const formEndpoint = 'https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/formResponse';

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
          <h1>Vamos mostrar-te<br />o Auxio no <em>teu dia a dia.</em></h1>
          <p>Vê como podes reunir agenda, clientes, pagamentos e as mensagens que precisas de enviar num único lugar.</p>
          <ul className={s.benefits}>
            <li>Sem compromisso</li>
            <li>Adaptada à tua profissão</li>
            <li>Espaço para todas as tuas perguntas</li>
          </ul>
        </div>

        <div className={s.card}>
          {submitted ? (
            <div className={s.success} role="status">
              <span className={s.successIcon}>✓</span>
              <h2>Pedido recebido.</h2>
              <p>Obrigado! Entramos em contacto contigo em breve para combinar a demonstração.</p>
              <Link href="/" className={s.back}>Voltar ao Auxio</Link>
            </div>
          ) : (
            <>
              <h2>Agenda a tua demo</h2>
              <p className={s.cardIntro}>Deixa-nos os teus dados e falamos contigo para encontrar um horário.</p>
              <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.formRow}>
                  <label>
                    Nome *
                    <input name="name" autoComplete="name" required />
                  </label>
                  <label>
                    Profissão *
                    <select name="profession" defaultValue="" required>
                      <option value="" disabled>Seleciona</option>
                      <option>Fisioterapeuta</option>
                      <option>Psicólogo/a</option>
                      <option>Nutricionista</option>
                      <option>Esteticista</option>
                      <option>Personal Trainer</option>
                      <option>Outra</option>
                    </select>
                  </label>
                </div>
                <label>
                  Email *
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  Mensagem (opcional)
                  <textarea name="message" rows={4} placeholder="Tens alguma dúvida específica?" />
                </label>
                <button type="submit" disabled={submitting}>
                  {submitting ? 'A enviar…' : 'Pedir demonstração'}
                  <span aria-hidden="true">→</span>
                </button>
              </form>
              <p className={s.note}>Usamos estes dados apenas para te contactar sobre a demonstração.</p>
            </>
          )}
        </div>
      </section>
      </main>
    </>
  );
}
