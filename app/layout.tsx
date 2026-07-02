import { Playfair_Display, Montserrat, Great_Vibes } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-greatvibes',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://asmaehajji.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Asmae Hajji · Naya\'s Wealth — Protection, Retraite & Richesse',
  description:
    'Asmae Hajji aide les femmes et les familles à bâtir protection, sécurité de retraite et richesse durable. Basée en Floride, États-Unis.',
  keywords: [
    'Asmae Hajji',
    "Naya's Wealth",
    'financial services',
    'life insurance',
    'retirement planning',
    'health insurance',
    'financial education',
    'Florida',
  ],
  authors: [{ name: 'Asmae Hajji' }],
  creator: 'Asmae Hajji',
  publisher: 'Asmae Hajji',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Asmae Hajji · Naya\'s Wealth',
    description:
      'Protection, retraite et richesse pour les femmes et les familles.',
    url: SITE_URL,
    siteName: "Naya's Wealth",
    locale: 'fr_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Asmae Hajji — Naya\'s Wealth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asmae Hajji · Naya\'s Wealth',
    description: 'Protection, retraite et richesse pour les femmes et les familles.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport = {
  themeColor: '#F7F2E8',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
