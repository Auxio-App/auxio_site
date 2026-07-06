'use client';

import Image from 'next/image';
import { useLang } from '@/lib/i18n';
import s from './Footer.module.css';

const copy = {
  pt: {
    tagline: 'O co-piloto do profissional moderno · Portugal',
    rights: '© 2026 Auxio · Todos os direitos reservados',
  },
  en: {
    tagline: 'The modern professional’s co-pilot · Portugal',
    rights: '© 2026 Auxio · All rights reserved',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <footer className={s.footer}>
      <div className={s.logo}>
        <Image src="/Logo4.png" alt="Auxio" width={30} height={30} />
        Auxio
      </div>
      <div className={s.text}>{t.tagline}</div>
      <div className={s.text}>{t.rights}</div>
    </footer>
  );
}
