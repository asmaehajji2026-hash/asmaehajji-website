import type { Translation } from '@/lib/translations';

interface DifferenciationProps {
  t: Translation;
}

export default function Differenciation({ t }: DifferenciationProps) {
  return (
    <section className="bg-as-cream py-20 sm:py-28 px-[6%]">
      <div className="max-w-[1000px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-3">
          {t.diff.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-ink mb-10">
          {t.diff.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <div className="w-full overflow-hidden">
          <svg viewBox="0 0 860 295" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <text x="215" y="24" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="11" fill="#8A7F73" letterSpacing="3">{t.diff.leftTitle.toUpperCase()}</text>
            <rect x="20" y="34" width="390" height="248" rx="3" fill="#F1EFE8" stroke="#E6E0D6" strokeWidth="1.5"/>

            {t.diff.left.map((item, i) => (
              <text
                key={i}
                x="48"
                y={68 + i * 29}
                fontFamily="var(--font-montserrat), sans-serif"
                fontSize="11"
                fill="#8A7F73"
              >
                ✗  {item}
              </text>
            ))}

            <line x1="430" y1="20" x2="430" y2="282" stroke="#E6E0D6" strokeWidth="1" strokeDasharray="5 4"/>

            <text x="645" y="24" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="11" fill="#0F5C4A" letterSpacing="3">{t.diff.rightTitle.toUpperCase()}</text>
            <rect x="450" y="34" width="390" height="248" rx="3" fill="#E6F0ED" stroke="rgba(15,92,74,0.35)" strokeWidth="1.5"/>

            {t.diff.right.map((item, i) => (
              <text
                key={i}
                x="478"
                y={68 + i * 29}
                fontFamily="var(--font-montserrat), sans-serif"
                fontSize="11"
                fill="#555555"
              >
                <tspan fontWeight="700" fill="#0F5C4A">✓  </tspan>
                {item}
              </text>
            ))}
          </svg>
        </div>
        <p className="text-xs sm:text-sm text-as-gray-500 italic mt-3 pl-1"
          dangerouslySetInnerHTML={{ __html: t.diff.figCaption }}
        />
      </div>
    </section>
  );
}
