import Image from 'next/image';
import type { Translation, Lang } from '@/lib/translations';

interface PreuveSocialeProps {
  t: Translation;
}

const scoreboardLabel: Record<Lang, string> = {
  fr: 'CLASSEMENT DE PERFORMANCE',
  en: 'PERFORMANCE RANKING',
  es: 'CLASIFICACIÓN DE RENDIMIENTO',
};

const scoreboardAlt: Record<Lang, string> = {
  fr: 'Classement de performance',
  en: 'Performance ranking',
  es: 'Clasificación de rendimiento',
};

export default function PreuveSociale({ t }: PreuveSocialeProps) {
  return (
    <section className="bg-as-cream pt-20 sm:pt-28 pb-10 sm:pb-12 px-[6%]">
      <div className="max-w-[1000px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-3">
          {t.preuve.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-ink mb-6">
          {t.preuve.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <p className="font-body text-sm sm:text-base text-as-gray-700 leading-relaxed max-w-[700px] mb-8"
          dangerouslySetInnerHTML={{ __html: t.preuve.text }}
        />

        <div className="border border-as-gray-200 overflow-hidden rounded-lg bg-white">
          <div className="bg-as-cream-warm px-4 py-3 border-b border-as-gray-200 font-body text-xs tracking-as-wider text-as-gray-500">
            {scoreboardLabel[t.lang]}
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/scoreboard.png"
              alt={scoreboardAlt[t.lang]}
              width={1478}
              height={643}
              className="w-full h-auto"
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>

        <p className="text-xs text-as-gray-500 italic mt-3 pl-1">{t.preuve.caption}</p>
      </div>
    </section>
  );
}
