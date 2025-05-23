// Collection of motivational and inspirational quotes for the app
// Themed around gentle movement, self-acceptance, and flower/hippie philosophy

export const quotes = [
  // Daily wisdom quotes
  {
    text: "Je lichaam is je tempel. Houd het schoon en zuiver voor de ziel om erin te wonen.",
    author: "B.K.S. Iyengar",
    category: "daily"
  },
  {
    text: "Beweging is een medicijn dat je elke dag kunt nemen.",
    author: "Wijsheid uit bloemen",
    category: "daily"
  },
  {
    text: "Het is niet het doel om de perfecte houding te bereiken; het doel is om jezelf te perfectioneren in elke houding.",
    author: "Hippie wijsheid",
    category: "daily"
  },
  {
    text: "Adem in vrede, adem uit liefde.",
    author: "Bloemenpacht",
    category: "daily"
  },
  {
    text: "Wees zacht voor jezelf. Je bent een bloeiende bloem, geen boom die niet mag buigen.",
    author: "Wijsheid uit de tuin",
    category: "daily"
  },
  {
    text: "Behandel je lichaam als een liefdevol huis, geen strenge gevangenis.",
    author: "Mandala wijsheid",
    category: "daily"
  },
  {
    text: "Je bent precies waar je moet zijn. Elke stap voorwaarts, hoe klein ook, is een viering waard.",
    author: "Pad van de lotus",
    category: "daily"
  },
  
  // Achievement quotes - shown when completing goals
  {
    text: "Elke kleine stap vooruit is een overwinning waard om te vieren.",
    author: "Bloemenpad",
    category: "achievement"
  },
  {
    text: "Een reis van duizend mijlen begint met een enkele stap. Vandaag heb je weer stappen gezet.",
    author: "Lao Tzu",
    category: "achievement"
  },
  {
    text: "Je kracht ligt niet in wat je kunt doen, maar in wat je besluit te doen ondanks beperkingen.",
    author: "Bloemenkracht",
    category: "achievement"
  },
  {
    text: "In elke beweging heb je jezelf liefde gegeven. Dit is de grootste gift.",
    author: "Hippie wijsheid",
    category: "achievement"
  },
  {
    text: "Zoals een lotus groeit vanuit de modder, zo groeit ook jouw kracht uit elke uitdaging.",
    author: "Indische wijsheid",
    category: "achievement"
  },
  
  // Comfort quotes - for when skipping sessions or returning after a break
  {
    text: "Elke dag is een nieuwe kans om opnieuw te beginnen. Er is geen perfecte weg, alleen jouw weg.",
    author: "Bloemenkracht",
    category: "comfort"
  },
  {
    text: "Zoals de seizoenen veranderen, verandert ook jouw lichaam. Wees geduldig met jezelf.",
    author: "Natuurlijke wijsheid",
    category: "comfort"
  },
  {
    text: "Rust is even belangrijk als beweging. Balans is de sleutel tot duurzame groei.",
    author: "Hippie wijsheid",
    category: "comfort"
  },
  {
    text: "Sta jezelf toe te struikelen. Dat is hoe je leert dansen met de wind.",
    author: "Bloemenpad wijsheid",
    category: "comfort"
  },
  
  // Knee-specific quotes
  {
    text: "Elk gewricht heeft zijn eigen verhaal te vertellen. Luister naar het verhaal van je knie met compassie.",
    author: "Helende wijsheid",
    category: "knee"
  },
  {
    text: "Zoals een bloem langzaam opent, zo heelt je knie met geduld en zachte aandacht.",
    author: "Bloemengenezing",
    category: "knee"
  },
  {
    text: "Je knie draagt je door het leven. Met elke zachte oefening bedank je het voor zijn dienst.",
    author: "Dankbare beweging",
    category: "knee"
  },
  {
    text: "Wees niet gehaast in je herstel. Een gewricht dat met liefde wordt behandeld, bloeit weer op.",
    author: "Wijsheid uit de tuin",
    category: "knee"
  },
  
  // Morning quotes
  {
    text: "Zoals de zon elke dag opnieuw opkomt, zo is elke ochtend een nieuwe kans om te bewegen.",
    author: "Zonnegroet wijsheid",
    category: "morning"
  },
  {
    text: "Ontwaken is niet alleen voor je geest, maar ook voor je lichaam. Laat je spieren zachtjes ontwaken.",
    author: "Ochtendbloei",
    category: "morning"
  },
  {
    text: "De ochtend verwelkomt je met open armen. Begroet het met een lichaam dat openstaat voor de dag.",
    author: "Ochtendmandala",
    category: "morning"
  },
  
  // Evening quotes
  {
    text: "Zoals bloemen sluiten in de avond, mag je lichaam nu tot rust komen.",
    author: "Avondritueel",
    category: "evening"
  },
  {
    text: "Laat de stress van de dag wegvloeien met elke ademhaling, zoals dauw van een bloemblad glijdt.",
    author: "Zonsondergang wijsheid",
    category: "evening"
  },
  {
    text: "In de stilte van de avond vind je de stem van je lichaam. Luister met liefde.",
    author: "Avondmandala",
    category: "evening"
  }
];

// Get a random quote by category
export const getRandomQuote = (category = 'daily') => {
  const categoryQuotes = quotes.filter(quote => quote.category === category);
  
  if (categoryQuotes.length === 0) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
};

// Get quote of the day (same quote for the whole day)
export const getQuoteOfTheDay = () => {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const pseudoRandom = Math.sin(seed) * 10000;
  const index = Math.floor((pseudoRandom - Math.floor(pseudoRandom)) * quotes.length);
  
  return quotes[Math.abs(index) % quotes.length];
};
