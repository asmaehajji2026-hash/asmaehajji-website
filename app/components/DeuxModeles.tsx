import type { Translation } from '@/lib/translations';

interface DeuxModelesProps {
  t: Translation;
}

export default function DeuxModeles({ t }: DeuxModelesProps) {
  return (
    <section className="bg-as-cream py-20 sm:py-28 px-[6%]">
      <div className="max-w-[1000px] mx-auto">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-3">
          {t.constat.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-as-ink mb-10">
          {t.constat.title}
          <span className="block w-14 h-1 bg-as-gold mt-4" />
        </h2>

        <div className="w-full overflow-hidden">
          <svg viewBox="0 0 860 270" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <defs>
              <marker id="arrE" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="#0F5C4A"/>
              </marker>
              <marker id="arrG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="#888888"/>
              </marker>
            </defs>

            {/* LEFT: Emploi traditionnel (gris) */}
            <rect x="20" y="20" width="380" height="232" rx="3" fill="#F1EFE8" stroke="#E6E0D6" strokeWidth="1.5"/>
            <text x="210" y="46" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="13" fill="#8A7F73" letterSpacing="3">TRADITIONAL JOB</text>

            <rect x="70" y="64" width="120" height="40" rx="3" fill="#E8E4DC" stroke="#E6E0D6" strokeWidth="1"/>
            <text x="130" y="84" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="12" fill="#555555" letterSpacing="1">YOU WORK</text>
            <text x="130" y="98" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill="#8A7F73">40 h / week</text>

            <line x1="190" y1="84" x2="218" y2="84" stroke="#8A7F73" strokeWidth="1.5" markerEnd="url(#arrG)"/>

            <rect x="222" y="64" width="120" height="40" rx="3" fill="#E8E4DC" stroke="#E6E0D6" strokeWidth="1"/>
            <text x="282" y="84" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="12" fill="#555555" letterSpacing="1">FIXED SALARY</text>
            <text x="282" y="98" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill="#8A7F73">does not grow alone</text>

            <line x1="282" y1="104" x2="282" y2="132" stroke="#8A7F73" strokeWidth="1.5" markerEnd="url(#arrG)"/>

            <rect x="222" y="136" width="120" height="40" rx="3" fill="#E8E4DC" stroke="#E6E0D6" strokeWidth="1"/>
            <text x="282" y="156" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="12" fill="#555555" letterSpacing="1">INFLATION</text>
            <text x="282" y="170" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill="#8A7F73">purchasing power ↓</text>

            <line x1="222" y1="156" x2="195" y2="156" stroke="#8A7F73" strokeWidth="1.5"/>
            <line x1="195" y1="156" x2="195" y2="84" stroke="#8A7F73" strokeWidth="1.5"/>
            <line x1="195" y1="84" x2="197" y2="84" stroke="#8A7F73" strokeWidth="1.5" markerEnd="url(#arrG)"/>

            <rect x="50" y="194" width="308" height="28" rx="2" fill="rgba(15,92,74,0.07)" stroke="rgba(15,92,74,0.4)" strokeWidth="1"/>
            <text x="204" y="212" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="10" fill="#0F5C4A">⚠  Automation can replace this role tomorrow</text>

            {/* Separator */}
            <line x1="430" y1="20" x2="430" y2="252" stroke="#E6E0D6" strokeWidth="1" strokeDasharray="5 4"/>

            {/* RIGHT: Ce modèle (emerald) */}
            <rect x="450" y="20" width="390" height="232" rx="3" fill="#E6F0ED" stroke="rgba(15,92,74,0.4)" strokeWidth="1.5"/>
            <text x="645" y="46" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="13" fill="#0F5C4A" letterSpacing="3">THIS MODEL</text>

            <rect x="470" y="178" width="100" height="48" rx="3" fill="#E8E4DC" stroke="#E6E0D6" strokeWidth="1"/>
            <text x="520" y="200" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="12" fill="#555555" letterSpacing="1">SALES</text>
            <text x="520" y="215" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill="#8A7F73">personal</text>

            <line x1="570" y1="198" x2="594" y2="198" stroke="#0F5C4A" strokeWidth="2" markerEnd="url(#arrE)"/>

            <rect x="598" y="153" width="100" height="48" rx="3" fill="rgba(15,92,74,0.12)" stroke="rgba(15,92,74,0.45)" strokeWidth="1"/>
            <text x="648" y="175" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="12" fill="#0F5C4A" letterSpacing="1">TEAM</text>
            <text x="648" y="190" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill="#555555">recruit & train</text>

            <line x1="698" y1="173" x2="720" y2="173" stroke="#0F5C4A" strokeWidth="2" markerEnd="url(#arrE)"/>

            <rect x="724" y="112" width="100" height="64" rx="3" fill="#0F5C4A"/>
            <text x="774" y="142" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="16" fill="#fff" letterSpacing="1">RESIDUAL</text>
            <text x="774" y="160" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="16" fill="#fff" letterSpacing="1">INCOME</text>
            <text x="774" y="174" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill="rgba(255,255,255,0.75)">even while you rest</text>

            <line x1="480" y1="174" x2="722" y2="112" stroke="#0F5C4A" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrE)"/>

            <text x="645" y="74" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="10.5" fill="#555555" fontStyle="italic">Freedom to work from anywhere</text>
            <text x="645" y="90" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="10.5" fill="#555555" fontStyle="italic">— including your home country</text>
          </svg>
        </div>
        <p className="text-xs sm:text-sm text-as-gray-500 italic mt-3 pl-1">{t.constat.figCaption}</p>
      </div>
    </section>
  );
}
