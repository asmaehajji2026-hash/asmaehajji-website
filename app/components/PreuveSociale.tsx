import type { Translation } from '@/lib/translations';

interface PreuveSocialeProps {
  t: Translation;
}

export default function PreuveSociale({ t }: PreuveSocialeProps) {
  return (
    <section className="bg-as-cream py-20 sm:py-28 px-[6%]">
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

        <div className="border border-as-gray-200 overflow-hidden rounded-lg">
          <div className="bg-as-cream-warm px-4 py-3 border-b border-as-gray-200 font-body text-xs tracking-as-wider text-as-gray-500">
            {t.lang === 'fr' ? 'CLASSEMENT DE PERFORMANCE — DONNÉES À VENIR' : 'PERFORMANCE RANKING — DATA TO COME'}
          </div>
          <div className="bg-white p-12 text-center">
            <p className="font-body text-sm text-as-gray-500 italic">{t.preuve.placeholder}</p>
          </div>
        </div>

        <p className="text-xs text-as-gray-500 italic mt-3 pl-1">{t.preuve.caption}</p>
      </div>
    </section>
  );
}
