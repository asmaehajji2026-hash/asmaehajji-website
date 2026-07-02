export type Lang = 'fr' | 'en';

export interface Translation {
  lang: Lang;
  meta: {
    title: string;
    description: string;
    locale: string;
  };
  nav: {
    tagline: string;
    cta: string;
    fr: string;
    en: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    accent: string;
    lead1: string;
    lead2: string;
    cta: string;
    ctaNote: string;
    quote: string;
    signature: string;
    subtitle: string;
  };
  essentiel: {
    eyebrow: string;
    title: string;
    cards: { num: string; label: string; text: string }[];
    cta: string;
    ctaSub: string;
  };
  histoire: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: string;
  };
  citation: {
    label: string;
    quote: string;
  };
  constat: {
    eyebrow: string;
    title: string;
    figCaption: string;
  };
  etapes: {
    eyebrow: string;
    title: string;
    steps: { num: string; phase: string; label: string; sub: string }[];
    figCaption: string;
  };
  fit: {
    eyebrow: string;
    title: string;
    yesTitle: string;
    yes: string[];
    noTitle: string;
    no: string[];
  };
  remuneration: {
    eyebrow: string;
    title: string;
    intro: string;
    levers: { label: string; title: string; text: string }[];
    disclaimer: string;
    figCaption: string;
  };
  diff: {
    eyebrow: string;
    title: string;
    leftTitle: string;
    left: string[];
    rightTitle: string;
    right: string[];
    figCaption: string;
  };
  psychologie: {
    eyebrow: string;
    title: string;
    quote: string;
    calloutLabel: string;
    callout: string;
  };
  preuve: {
    eyebrow: string;
    title: string;
    text: string;
    placeholder: string;
    caption: string;
  };
  preclose: {
    eyebrow: string;
    title: string;
    text: string;
    quote: string;
    cta: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    ctaSub: string;
  };
  footer: {
    copyright: string;
    instagram: string;
    disclaimer: string;
  };
}

const fr: Translation = {
  lang: 'fr',
  meta: {
    title: "Asmae Hajji · Naya's Wealth — Protection, Retraite & Richesse",
    description:
      "Asmae Hajji aide les femmes et les familles à protéger leur avenir, préparer leur retraite et bâtir une richesse durable.",
    locale: 'fr_US',
  },
  nav: {
    tagline: "Équipe Asmae Hajji · Naya's Wealth",
    cta: 'RÉSERVER MON APPEL',
    fr: 'FR',
    en: 'EN',
  },
  hero: {
    eyebrow: "Équipe Asmae Hajji · Modèle d'affaire indépendant",
    headline: 'LE MARCHÉ DU TRAVAIL CHANGE.',
    accent: 'TON REVENU EST-IL PRÊT ?',
    lead1:
      "L'inflation grignote le pouvoir d'achat. Les soins de santé coûtent de plus en plus cher. Et un salaire, même confortable, finit par plafonner.",
    lead2:
      "Ici, c'est 80 % de psychologie et 20 % de stratégie. C'est mon terrain depuis des années — et c'est exactement là que je peux t'accompagner.",
    cta: 'CONSTRUISONS ÇA ENSEMBLE →',
    ctaNote: 'Appel découverte gratuit · Sans engagement',
    quote:
      'Transformer la complexité financière en stratégies claires, concrètes et adaptées aux ambitions de chaque femme et de chaque famille.',
    signature: 'Asmae Hajji',
    subtitle: 'Cardiovascular Sonographer · Experior Financial Group',
  },
  essentiel: {
    eyebrow: "L'essentiel en 30 secondes",
    title: 'PAS LE TEMPS DE TOUT LIRE ? VOICI LE RÉSUMÉ.',
    cards: [
      {
        num: '01',
        label: 'LE CONSTAT',
        text: "Un salaire finit par plafonner. L'inflation et les coûts de santé grignotent le reste. Travailler plus ne suffit plus.",
      },
      {
        num: '02',
        label: 'LE MODÈLE',
        text: "Un modèle d'affaire indépendant, éprouvé et documenté, qui se bâtit même à temps partiel. Je le suis moi-même.",
      },
      {
        num: '03',
        label: 'CE QUE TU BÂTIS',
        text: 'Un revenu qui se construit dans le temps et une équipe accompagnée. 80 % psychologie, 20 % stratégie.',
      },
      {
        num: '04',
        label: 'POUR QUI',
        text: "Pas besoin d'expérience en vente, ni de tout quitter : ça se commence à temps partiel. Juste de la constance et un accompagnement solide.",
      },
    ],
    cta: "RÉSERVER MON APPEL DÉCOUVERTE →",
    ctaSub: 'Tu veux le contexte complet ? Continue plus bas : mon histoire, la vision et le fonctionnement.',
  },
  histoire: {
    eyebrow: 'Pourquoi moi, pourquoi maintenant',
    title: 'MON HISTOIRE — ET POURQUOI JE BÂTIS CE MODÈLE.',
    paragraphs: [
      "J'ai grandi dans une famille d'entrepreneurs. Mon père était un homme d'affaires autodidacte qui a bâti son succès de rien. Plus que tout, il croyait en l'éducation. Son rêve le plus cher pour moi : devenir médecin.",
      "Ce rêve est devenu le mien aussi. Je suis arrivée aux États-Unis déterminée à faire de la médecine. Mais la vie en a décidé autrement : mariage, famille, et un chemin différent.",
      "Même sans devenir médecin, une chose ne m'a jamais quittée : le désir de bâtir quelque chose à moi. Au fil des années, j'ai lancé plusieurs entreprises. Certaines ont connu un succès surprenant. Mais à chaque fois que j'atteignais un nouveau niveau, je me retenais. La peur, le doute et les croyances limitantes m'empêchaient souvent de les faire grandir pleinement.",
      "J'ai fini par devenir sonographe cardiaque et j'ai bâti une belle carrière en santé. J'ai travaillé aux côtés de médecins exceptionnels et pris soin de milliers de patients. Professionnellement, j'ai dépassé mes objectifs financiers. Pourtant, quelque chose manquait toujours.",
      "En travaillant si près des médecins, j'ai compris que ce mode de vie n'était pas pour moi. J'ai aussi vu les limites de la médecine conventionnelle pour ce qui touche à la prévention, au mode de vie et aux facteurs qui influencent la santé à long terme.",
      "Alors je me suis demandé : est-ce que je bâtis une vie qui reflète mes propres valeurs — ou les attentes des autres ? Cette question a tout changé.",
      "Aujourd'hui, ma mission est d'aider les gens à créer des vies plus saines, plus riches et plus abondantes : protéger ce qui compte, préparer la retraite, bâtir la confiance financière et prendre de meilleures décisions pour soi et pour sa famille. Parce que le succès, ce n'est pas seulement l'argent. C'est la liberté dans chaque domaine de la vie.",
    ],
    cta: 'REJOINDRE MON ÉQUIPE →',
  },
  citation: {
    label: 'ASMAE HAJJI',
    quote:
      "LE VRAI LUXE, CE N'EST PAS L'ARGENT. C'EST DU TEMPS LIBRE — ET UN REVENU QUI CONTINUE QUAND TU T'ARRÊTES.",
  },
  constat: {
    eyebrow: 'Le constat',
    title: 'DEUX MODÈLES. DEUX AVENIRS.',
    figCaption:
      "Fig. 1 — Deux structures de revenu. L'une dépend de ta présence. L'autre grandit avec le temps.",
  },
  etapes: {
    eyebrow: 'Comment ça fonctionne',
    title: '4 ÉTAPES POUR BÂTIR CE MODÈLE',
    steps: [
      { num: '01', phase: 'MOIS 1–6', label: 'OBTENIR', sub: 'TA LICENCE' },
      { num: '02', phase: 'AN 1–2', label: 'PREMIÈRES', sub: 'VENTES' },
      { num: '03', phase: 'AN 2–5', label: 'RECRUTER', sub: '& FORMER' },
      { num: '04', phase: 'AN 5 → 10+', label: 'REVENU', sub: 'RÉSIDUEL' },
    ],
    figCaption:
      'Fig. 2 — Progression type. Chaque étape construit la suivante. Les revenus réels varient selon l’effort et la constance.',
  },
  fit: {
    eyebrow: "Honnêteté d'abord",
    title: 'CE MODÈLE EST-IL FAIT POUR TOI ?',
    yesTitle: "✓ C'est pour toi si...",
    yes: [
      'Tu veux une deuxième source de revenus à temps partiel, sans tout quitter',
      'Tu cherches un revenu qui existe même quand tu ne travailles pas',
      'Tu veux aider des familles de ta communauté à mieux se protéger',
      'Tu es prête à investir 2 à 5 ans pour en récolter les fruits les 10 suivantes',
      'Tu veux que ce soit ton équipe qui travaille avec toi, pas toi qui travailles pour un patron',
      "Tu es prête à apprendre les outils modernes pour bâtir de manière scalable",
    ],
    noTitle: '✗ Ce n\'est pas pour toi si...',
    no: [
      'Tu cherches un revenu garanti immédiat dès le mois 1',
      "Tu n'es pas à l'aise avec les conversations et la prospection",
      'Tu veux des résultats sans constance ni engagement dans le temps',
    ],
  },
  remuneration: {
    eyebrow: 'Comment évolue la rémunération',
    title: '3 LEVIERS DE RÉMUNÉRATION — PAS DE GARANTIE.',
    intro:
      "Le modèle repose sur trois leviers indépendants : la production personnelle, le développement d'équipe et les overrides d'agence. Les chiffres ci-dessous ne sont pas des revenus promis : ce sont des exemples de structure. Le rythme pour les atteindre dépend entièrement de l'effort individuel, du recrutement, de la rétention et de la constance.",
    levers: [
      {
        label: 'LEVIER 1',
        title: 'COMMISSIONS PERSONNELLES — PRODUCTEUR',
        text: 'Ce que tu gagnes toi-même en vendant des solutions de protection et de retraite. Le taux augmente avec ta production personnelle soutenue.',
      },
      {
        label: 'LEVIER 2',
        title: 'PRIMES DE CROISSANCE — CONSTRUCTEUR',
        text: 'Des primes liées à ta propre production sur plusieurs mois et au nombre de personnes actives que tu recrutes et accompagnes.',
      },
      {
        label: 'LEVIER 3',
        title: "OVERRIDES D'ÉQUIPE — LEADERSHIP",
        text: 'Un pourcentage cumulatif sur la production de ton équipe, lorsque tu développes des leaders et que chaque niveau recrute et forme à son tour.',
      },
    ],
    disclaimer:
      'Aucun revenu, palier, délai ou pourcentage n\'est garanti. Les montants et conditions dépendent de la compagnie, de la région et de la situation individuelle. Consulter la grille officielle complète pour les conditions exactes.',
    figCaption:
      'Fig. 3 — Structure des 3 leviers. Les chiffres sont donnés à titre illustratif uniquement.',
  },
  diff: {
    eyebrow: 'Pourquoi ce modèle d\'affaire',
    title: 'CE QUI LE DIFFÉRENCIE',
    leftTitle: 'EMPLOI CLASSIQUE',
    left: [
      'Captif d\'un seul employeur',
      'Tu arrêtes = le revenu s\'arrête',
      'Salaire plafonné par ton poste',
      'Tu grimpes — tu restes quand même salariée',
      'Rien à transmettre à tes enfants',
      'Vulnérable aux coupures / IA',
      'Revenu lié à tes heures — pour toujours',
    ],
    rightTitle: 'CE MODÈLE',
    right: [
      'Accès à un réseau de partenaires financiers',
      'Ton équipe génère des revenus quand tu dors',
      'Aucun plafond de revenu',
      'Ton bloc d\'affaires t\'appartient dès le jour 1',
      'Transmissible à tes enfants',
      'Coût de démarrage accessible et formation fournie',
      'Travailler d\'où tu veux',
    ],
    figCaption:
      'Fig. 4 — Comparaison structurelle. Les conditions (héritage, buyout) sont à valider directement avec la compagnie.',
  },
  psychologie: {
    eyebrow: 'Ce qui rend mon équipe différente',
    title: '80 % PSYCHOLOGIE. 20 % STRATÉGIE.',
    quote:
      'Ce qui fait échouer la plupart des gens dans ce business, ce n\'est pas les connaissances — c\'est la psychologie.',
    calloutLabel: 'CE QUE J\'APPORTE EN PLUS',
    callout:
      "La formation technique, tout le monde peut te la donner. Ce que j'apporte en plus : une compréhension profonde de la santé, du bien-être et de la psychologie du changement. Parce que la vraie liberté nécessite santé physique, équilibre émotionnel, protection financière, création de richesse et une vie alignée avec son purpose.",
  },
  preuve: {
    eyebrow: 'Un exemple réel',
    title: 'UN RÉSULTAT RÉEL — PAS UNE PROMESSE.',
    text:
      "Voici un classement de performance réel, tel qu'affiché dans le tableau de bord officiel de la compagnie. Ces chiffres sont ceux d'un moment donné, pour les personnes qui y figurent — ils ne représentent ni une moyenne, ni un résultat typique, ni une garantie pour une nouvelle personne qui commence.",
    placeholder: '[Capture de performance à ajouter — identités masquées]',
    caption:
      "Capture d'écran officielle du tableau de bord de la compagnie. Noms et logo masqués pour confidentialité. Résultat réel à un moment donné — ne constitue ni une moyenne, ni un exemple typique, ni une garantie.",
  },
  preclose: {
    eyebrow: 'Avant de décider',
    title: 'DONNE-TOI UNE CHANCE D\'EN SAVOIR PLUS.',
    text:
      "Tu n'as pas besoin de dire oui aujourd'hui. Tu as juste besoin de comprendre ce qui est possible — et de voir si ça résonne avec ce que tu veux bâtir pour toi et pour les tiens.",
    quote:
      "DANS 10 ANS, TU SERAS LÀ OÙ TES DÉCISIONS D'AUJOURD'HUI T'AURONT AMENÉE.",
    cta: 'COMMENCE MAINTENANT.',
  },
  finalCta: {
    eyebrow: 'Prochaine étape',
    title: 'PRÊTE À EXPLORER ? RÉSERVE TON APPEL DÉCOUVERTE.',
    text:
      "30 minutes. Aucun engagement. Juste une conversation pour voir si ce modèle a du sens pour toi, pour ta famille et pour la vie que tu veux bâtir.",
    cta: 'RÉSERVER MON APPEL',
    ctaSub: 'Appel découverte gratuit · Sans engagement',
  },
  footer: {
    copyright: "© 2026 Asmae Hajji · Naya's Wealth",
    instagram: 'Instagram : @asmae-hajji',
    disclaimer:
      "Le contenu de ce site est éducatif et informatif. Il ne constitue pas un conseil financier, fiscal ou en assurance personnalisé. Les produits et services financiers/assurances nécessitent une licence appropriée aux États-Unis. Aucun revenu, résultat ou rendement n'est garanti.",
  },
};

const en: Translation = {
  lang: 'en',
  meta: {
    title: "Asmae Hajji · Naya's Wealth — Protection, Retirement & Wealth",
    description:
      "Asmae Hajji helps women and families protect their future, prepare for retirement, and build lasting wealth.",
    locale: 'en_US',
  },
  nav: {
    tagline: "Asmae Hajji's Team · Naya's Wealth",
    cta: 'BOOK MY CALL',
    fr: 'FR',
    en: 'EN',
  },
  hero: {
    eyebrow: "Asmae Hajji's Team · Independent Business Model",
    headline: 'THE WORKPLACE IS CHANGING.',
    accent: 'IS YOUR INCOME READY?',
    lead1:
      'Inflation erodes purchasing power. Healthcare costs keep rising. And even a comfortable salary eventually hits a ceiling.',
    lead2:
      "Here, it's 80% psychology and 20% strategy. That has been my field for years — and it's exactly where I can walk with you.",
    cta: 'LET’S BUILD THIS TOGETHER →',
    ctaNote: 'Free discovery call · No commitment',
    quote:
      'Turning financial complexity into clear, concrete strategies tailored to the ambitions of every woman and every family.',
    signature: 'Asmae Hajji',
    subtitle: 'Cardiovascular Sonographer · Experior Financial Group',
  },
  essentiel: {
    eyebrow: 'The essentials in 30 seconds',
    title: 'NO TIME TO READ EVERYTHING? HERE IS THE SUMMARY.',
    cards: [
      {
        num: '01',
        label: 'THE REALITY',
        text: 'A salary eventually plateaus. Inflation and healthcare costs eat away the rest. Working harder is no longer enough.',
      },
      {
        num: '02',
        label: 'THE MODEL',
        text: 'A proven, documented independent business model that can be built part-time. I am building it myself.',
      },
      {
        num: '03',
        label: 'WHAT YOU BUILD',
        text: 'An income that grows over time and a supported team. 80% psychology, 20% strategy.',
      },
      {
        num: '04',
        label: 'FOR WHOM',
        text: 'No sales experience needed, no need to quit everything: it starts part-time. Just consistency and solid support.',
      },
    ],
    cta: 'BOOK A DISCOVERY CALL →',
    ctaSub: 'Want the full context? Scroll down: my story, the vision, and how it works.',
  },
  histoire: {
    eyebrow: 'Why me, why now',
    title: 'MY STORY — AND WHY I AM BUILDING THIS MODEL.',
    paragraphs: [
      'I grew up in an entrepreneurial family. My father was a self-made businessman who built his success from the ground up. More than anything, he believed in education. His greatest dream for me: becoming a physician.',
      'That dream became mine too. I came to the United States determined to pursue medicine. But life had other plans: marriage, family, and a different path.',
      "Even without becoming a physician, one thing never left me: the desire to build something of my own. Over the years, I launched several businesses. Some became surprisingly successful. But each time I reached a new level, I held back. Fear, self-doubt, and limiting beliefs often stood in the way of allowing those businesses to grow to their full potential.",
      'I eventually became a cardiovascular sonographer and built a rewarding career in healthcare. I worked alongside outstanding physicians and cared for thousands of patients. Professionally, I exceeded every financial goal I had imagined. Yet deep inside, something was still missing.',
      "Working closely with physicians showed me that lifestyle was not the right fit for me. I also saw the limits of conventional medicine when it comes to prevention, lifestyle, and the factors that influence long-term health and well-being.",
      'So I asked myself: was I building a life that reflected my own values — or someone else\'s expectations? That question changed everything.',
      'Today, my mission is to help people create healthier, wealthier, and more abundant lives: protecting what matters most, preparing for retirement, building financial confidence, and empowering them to make better decisions for themselves and their families. Because success is not just about money. It is about freedom in every area of life.',
    ],
    cta: 'JOIN MY TEAM →',
  },
  citation: {
    label: 'ASMAE HAJJI',
    quote:
      'THE REAL LUXE IS NOT MONEY. IT IS FREE TIME — AND AN INCOME THAT CONTINUES WHEN YOU STOP.',
  },
  constat: {
    eyebrow: 'The reality',
    title: 'TWO MODELS. TWO FUTURES.',
    figCaption:
      'Fig. 1 — Two income structures. One depends on your presence. The other grows with time.',
  },
  etapes: {
    eyebrow: 'How it works',
    title: '4 STEPS TO BUILD THIS MODEL',
    steps: [
      { num: '01', phase: 'MONTHS 1–6', label: 'GET', sub: 'YOUR LICENSE' },
      { num: '02', phase: 'YEAR 1–2', label: 'FIRST', sub: 'SALES' },
      { num: '03', phase: 'YEAR 2–5', label: 'RECRUIT', sub: '& TRAIN' },
      { num: '04', phase: 'YEAR 5 → 10+', label: 'RESIDUAL', sub: 'INCOME' },
    ],
    figCaption:
      'Fig. 2 — Typical progression. Each step builds the next. Actual income varies based on effort and consistency.',
  },
  fit: {
    eyebrow: 'Honesty first',
    title: 'IS THIS MODEL RIGHT FOR YOU?',
    yesTitle: '✓ This is for you if...',
    yes: [
      'You want a part-time second income stream, without quitting everything',
      'You want income that exists even when you are not working',
      'You want to help families in your community protect themselves better',
      'You are willing to invest 2 to 5 years to reap the benefits for the next 10',
      'You want your team working with you, not you working for a boss',
      'You are open to learning modern tools to build in a scalable way',
    ],
    noTitle: '✗ This is not for you if...',
    no: [
      'You are looking for a guaranteed immediate income from month 1',
      'You are not comfortable with conversations and outreach',
      'You want results without consistency or long-term commitment',
    ],
  },
  remuneration: {
    eyebrow: 'How compensation evolves',
    title: '3 COMPENSATION LEVERS — NO GUARANTEE.',
    intro:
      'The model rests on three independent levers: personal production, team development, and agency overrides. The figures below are not promised income: they are structural examples. The pace to reach them depends entirely on individual effort, recruiting, retention, and consistency.',
    levers: [
      {
        label: 'LEVER 1',
        title: 'PERSONAL COMMISSIONS — PRODUCER',
        text: 'What you earn yourself by selling protection and retirement solutions. The rate increases with sustained personal production.',
      },
      {
        label: 'LEVER 2',
        title: 'GROWTH BONUSES — BUILDER',
        text: 'Bonuses tied to your own production over several months and to the number of active people you recruit and support.',
      },
      {
        label: 'LEVER 3',
        title: 'TEAM OVERRIDES — LEADERSHIP',
        text: 'A cumulative percentage on your team’s production, when you develop leaders and each level recruits and trains in turn.',
      },
    ],
    disclaimer:
      'No income, level, timeline, or percentage is guaranteed. Amounts and conditions depend on the company, region, and individual situation. Refer to the official full compensation grid for exact conditions.',
    figCaption:
      'Fig. 3 — Structure of the 3 levers. Numbers are for illustration only.',
  },
  diff: {
    eyebrow: 'Why this business model',
    title: 'WHAT SETS IT APART',
    leftTitle: 'TRADITIONAL JOB',
    left: [
      'Tied to a single employer',
      'You stop = the income stops',
      'Salary capped by your position',
      'You climb — but you remain an employee',
      'Nothing to pass on to your children',
      'Vulnerable to layoffs / AI',
      'Income tied to your hours — forever',
    ],
    rightTitle: 'THIS MODEL',
    right: [
      'Access to a network of financial partners',
      'Your team generates income while you sleep',
      'No income ceiling',
      'Your book of business belongs to you from day 1',
      'Transferable to your children',
      'Accessible startup cost and provided training',
      'Work from wherever you want',
    ],
    figCaption:
      'Fig. 4 — Structural comparison. Conditions (inheritance, buyout) must be confirmed directly with the company.',
  },
  psychologie: {
    eyebrow: 'What makes my team different',
    title: '80% PSYCHOLOGY. 20% STRATEGY.',
    quote:
      'What makes most people fail in this business is not knowledge — it is psychology.',
    calloutLabel: 'WHAT I BRING IN ADDITION',
    callout:
      'Technical training, anyone can give you. What I bring in addition: a deep understanding of health, well-being, and the psychology of change. Because true freedom requires physical health, emotional balance, financial protection, wealth creation, and a life aligned with purpose.',
  },
  preuve: {
    eyebrow: 'A real example',
    title: 'A REAL RESULT — NOT A PROMISE.',
    text:
      'Here is a real performance ranking, as shown in the company’s official dashboard. These figures belong to a specific moment and specific people — they do not represent an average, a typical result, or a guarantee for anyone starting out.',
    placeholder: '[Performance screenshot to add — identities masked]',
    caption:
      'Official screenshot from the company dashboard. Names and logo masked for confidentiality. Real result at a given moment — not an average, typical example, or guarantee.',
  },
  preclose: {
    eyebrow: 'Before deciding',
    title: 'GIVE YOURSELF A CHANCE TO LEARN MORE.',
    text:
      'You do not need to say yes today. You just need to understand what is possible — and see if it resonates with what you want to build for yourself and your loved ones.',
    quote:
      'IN 10 YEARS, YOU WILL BE WHERE TODAY’S DECISIONS HAVE TAKEN YOU.',
    cta: 'START NOW.',
  },
  finalCta: {
    eyebrow: 'Next step',
    title: 'READY TO EXPLORE? BOOK YOUR DISCOVERY CALL.',
    text:
      '30 minutes. No commitment. Just a conversation to see if this model makes sense for you, your family, and the life you want to build.',
    cta: 'BOOK MY CALL',
    ctaSub: 'Free discovery call · No commitment',
  },
  footer: {
    copyright: "© 2026 Asmae Hajji · Naya's Wealth",
    instagram: 'Instagram: @asmae-hajji',
    disclaimer:
      'The content on this site is educational and informational. It does not constitute personalized financial, tax, or insurance advice. Financial/insurance products and services require appropriate licensing in the United States. No income, result, or return is guaranteed.',
  },
};

export const translations: Record<Lang, Translation> = { fr, en };

export function getTranslation(lang: Lang): Translation {
  return translations[lang];
}
