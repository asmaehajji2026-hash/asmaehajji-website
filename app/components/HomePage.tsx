import type { Translation, Lang } from '@/lib/translations';
import Navbar from './Navbar';
import Hero from './Hero';
import Essentiel from './Essentiel';
import Histoire from './Histoire';
import Citation from './Citation';
import DeuxModeles from './DeuxModeles';
import QuatreEtapes from './QuatreEtapes';
import FitCheck from './FitCheck';
import Remuneration from './Remuneration';
import Differenciation from './Differenciation';
import Psychologie from './Psychologie';
import PreuveSociale from './PreuveSociale';
import Preclose from './Preclose';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface HomePageProps {
  t: Translation;
  lang: Lang;
}

export default function HomePage({ t, lang }: HomePageProps) {
  return (
    <main className="min-h-screen bg-as-cream text-as-ink">
      <Navbar t={t} lang={lang} />
      <Hero t={t} />
      <Essentiel t={t} />
      <Histoire t={t} />
      <Citation t={t} />
      <DeuxModeles t={t} />
      <QuatreEtapes t={t} />
      <FitCheck t={t} />
      <Remuneration t={t} />
      <Differenciation t={t} />
      <Psychologie t={t} />
      <PreuveSociale t={t} />
      <Preclose t={t} />
      <FinalCTA t={t} />
      <Footer t={t} />
      <WhatsAppButton />
    </main>
  );
}
