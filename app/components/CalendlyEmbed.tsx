'use client';

import { useEffect, useRef, useState } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existing = document.getElementById('calendly-script') as HTMLScriptElement | null;

    const initCalendly = () => {
      if (containerRef.current && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
        });
      }
    };

    if (existing) {
      if ((window as any).Calendly) {
        initCalendly();
      } else {
        existing.onload = () => initCalendly();
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
      initCalendly();
    };
    document.body.appendChild(script);
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: '320px', height: '650px' }}
    >
      {!scriptLoaded && (
        <div className="flex items-center justify-center h-full p-8 text-as-gray-500 text-sm">
          Chargement du calendrier…
        </div>
      )}
    </div>
  );
}
