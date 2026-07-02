import Image from 'next/image';
import type { Translation } from '@/lib/translations';

interface HeroProps {
  t: Translation;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="grid lg:grid-cols-2 min-h-[94vh] bg-as-cream">
      {/* Left: text */}
      <div className="px-[7%] lg:px-[8%] py-16 lg:py-24 flex flex-col justify-center order-2 lg:order-1">
        <p className="font-body text-xs sm:text-sm tracking-as-wider text-as-emerald mb-5">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-as-ink leading-[0.95] mb-6">
          {t.hero.headline}
          <br />
          <span className="text-as-emerald">{t.hero.accent}</span>
        </h1>
        <div className="as-rule mb-6" style={{ width: '4rem', height: '5px' }} />

        <p className="font-body text-base sm:text-lg text-as-gray-700 max-w-xl mb-3 leading-relaxed">
          {t.hero.lead1}
        </p>
        <p className="font-body text-base sm:text-lg text-as-gray-700 max-w-xl mb-8 leading-relaxed">
          {t.hero.lead2}
        </p>

        <a href="#cta" className="btn-as w-fit">
          {t.hero.cta}
        </a>
        <p className="text-xs sm:text-sm text-as-gray-500 mt-4">{t.hero.ctaNote}</p>
      </div>

      {/* Right: photo + overlay */}
      <div className="relative overflow-hidden min-h-[420px] lg:min-h-0 order-1 lg:order-2">
        <Image
          src="/asmae-photo.jpg"
          alt="Asmae Hajji"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60 flex flex-col justify-start px-8 sm:px-12 pt-12 pb-12">
          <div className="font-script text-3xl sm:text-4xl text-white/90">{t.hero.signature}</div>
          <span className="text-5xl sm:text-6xl leading-none text-as-gold font-serif mt-6 mb-3">"</span>
          <p className="text-white text-base sm:text-lg font-light italic max-w-[300px] leading-relaxed">
            {t.hero.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
