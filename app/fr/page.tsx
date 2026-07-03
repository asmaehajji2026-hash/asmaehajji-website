import HomePage from '../components/HomePage';
import { getTranslation } from '@/lib/translations';
import type { Metadata } from 'next';

const t = getTranslation('fr');
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://asmaehajji.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: t.meta.title,
  description: t.meta.description,
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: `${SITE_URL}/fr`,
    siteName: "Asmae Hajji",
    locale: 'fr_US',
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/fr`,
    languages: {
      en: `${SITE_URL}/en`,
      es: `${SITE_URL}/es`,
    },
  },
};

export default function FrenchPage() {
  return <HomePage t={t} lang="fr" />;
}
