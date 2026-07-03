import HomePage from '../components/HomePage';
import { getTranslation } from '@/lib/translations';
import type { Metadata } from 'next';

const t = getTranslation('es');
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://asmaehajji.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: t.meta.title,
  description: t.meta.description,
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: `${SITE_URL}/es`,
    siteName: "Asmae Hajji",
    locale: 'es_US',
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      fr: `${SITE_URL}/fr`,
      en: `${SITE_URL}/en`,
    },
  },
};

export default function SpanishPage() {
  return <HomePage t={t} lang="es" />;
}
