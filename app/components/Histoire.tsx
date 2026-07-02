import type { Translation } from '@/lib/translations';

interface HistoireProps {
  t: Translation;
}

export default function Histoire({ t }: HistoireProps) {
  return (
    <section className="bg-as-cream-warm py-20 sm:py-28 px-[6%]" id="mon-histoire">
      <div className="max-w-[780px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-3">
          {t.histoire.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-ink mb-10">
          {t.histoire.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <div className="space-y-5 font-body text-base sm:text-lg text-as-gray-700 leading-relaxed">
          {t.histoire.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        <a href="#cta" className="btn-as mt-8 inline-flex">
          {t.histoire.cta}
        </a>
      </div>
    </section>
  );
}
