import type { Translation } from '@/lib/translations';

interface PrecloseProps {
  t: Translation;
}

export default function Preclose({ t }: PrecloseProps) {
  return (
    <section className="bg-as-cream py-20 sm:py-28 px-[6%]">
      <div className="max-w-[660px] mx-auto text-center">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-3">
          {t.preclose.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-as-ink mb-6">
          {t.preclose.title}
          <span className="block w-14 h-1 bg-as-gold mt-4 mx-auto" />
        </h2>

        <p className="font-body text-base sm:text-lg text-as-gray-700 leading-relaxed mb-8">{t.preclose.text}</p>

        <blockquote className="font-display text-xl sm:text-2xl text-as-emerald leading-tight mb-8">
          {t.preclose.quote}
        </blockquote>

        <a href="#cta" className="btn-as inline-flex">
          {t.preclose.cta}
        </a>
      </div>
    </section>
  );
}
