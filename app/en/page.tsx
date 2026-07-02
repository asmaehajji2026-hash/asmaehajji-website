import HomePage from '../components/HomePage';
import { getTranslation } from '@/lib/translations';
import type { Metadata } from 'next';

const t = getTranslation('en');
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://asmaehajji.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: t.meta.title,
  description: t.meta.description,
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: `${SITE_URL}/en`,
    siteName: "Asmae Hajji",
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      fr: `${SITE_URL}/fr`,
    },
  },
};

export default function EnglishPage() {
  return <HomePage t={t} lang="en" />;
}
