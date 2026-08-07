import type { Metadata } from 'next';
import { LangProvider } from '@/lib/i18n';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://auxio.pt'),
  applicationName: 'Auxio',
  title: 'Auxio - O co-piloto do profissional moderno',
  description: 'Agenda, clientes, financeiro e comunicação - tudo num só lugar. O Auxio elimina o trabalho manual para que te possas focar nos teus clientes.',
  keywords: 'gestão, agenda, profissionais, fisioterapia, psicologia, CRM, faturação, WhatsApp',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Auxio - O co-piloto do profissional moderno',
    description: 'Recupera horas todas as semanas. Zero faltas. Zero trabalho manual.',
    url: 'https://auxio.pt',
    siteName: 'Auxio',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* ponytail: só Manrope, para o h1 do Hero. As restantes secções pedem
            'Plus Jakarta Sans'/'Inter' e caem de propósito no sans-serif do
            sistema — acrescenta as famílias aqui para as ativar. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Auxio',
              url: 'https://auxio.pt',
            }),
          }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
