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
    leftLabel: string;
    rightLabel: string;
    left: { youWork: string; fixedSalary: string; inflation: string; automationWarning: string; workHours: string; salaryNote: string; inflationNote: string };
    right: { sales: string; team: string; residualIncome: string; freedom: string; personal: string; recruitTrain: string; rest: string; anywhere: string; homeCountry: string };
  };
  etapes: {
    eyebrow: string;
    title: string;
    steps: { num: string; phase: string; label: string; sub: string }[];
    figCaption: string;
    bottomLabels: string[];
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
    donut: { center: string; psychology: string; strategy: string; psychologyLegend: string; strategyLegend: string };
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
    title: "Asmae Hajji · Naya's Wealth — Protéger, Grandir, Transmettre",
    description:
      "Asmae Hajji accompagne les femmes et les familles qui veulent protéger leur avenir, bâtir un patrimoine durable et vivre avec plus de liberté.",
    locale: 'fr_US',
  },
  nav: {
    tagline: "Naya's Wealth · Créée par Asmae Hajji",
    cta: 'PARLONS-EN',
    fr: 'FR',
    en: 'EN',
  },
  hero: {
    eyebrow: "Protéger. Grandir. Transmettre.",
    headline: "TON SALAIRE TE SOIGNE AUJOURD'HUI.",
    accent: "MAIS QUI SOIGNE TON AVENIR ?",
    lead1:
      "Année après année, tu prends soin des autres — de ta famille, de ta carrière, de ton avenir. Mais qui prend soin de ton avenir financier avec la même détermination ?",
    lead2:
      "Je viens du monde de la santé. J'ai vu de près ce que signifie soigner sans prévenir, travailler sans jamais s'arrêter, et réussir professionnellement sans pour autant se sentir libre. Aujourd'hui, j'aide d'autres femmes à bâtir un modèle qui leur appartient.",
    cta: 'DÉCOUVRE MON APPROCHE →',
    ctaNote: 'Appel confidentiel · Sans engagement',
    quote:
      "La vraie richesse commence quand on cesse de choisir entre prendre soin des autres et prendre soin de soi.",
    signature: 'Asmae',
    subtitle: "Fondatrice · Naya's Wealth",
  },
  essentiel: {
    eyebrow: "L'essentiel en 30 secondes",
    title: "POURQUOI CERTAINES FEMMES RÉUSSISSENT À BÂTIR UN AVENIR FINANCIER QUI DURE ?",
    cards: [
      {
        num: '01',
        label: 'LE DÉCLIC',
        text: "Un revenu d'emploi a ses limites. Même excellent, il dépend de ta présence, de ta santé et des décisions d'autrui.",
      },
      {
        num: '02',
        label: 'LA BRANCHE',
        text: "Un modèle d'affaire dans les services financiers permet d'aider des familles tout en créant un actif qui grandit avec le temps.",
      },
      {
        num: '03',
        label: 'CE QUE TU CRÉES',
        text: "Un revenu évolutif, une équipe à accompagner, et une structure que tu peux transmettre — bâtie sur ta vision, pas sur celle d'un employeur.",
      },
      {
        num: '04',
        label: 'POUR QUI ?',
        text: "Les femmes prêtes à apprendre, à bâtir doucement mais sûrement, et à transformer leur expérience de vie en levier de liberté.",
      },
    ],
    cta: "RÉSERVER UN APPEL →",
    ctaSub: "Tu veux comprendre le chemin avant de te décider ? Continue en bas.",
  },
  histoire: {
    eyebrow: "Pourquoi moi",
    title: "DE LA SALLE D'ÉCHOGRAPHIE AU BUSINESS QUI A DU SENS.",
    paragraphs: [
      "Je suis arrivée aux États-Unis avec un rêve : celui que mon père avait caressé pour moi — devenir médecin. Autodidacte, entrepreneur dans l'âme, il croyait que l'éducation ouvrait toutes les portes. Sa foi en moi est devenue ma boussole.",
      "La vie a dessiné un autre chemin. Mariée, mère, j'ai porté plusieurs vies avant la mienne. Je n'ai pas fait de médecine, mais j'ai gardé ce qui comptait : le besoin de servir, de comprendre, et de bâtir quelque chose avec mes propres mains.",
      "J'ai donc fait carrière en santé, comme sonographe cardiaque. J'ai scruté des cœurs, accompagné des médecins, rassuré des milliers de patients. Sur le plan financier, j'ai atteint des objectifs que je n'imaginais pas. Pourtant, je ressentais un creux.",
      "Je voyais des gens brillants épuisés par des systèmes qui soignent mieux qu'ils ne préviennent. Je comprenais que la santé et la richesse sont liées : sans l'une, l'autre vacille. Et que le temps libre n'est pas un luxe — c'est une condition pour une vie pleine.",
      "Aujourd'hui, avec Naya's Wealth, j'allie mon bagage santé à une mission financière : aider des femmes et des familles à protéger ce qui compte, à se préparer pour la retraite sans angoisse, et à créer un patrimoine qui traverse les générations.",
      "Je ne promets pas de raccourcis. Je propose un cadre, un accompagnement, et la conviction profonde que chaque femme peut devenir la financière de sa propre vie.",
    ],
    cta: "VOIR SI ON EST FAITES POUR TRAVAILLER ENSEMBLE →",
  },
  citation: {
    label: 'ASMAE HAJJI',
    quote:
      "ON NE BÂTIT PAS UNE RICHESSE DURABLE AVEC SEULEMENT DES CHIFFRES. ON LA BÂTIT AVEC UNE VISION, DE LA CONSTANCE, ET LA BONNE COMMUNAUTÉ AUTOUR DE SOI.",
  },
  constat: {
    eyebrow: 'Le constat',
    title: "DEUX FAÇONS DE VIVRE SON ARGENT. DEUX DESTINS TRÈS DIFFÉRENTS.",
    figCaption:
      "Fig. 1 — Une structure dépend entièrement de toi. L'autre construit un actif qui te survit.",
    leftLabel: "EMPLOI CLASSIQUE",
    rightLabel: "MODÈLE INDÉPENDANT",
    left: {
      youWork: "TU TRAVAILLES",
      fixedSalary: "SALAIRE FIXE",
      inflation: "INFLATION",
      automationWarning: "⚠  L'automatisation peut remplacer ce poste",
      workHours: "40 h / semaine",
      salaryNote: "ne grandit pas seul",
      inflationNote: "pouvoir d'achat ↓",
    },
    right: {
      sales: "VENTES",
      team: "ÉQUIPE",
      residualIncome: "REVENU",
      freedom: "RÉSIDUEL",
      personal: "personnelles",
      recruitTrain: "recruter & former",
      rest: "même au repos",
      anywhere: "Travailler d'où tu veux",
      homeCountry: "— y compris ton pays d'origine",
    },
  },
  etapes: {
    eyebrow: 'Comment ça marche',
    title: "4 ÉTAPES POUR PASSER D'UNE IDÉE À UN ACTIF",
    steps: [
      { num: '01', phase: 'MOIS 1–6', label: 'APPRENDRE', sub: '& ÊTRE LICENCIÉE' },
      { num: '02', phase: 'AN 1–2', label: 'SERVIR', sub: 'LES PREMIÈRES FAMILLES' },
      { num: '03', phase: 'AN 2–5', label: 'DUPLIQUER', sub: 'EN FORMAN D’AUTRES' },
      { num: '04', phase: 'AN 5 → 10+', label: 'BÉNÉFICIER', sub: 'DU REVENU CONSTRUIT' },
    ],
    figCaption:
      "Fig. 2 — Progression indicatives. Chaque parcours est unique et dépend de l'engagement personnel.",
    bottomLabels: ["Formation & licence", "Bâtir la clientèle", "Dupliquer le système", "La liberté financière"],
  },
  fit: {
    eyebrow: "Honnêteté d'abord",
    title: "EST-CE QUE CE CHEMIN EST FAIT POUR TOI ?",
    yesTitle: "✓ Oui, si tu reconnais ça :",
    yes: [
      "Tu en as assez de dépendre d'un seul salaire pour toute ta famille",
      "Tu veux bâtir quelque chose qui continue de grandir, même quand tu dors ou que tu voyages",
      "Tu aimes aider les gens — vraiment — et tu sais que l'éducation change des vies",
      "Tu es prête à investir 2 à 5 ans sérieusement pour créer une base solide",
      "Tu veux montrer à tes enfants qu'une femme peut bâtir, diriger et transmettre",
      "Tu es ouverte à apprendre de nouveaux outils, même si tu pars de zéro en finance",
    ],
    noTitle: "✗ Non, ce n'est pas pour toi si :",
    no: [
      "Tu cherches un revenu rapide sans effort ni apprentissage",
      "Tu refuses de parler à de nouvelles personnes et de partager ce que tu fais",
      "Tu veux des garanties chiffrées avant d'avoir commencé",
    ],
  },
  remuneration: {
    eyebrow: 'Comment évolue le revenu',
    title: "3 VOIES DE CROISSANCE — AUCUN RÉSULTAT N'EST GARANTI.",
    intro:
      "Ce modèle offre trois manières de générer des revenus, qui peuvent se combiner au fil du temps. Ce ne sont pas des promesses : ce sont des mécanismes possibles, dont le résultat dépend de ton implication, de ta régularité et de ta capacité à former d'autres personnes.",
    levers: [
      {
        label: 'VOIE 1',
        title: "SERVIR DES FAMILLES — COMMISSIONS PERSONNELLES",
        text: "Tu aides des familles à choisir des solutions de protection, de santé et de retraite. Tu es rémunérée sur la valeur de ce que tu mets en place.",
      },
      {
        label: 'VOIE 2',
        title: "CONSTRUIRE UNE ÉQUIPE — PRIMES DE CROISSANCE",
        text: "En recrutant et en formant d'autres personnes engagées, tu débloques des primes liées à la croissance collective.",
      },
      {
        label: 'VOIE 3',
        title: "DÉVELOPPER DES LEADERS — REVENUS D'ÉQUIPE",
        text: "Quand ton équipe grandit et recrute à son tour, une part du volume généré peut revenir à toi, sans que tu sois seule à tout faire.",
      },
    ],
    disclaimer:
      "Aucun montant, délai ou palier n'est garanti. Les résultats varient selon chaque personne, le marché, les efforts fournis et les conditions de la compagnie. Les chiffres publics de la grille ne sont pas des promesses individuelles.",
    figCaption:
      "Fig. 3 — Les trois voies de croissance possibles. À titre indicatif uniquement.",
  },
  diff: {
    eyebrow: "Pourquoi ce modèle",
    title: "POURQUOI CERTAINES FEMMES CHOISISSENT DE BÂTIR LEUR PROPRE TABLEAU DE BORD",
    leftTitle: "EMPLOI CLASSIQUE",
    left: [
      "Revenu plafonné par un poste ou une grille salariale",
      "Tu échanges du temps contre de l'argent, indéfiniment",
      "Tu dépends des décisions de ton employeur",
      "Peu ou pas de patrimoine transmissible",
      "La machine continue sans toi si tu t'arrêtes",
    ],
    rightTitle: "MODÈLE INDÉPENDANT",
    right: [
      "Ton potentiel de revenu croît avec ton apprentissage et ton équipe",
      "Tu construis un actif qui peut fonctionner sans ta présence constante",
      "Tu décides de ton rythme, de ton territoire et de tes priorités",
      "Ton bloc d'affaires peut devenir un héritage familial",
      "Tu combines service, impact et liberté dans un même modèle",
    ],
    figCaption:
      "Fig. 4 — Différences structurelles. Les détails légaux et contractuels dépendent de la compagnie.",
  },
  psychologie: {
    eyebrow: "Ce qui rend mon accompagnement différent",
    title: "CE QUI CHANGE TOUT, C'EST CE QUI SE PASSE DANS TA TÊTE.",
    quote:
      "Les stratégies financières existent partout. Ce qui fait la différence, c'est la capacité à passer à l'action malgré la peur, le doute et les croyances héritées.",
    calloutLabel: "POURQUOI MON PARCOURS COMPTE",
    callout:
      "Mon expérience en soins de santé m'a appris une chose essentielle : les gens ne changent pas seulement parce qu'ils ont la bonne information. Ils changent quand ils se sentent en sécurité, entendus et accompagnés. C'est cette approche — humaine, patiente, sans jugement — que je transpose dans le monde financier.",
    donut: {
      center: "80%",
      psychology: "psychologie",
      strategy: "stratégie",
      psychologyLegend: "Psychologie — état d'esprit, confiance, peur du rejet",
      strategyLegend: "Stratégie — compétences de vente, outils modernes",
    },
  },
  preuve: {
    eyebrow: 'Un exemple concret',
    title: "DES RÉSULTATS RÉELS — PAS DES PROMESSES.",
    text:
      "Des femmes et des hommes ont déjà bâti des revenus significatifs à travers ce modèle. Leurs résultats sont leurs. Ils ne représentent pas ce que toi ou Asmae obtiendrez. Ils montrent simplement ce qui est possible quand quelqu'un s'engage.",
    placeholder: "[Capture de tableau de bord à ajouter ultérieurement — identités masquées]",
    caption:
      "Données internes de la compagnie, anonymisées. Résultat non représentatif et non garanti.",
  },
  preclose: {
    eyebrow: "Avant de te décider",
    title: "LA SEULE DÉCISION URGENTE, C'EST DE T'INFORMER.",
    text:
      "Tu n'as pas besoin de tout quitter. Tu n'as pas besoin de savoir parfaitement quoi faire. Tu as juste besoin d'une conversation honnête pour voir si ce chemin te ressemble.",
    quote:
      "DANS DIX ANS, LES PETITES DÉCISIONS QUE TU PRENDRAS AUJOURD'HUI AURONT CONSTRUIT UN PONT. OU UN MUR.",
    cta: "PRENDS RENDEZ-VOUS →",
  },
  finalCta: {
    eyebrow: 'Prochaine étape',
    title: "PARLONS DE TA VISION, PAS DE TES NUMÉROS.",
    text:
      "Un appel de 30 minutes, sans pression. On regardera où tu en es, ce que tu veux protéger ou bâtir, et si une collaboration avec moi et mon équipe a du sens.",
    cta: "RÉSERVER MON APPEL",
    ctaSub: "Gratuit · Confidentiel · Sans engagement",
  },
  footer: {
    copyright: "© 2026 Asmae Hajji · Naya's Wealth",
    instagram: 'Instagram : @asmae-hajji',
    disclaimer:
      "Ce site a un but éducatif et informatif. Il ne constitue pas un conseil financier, fiscal, juridique ou en assurance personnalisé. Les services financiers et d'assurance nécessitent des licences conformes aux États-Unis. Aucun revenu, résultat ou rendement n'est garanti.",
  },
};

const en: Translation = {
  lang: 'en',
  meta: {
    title: "Asmae Hajji · Naya's Wealth — Protect, Grow, Leave a Legacy",
    description:
      "Asmae Hajji helps women and families protect their future, build lasting wealth, and live with more freedom.",
    locale: 'en_US',
  },
  nav: {
    tagline: "Naya's Wealth · Built by Asmae Hajji",
    cta: "LET'S TALK",
    fr: 'FR',
    en: 'EN',
  },
  hero: {
    eyebrow: "Protect. Grow. Leave a Legacy.",
    headline: "YOUR SALARY TAKES CARE OF YOU TODAY.",
    accent: "BUT WHO IS TAKING CARE OF YOUR FUTURE?",
    lead1:
      "Year after year, you take care of others — your family, your career, your future. But who is taking care of your financial future with the same determination?",
    lead2:
      "I come from healthcare. I have seen up close what it means to treat without preventing, to work without ever stopping, and to succeed professionally without feeling free. Today, I help other women build a model that belongs to them.",
    cta: "DISCOVER MY APPROACH →",
    ctaNote: "Confidential call · No commitment",
    quote:
      "True wealth begins when you stop choosing between caring for others and caring for yourself.",
    signature: 'Asmae',
    subtitle: "Founder · Naya's Wealth",
  },
  essentiel: {
    eyebrow: "The essentials in 30 seconds",
    title: "WHY DO SOME WOMEN SUCCEED IN BUILDING A FINANCIAL FUTURE THAT LASTS?",
    cards: [
      {
        num: '01',
        label: 'THE AWAKENING',
        text: "A job income has limits. Even a great one depends on your presence, your health, and someone else's decisions.",
      },
      {
        num: '02',
        label: 'THE PATH',
        text: "A business model in financial services lets you help families while building an asset that grows over time.",
      },
      {
        num: '03',
        label: 'WHAT YOU CREATE',
        text: "An evolving income, a team to support, and a structure you can pass on — built on your vision, not your employer's.",
      },
      {
        num: '04',
        label: 'FOR WHOM?',
        text: "Women ready to learn, build slowly but surely, and turn their life experience into a lever for freedom.",
      },
    ],
    cta: "BOOK A CALL →",
    ctaSub: "Want to understand the path before deciding? Scroll down.",
  },
  histoire: {
    eyebrow: "Why me",
    title: "FROM THE ECHOGRAPHY ROOM TO A BUSINESS WITH MEANING.",
    paragraphs: [
      "I arrived in the United States with a dream: the one my father held for me — becoming a physician. Self-made and entrepreneurial at heart, he believed education opened every door. His faith in me became my compass.",
      "Life drew a different path. Married, a mother, I carried several lives before my own. I did not become a doctor, but I kept what mattered: the need to serve, to understand, and to build something with my own hands.",
      "So I built a career in healthcare as a cardiovascular sonographer. I scanned hearts, worked alongside physicians, and reassured thousands of patients. Financially, I reached goals I never imagined. Yet something felt hollow.",
      "I saw brilliant people exhausted by systems that treat better than they prevent. I understood that health and wealth are connected: without one, the other wavers. And that free time is not a luxury — it is a condition for a full life.",
      "Today, with Naya's Wealth, I combine my healthcare background with a financial mission: helping women and families protect what matters, prepare for retirement without anxiety, and create wealth that crosses generations.",
      "I do not promise shortcuts. I offer a framework, support, and a deep belief that every woman can become the CFO of her own life.",
    ],
    cta: "SEE IF WE ARE A FIT →",
  },
  citation: {
    label: 'ASMAE HAJJI',
    quote:
      "YOU DON'T BUILD LASTING WEALTH WITH NUMBERS ALONE. YOU BUILD IT WITH VISION, CONSISTENCY, AND THE RIGHT COMMUNITY AROUND YOU.",
  },
  constat: {
    eyebrow: "The reality",
    title: "TWO WAYS TO LIVE YOUR MONEY. TWO VERY DIFFERENT DESTINIES.",
    figCaption:
      "Fig. 1 — One structure depends entirely on you. The other builds an asset that outlives you.",
    leftLabel: "TRADITIONAL JOB",
    rightLabel: "INDEPENDENT MODEL",
    left: {
      youWork: "YOU WORK",
      fixedSalary: "FIXED SALARY",
      inflation: "INFLATION",
      automationWarning: "⚠  Automation can replace this role",
      workHours: "40 h / week",
      salaryNote: "does not grow alone",
      inflationNote: "purchasing power ↓",
    },
    right: {
      sales: "SALES",
      team: "TEAM",
      residualIncome: "RESIDUAL",
      freedom: "INCOME",
      personal: "personal",
      recruitTrain: "recruit & train",
      rest: "even while you rest",
      anywhere: "Freedom to work from anywhere",
      homeCountry: "— including your home country",
    },
  },
  etapes: {
    eyebrow: 'How it works',
    title: "4 STEPS TO TURN AN IDEA INTO AN ASSET",
    steps: [
      { num: '01', phase: 'MONTHS 1–6', label: 'LEARN', sub: '& GET LICENSED' },
      { num: '02', phase: 'YEAR 1–2', label: 'SERVE', sub: 'THE FIRST FAMILIES' },
      { num: '03', phase: 'YEAR 2–5', label: 'DUPLICATE', sub: 'BY TRAINING OTHERS' },
      { num: '04', phase: 'YEAR 5 → 10+', label: 'BENEFIT', sub: 'FROM BUILT INCOME' },
    ],
    figCaption:
      "Fig. 2 — Indicative progression. Each journey is unique and depends on personal commitment.",
    bottomLabels: ["Training & licensing", "Build your client base", "Duplicate the system", "Financial freedom"],
  },
  fit: {
    eyebrow: "Honesty first",
    title: "IS THIS PATH RIGHT FOR YOU?",
    yesTitle: "✓ Yes, if you recognize this:",
    yes: [
      "You're tired of depending on one salary for your whole family",
      "You want to build something that keeps growing while you sleep or travel",
      "You love helping people — truly — and you know education changes lives",
      "You're willing to invest 2 to 5 years seriously to create a solid foundation",
      "You want to show your children that a woman can build, lead, and leave a legacy",
      "You're open to learning new tools, even if you start from zero in finance",
    ],
    noTitle: "✗ No, this is not for you if:",
    no: [
      "You're looking for quick money without effort or learning",
      "You refuse to talk to new people or share what you do",
      "You want guaranteed numbers before you even start",
    ],
  },
  remuneration: {
    eyebrow: "How income grows",
    title: "3 GROWTH PATHS — NO RESULT IS GUARANTEED.",
    intro:
      "This model offers three ways to generate income that can combine over time. They are not promises: they are possible mechanisms, and the outcome depends on your involvement, consistency, and ability to train others.",
    levers: [
      {
        label: 'PATH 1',
        title: "SERVE FAMILIES — PERSONAL COMMISSIONS",
        text: "You help families choose protection, health, and retirement solutions. You are compensated based on the value you put in place.",
      },
      {
        label: 'PATH 2',
        title: "BUILD A TEAM — GROWTH BONUSES",
        text: "By recruiting and training other committed people, you unlock bonuses tied to collective growth.",
      },
      {
        label: 'PATH 3',
        title: "DEVELOP LEADERS — TEAM INCOME",
        text: "When your team grows and recruits in turn, a share of the volume generated can flow back to you, without you doing everything alone.",
      },
    ],
    disclaimer:
      "No amount, timeline, or level is guaranteed. Results vary by individual, market, effort, and company conditions. Public compensation grid figures are not individual promises.",
    figCaption:
      "Fig. 3 — The three possible growth paths. For illustrative purposes only.",
  },
  diff: {
    eyebrow: "Why this model",
    title: "WHY SOME WOMEN CHOOSE TO BUILD THEIR OWN DASHBOARD",
    leftTitle: "TRADITIONAL JOB",
    left: [
      "Income capped by a position or salary grid",
      "You trade time for money, indefinitely",
      "You depend on your employer's decisions",
      "Little or no transferable wealth",
      "The machine continues without you if you stop",
    ],
    rightTitle: "INDEPENDENT MODEL",
    right: [
      "Your income potential grows with your learning and your team",
      "You build an asset that can work without your constant presence",
      "You decide your pace, territory, and priorities",
      "Your book of business can become a family legacy",
      "You combine service, impact, and freedom in one model",
    ],
    figCaption:
      "Fig. 4 — Structural differences. Legal and contractual details depend on the company.",
  },
  psychologie: {
    eyebrow: "What makes my support different",
    title: "WHAT CHANGES EVERYTHING IS WHAT HAPPENS IN YOUR HEAD.",
    quote:
      "Financial strategies are everywhere. What makes the difference is the ability to take action despite fear, doubt, and inherited beliefs.",
    calloutLabel: "WHY MY BACKGROUND MATTERS",
    callout:
      "My healthcare experience taught me one essential thing: people don't change just because they have the right information. They change when they feel safe, heard, and supported. That is the approach — human, patient, non-judgmental — that I bring into the financial world.",
    donut: {
      center: "80%",
      psychology: "psychology",
      strategy: "strategy",
      psychologyLegend: "Psychology — mindset, confidence, fear of rejection",
      strategyLegend: "Strategy — sales skills, modern tools",
    },
  },
  preuve: {
    eyebrow: "A concrete example",
    title: "REAL RESULTS — NOT PROMISES.",
    text:
      "Women and men have already built significant income through this model. Their results are theirs. They do not represent what you or Asmae will achieve. They simply show what is possible when someone commits.",
    placeholder: "[Dashboard screenshot to add later — identities masked]",
    caption:
      "Internal company data, anonymized. Non-representative and non-guaranteed result.",
  },
  preclose: {
    eyebrow: "Before you decide",
    title: "THE ONLY URGENT DECISION IS TO GET INFORMED.",
    text:
      "You don't need to quit everything. You don't need to know exactly what to do. You just need an honest conversation to see if this path fits you.",
    quote:
      "IN TEN YEARS, THE SMALL DECISIONS YOU MAKE TODAY WILL HAVE BUILT A BRIDGE. OR A WALL.",
    cta: "BOOK YOUR CALL →",
  },
  finalCta: {
    eyebrow: "Next step",
    title: "LET'S TALK ABOUT YOUR VISION, NOT YOUR NUMBERS.",
    text:
      "A 30-minute call, no pressure. We'll look at where you are, what you want to protect or build, and whether working with me and my team makes sense.",
    cta: "BOOK MY CALL",
    ctaSub: "Free · Confidential · No commitment",
  },
  footer: {
    copyright: "© 2026 Asmae Hajji · Naya's Wealth",
    instagram: 'Instagram: @asmae-hajji',
    disclaimer:
      "This site is for educational and informational purposes. It does not constitute personalized financial, tax, legal, or insurance advice. Financial and insurance services require licenses compliant with United States regulations. No income, result, or return is guaranteed.",
  },
};

export const translations: Record<Lang, Translation> = { fr, en };

export function getTranslation(lang: Lang): Translation {
  return translations[lang];
}
