import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Asmae Hajji — Protection, Retirement & Wealth';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F7F2E8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 64,
        }}
      >
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 80,
            color: '#0F5C4A',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          ASMAE HAJJI
        </div>
        <div
          style={{
            fontFamily: 'Helvetica Neue, sans-serif',
            fontSize: 32,
            color: '#555555',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Protection · Retirement · Wealth
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            width: 120,
            height: 6,
            background: '#D4A24C',
            borderRadius: 3,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
