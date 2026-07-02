import type { Translation } from '@/lib/translations';

interface CitationProps {
  t: Translation;
}

export default function Citation({ t }: CitationProps) {
  return (
    <section className="bg-as-emerald py-16 sm:py-20 px-[6%] text-center">
      <div className="max-w-[700px] mx-auto">
        <div className="font-body text-xs tracking-as-wider text-as-gold/80 mb-4">
          {t.citation.label}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
          {t.citation.quote}
        </h2>
      </div>
    </section>
  );
}
