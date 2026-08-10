import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Auxio - agenda e gestão de clientes para profissionais';

// ponytail: gerado no build a partir do mesmo icon.png do favicon, para o logo
// nunca dessincronizar. Se quiseres arte à mão, troca por app/opengraph-image.png.
export default async function Image() {
  const logo = `data:image/png;base64,${readFileSync(
    join(process.cwd(), 'app/icon.png'),
  ).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#FBF7F4',
          padding: '80px 90px',
          borderBottom: '18px solid #6F8B57',
        }}
      >
        <img src={logo} width={96} height={96} alt="" />
        <div
          style={{
            marginTop: 44,
            fontSize: 68,
            fontWeight: 700,
            color: '#1E140E',
            lineHeight: 1.15,
            letterSpacing: -1.5,
            maxWidth: 900,
          }}
        >
          Agenda e gestão de clientes para profissionais
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: '#5C3820' }}>
          Marcações, lembretes automáticos e pagamentos num só painel.
        </div>
      </div>
    ),
    size,
  );
}
