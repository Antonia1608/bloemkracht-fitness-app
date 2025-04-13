// Detailed exercise definitions for the BloemKracht app
// These are categorized exercises that can be used in different sessions

export const exercises = {
  // ===== KNEE-FRIENDLY EXERCISES =====
  knee: [
    {
      id: 'seated_leg_extensions',
      name: 'Zittende beenstrekkingen',
      description: 'Zittend op een stoel, strek langzaam je been volledig uit en houd 3 seconden vast. Laat dan langzaam zakken. Wissel van been.',
      duration: 45, // in seconds
      animation: 'leg_extension',
      intensity: 'Mild',
      targetAreas: ['quadriceps', 'knee'],
      encouragements: [
        'Perfect! Je quadriceps worden sterker zonder druk op je knie.',
        'Elke kleine beweging helpt je knie te genezen.',
        'Voel hoe je dijspieren werken terwijl je knie veilig blijft.'
      ],
      tips: [
        'Houd je rug recht tegen de rugleuning',
        'Beweeg langzaam en gecontroleerd',
        'Niet volledig strekken als dit pijnlijk voelt'
      ],
      adaptations: {
        easier: 'Strek minder ver als dit comfortabeler is',
        harder: 'Houd de gestrekte positie 5 seconden vast'
      }
    },
    {
      id: 'static_quadriceps',
      name: 'Statische quadriceps',
      description: 'Zittend, span je bovenbeen aan zonder je been te bewegen. Houd 5 seconden vast, ontspan dan. Focus op het gevoel in je dijspier.',
      duration: 60,
      animation: 'quad_static',
      intensity: 'Zeer mild',
      targetAreas: ['quadriceps'],
      encouragements: [
        'Geweldig! Je versterkt je spieren zelfs zonder beweging.',
        'Deze oefening is perfect geschikt voor je knie.',
        'Voel de energie stromen naar je dijspier zonder je knie te belasten.'
      ],
      tips: [
        'Visualiseer je spier die sterker wordt',
        'Blijf normaal ademen tijdens het aanspannen',
        'Probeer alleen de dijspier aan te spannen, niet de hele leg'
      ]
    },
    {
      id: 'ankle_circles',
      name: 'Enkel cirkels',
      description: 'Strek je been uit en maak grote cirkels met je voet, eerst rechtsom dan linksom. Dit verbetert circulatie en mobiliteit.',
      duration: 45,
      animation: 'ankle_circles',
      intensity: 'Zeer mild',
      targetAreas: ['ankle', 'calf'],
      encouragements: [
        'Voel hoe je onderbeen soepeler wordt met elke cirkel.',
        'Je ankels ondersteunen je knieën, dit helpt je hele been.',
        'Je voeten dragen je door het leven, geef ze wat liefde met deze beweging.'
      ]
    },
    {
      id: 'seated_hamstring',
      name: 'Zittende hamstring activatie',
      description: 'Zittend, druk je hiel zachtjes in de vloer terwijl je je knie licht gebogen houdt. Voel de achterkant van je been aanspannen.',
      duration: 60,
      animation: 'hamstring_seated',
      intensity: 'Mild',
      targetAreas: ['hamstrings'],
      encouragements: [
        'Je balanceert je beenspieren, precies wat je knie nodig heeft.',
        'Prachtig gedaan. Voorzichtige beweging is helend.',
        'De achterkant van je benen worden sterker, dit ondersteunt je knie.'
      ],
      tips: [
        'Houd de spanning mild, niet te intens',
        'Focus op het gevoel in de achterkant van je been',
        'Combineer met ademhaling: span aan bij uitademen'
      ]
    },
    {
      id: 'hip_rotators',
      name: 'Interne/externe heupdraaiers',
      description: 'Zittend, draai je been zachtjes naar binnen en dan naar buiten terwijl je voet van de grond is. Dit versterkt de stabiliserende spieren rond je knie.',
      duration: 60,
      animation: 'hip_rotators',
      intensity: 'Mild',
      targetAreas: ['hip', 'knee stabilizers'],
      encouragements: [
        'Je heupspieren zijn essentieel voor gezonde knieën.',
        'Deze beweging creëert balans rond je hele gewricht.',
        'Je bouwt een stevige basis voor je knie met deze subtiele beweging.'
      ],
      tips: [
        'Beweeg langzaam en met controle',
        'Houd je romp rechtop en stabiel',
        'Ga niet verder dan comfortabel voelt'
      ]
    },
    {
      id: 'supported_mini_squats',
      name: 'Ondersteunde mini-kniebuigingen',
      description: 'Staand, met je handen op een stoel of aanrecht voor steun, buig lichtjes door je knieën en kom weer omhoog. Een mini-squat zonder veel belasting.',
      duration: 45,
      animation: 'assisted_squats',
      intensity: 'Matig',
      targetAreas: ['quads', 'glutes', 'core'],
      encouragements: [
        'Perfect tempo! Je luistert goed naar je lichaam.',
        'Deze oefening maakt je dagelijkse bewegingen gemakkelijker.',
        'Je bouwt kracht met respect voor je grenzen. Prachtig!'
      ],
      tips: [
        'Houd je knieën boven je voeten, niet ervoorbij',
        'Buig slechts lichtjes, niet diep',
        'Gebruik je handen voor stabiliteit en ontlasting'
      ],
      adaptations: {
        easier: 'Buig nog minder diep',
        harder: 'Houd de laagste positie 2 seconden vast'
      }
    },
    {
      id: 'calf_stretch',
      name: 'Kuitstretchers',
      description: 'Zachtjes je kuit strekken terwijl je tegen een muur leunt, één been naar achteren met de hiel op de grond. Voel de rek in je kuit.',
      duration: 45,
      animation: 'calf_stretch',
      intensity: 'Mild',
      targetAreas: ['calves', 'achilles'],
      encouragements: [
        'Je geeft je hele been aandacht, van teen tot heup.',
        'Je kuit ontspant zich als een bloem die opent in de zon.',
        'Deze stretch verbetert je looppatroon en vermindert druk op je knie.'
      ],
      tips: [
        'Houd beide hielen op de grond',
        'Leun voorwaarts voor meer stretch',
        'Wissel regelmatig van been'
      ]
    }
  ],
  
  // ===== CORE & STABILITY EXERCISES =====
  core: [
    {
      id: 'breathing_activation',
      name: 'Ademhalingsactivatie',
      description: 'Adem diep in door je neus, laat je buik uitzetten. Adem langzaam uit door je mond terwijl je je core licht aanspant. Verbind ademhaling met core.',
      duration: 60,
      animation: 'breathing',
      intensity: 'Zeer mild',
      targetAreas: ['core', 'diaphragm'],
      encouragements: [
        'Je activeert je diepste core spieren met elke ademhaling.',
        'Deze subtiele beweging is de basis van alle kracht.',
        'Je creëert ruimte en energie in je centrum.'
      ]
    },
    {
      id: 'wall_plank',
      name: 'Muur plank',
      description: 'Sta met je voorarmen tegen de muur, leun iets naar voren zodat je core moet werken. Een zachte versie van de plank zonder vloerwerk.',
      duration: 45,
      animation: 'wall_plank',
      intensity: 'Mild tot matig',
      targetAreas: ['core', 'shoulders', 'back'],
      encouragements: [
        'Je bouwt core stabiliteit op een knie-vriendelijke manier.',
        'Voel hoe je midden sterker wordt met elke ademhaling.',
        'Een sterke core beschermt je knieën bij dagelijkse bewegingen.'
      ]
    },
    {
      id: 'seated_twist',
      name: 'Zittende twist',
      description: 'Zittend op een stoel, draai rustig je bovenlichaam naar rechts, dan links. Houd je heupen naar voren gericht. Goed voor je rugflexibiliteit.',
      duration: 45,
      animation: 'seated_twist',
      intensity: 'Mild',
      targetAreas: ['core', 'spine'],
      encouragements: [
        'Je wervelkolom wordt soepeler met elke zachte draai.',
        'Voel hoe je organen een zachte massage krijgen.',
        'Je brengt beweging in delen die vaak stijf worden.'
      ]
    },
    {
      id: 'seated_leg_lifts',
      name: 'Zittende beenlift',
      description: 'Zittend op een stevige stoel, til afwisselend je rechterbeen en linkerbeen lichtjes op. Focus op balans en core stabiliteit.',
      duration: 60,
      animation: 'seated_leg_lift',
      intensity: 'Mild tot matig',
      targetAreas: ['core', 'hip flexors'],
      encouragements: [
        'Je activeert je core terwijl je veilig zit.',
        'Voel hoe je rompspieren werken om je in balans te houden.',
        'Deze eenvoudige beweging creëert kracht in je centrum.'
      ]
    }
  ],
  
  // ===== UPPER BODY EXERCISES =====
  upperBody: [
    {
      id: 'shoulder_openers',
      name: 'Schouder openers',
      description: 'Met of zonder weerstandsband, breng je armen zachtjes naar buiten alsof je een bloem opent. Open je borst en trek je schouderbladen samen.',
      duration: 45,
      animation: 'shoulder_open',
      intensity: 'Mild',
      targetAreas: ['shoulders', 'upper back'],
      encouragements: [
        'Je opent je hart als een bloem naar de zon.',
        'Voel hoe je bovenrug zich strekt en versterkt.',
        'Deze beweging helpt je houding gedurende de dag.'
      ]
    },
    {
      id: 'wall_pushups',
      name: 'Muur push-ups',
      description: 'Sta op armlengte van de muur, plaats je handen op schouderhoogte op de muur. Buig je ellebogen om naar de muur te leunen, duw dan terug.',
      duration: 45,
      animation: 'wall_pushup',
      intensity: 'Mild tot matig',
      targetAreas: ['chest', 'shoulders', 'arms'],
      encouragements: [
        'Je bouwt bovenlichaamkracht zonder belasting van je knieën.',
        'Voel hoe je armen en borst sterker worden.',
        'Deze beweging helpt je bij alledaagse duw-bewegingen.'
      ]
    },
    {
      id: 'arm_circles',
      name: 'Armcirkels',
      description: 'Strek je armen zijwaarts uit en maak kleine, dan middelgrote, dan grote cirkels voorwaarts en achterwaarts.',
      duration: 45,
      animation: 'arm_circles',
      intensity: 'Mild',
      targetAreas: ['shoulders', 'upper back'],
      encouragements: [
        'Je schouders worden soepeler met elke cirkel.',
        'Voel de energie door je armen stromen.',
        'Je masseert je schoudergewrichten met deze vloeiende beweging.'
      ]
    },
    {
      id: 'seated_back_extension',
      name: 'Zittende rugstrekkers',
      description: 'Zittend op een stoel, plaats je handen op je onderrug en leun lichtjes achterover. Strek je bovenrug en open je borst.',
      duration: 45,
      animation: 'back_extension',
      intensity: 'Mild',
      targetAreas: ['mid back', 'spine'],
      encouragements: [
        'Je geeft je rug precies wat het nodig heeft - zachte beweging.',
        'Voel hoe je wervelkolom zich verlengt en opent.',
        'Deze beweging helpt tegen de dagelijkse voorwaartse houding.'
      ]
    }
  ],
  
  // ===== RELAXATION EXERCISES =====
  relaxation: [
    {
      id: 'deep_breathing',
      name: 'Diepe ademhaling',
      description: 'Adem 4 tellen in, houd 2 vast, adem 6 tellen uit. Herhaal. Focus op volledige buikademhaling voor ontspanning.',
      duration: 60,
      animation: 'deep_breathing',
      intensity: 'Zeer mild',
      targetAreas: ['mind', 'nervous system'],
      encouragements: [
        'Voel hoe je lichaam zachter wordt met elke uitademing.',
        'Je laat de dag van je afglijden als watergolven.',
        'Deze ademhaling kalmeert je hele systeem.'
      ]
    },
    {
      id: 'neck_release',
      name: 'Nek en schouderontspanning',
      description: 'Kantel je hoofd zachtjes naar één schouder, voel de rek, wissel van kant. Maak dan langzame halve cirkels met je kin.',
      duration: 45,
      animation: 'neck_release',
      intensity: 'Zeer mild',
      targetAreas: ['neck', 'shoulders'],
      encouragements: [
        'Je nek wordt licht als een veer.',
        'Deze zachte beweging bereidt je voor op diepe rust.',
        'Voel hoe spanning wegsmelt uit je schouders en nek.'
      ]
    },
    {
      id: 'wrist_circles',
      name: 'Pols ontspanning',
      description: 'Maak kleine cirkels met je polsen, eerst de ene richting, dan de andere. Strek dan je vingers wijd uit en maak een vuist.',
      duration: 30,
      animation: 'wrist_circles',
      intensity: 'Zeer mild',
      targetAreas: ['wrists', 'hands'],
      encouragements: [
        'Je handen en polsen ontspannen na een dag van gebruik.',
        'Voel hoe spanning uit je vingers stroomt.',
        'Deze kleine gewrichten verdienen ook aandacht en liefde.'
      ]
    },
    {
      id: 'seated_forward_fold',
      name: 'Zittende voorwaartse buiging',
      description: 'Zittend op een stoel, laat je bovenlichaam rustig voorover zakken, zo ver als comfortabel is. Laat je hoofd en armen hangen.',
      duration: 45,
      animation: 'seated_fold',
      intensity: 'Mild',
      targetAreas: ['back', 'neck', 'mind'],
      encouragements: [
        'Laat zwaartekracht je helpen ontspannen.',
        'Voel hoe je rug zich verlengt en opent.',
        'Deze houding kalmeert je geest en je zenuwstelsel.'
      ]
    }
  ]
};

// Helper function to get exercises by type
export const getExercisesByType = (type) => {
  return exercises[type] || [];
};

// Helper function to get a random exercise by type
export const getRandomExercise = (type) => {
  const exercisesOfType = getExercisesByType(type);
  if (exercisesOfType.length === 0) return null;
  
  return exercisesOfType[Math.floor(Math.random() * exercisesOfType.length)];
};

// Helper function to get a random encouragement for a specific exercise
export const getRandomEncouragementForExercise = (exerciseId) => {
  // Find the exercise in all categories
  let exercise = null;
  
  for (const category in exercises) {
    const found = exercises[category].find(ex => ex.id === exerciseId);
    if (found) {
      exercise = found;
      break;
    }
  }
  
  if (!exercise || !exercise.encouragements || exercise.encouragements.length === 0) {
    return "Je doet het geweldig!";
  }
  
  return exercise.encouragements[Math.floor(Math.random() * exercise.encouragements.length)];
};
