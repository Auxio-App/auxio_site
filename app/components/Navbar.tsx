'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from '@/Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <Link href="/" className={s.logo}>
        <Image src="/Logo.png" alt="uxio" className={s.logoImg} width={32} height={32} />
        uxio
      </Link>
      <ul className={s.links}>
        <li><Link href="#agenda">Funcionalidades</Link></li>
        <li><Link href="#como-funciona">Como funciona</Link></li>
        <li><Link href="#precos">Preços</Link></li>
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCQNvgasJSJtWFz54YjiOV_RH_8MKhdnkwBE66JmBjGsfpaw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className={s.btn}
          >
            Subscrever →
          </a>
      </ul>
    </nav>
  );
}
