'use client';// ← diz ao Next.js que este componente corre no browser
             // necessário sempre que usamos hooks (useState, useEffect, etc.)

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './Navbar.module.css';    // CSS Modules: s.nav → nome único gerado
                                        // evita colisões de classe em toda a app

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);      // estado para controlar se a navbar está "scrolled" ou não
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);  // se o scroll vertical for maior que 10px, consideramos "scrolled"
    window.addEventListener('scroll', fn);              // adiciona o listener de scroll
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>  {/* aplica a classe "scrolled" se o estado scrolled for true */}
      <Link href="/" className={s.logo}>
        <Image src="/Logo4.png" alt="Auxio" className={s.logoImg} width={32} height={32} />
        Auxio
      </Link>
      <ul className={s.links}>
        <li><Link href="#agenda">Funcionalidades</Link></li>
        <li><Link href="#como-funciona">Como funciona</Link></li>
        <li><Link href="#precos">Preços</Link></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className={s.cta}>Subscrever</a></li>
      </ul>
    </nav>
  );
}
