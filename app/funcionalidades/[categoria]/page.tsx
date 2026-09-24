'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { featureCatalog } from '@/lib/features';
import { useLang } from '@/lib/i18n';
import s from './page.module.css';

export default function FeaturePage() {
  const { lang } = useLang();
  const params = useParams<{ categoria: string }>();
  const feature = featureCatalog[lang].find((item) => item.slug === params.categoria);

  if (!feature) notFound();

  return (
    <>
      <Navbar />
      <main className={s.page}>
        <section className={s.content}>
          <p className={s.eyebrow}>{feature.eyebrow}</p>
          <h1>{feature.title}</h1>
          <p className={s.intro}>{feature.intro}</p>
          {feature.sections ? (
            <div className={s.sections}>
              {feature.sections.map((section) => (
                <article key={section.title} className={s.sectionCard}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </article>
              ))}
              {feature.notice && (
                <article className={s.sectionCard}>
                  <h2>{feature.notice.title}</h2>
                  <p>{feature.notice.text}</p>
                </article>
              )}
            </div>
          ) : (
            <ul className={s.points}>
              {feature.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          )}
          <div className={s.actions}>
            <Link href="/demo" className={s.cta}>{lang === 'pt' ? 'Agendar demo' : 'Book a demo'}</Link>
            <Link href="/" className={s.back}>{lang === 'pt' ? 'Voltar ao início' : 'Back to home'}</Link>
          </div>
        </section>
      </main>
    </>
  );
}
