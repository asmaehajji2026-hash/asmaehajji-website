import dynamic from 'next/dynamic';
import type { Translation } from '@/lib/translations';

const CalendlyEmbed = dynamic(() => import('./CalendlyEmbed'), { ssr: false });

interface FinalCTAProps {
  t: Translation;
}

export default function FinalCTA({ t }: FinalCTAProps) {
  return (
    <section className="bg-as-gold py-20 sm:py-28 px-[6%] text-center" id="cta">
      <div className="max-w-[700px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-ink/70 mb-3">
          {t.finalCta.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-ink mb-5">
          {t.finalCta.title}
          <span className="block w-14 h-1 bg-as-ink mt-4 mx-auto" />
        </h2>

        <p className="font-body text-base sm:text-lg text-as-ink/90 leading-relaxed mb-8">{t.finalCta.text}</p>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
          <CalendlyEmbed url="https://calendly.com/asmaehajji2026/30min" />
        </div>
        <p className="text-sm text-as-ink/70 mt-6">{t.finalCta.ctaSub}</p>
      </div>
    </section>
  );
}
