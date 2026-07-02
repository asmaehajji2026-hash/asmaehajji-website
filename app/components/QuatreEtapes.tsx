import type { Translation } from '@/lib/translations';

interface QuatreEtapesProps {
  t: Translation;
}

export default function QuatreEtapes({ t }: QuatreEtapesProps) {
  return (
    <section className="bg-as-cream-warm py-20 sm:py-28 px-[6%]">
      <div className="max-w-[1000px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-3">
          {t.etapes.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-ink mb-10">
          {t.etapes.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <div className="w-full overflow-hidden">
          <svg viewBox="0 0 860 180" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <defs>
              <marker id="arrE2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="#0F5C4A"/>
              </marker>
            </defs>

            {t.etapes.steps.map((step, i) => {
              const x = 10 + i * 218;
              const isLast = i === 3;
              return (
                <g key={step.num}>
                  <text x={x + 95} y="22" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill="#8A7F73" letterSpacing="2">{step.phase}</text>
                  <rect x={x} y="32" width="190" height="100" rx="3" fill={isLast ? '#0F5C4A' : i === 2 ? '#E6F0ED' : '#F1EFE8'} stroke={isLast ? '#0F5C4A' : i === 2 ? 'rgba(15,92,74,0.3)' : '#E6E0D6'} strokeWidth="1.5"/>
                  <text x={x + 95} y="68" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="36" fill={isLast ? 'rgba(255,255,255,0.25)' : i === 2 ? 'rgba(15,92,74,0.25)' : '#E6E0D6'} letterSpacing="2">{step.num}</text>
                  <text x={x + 95} y="92" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="13" fill={isLast ? '#fff' : '#555555'} letterSpacing="2">{step.label}</text>
                  <text x={x + 95} y="109" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="13" fill={isLast ? '#fff' : '#555555'} letterSpacing="2">{step.sub}</text>
                  <text x={x + 95} y="164" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill={isLast ? '#0F5C4A' : i === 2 ? '#555555' : '#8A7F73'} fontWeight={isLast ? '700' : '400'}>{t.etapes.bottomLabels[i]}</text>

                  {!isLast && (
                    <line x1={x + 190} y1="82" x2={x + 214} y2="82" stroke="#0F5C4A" strokeWidth="2" markerEnd="url(#arrE2)"/>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
        <p className="text-xs sm:text-sm text-as-gray-500 italic mt-3 pl-1">{t.etapes.figCaption}</p>
      </div>
    </section>
  );
}
