import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Auxio - O co-piloto do profissional moderno',
  description: 'Agenda, clientes, financeiro e comunicação - tudo num só lugar. O Auxio elimina o trabalho manual para que te possas focar nos teus clientes.',
  keywords: 'gestão, agenda, profissionais, fisioterapia, psicologia, CRM, faturação, WhatsApp',
  openGraph: {
    title: 'Auxio - O co-piloto do profissional moderno',
    description: 'Recupera 5 horas por semana. Zero faltas. Zero trabalho manual.',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
