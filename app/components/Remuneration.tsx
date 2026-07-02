import type { Translation } from '@/lib/translations';

interface RemunerationProps {
  t: Translation;
}

export default function Remuneration({ t }: RemunerationProps) {
  return (
    <section className="bg-as-cream-warm py-20 sm:py-28 px-[6%]" id="potentiel">
      <div className="max-w-[1000px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-3">
          {t.remuneration.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-ink mb-6">
          {t.remuneration.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <p className="font-body text-sm sm:text-base text-as-gray-700 leading-relaxed max-w-[700px] mb-8"
          dangerouslySetInnerHTML={{ __html: t.remuneration.intro }}
        />

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {t.remuneration.levers.map((lever, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-as-gold"
            >
              <div className="font-body text-xs tracking-as-wider text-as-gray-500 mb-2">{lever.label}</div>
              <div className="font-display text-base sm:text-lg text-as-ink mb-3 tracking-wide">{lever.title}</div>
              <p className="font-body text-sm text-as-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: lever.text }}
              />
            </div>
          ))}
        </div>

        <div className="border border-as-emerald/30 bg-as-emerald-pale rounded-lg p-6 text-center">
          <p className="font-body text-xs tracking-as-wider text-as-gray-500 mb-3">{t.lang === 'fr' ? 'COMBINAISON DES 3 LEVIERS' : 'COMBINING THE 3 LEVERS'}</p>
          <div className="font-display text-3xl sm:text-4xl text-as-emerald mb-3">3 levers</div>
          <p className="font-body text-sm sm:text-base text-as-gray-700 leading-relaxed max-w-[700px] mx-auto"
            dangerouslySetInnerHTML={{ __html: t.remuneration.disclaimer }}
          />
        </div>

        <p className="text-xs sm:text-sm text-as-gray-500 italic mt-3 pl-1">{t.remuneration.figCaption}</p>
      </div>
    </section>
  );
}
