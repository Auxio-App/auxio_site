import Image from 'next/image';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.logo}>
        <Image src="/Logo4.png" alt="Auxio" width={30} height={30} />
        Auxio
      </div>
      <div className={s.text}>O co-piloto do profissional moderno · Portugal</div>
      <div className={s.text}>© 2026 Auxio · Todos os direitos reservados</div>
    </footer>
  );
}