import type { Translation } from '@/lib/translations';

interface FooterProps {
  t: Translation;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-as-ink text-as-gray-500 px-[6%] py-10 text-center">
      <p className="text-sm mb-2">{t.footer.copyright}</p>
      <p className="text-sm mb-4">
        <a
          href="https://instagram.com/asmae-hajji"
          target="_blank"
          rel="noopener noreferrer"
          className="text-as-gold hover:underline"
        >
          {t.footer.instagram}
        </a>
      </p>
      <p className="text-xs leading-relaxed max-w-[720px] mx-auto">{t.footer.disclaimer}</p>
    </footer>
  );
}
