import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ===== Asmae / Naya's Wealth Design System =====
        'as-emerald': '#0F5C4A',       // couleur dominante — wealth, growth
        'as-emerald-dark': '#0A4033', // hover / bordures
        'as-emerald-pale': '#E6F0ED', // fond doux
        'as-gold': '#D4A24C',         // accent — abundance
        'as-gold-light': '#E6BE6E',   // hover
        'as-gold-pale': '#F9F1DE',    // surligneur
        'as-cream': '#F7F2E8',        // fond principal
        'as-cream-warm': '#EFEBE0',   // surface secondaire
        'as-plum': '#5B2C4D',         // sections sombres
        'as-ink': '#1A1A1A',          // texte principal
        'as-gray-700': '#555555',     // texte secondaire
        'as-gray-500': '#8A7F73',     // légendes
        'as-gray-200': '#E6E0D6',     // bordures
        'as-gray-100': '#F1EFE8',     // fond cartes
      },
      fontFamily: {
        // 'display' = titres (Playfair Display), 'body' = corps (Montserrat), 'script' = accent (Great Vibes)
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'Helvetica Neue', 'sans-serif'],
        script: ['var(--font-greatvibes)', 'cursive'],
      },
      letterSpacing: {
        'as-tight': '0.02em',
        'as-wide': '0.12em',
        'as-wider': '0.25em',
      },
      maxWidth: {
        '7xl': '80rem',
        'reading': '65ch',
      },
    },
  },
  plugins: [],
};

export default config;
