'use client';

import Link from 'next/link';
import type { Translation, Lang } from '@/lib/translations';

interface NavbarProps {
  t: Translation;
  lang: Lang;
}

export default function Navbar({ t, lang }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-as-cream/94 backdrop-blur-md border-b border-as-gray-200 py-4 px-[6%] flex items-center justify-between gap-4">
      <Link href={`/${lang}`} className="font-display text-xl sm:text-2xl tracking-as-wide text-as-ink no-underline whitespace-nowrap">
        ASMAE <span className="text-as-emerald">HAJJI</span>
      </Link>

      <div className="flex items-center gap-4 ml-auto">
        <div className="flex items-center gap-2 font-body text-xs sm:text-sm tracking-as-wide text-as-gray-500 whitespace-nowrap">
          <Link
            href="/fr"
            className={`px-2 py-1 rounded transition-colors ${lang === 'fr' ? 'bg-as-emerald text-white' : 'hover:text-as-emerald'}`}
          >
            {t.nav.fr}
          </Link>
          <span>|</span>
          <Link
            href="/en"
            className={`px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-as-emerald text-white' : 'hover:text-as-emerald'}`}
          >
            {t.nav.en}
          </Link>
        </div>

        <a
          href="#cta"
          className="hidden sm:inline-flex btn-as text-xs sm:text-sm py-3 px-5"
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}
