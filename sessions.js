// Define all exercise session data
export const sessions = [
  {
    id: 'morning',
    title: 'Ochtendenergie',
    description: 'Start je dag met zachte beweging',
    duration: 5, // in minutes
    color: '#FFC107',
    icon: 'sunny',
    intensity: 'Zacht',
    exercises: [
      {
        name: 'Ademhalingsactivatie',
        description: 'Adem diep in door je neus, laat je buik uitzetten. Adem uit door je mond.',
        duration: 60, // in seconds
        animation: 'breathing',
        encouragements: [
          'Voel hoe je energie ontwaakt met elke ademhaling.',
          'Met elke adem breng je meer zuurstof naar je spieren.',
          'Je ademt in kracht, je ademt uit spanning.'
        ]
      },
      {
        name: 'Zachte nekstretches',
        description: 'Kantel je hoofd langzaam van links naar rechts, dan vooruit en achteruit.',
        duration: 45,
        animation: 'neck_stretch',
        encouragements: [
          'Laat alle spanning uit je nek vloeien, alsof je zand uit een zandloper laat stromen.',
          'Voel hoe elke beweging ruimte creëert in je nek.'
        ]
      },
      {
        name: 'Schoudercirkels',
        description: 'Rol je schouders zachtjes naar achteren in grote cirkels.',
        duration: 45,
        animation: 'shoulder_circles',
        encouragements: [
          'Je beweegt als een zonnestraal.',
          'Je schouders openen zich als bloembladen in de ochtendzon.'
        ]
      },
      {
        name: 'Zittende zijstretches',
        description: 'Strek één arm boven je hoofd en buig zachtjes opzij.',
        duration: 45,
        animation: 'side_stretch',
        encouragements: [
          'Voel de rek langs je zij als een zachte regenboog.',
          'Je lichaam is dankbaar voor deze liefdevolle aandacht.'
        ]
      },
      {
        name: 'Zachte rugbeweging',
        description: 'Zittend of staand, plaats handen op heupen en maak een kleine beweging voor- en achterwaarts.',
        duration: 45,
        animation: 'gentle_back',
        encouragements: [
          'Je ruggengraat golft als een vredige oceaan.',
          'Je geeft je rug precies wat het nodig heeft.'
        ]
      }
    ]
  },
  {
    id: 'knee',
    title: 'Knieversterker',
    description: 'Veilig voor je knie',
    duration: 8, // in minutes
    color: '#4DB6AC',
    icon: 'heart',
    intensity: 'Gericht',
    exercises: [
      {
        name: 'Zittende beenstrekkingen',
        description: 'Zittend, strek langzaam je knie volledig uit en houd 3 seconden vast.',
        duration: 45, // in seconds
        animation: 'leg_extension',
        encouragements: [
          'Perfect! Je quadriceps worden sterker zonder druk op je knie.',
          'Elke kleine beweging helpt je knie te genezen.'
        ]
      },
      {
        name: 'Statische quadriceps',
        description: 'Zittend, span je bovenbeen aan zonder je been te bewegen. Houd 5 sec vast, ontspan.',
        duration: 60,
        animation: 'quad_static',
        encouragements: [
          'Geweldig! Je versterkt je spieren zelfs zonder beweging.',
          'Deze oefening is perfect geschikt voor je knie.'
        ]
      },
      {
        name: 'Enkel cirkels',
        description: 'Strek je been uit en maak grote cirkels met je voet, eerst rechtsom dan linksom.',
        duration: 45,
        animation: 'ankle_circles',
        encouragements: [
          'Voel hoe je onderbeen soepeler wordt met elke cirkel.',
          'Je ankels ondersteunen je knieën, dit helpt je hele been.'
        ]
      },
      {
        name: 'Zittende hamstring activatie',
        description: 'Zittend, druk je hiel zachtjes in de vloer terwijl je je knie licht gebogen houdt.',
        duration: 60,
        animation: 'hamstring_seated',
        encouragements: [
          'Je balanceert je beenspieren, precies wat je knie nodig heeft.',
          'Prachtig gedaan. Voorzichtige beweging is helend.'
        ]
      },
      {
        name: 'Interne/externe heupdraaiers',
        description: 'Zittend, draai je been zachtjes naar binnen en dan naar buiten.',
        duration: 60,
        animation: 'hip_rotators',
        encouragements: [
          'Je heupspieren zijn essentieel voor gezonde knieën.',
          'Deze beweging creëert balans rond je hele gewricht.'
        ]
      },
      {
        name: 'Ondersteunde kniebuigingen',
        description: 'Staand, met je handen op een stoel, buig lichtjes door je knieën en kom weer omhoog.',
        duration: 45,
        animation: 'assisted_squats',
        encouragements: [
          'Perfect tempo! Je luistert goed naar je lichaam.',
          'Deze oefening maakt je dagelijkse bewegingen gemakkelijker.'
        ]
      },
      {
        name: 'Kuitstretchers',
        description: 'Zachtjes je kuit strekken terwijl je tegen een muur leunt.',
        duration: 45,
        animation: 'calf_stretch',
        encouragements: [
          'Je geeft je hele been aandacht, van teen tot heup.',
          'Je kuit ontspant zich als een bloem die opent in de zon.'
        ]
      }
    ]
  },
  {
    id: 'evening',
    title: 'Avondrust',
    description: 'Kalmerend voor de nacht',
    duration: 6, // in minutes
    color: '#9C27B0',
    icon: 'moon',
    intensity: 'Rustgevend',
    exercises: [
      {
        name: 'Diepe ademhaling',
        description: 'Adem 4 tellen in, houd 2 vast, adem 6 tellen uit. Herhaal.',
        duration: 60, // in seconds
        animation: 'deep_breathing',
        encouragements: [
          'Voel hoe je lichaam zachter wordt met elke uitademing.',
          'Je laat de dag van je afglijden als watergolven.'
        ]
      },
      {
        name: 'Zittende hartopener',
        description: 'Breng je armen zachtjes naar achteren, open je borst, en adem diep in.',
        duration: 45,
        animation: 'heart_opener',
        encouragements: [
          'Je opent je hart voor rust en heling.',
          'Deze opening bereidt je voor op diepe slaap.'
        ]
      },
      {
        name: 'Lichte polscirkels',
        description: 'Maak kleine cirkels met je polsen, eerst de ene kant dan de andere.',
        duration: 30,
        animation: 'wrist_circles',
        encouragements: [
          'Je laat de spanning van typen en werken los.',
          'Je handen hebben je vandaag goed gediend, bedank ze met deze beweging.'
        ]
      },
      {
        name: 'Zittende heupopener',
        description: 'Zittend, leg één enkel op de tegenovergestelde knie, houd je rug recht.',
        duration: 45,
        animation: 'hip_opener',
        encouragements: [
          'Je heupen dragen veel spanning, je geeft ze nu vrijheid.',
          'Deze opening helpt je bekken te ontspannen voor de nacht.'
        ]
      },
      {
        name: 'Schouder ontspanning',
        description: 'Breng je schouders naar je oren, houd 3 seconden vast, laat dan volledig los.',
        duration: 45,
        animation: 'shoulder_release',
        encouragements: [
          'Voel hoe je schouders smelten als sneeuw in de zon.',
          'Je laat al je zorgen van vandaag los met deze beweging.'
        ]
      },
      {
        name: 'Nek en schouderontspanning',
        description: 'Kantel je hoofd zachtjes naar één schouder, voel de rek, wissel van kant.',
        duration: 45,
        animation: 'neck_release',
        encouragements: [
          'Je nek wordt licht als een veer.',
          'Deze zachte beweging bereidt je voor op diepe rust.'
        ]
      },
      {
        name: 'Liggende diepe ademhaling',
        description: 'Liggend op je rug, leg je handen op je buik en voel hoe je buik omhoog komt bij inademen.',
        duration: 60,
        animation: 'lying_breath',
        encouragements: [
          'Je lichaam zakt dieper in de steun onder je met elke adem.',
          'Je bent als een bloemblad, drijvend op een kalm meer.'
        ]
      }
    ]
  }
];

// Get a random encouragement for a specific exercise
export const getRandomEncouragement = (sessionId, exerciseName) => {
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return "Je doet het geweldig!";
  
  const exercise = session.exercises.find(e => e.name === exerciseName);
  if (!exercise || !exercise.encouragements || exercise.encouragements.length === 0) {
    return "Je beweegt met gratie en kracht!";
  }
  
  const randomIndex = Math.floor(Math.random() * exercise.encouragements.length);
  return exercise.encouragements[randomIndex];
};
