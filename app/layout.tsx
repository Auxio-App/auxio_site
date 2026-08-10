import type { Metadata } from 'next';
import { LangProvider } from '@/lib/i18n';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://auxio.pt'),
  applicationName: 'Auxio',
  title: 'Auxio - Agenda e gestão de clientes para profissionais',
  description: 'Software de marcações para fisioterapeutas, psicólogos, esteticistas e outros profissionais. Agenda, lembretes automáticos, ficha de cliente e pagamentos num só painel. 7 dias grátis.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Auxio - Agenda e gestão de clientes para profissionais',
    description: 'Marcações, lembretes automáticos, histórico de clientes e pagamentos num só painel. Recupera horas todas as semanas.',
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
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Auxio',
                url: 'https://auxio.pt',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'Auxio',
                url: 'https://auxio.pt',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web, iOS, Android',
                inLanguage: 'pt-PT',
                // ponytail: só o plano que está mesmo à venda. Pro e Team
                // estão "Em breve" — acrescenta-os aqui quando lançarem.
                offers: {
                  '@type': 'Offer',
                  price: '15',
                  priceCurrency: 'EUR',
                  category: 'subscription',
                  url: 'https://auxio.pt/#precos',
                },
              },
            ]),
          }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
