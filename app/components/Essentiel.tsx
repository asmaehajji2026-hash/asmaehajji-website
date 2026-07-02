import type { Translation } from '@/lib/translations';

interface EssentielProps {
  t: Translation;
}

export default function Essentiel({ t }: EssentielProps) {
  return (
    <section className="bg-as-plum py-20 sm:py-28 px-[6%]" id="essentiel">
      <div className="max-w-[980px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-gold mb-3">
          {t.essentiel.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-cream mb-10">
          {t.essentiel.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {t.essentiel.cards.map((card) => (
            <div
              key={card.num}
              className="bg-as-ink border-t-[5px] border-as-gold p-7 sm:p-8"
            >
              <div className="font-display text-4xl sm:text-5xl text-as-gray-500/40 leading-none mb-4">
                {card.num}
              </div>
              <div className="font-body text-sm sm:text-base tracking-as-wide text-as-cream mb-3">
                {card.label}
              </div>
              <p className="font-body text-sm sm:text-base text-as-gray-500 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: card.text }}
              />
            </div>
          ))}
        </div>

        <a href="#cta" className="btn-as-gold">
          {t.essentiel.cta}
        </a>
        <p className="text-sm text-as-gray-500 mt-4">{t.essentiel.ctaSub}</p>
      </div>
    </section>
  );
}
