import type { Translation } from '@/lib/translations';

interface FitCheckProps {
  t: Translation;
}

export default function FitCheck({ t }: FitCheckProps) {
  return (
    <section className="bg-as-plum py-20 sm:py-28 px-[6%]" id="fit">
      <div className="max-w-[1000px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-gold mb-3">
          {t.fit.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-cream mb-10">
          {t.fit.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl p-7 sm:p-8 shadow-lg border-t-[5px] border-as-gold">
            <h3 className="font-display text-lg sm:text-xl tracking-as-wide text-as-gold mb-5">
              {t.fit.yesTitle}
            </h3>
            <ul className="space-y-0">
              {t.fit.yes.map((item, i) => (
                <li
                  key={i}
                  className="py-3 border-b border-as-gray-100 last:border-0 text-sm sm:text-base text-as-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </div>

          <div className="bg-as-ink rounded-xl p-7 sm:p-8 border-t-[5px] border-as-gray-500">
            <h3 className="font-display text-lg sm:text-xl tracking-as-wide text-as-gray-500 mb-5">
              {t.fit.noTitle}
            </h3>
            <ul className="space-y-0">
              {t.fit.no.map((item, i) => (
                <li
                  key={i}
                  className="py-3 border-b border-white/10 last:border-0 text-sm sm:text-base text-as-gray-500 leading-relaxed relative pl-6"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
