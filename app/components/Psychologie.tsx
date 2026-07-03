import type { Translation } from '@/lib/translations';

interface PsychologieProps {
  t: Translation;
}

export default function Psychologie({ t }: PsychologieProps) {
  return (
    <section className="bg-as-cream-warm py-20 sm:py-28 px-[6%]">
      <div className="max-w-[1000px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-3">
          {t.psychologie.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-ink mb-10">
          {t.psychologie.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <div className="max-w-[720px] mx-auto">
          <svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            {/** 80% emerald, 20% gray donut */}
            <path d="M130,28 A78,78 0 1,1 55.8,81.9 L77.2,84.1 A52,52 0 1,0 130,54 Z" fill="#0F5C4A"/>
            <path d="M55.8,81.9 A78,78 0 0,1 130,28 L130,54 A52,52 0 0,0 77.2,84.1 Z" fill="#E6E0D6"/>
            <circle cx="130" cy="106" r="46" fill="#F1EFE8"/>
            <text x="130" y="99" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="26" fill="#0F5C4A" letterSpacing="1">{t.psychologie.donut.center}</text>
            <text x="130" y="116" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9.5" fill="#555555">{t.psychologie.donut.psychology}</text>

            <rect x="248" y="60" width="14" height="14" rx="2" fill="#0F5C4A"/>
            <text x="268" y="72" fontFamily="var(--font-montserrat), sans-serif" fontSize="12" fill="#555555">{t.psychologie.donut.psychologyLegend}</text>
            <rect x="248" y="84" width="14" height="14" rx="2" fill="#E6E0D6"/>
            <text x="268" y="96" fontFamily="var(--font-montserrat), sans-serif" fontSize="12" fill="#8A7F73">{t.psychologie.donut.strategyLegend}</text>

            <rect x="242" y="120" width="466" height="90" rx="3" fill="#E6F0ED" stroke="rgba(15,92,74,0.3)" strokeWidth="1"/>
            <text x="260" y="145" fontFamily="var(--font-montserrat), sans-serif" fontSize="12" fill="#555555" fontStyle="italic">"{t.psychologie.quote}"</text>
            <text x="260" y="195" fontFamily="var(--font-playfair), Georgia, serif" fontSize="11" fill="#0F5C4A" letterSpacing="1">— ASMAE HAJJI</text>
          </svg>
        </div>

        <div className="max-w-[660px] mx-auto mt-7 border-l-4 border-as-gold bg-as-cream rounded-r-lg p-6">
          <div className="font-body text-xs tracking-as-wider text-as-emerald mb-2">{t.psychologie.calloutLabel}</div>
          <p className="font-body text-base text-as-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.psychologie.callout }}
          />
        </div>
      </div>
    </section>
  );
}
