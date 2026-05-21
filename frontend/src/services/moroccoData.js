export const MOROCCO_CITIES = [
  "Marrakech",
  "Fes",
  "Chefchaouen",
  "Tangier",
  "Casablanca",
  "Rabat",
  "Essaouira",
  "Agadir",
  "Merzouga",
  "Ouarzazate",
  "Ifrane",
  "Dakhla",
  "Tetouan",
  "Al Hoceima",
  "Zagora",
  "Meknes",
  "Asilah",
  "Akchour",
  "Atlas Mountains",
  "Paradise Valley",
  "Legzira",
  "Ouzoud Falls",
  "Volubilis",
  "Ait Ben Haddou",
  "Saidia",
  "El Jadida",
  "Tarfaya",
  "Tafraoute",
  "Bin El Ouidane",
];

// ====== CITY CATEGORY MAPPING ======
// Each city belongs to one primary category that defines the type of activities generated.
export const CITY_CATEGORIES = {
  Marrakech: "imperial",
  Fes: "imperial",
  Meknes: "imperial",
  Rabat: "imperial",
  Casablanca: "imperial",
  Tetouan: "imperial",
  Volubilis: "imperial",
  Chefchaouen: "imperial",

  Merzouga: "desert",
  Zagora: "desert",
  Ouarzazate: "desert",
  "Ait Ben Haddou": "desert",
  Tarfaya: "desert",

  Legzira: "beach",
  Dakhla: "beach",
  Agadir: "beach",
  Saidia: "beach",
  "Al Hoceima": "beach",
  Essaouira: "beach",
  Asilah: "beach",
  "El Jadida": "beach",
  Tangier: "beach",

  "Atlas Mountains": "nature",
  "Paradise Valley": "nature",
  "Ouzoud Falls": "nature",
  Akchour: "nature",
  Ifrane: "nature",
  Tafraoute: "nature",
  "Bin El Ouidane": "nature",
};

export const getCityCategory = (cityName) => {
  return CITY_CATEGORIES[cityName] || "imperial";
};

export const CITY_IMAGE_MAP = {
  Marrakech: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1400&q=80",
  Fes: "https://images.unsplash.com/photo-1631545806603-066f6a1940c0?auto=format&fit=crop&w=1400&q=80",
  Chefchaouen: "https://images.unsplash.com/photo-1611150218086-2f9058df7297?auto=format&fit=crop&w=1400&q=80",
  Agadir: "https://images.unsplash.com/photo-1664020206760-b45f9f271594?auto=format&fit=crop&w=1400&q=80",
  Tangier: "https://images.unsplash.com/photo-1687943625788-b4de67f5ef92?auto=format&fit=crop&w=1400&q=80",
  Merzouga: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=80",
  Ouarzazate: "https://images.unsplash.com/photo-1709291535925-572d879ca759?auto=format&fit=crop&w=1400&q=80",
  Casablanca: "https://images.unsplash.com/photo-1567601380901-7db4f9f23be7?auto=format&fit=crop&w=1400&q=80",
  Rabat: "https://images.unsplash.com/photo-1705155227717-ec5f8d85666a?auto=format&fit=crop&w=1400&q=80",
  Essaouira: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
  Ifrane: "https://images.unsplash.com/photo-1649872493865-8e925ebca9e5?auto=format&fit=crop&w=1400&q=80",
  Dakhla: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80",
  Tetouan: "https://images.unsplash.com/photo-1548018560-c7c6412d1aa1?auto=format&fit=crop&w=1400&q=80",
  "Al Hoceima": "https://images.unsplash.com/photo-1490077476659-095159692ab5?auto=format&fit=crop&w=1400&q=80",
  Zagora: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=80",
  Meknes: "https://images.unsplash.com/photo-1631545806603-066f6a1940c0?auto=format&fit=crop&w=1400&q=80",
  Asilah: "https://images.unsplash.com/photo-1548018560-c7c6412d1aa1?auto=format&fit=crop&w=1400&q=80",
  Akchour: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80",
  "Atlas Mountains": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80",
  "Paradise Valley": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80",
  Legzira: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
  "Ouzoud Falls": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80",
  Volubilis: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1400&q=80",
  "Ait Ben Haddou": "https://images.unsplash.com/photo-1709291535925-572d879ca759?auto=format&fit=crop&w=1400&q=80",
  Saidia: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80",
  "El Jadida": "https://images.unsplash.com/photo-1567601380901-7db4f9f23be7?auto=format&fit=crop&w=1400&q=80",
  Tarfaya: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80",
  Tafraoute: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80",
  "Bin El Ouidane": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80",
};

export const CONTEXT_IMAGE_MAP = {
  restaurant: [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
  ],
  dining: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  ],
  lunch: [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
  ],
  dinner: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  ],
  cafe: [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
  ],
  riad: [
    "https://images.unsplash.com/photo-1598935888738-cd2622bcd437?auto=format&fit=crop&w=1400&q=80",
  ],
  hotel: [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
  ],
  hammam: [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
  ],
  souk: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=80",
  ],
  desert: [
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=80",
  ],
  hiking: [
    "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=80",
  ],
  beach: [
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80",
  ],
  museum: [
    "https://images.unsplash.com/photo-1573648952759-0d5d7e7b9eb0?auto=format&fit=crop&w=1400&q=80",
  ],
  palace: [
    "https://images.unsplash.com/photo-1624439762564-2b71d3af5793?auto=format&fit=crop&w=1400&q=80",
  ],
  waterfall: [
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80",
  ],
  surfing: [
    "https://images.unsplash.com/photo-1502680390548-bdbac40ca449?auto=format&fit=crop&w=1400&q=80",
  ],
  mountain: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
  ],
  lake: [
    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1400&q=80",
  ],
};

export const guessCategoryFromText = (text = "") => {
  const t = text.toLowerCase();
  if (t.match(/hammam|bain|bath|spa/)) return "hammam";
  if (t.match(/riad|ryad/)) return "riad";
  if (t.match(/hotel|hostel|lodge/)) return "hotel";
  if (t.match(/desert|dune|sahara/)) return "desert";
  if (t.match(/beach|plage|surf/)) return "beach";
  if (t.match(/hiking|trek|mountain|randonnée/)) return "hiking";
  if (t.match(/souk|market|bazaar/)) return "souk";
  if (t.match(/museum|exposition/)) return "museum";
  if (t.match(/palace|palais|kasbah/)) return "palace";
  if (t.match(/dinner|diner/)) return "dinner";
  if (t.match(/lunch|déjeuner/)) return "lunch";
  if (t.match(/cafe|café|coffee|tea/)) return "cafe";
  if (t.match(/waterfall|cascade|chute/)) return "waterfall";
  if (t.match(/surf|surfing/)) return "surfing";
  if (t.match(/lake|lac|barrage/)) return "lake";
  return null;
};

export const getMoroccoImageByText = (text, contextText = "") => {
  const combinedContext = `${text || ""} ${contextText || ""}`;
  const contextCategory = guessCategoryFromText(combinedContext);
  if (contextCategory && CONTEXT_IMAGE_MAP[contextCategory]) {
    return CONTEXT_IMAGE_MAP[contextCategory][0];
  }
  const lowerText = (text || "").toLowerCase();
  const city = MOROCCO_CITIES.find((item) =>
    lowerText.includes(item.toLowerCase())
  );
  return city ? CITY_IMAGE_MAP[city] : "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1400&q=80";
};

const ACTIVITIES = {
  imperial: {
    EN: [
      [
        { time: "Morning", place: "Medina & Historic Souks", details: "Wander through the labyrinthine alleys of the old medina, discovering artisan workshops, spice stalls, and handcrafted leather goods.", ticket_pricing: "Free", rating: "4.7" },
        { time: "Lunch", place: "Café Maure", details: "Savor traditional Moroccan mint tea and pastilla on a panoramic rooftop terrace overlooking the medina rooftops.", ticket_pricing: "80–150 MAD", rating: "4.5" },
        { time: "Afternoon", place: "Royal Palace & Gardens", details: "Explore the majestic royal palace grounds, admire intricate zellige tilework and carved cedarwood, and stroll through manicured Andalusian gardens.", ticket_pricing: "70 MAD", rating: "4.8" },
        { time: "Evening", place: "Traditional Moroccan Dinner", details: "End the day with a multi-course dinner of slow-cooked lamb tagine, couscous with seven vegetables, and fresh orange blossom pastries.", ticket_pricing: "200–350 MAD", rating: "4.9" }
      ],
      [
        { time: "Morning", place: "Medersa & Koranic School", details: "Visit an ancient Islamic school featuring stunning stucco carvings, marble columns, and peaceful interior courtyards reflecting centuries of scholarship.", ticket_pricing: "30 MAD", rating: "4.8" },
        { time: "Lunch", place: "Local Street Food Tour", details: "Taste authentic msemen flatbreads, harira soup, and freshly grilled merguez sausages at bustling street-side stalls.", ticket_pricing: "50–100 MAD", rating: "4.6" },
        { time: "Afternoon", place: "Traditional Hammam & Spa", details: "Relax with a full traditional Moroccan bath experience — black soap scrub, rhassoul clay mask, and argan oil massage.", ticket_pricing: "200–400 MAD", rating: "4.9" },
        { time: "Evening", place: "Rooftop Sunset Lounge", details: "Watch the sun set over the city skyline from a stylish rooftop lounge while enjoying fresh juices, Moroccan tapas, and live Gnawa music.", ticket_pricing: "100–200 MAD", rating: "4.7" }
      ],
      [
        { time: "Morning", place: "Museum of Moroccan Arts", details: "Discover rich collections of Berber jewelry, antique carpets, traditional ceramics, and regional musical instruments.", ticket_pricing: "50 MAD", rating: "4.5" },
        { time: "Lunch", place: "Riad Restaurant", details: "Dine inside a beautifully restored riad, enjoying pastilla au pigeon, zaalouk salad, and fresh-baked khobz bread.", ticket_pricing: "120–220 MAD", rating: "4.7" },
        { time: "Afternoon", place: "Artisan Quarter & Tanneries", details: "Watch master craftsmen dye leather using centuries-old techniques in open-air stone vats, and browse handmade leather bags and shoes.", ticket_pricing: "Free (tip expected)", rating: "4.4" },
        { time: "Evening", place: "Night Market & Local Entertainment", details: "Immerse yourself in the evening atmosphere of the main square with storytellers, snake charmers, henna artists, and sizzling open-air grills.", ticket_pricing: "Free", rating: "4.8" }
      ]
    ],
    FR: [
      [
        { time: "Matin", place: "Médina & Souks Historiques", details: "Déambulez dans les ruelles labyrinthiques de la vieille médina, découvrez les ateliers d'artisans, les étals d'épices et la maroquinerie artisanale.", ticket_pricing: "Gratuit", rating: "4.7" },
        { time: "Midi", place: "Café Maure", details: "Savourez du thé à la menthe marocain traditionnel et de la pastilla sur une terrasse panoramique offrant une vue imprenable sur la médina.", ticket_pricing: "80–150 MAD", rating: "4.5" },
        { time: "Après-midi", place: "Palais Royal & Jardins", details: "Explorez le majestueux palais royal, admirez les zelliges raffinés et le bois de cèdre sculpté, puis promenez-vous dans les magnifiques jardins andalous.", ticket_pricing: "70 MAD", rating: "4.8" },
        { time: "Soir", place: "Dîner Marocain Traditionnel", details: "Terminez la journée par un dîner traditionnel composé de tajine d'agneau mijoté, de couscous aux sept légumes et de pâtisseries à la fleur d'oranger.", ticket_pricing: "200–350 MAD", rating: "4.9" }
      ],
      [
        { time: "Matin", place: "Médersa & École Coranique", details: "Visitez une ancienne école coranique ornée de stucs sculptés, de colonnes de marbre et d'une cour paisible témoignant de siècles d'histoire.", ticket_pricing: "30 MAD", rating: "4.8" },
        { time: "Midi", place: "Tour Culinaire de Rue", details: "Dégustez des galettes msemen authentiques, de la soupe harira et des saucisses merguez grillées sur les étals animés.", ticket_pricing: "50–100 MAD", rating: "4.6" },
        { time: "Après-midi", place: "Hammam & Spa Traditionnel", details: "Détendez-vous avec un rituel complet de hammam marocain — gommage au savon noir, enveloppement au rhassoul et massage à l'huile d'argan.", ticket_pricing: "200–400 MAD", rating: "4.9" },
        { time: "Soir", place: "Salon de Coucher de Soleil sur le Toit", details: "Contemplez le coucher de soleil depuis un rooftop élégant tout en savourant des jus de fruits frais, des tapas marocaines et de la musique Gnawa live.", ticket_pricing: "100–200 MAD", rating: "4.7" }
      ],
      [
        { time: "Matin", place: "Musée des Arts Marocains", details: "Découvrez de riches collections de bijoux berbères, de tapis anciens, de céramiques traditionnelles et d'instruments de musique.", ticket_pricing: "50 MAD", rating: "4.5" },
        { time: "Midi", place: "Restaurant de Riad", details: "Dînez au cœur d'un riad magnifiquement restauré, en dégustant une pastilla, de la salade zaalouk et du pain khobz chaud.", ticket_pricing: "120–220 MAD", rating: "4.7" },
        { time: "Après-midi", place: "Quartier des Artisans & Tanneries", details: "Observez les artisans teindre le cuir selon des techniques ancestrales dans des cuves en pierre, et découvrez la maroquinerie fine.", ticket_pricing: "Gratuit (pourboire apprécié)", rating: "4.4" },
        { time: "Soir", place: "Marché Nocturne & Spectacles", details: "Plongez dans l'ambiance nocturne de la place principale animée par des conteurs, des charmeurs de serpents et des barbecues géants.", ticket_pricing: "Gratuit", rating: "4.8" }
      ]
    ],
    AR: [
      [
        { time: "صباحاً", place: "المدينة العتيقة والأسواق التاريخية", details: "تجول في الأزقة المتاهية للمدينة العتيقة، واكتشف ورش الحرفيين، وأكشاك التوابل، والمنتجات الجلدية المصنوعة يدويًا.", ticket_pricing: "مجاني", rating: "4.7" },
        { time: "غداء", place: "المقهى الموريسكي", details: "تذوق الشاي المغربي التقليدي بالنعناع والبسطيلة على شرفة سطح بانورامية تطل على أسطح المدينة العتيقة.", ticket_pricing: "80–150 درهم", rating: "4.5" },
        { time: "بعد الزوال", place: "القصر الملكي والحدائق", details: "استكشف ساحات القصر الملكي المهيب، وتأمل أعمال الزليج المعقدة وخشب الأرز المنحوت، وتجول في الحدائق الأندلسية المنسقة.", ticket_pricing: "70 درهم", rating: "4.8" },
        { time: "مساءً", place: "عشاء مغربي تقليدي", details: "اختتم يومك بعشاء متعدد الأطباق من طاجين اللحم المطبوخ ببطء، والكسكس بالخضروات السبع، وحلويات ماء الزهر الطازجة.", ticket_pricing: "200–350 درهم", rating: "4.9" }
      ],
      [
        { time: "صباحاً", place: "المدرسة القرآنية والأثرية", details: "قم بزيارة مدرسة إسلامية عريقة تتميز بنقوش الجبس الرائعة، والأعمدة الرخامية، والساحات الداخلية الهادئة التي تعكس قروناً من العلم.", ticket_pricing: "30 درهم", rating: "4.8" },
        { time: "غداء", place: "جولة أطعمة الشارع المحلية", details: "تذوق رغيف المسمن الأصيل، وحساء الحريرية، ونقانق المرقاز المشوية الطازجة في أكشاك الشارع النابضة بالحياة.", ticket_pricing: "50–100 درهم", rating: "4.6" },
        { time: "بعد الزوال", place: "الحمام التقليدي والسبا", details: "استرخِ مع تجربة حمام مغربي تقليدي كاملة — فرك بالصابون البلدي، وقناع طين الغاسول، وتدليك بزيت الأركان.", ticket_pricing: "200–400 درهم", rating: "4.9" },
        { time: "مساءً", place: "لاونج السطح عند الغروب", details: "شاهد غروب الشمس فوق أفق المدينة من شرفة سطح أنيقة بينما تستمتع بالعصائر الطازجة، والمقبلات المغربية، وموسيقى كناوة الحية.", ticket_pricing: "100–200 درهم", rating: "4.7" }
      ],
      [
        { time: "صباحاً", place: "متحف الفنون المغربية", details: "اكتشف مجموعات غنية من الحلي الأمازيغية، والزرابي العتيقة، والخزف التقليدي، والآلات الموسيقية الإقليمية.", ticket_pricing: "50 درهم", rating: "4.5" },
        { time: "غداء", place: "مطعم في رياض تقليدي", details: "تناول طعامك داخل رياض تم ترميمه بشكل جميل، مستمتعاً ببسطيلة الحمام، وسلطة الزعلوك، وخبز الدار الساخن الطازج.", ticket_pricing: "120–220 درهم", rating: "4.7" },
        { time: "بعد الزوال", place: "حي الحرفيين والدباغة", details: "شاهد المعلمين الحرفيين يصبغون الجلد باستخدام تقنيات عمرها قرون في أحواض حجرية مفتوحة، وتصفح الحقائب والأحذية الجلدية المصنوعة يدويًا.", ticket_pricing: "مجاني (بخشيش متوقع)", rating: "4.4" },
        { time: "مساءً", place: "السوق الليلي والعروض المحلية", details: "انغمس في الأجواء المسائية للساحة الرئيسية مع الحكواتيين، ومروضي الأفاعي، ونقاشات الحناء، والمشاوي المفتوحة الساخنة.", ticket_pricing: "مجاني", rating: "4.8" }
      ]
    ]
  },
  desert: {
    EN: [
      [
        { time: "Morning", place: "Sunrise Camel Trek", details: "Rise before dawn and ride a dromedary camel across golden Saharan dunes as the first light paints the desert in shades of amber and pink.", ticket_pricing: "250–400 MAD", rating: "4.9" },
        { time: "Lunch", place: "Berber Nomad Camp", details: "Share a meal with local Berber nomads — fresh-baked bread cooked in sand, slow-simmered lentil stew, and sweet mint tea.", ticket_pricing: "100–180 MAD", rating: "4.7" },
        { time: "Afternoon", place: "Sandboarding on the Dunes", details: "Experience the thrill of sandboarding down towering Erg dunes, followed by a peaceful walk to a hidden desert oasis.", ticket_pricing: "150 MAD", rating: "4.6" },
        { time: "Evening", place: "Desert Stargazing & Campfire", details: "Sit around a crackling campfire under one of the clearest night skies on Earth, listening to traditional Gnawa drumming and Berber folk songs.", ticket_pricing: "Included in camp stay", rating: "5.0" }
      ],
      [
        { time: "Morning", place: "Kasbah & Fortress Exploration", details: "Explore a centuries-old kasbah fortress made of rammed earth, climbing to the rooftop for sweeping views of palm-filled oasis valleys.", ticket_pricing: "30–60 MAD", rating: "4.6" },
        { time: "Lunch", place: "Oasis Palm Grove Picnic", details: "Enjoy a shaded picnic lunch under date palms by a cool irrigation canal — fresh salads, grilled chicken, and Moroccan flatbreads.", ticket_pricing: "80–150 MAD", rating: "4.5" },
        { time: "Afternoon", place: "4x4 Desert Safari", details: "Speed across rocky desert plains and sandy tracks in a 4x4 vehicle, stopping at dramatic viewpoints and ancient fossil beds.", ticket_pricing: "350–500 MAD", rating: "4.8" },
        { time: "Evening", place: "Luxury Desert Bivouac Dinner", details: "Dine under a canopy of stars at a luxury desert camp — grilled lamb mechoui, Berber couscous, and traditional entertainment.", ticket_pricing: "300–500 MAD", rating: "4.9" }
      ],
      [
        { time: "Morning", place: "Desert Quad Biking", details: "Rev up a quad bike and race across the open desert landscape, weaving between dunes and dried river beds.", ticket_pricing: "300–450 MAD", rating: "4.7" },
        { time: "Lunch", place: "Desert Khaima Tent Lunch", details: "Rest in a traditional Berber khaima tent and enjoy tangia (slow-cooked clay pot stew) with fresh vegetables and warm bread.", ticket_pricing: "100–200 MAD", rating: "4.6" },
        { time: "Afternoon", place: "Fossil & Mineral Discovery", details: "Visit local fossil sites to see ancient trilobites and ammonites preserved in stone, and browse a cooperative selling polished mineral specimens.", ticket_pricing: "Free", rating: "4.3" },
        { time: "Evening", place: "Sunset Dune Walk & Photography", details: "Hike to the summit of the tallest dune for a breathtaking sunset panorama — perfect for photography as shadows stretch across the sand sea.", ticket_pricing: "Free", rating: "4.9" }
      ]
    ],
    FR: [
      [
        { time: "Matin", place: "Randonnée à dos de dromadaire au lever du soleil", details: "Levez-vous avant l'aube et montez à dos de dromadaire sur les dunes dorées du Sahara alors que la première lumière peint le désert de nuances ambrées.", ticket_pricing: "250–400 MAD", rating: "4.9" },
        { time: "Midi", place: "Camp Nomade Berbère", details: "Partagez un repas avec des nomades berbères locaux — pain frais cuit dans le sable, ragoût de lentilles mijoté et thé à la menthe.", ticket_pricing: "100–180 MAD", rating: "4.7" },
        { time: "Après-midi", place: "Sandboarding sur les Dunes", details: "Vivez le frisson de descendre les immenses dunes de l'Erg sur un surf de sable, suivi d'une promenade paisible vers une oasis cachée.", ticket_pricing: "150 MAD", rating: "4.6" },
        { time: "Soir", place: "Observation des Étoiles & Feu de camp", details: "Asseyez-vous autour d'un feu de camp crépitant sous l'un des ciels nocturnes les plus purs de la Terre, au son des tambours Gnawa.", ticket_pricing: "Inclus avec le camp", rating: "5.0" }
      ],
      [
        { time: "Matin", place: "Exploration des Kasbahs & Forteresses", details: "Explorez une forteresse kasbah centenaire en terre battue, montez sur le toit pour admirer la vue sur les vallées de l'oasis.", ticket_pricing: "30–60 MAD", rating: "4.6" },
        { time: "Midi", place: "Pique-nique dans la Palmeraie", details: "Savourez un pique-nique ombragé sous les palmiers dattiers — salades fraîches, poulet grillé et galettes marocaines.", ticket_pricing: "80–150 MAD", rating: "4.5" },
        { time: "Après-midi", place: "Safari en 4x4 dans le désert", details: "Parcourez les pistes sablonneuses à bord d'un véhicule 4x4, avec des arrêts sur des points de vue spectaculaires et des gisements de fossiles.", ticket_pricing: "350–500 MAD", rating: "4.8" },
        { time: "Soir", place: "Dîner dans un Bivouac de Luxe", details: "Dînez sous les étoiles dans un camp de luxe — méchoui d'agneau grillé, couscous berbère et chants traditionnels autour du feu.", ticket_pricing: "300–500 MAD", rating: "4.9" }
      ],
      [
        { time: "Matin", place: "Quad dans les dunes", details: "Faites le plein de sensations fortes en pilotant un quad à travers les dunes de sable fin.", ticket_pricing: "300–450 MAD", rating: "4.7" },
        { time: "Midi", place: "Déjeuner sous une tente Khaima", details: "Reposez-vous sous une tente traditionnelle en dégustant une tangia (ragoût en pot de terre cuite) avec des légumes frais.", ticket_pricing: "100–200 MAD", rating: "4.6" },
        { time: "Après-midi", place: "Découverte de minéraux et fossiles", details: "Visitez des sites de fossiles locaux pour admirer des ammonites pétrifiées et découvrez une coopérative de minéraux polis.", ticket_pricing: "Gratuit", rating: "4.3" },
        { time: "Soir", place: "Coucher de soleil sur les dunes", details: "Grimpez au sommet de la plus haute dune pour contempler un coucher de soleil époustouflant, idéal pour immortaliser ce moment en photo.", ticket_pricing: "Gratuit", rating: "4.9" }
      ]
    ],
    AR: [
      [
        { time: "صباحاً", place: "رحلة الجمال عند شروق الشمس", details: "استيقظ قبل الفجر واركب الجمل عبر الكثبان الرملية الذهبية في الصحراء بينما يرسم الضوء الأول الصحراء بظلال من اللونين الكهرماني والوردي.", ticket_pricing: "250–400 درهم", rating: "4.9" },
        { time: "غداء", place: "مخيم البدو الأمازيغ", details: "شارك وجبة طعام مع البدو الأمازيغ المحليين — خبز طازج مطبوخ في الرمل، وحساء العدس المطبوخ ببطء، وشاي النعناع الحلو.", ticket_pricing: "100–180 درهم", rating: "4.7" },
        { time: "بعد الزوال", place: "التزلج على الرمال", details: "عش إثارة التزلج على الرمال من الكثبان الرملية الشاهقة، تليها نزهة هادئة إلى واحة صحراوية مخفية.", ticket_pricing: "150 درهم", rating: "4.6" },
        { time: "مساءً", place: "رصد النجوم والنار في الصحراء", details: "اجلس حول نار المخيم المتوقدة تحت واحدة من أوضح السماوات الليلية على الأرض، مستمعًا إلى طبول كناوة والأغاني الشعبية الأمازيغية.", ticket_pricing: "مشمول في إقامة المخيم", rating: "5.0" }
      ],
      [
        { time: "صباحاً", place: "استكشاف القصبات والقلاع الأثرية", details: "استكشف قلعة قصبة عمرها قرون مبنية من الطين، واصعد إلى السطح للاستمتاع بإطلالات بانورامية على وديان الواحات المليئة بالنخيل.", ticket_pricing: "30–60 درهم", rating: "4.6" },
        { time: "غداء", place: "نزهة في واحة النخيل", details: "استمتع بنزهة غداء مظللة تحت أشجار النخيل بجوار قناة ري باردة — سلطات طازجة، دجاج مشوي، وخبز مغربي مسطح.", ticket_pricing: "80–150 درهم", rating: "4.5" },
        { time: "بعد الزوال", place: "سفاري صحراوي بسيارات 4x4", details: "انطلق بسرعة عبر السهول الصحراوية الصخرية والممرات الرملية في سيارة رباعية الدفع، وتوقف عند نقاط المشاهدة الرائعة ومكامن الحفريات القديمة.", ticket_pricing: "350–500 درهم", rating: "4.8" },
        { time: "مساءً", place: "عشاء فاخر في المخيم الصحراوي", details: "تناول العشاء تحت قبة من النجوم في مخيم صحراوي فاخر — خروف مشوي على الطريقة التقليدية، كسكس أمازيغي، وترفيه تقليدي.", ticket_pricing: "300–500 درهم", rating: "4.9" }
      ],
      [
        { time: "صباحاً", place: "ركوب الدراجات الرباعية (الكواد) في الصحراء", details: "انطلق بدراجة رباعية وتسابق عبر المناظر الطبيعية الصحراوية المفتوحة، متنقلاً بين الكثبان الرملية ومجاري الأنهار الجافة.", ticket_pricing: "300–450 درهم", rating: "4.7" },
        { time: "غداء", place: "غداء في خيمة الخيمة الصحراوية", details: "استرخ في خيمة أمازيغية تقليدية واستمتع بالطنجية (لحم مطبوخ ببطء في قدر فخاري) مع الخضار الطازجة والخبز الدافئ.", ticket_pricing: "100–200 درهم", rating: "4.6" },
        { time: "بعد الزوال", place: "اكتشاف الحفريات والمعادن", details: "قم بزيارة مواقع الحفريات المحلية لرؤية ثلاثيات الفصوص والأمونيت القديمة المحفوظة في الحجر، وتصفح تعاونية لبيع عينات المعادن المصقولة.", ticket_pricing: "مجاني", rating: "4.3" },
        { time: "مساءً", place: "نزهة الكثبان الرملية عند الغروب والتصوير", details: "اصعد إلى قمة أعلى كثيب رملي للاستمتاع ببانوراما غروب الشمس الخاطفة للأنفاس — مثالية للتصوير الفوتوغرافي مع امتداد الظلال على بحر الرمال.", ticket_pricing: "مجاني", rating: "4.9" }
      ]
    ]
  },
  beach: {
    EN: [
      [
        { time: "Morning", place: "Beach Walk & Swimming", details: "Start your day with a refreshing swim in crystal-clear Atlantic or Mediterranean waters, followed by a barefoot walk along pristine sandy shores.", ticket_pricing: "Free", rating: "4.7" },
        { time: "Lunch", place: "Beachside Seafood Grill", details: "Feast on freshly caught grilled fish, shrimp skewers, and calamari at an oceanfront restaurant with panoramic sea views.", ticket_pricing: "120–250 MAD", rating: "4.8" },
        { time: "Afternoon", place: "Surfing Lesson", details: "Hit the waves with a professional surf instructor — beginners welcome. Ride Atlantic swells on the best surf breaks in Morocco.", ticket_pricing: "200–350 MAD", rating: "4.6" },
        { time: "Evening", place: "Sunset Coastal Promenade", details: "Stroll along the seaside corniche as the sun dips below the horizon, stopping for fresh fruit smoothies and Moroccan crêpes.", ticket_pricing: "Free", rating: "4.8" }
      ],
      [
        { time: "Morning", place: "Coastal Cliff & Rock Arch Hike", details: "Explore dramatic coastal rock formations and natural stone arches carved by centuries of ocean waves, with stunning photo opportunities.", ticket_pricing: "Free", rating: "4.7" },
        { time: "Lunch", place: "Harbor Fish Market & Grill", details: "Pick your own fish at the local harbor market and have it grilled fresh on the spot with Chermoula sauce, salads, and fresh bread.", ticket_pricing: "80–180 MAD", rating: "4.9" },
        { time: "Afternoon", place: "Jet Ski & Water Sports", details: "Experience adrenaline-pumping jet skiing, parasailing, or paddleboarding across turquoise coastal waters.", ticket_pricing: "250–400 MAD", rating: "4.5" },
        { time: "Evening", place: "Oceanview Rooftop Dinner", details: "Enjoy a candlelit dinner overlooking the moonlit ocean — grilled lobster, saffron rice, and Moroccan rosé wine.", ticket_pricing: "250–450 MAD", rating: "4.9" }
      ],
      [
        { time: "Morning", place: "Kayaking & Coastal Cave Tour", details: "Paddle a sea kayak along the coastline, discovering hidden caves, natural pools, and secluded beaches inaccessible by foot.", ticket_pricing: "200–300 MAD", rating: "4.6" },
        { time: "Lunch", place: "Beach Café & Juice Bar", details: "Relax at a laid-back beach café with avocado toast, fresh orange juice, and panoramic ocean views from a shaded terrace.", ticket_pricing: "60–120 MAD", rating: "4.5" },
        { time: "Afternoon", place: "Old Port & Medina Walk", details: "Explore the charming whitewashed medina streets near the port, browsing local art galleries, souvenir shops, and spice stalls.", ticket_pricing: "Free", rating: "4.4" },
        { time: "Evening", place: "Bonfire Night on the Beach", details: "Gather around a beach bonfire with live acoustic music, freshly grilled sardines, and star-filled skies over the ocean.", ticket_pricing: "Free", rating: "4.8" }
      ]
    ],
    FR: [
      [
        { time: "Matin", place: "Baignade & Balade sur la plage", details: "Commencez votre journée par une baignade rafraîchissante dans les eaux de l'Atlantique ou de la Méditerranée, suivie d'une balade pieds nus sur la plage.", ticket_pricing: "Gratuit", rating: "4.7" },
        { time: "Midi", place: "Grillade de poissons au bord de mer", details: "Régalez-vous de poissons grillés fraîchement pêchés, de brochettes de crevettes et de calamars dans un restaurant face à la mer.", ticket_pricing: "120–250 MAD", rating: "4.8" },
        { time: "Après-midi", place: "Cours de surf", details: "Domptez les vagues avec un instructeur professionnel — idéal pour les débutants sur les meilleurs spots de surf du Maroc.", ticket_pricing: "200–350 MAD", rating: "4.6" },
        { time: "Soir", place: "Promenade côtière au coucher du soleil", details: "Flânez le long de la corniche alors que le soleil se couche, en vous arrêtant pour un smoothie de fruits frais ou des crêpes marocaines.", ticket_pricing: "Gratuit", rating: "4.8" }
      ],
      [
        { time: "Matin", place: "Randonnée des falaises et arches de pierre", details: "Explorez des formations rocheuses impressionnantes et des arches de pierre sculptées par les vagues, idéales pour de superbes photos.", ticket_pricing: "Gratuit", rating: "4.7" },
        { time: "Midi", place: "Poisson frais au port", details: "Choisissez vos poissons au marché du port et faites-les griller sur place, servis avec de la sauce Chermoula et des salades.", ticket_pricing: "80–180 MAD", rating: "4.9" },
        { time: "Après-midi", place: "Jet Ski & Sports Nautiques", details: "Faites le plein d'adrénaline en jet-ski, parachute ascensionnel ou stand-up paddle sur les eaux turquoise.", ticket_pricing: "250–400 MAD", rating: "4.5" },
        { time: "Soir", place: "Dîner face à l'océan", details: "Profitez d'un dîner aux chandelles surplombant l'océan — homard grillé, riz au safran et pain croustillant.", ticket_pricing: "250–450 MAD", rating: "4.9" }
      ],
      [
        { time: "Matin", place: "Kayak de mer & Grottes marines", details: "Naviguez en kayak le long de la côte, découvrez des grottes cachées et des criques secrètes inaccessibles à pied.", ticket_pricing: "200–300 MAD", rating: "4.6" },
        { time: "Midi", place: "Café de la plage & Bar à jus", details: "Détendez-vous dans un café branché en bord de plage avec des tartines d'avocat, du jus d'orange frais et une vue imprenable.", ticket_pricing: "60–120 MAD", rating: "4.5" },
        { time: "Après-midi", place: "Balade dans la médina blanche", details: "Explorez les ruelles blanchies à la chaux près du port, découvrez les galeries d'art locales et les boutiques d'artisanat.", ticket_pricing: "Gratuit", rating: "4.4" },
        { time: "Soir", place: "Feu de joie sur le sable", details: "Rassemblez-vous autour d'un feu de joie avec de la musique acoustique et des sardines grillées sous la voûte étoilée.", ticket_pricing: "Gratuit", rating: "4.8" }
      ]
    ],
    AR: [
      [
        { time: "صباحاً", place: "نزهة على الشاطئ والسباحة", details: "ابدأ يومك بسباحة منعشة في مياه المحيط الأطلسي أو البحر الأبيض المتوسط الصافية، تليها نزهة حافي القدمين على الرمال الناعمة.", ticket_pricing: "مجاني", rating: "4.7" },
        { time: "غداء", place: "مشاوي المأكولات البحرية على الشاطئ", details: "استمتع بوجبة من الأسماك المشوية الطازجة، وأسياخ الروبيان، والكلماري في مطعم مواجه للمحيط مع إطلالات بانورامية.", ticket_pricing: "120–250 درهم", rating: "4.8" },
        { time: "بعد الزوال", place: "درس ركوب الأمواج", details: "اركب الأمواج مع مدرب محترف — المبتدؤون مرحب بهم. استمتع بأفضل مواقع ركوب الأمواج في المغرب.", ticket_pricing: "200–350 درهم", rating: "4.6" },
        { time: "مساءً", place: "نزهة ساحلية عند الغروب", details: "مجاني", rating: "4.8" }
      ],
      [
        { time: "صباحاً", place: "رحلة المنحدرات الساحلية والأقواس الصخرية", details: "استكشف التشكيلات الصخرية الساحلية الدراماتيكية والأقواس الحجرية الطبيعية التي نحتتها أمواج المحيط على مر القرون.", ticket_pricing: "مجاني", rating: "4.7" },
        { time: "غداء", place: "سوق السمك في الميناء والمشاوي", details: "اختر سمكك بنفسك من سوق الميناء المحلي واشوه على الفور مع صلصة الشرمولة اللذيذة، السلطات والخبز الطازج.", ticket_pricing: "80–180 درهم", rating: "4.9" },
        { time: "بعد الزوال", place: "جيت سكي والرياضات المائية", details: "عش إثارة ركوب الدراجات المائية (الجيت سكي)، أو التزلج الهوائي، أو التجديف واقفًا في المياه الفيروزية.", ticket_pricing: "250–400 درهم", rating: "4.5" },
        { time: "مساءً", place: "عشاء مطل على المحيط", details: "استمتع بعشاء رومانسي على ضوء الشموع يطل على المحيط المضاء بنور القمر — الكركند المشوي، أرز الزعفران، وعصائر لذيذة.", ticket_pricing: "250–450 درهم", rating: "4.9" }
      ],
      [
        { time: "صباحاً", place: "جولة قوارب الكاياك والكهوف البحرية", details: "جدف بقارب كاياك بحري على طول الساحل، لتكتشف الكهوف المخفية، والمسابح الطبيعية، والشواطئ المعزولة التي لا يمكن الوصول إليها سيرًا على الأقدام.", ticket_pricing: "200–300 درهم", rating: "4.6" },
        { time: "غداء", place: "مقهى الشاطئ وبار العصائر", details: "استرخ في مقهى شاطئي هادئ مع توست الأفوكادو، وعصير البرتقال الطازج، وإطلالات رائعة على المحيط من شرفة مظللة.", ticket_pricing: "60–120 درهم", rating: "4.5" },
        { time: "بعد الزوال", place: "نزهة في الميناء القديم والمدينة البيضاء", details: "استكشف شوارع المدينة القديمة الساحرة ذات الجدران البيضاء بالقرب من الميناء، وتصفح معارض الفنون المحلية ومحلات الهدايا التذكارية.", ticket_pricing: "مجاني", rating: "4.4" },
        { time: "مساءً", place: "سهرة النار على الشاطئ", details: "تجمع حول نار شاطئية دافئة مع موسيقى أكوستيك حية، وسردين مشوي طازج، وسماء مليئة بالنجوم فوق المحيط.", ticket_pricing: "مجاني", rating: "4.8" }
      ]
    ]
  },
  nature: {
    EN: [
      [
        { time: "Morning", place: "Mountain Trail Hike", details: "Set off on a guided mountain trail through cedar and oak forests, crossing clear mountain streams with views of snow-capped peaks.", ticket_pricing: "Free (guide: 200 MAD)", rating: "4.8" },
        { time: "Lunch", place: "Berber Village Home-Cooked Meal", details: "Share a traditional Berber lunch in a mountain village — hand-rolled couscous, vegetable tagine, and fresh walnut bread baked in a clay oven.", ticket_pricing: "80–150 MAD", rating: "4.9" },
        { time: "Afternoon", place: "Waterfall & Natural Pool Swim", details: "Hike to a cascading waterfall and cool off in natural rock pools surrounded by lush green valleys and wildflowers.", ticket_pricing: "20 MAD", rating: "4.7" },
        { time: "Evening", place: "Mountain Lodge Fireside Dinner", details: "Warm up by a crackling fireplace in a cozy mountain lodge, enjoying hearty lamb stew, fresh salads, and homemade apple pie.", ticket_pricing: "150–280 MAD", rating: "4.6" }
      ],
      [
        { time: "Morning", place: "River Canyon Walk", details: "Follow a scenic river canyon trail past towering rock walls, rope bridges, and crystal-clear turquoise pools carved into the stone.", ticket_pricing: "Free", rating: "4.8" },
        { time: "Lunch", place: "Riverside Picnic", details: "Set up a picnic on the grassy riverbank with local cheeses, olives, seasonal fruit, fresh bread, and honey from nearby hives.", ticket_pricing: "50–100 MAD", rating: "4.5" },
        { time: "Afternoon", place: "Zip-Lining & Adventure Park", details: "Soar across valley zip-lines and navigate rope obstacle courses high above the tree canopy in an outdoor adventure park.", ticket_pricing: "200–350 MAD", rating: "4.6" },
        { time: "Evening", place: "Stargazing from Mountain Ridge", details: "Drive to a high-altitude viewpoint for unobstructed stargazing far from city lights — spot the Milky Way, planets, and shooting stars.", ticket_pricing: "Free", rating: "4.9" }
      ],
      [
        { time: "Morning", place: "Lake & Dam Scenic Walk", details: "Circle a turquoise mountain lake or reservoir dam on a peaceful walking trail with views of reflected peaks and soaring eagles.", ticket_pricing: "Free", rating: "4.5" },
        { time: "Lunch", place: "Trout Farm Restaurant", details: "Enjoy freshly caught and grilled rainbow trout with herb butter, roasted vegetables, and local bread at a lakeside trout farm.", ticket_pricing: "100–200 MAD", rating: "4.7" },
        { time: "Afternoon", place: "Horseback Riding through Valleys", details: "Ride gentle Barb horses through wildflower meadows and olive groves, following ancient mule trails between Berber villages.", ticket_pricing: "250–400 MAD", rating: "4.7" },
        { time: "Evening", place: "Eco-Lodge Moroccan Tea Ceremony", details: "Unwind at an eco-lodge with a traditional Moroccan tea ceremony, learning the art of pouring from height, accompanied by almond pastries.", ticket_pricing: "Free (with stay)", rating: "4.6" }
      ]
    ],
    FR: [
      [
        { time: "Matin", place: "Randonnée dans les sentiers de montagne", details: "Partez pour une randonnée guidée à travers les forêts de cèdres, traversez des ruisseaux clairs avec vue sur les sommets.", ticket_pricing: "Gratuit (guide: 200 MAD)", rating: "4.8" },
        { time: "Midi", place: "Repas berbère chez l'habitant", details: "Partagez un déjeuner traditionnel dans un village de montagne — couscous fait maison et tajine cuit au feu de bois.", ticket_pricing: "80–150 MAD", rating: "4.9" },
        { time: "Après-midi", place: "Baignade dans les cascades & piscines naturelles", details: "Marchez jusqu'à une cascade rafraîchissante et baignez-vous dans des piscines de roche naturelle entourées de fleurs sauvages.", ticket_pricing: "20 MAD", rating: "4.7" },
        { time: "Soir", place: "Dîner au coin du feu dans un chalet", details: "Réchauffez-vous près d'une cheminée crépitante dans un chalet de montagne, en dégustant un ragoût d'agneau réconfortant.", ticket_pricing: "150–280 MAD", rating: "4.6" }
      ],
      [
        { time: "Matin", place: "Balade dans les canyons", details: "Suivez un sentier pittoresque dans les canyons, traversez des ponts de singe et admirez les parois rocheuses vertigineuses.", ticket_pricing: "Gratuit", rating: "4.8" },
        { time: "Midi", place: "Pique-nique au bord de l'eau", details: "Installez un pique-nique sur la rive herbeuse avec des fromages locaux, des olives, du miel de montagne et du pain frais.", ticket_pricing: "50–100 MAD", rating: "4.5" },
        { time: "Après-midi", place: "Tyrolienne & Parc d'aventure", details: "Volez au-dessus de la vallée en tyrolienne et parcourez des obstacles suspendus dans un parc d'aventure en pleine nature.", ticket_pricing: "200–350 MAD", rating: "4.6" },
        { time: "Soir", place: "Observation des étoiles sur la crête", details: "Montez vers un point de vue élevé pour une observation des étoiles sans pollution lumineuse — repérez la Voie Lactée.", ticket_pricing: "Gratuit", rating: "4.9" }
      ],
      [
        { time: "Matin", place: "Randonnée autour du lac bleu", details: "Faites le tour d'un lac de montagne aux eaux turquoise sur un sentier paisible avec vue sur les sommets environnants.", ticket_pricing: "Gratuit", rating: "4.5" },
        { time: "Midi", place: "Déjeuner de truite grillée", details: "Dégustez de la truite fraîchement pêchée et grillée au beurre d'herbes dans un restaurant familial au bord du lac.", ticket_pricing: "100–200 MAD", rating: "4.7" },
        { time: "Après-midi", place: "Balade à cheval dans les vallées", details: "Montez de doux chevaux barbe à travers les prairies fleuries et les vergers d'oliviers, en suivant d'anciens sentiers.", ticket_pricing: "250–400 MAD", rating: "4.7" },
        { time: "Soir", place: "Cérémonie du thé à l'éco-lodge", details: "Détendez-vous dans un éco-lodge lors d'une cérémonie traditionnelle du thé à la menthe servi avec des cornes de gazelle.", ticket_pricing: "Gratuit (avec séjour)", rating: "4.6" }
      ]
    ],
    AR: [
      [
        { time: "صباحاً", place: "رحلة المشي في الجبال (هايكنج)", details: "انطلق في رحلة جبلية بصحبة مرشد عبر غابات الأرز والبلوط، معبرًا الجداول الجبلية الصافية مع إطلالات على القمم الشامخة.", ticket_pricing: "مجاني (المرشد: 200 درهم)", rating: "4.8" },
        { time: "غداء", place: "وجبة أمازيغية مطبوخة في المنزل", details: "شارك غداءً أمازيغيًا تقليديًا في قرية جبلية — كسكس مفتول يدويًا، طاجين خضروات، وخبز الجوز الساخن المطبوخ في فرن طيني.", ticket_pricing: "80–150 درهم", rating: "4.9" },
        { time: "بعد الزوال", place: "سباحة في الشلالات والمسابح الطبيعية", details: "سر إلى شلال متدفق واستمتع بالبرودة في مسابح صخرية طبيعية محاطة بالوديان الخضراء المورقة والزهور البرية.", ticket_pricing: "20 درهم", rating: "4.7" },
        { time: "مساءً", place: "عشاء بجانب الموقد في نزل جبلي", details: "استدفئ بجوار مدفأة متوقدة في نزل جبلي مريح، مستمتعًا بحساء لحم الضأن المشبع، السلطات الطازجة، وفطيرة تفاح منزلية.", ticket_pricing: "150–280 درهم", rating: "4.6" }
      ],
      [
        { time: "صباحاً", place: "نزهة في أخدود النهر (الوادي)", details: "اتبع مسارًا خلابًا في أخدود النهر مرورًا بجدران صخرية شاهقة، وجسور معلقة، ومسابح فيروزية صافية منحوتة في الحجر.", ticket_pricing: "مجاني", rating: "4.8" },
        { time: "غداء", place: "نزهة غداء على ضفة النهر", details: "أقم نزهة غداء على ضفة النهر العشبية مع الأجبان المحلية، والزيتون، والفواكه الموسمية، والخبز الطازج، والعسل من خلايا النحل القريبة.", ticket_pricing: "50–100 درهم", rating: "4.5" },
        { time: "بعد الزوال", place: "التحليق بالحبل (الإنزلاق) وحديقة المغامرات", details: "حلق عبر خطوط الإنزلاق المعلقة في الوادي واجتز مسارات العقبات المرتفعة في حديقة مغامرات خارجية وسط الغابة.", ticket_pricing: "200–350 درهم", rating: "4.6" },
        { time: "مساءً", place: "رصد النجوم من قمة الجبل", details: "قد سيارتك إلى نقطة مشاهدة عالية الارتفاع للاستمتاع برصد النجوم دون تلوث ضوئي — شاهد مجرة درب التبانة والشهب المتساقطة.", ticket_pricing: "مجاني", rating: "4.9" }
      ],
      [
        { time: "صباحاً", place: "نزهة خلابة حول البحيرة والسد", details: "طف حول بحيرة جبلية فيروزية أو سد مائي على مسار مشي هادئ مع إطلالات على القمم المنعكسة والنسور المحلقة.", ticket_pricing: "مجاني", rating: "4.5" },
        { time: "غداء", place: "مطعم مسمكة التراوت", details: "استمتع بسمك التراوت الطازج المصاد والمشوي مع زبدة الأعشاب، الخضار المحمصة، والخبز المحلي في مطعم مسمكة التراوت على البحيرة.", ticket_pricing: "100–200 درهم", rating: "4.7" },
        { time: "بعد الزوال", place: "ركوب الخيل عبر الوديان", details: "اركب خيولاً بربرية لطيفة عبر مروج الزهور البرية وحقول الزيتون، متتبعًا مسارات البغال القديمة بين القرى الأمازيغية.", ticket_pricing: "250–400 درهم", rating: "4.7" },
        { time: "مساءً", place: "مراسم الشاي المغربي في الإيكو لودج", details: "استرخ في إيكو لودج مع مراسم الشاي المغربي التقليدي، وتعلم فن الصب من الأعلى، مصحوبًا بحلويات اللوز اللذيذة.", ticket_pricing: "مجاني (مع الإقامة)", rating: "4.6" }
      ]
    ]
  }
};

const HOTEL_TEMPLATES = {
  imperial: {
    EN: [
      { name: "Riad", suffix: "Palace", type: "riad", desc: "A stunning traditional riad featuring an ornate central courtyard with marble fountain, zellige tilework, and a rooftop terrace with medina views." },
      { name: "", suffix: "Grand Medina Hotel", type: "hotel", desc: "A modern upscale hotel blending contemporary luxury with traditional Moroccan design — indoor pool, hammam spa, and fine dining restaurant." }
    ],
    FR: [
      { name: "Riad", suffix: "Palace", type: "riad", desc: "Un magnifique riad traditionnel doté d'une cour centrale ornée avec fontaine en marbre, zelliges d'époque, et d'un toit-terrasse avec vue sur la médina." },
      { name: "", suffix: "Grand Hôtel de la Médina", type: "hotel", desc: "Un hôtel moderne et luxueux alliant confort contemporain et design traditionnel marocain — piscine couverte, spa hammam et cuisine raffinée." }
    ],
    AR: [
      { name: "رياض", suffix: "بالاس الفاخر", type: "riad", desc: "رياض تقليدي مذهل يتميز بفناء مركزي مزين بنافورة رخامية، وأعمال زليج عريقة، وشرفة سطح تطل على المدينة القديمة." },
      { name: "فندق", suffix: "المدينة الكبير", type: "hotel", desc: "فندق حديث فاخر يمزج بين الرفاهية المعاصرة والتصميم المغربي التقليدي — مسبح داخلي، وحمام سبا، ومطعم فاخر." }
    ]
  },
  desert: {
    EN: [
      { name: "Kasbah", suffix: "Desert Lodge", type: "hotel", desc: "A charming kasbah-style lodge on the edge of the dunes with panoramic desert views, a swimming pool, and traditional Berber decor." },
      { name: "", suffix: "Luxury Desert Camp", type: "hotel", desc: "An exclusive luxury bivouac with premium tents, private terraces facing the dunes, en-suite bathrooms, and gourmet dining under the stars." }
    ],
    FR: [
      { name: "Kasbah", suffix: "Desert Lodge", type: "hotel", desc: "Un charmant lodge de style kasbah en lisière des dunes avec vue panoramique sur le désert, piscine et décoration traditionnelle berbère." },
      { name: "", suffix: "Bivouac de Luxe dans le Désert", type: "hotel", desc: "Un bivouac de luxe exclusif avec tentes haut de gamme, terrasses privées face aux dunes, salles de bains privatives et dîner gastronomique sous les étoiles." }
    ],
    AR: [
      { name: "قصبة", suffix: "صحاري لودج", type: "hotel", desc: "نزل ساحر على طراز القصبة على حافة الكثبان الرملية مع إطلالات بانورامية على الصحراء، ومسبح، وديكور أمازيغي تقليدي." },
      { name: "مخيم", suffix: "الصحراء الفاخر", type: "hotel", desc: "مخيم صحراوي فاخر حصري مع خيام ممتازة، وشرفات خاصة تواجه الكثبان الرملية، وحمامات داخلية، وعشاء فاخر تحت النجوم." }
    ]
  },
  beach: {
    EN: [
      { name: "", suffix: "Beach Resort & Spa", type: "hotel", desc: "A beachfront resort with direct ocean access, infinity pool overlooking the sea, full-service spa, and sunset-view restaurant." },
      { name: "", suffix: "Oceanview Boutique Hotel", type: "hotel", desc: "A stylish boutique hotel steps from the beach featuring ocean-facing rooms, a surf school partnership, and a rooftop seafood bar." }
    ],
    FR: [
      { name: "", suffix: "Beach Resort & Spa", type: "hotel", desc: "Un complexe hôtelier en bord de mer avec accès direct à la plage, piscine à débordement avec vue sur l'océan, spa complet et restaurant face au coucher du soleil." },
      { name: "", suffix: "Hôtel Boutique Vue Océan", type: "hotel", desc: "Un hôtel-boutique élégant à quelques pas de la plage proposant des chambres face à l'océan, un partenariat avec une école de surf et un bar de fruits de mer sur le toit." }
    ],
    AR: [
      { name: "منتجع", suffix: "بيتش ريزورت وسبا", type: "hotel", desc: "منتجع مواجه للشاطئ مع وصول مباشر إلى المحيط، ومسبح لا متناهي يطل على البحر، وسبا متكامل الخدمات، ومطعم بإطلالة على الغروب." },
      { name: "فندق", suffix: "أوشن فيو بوتيك", type: "hotel", desc: "فندق بوتيك أنيق على بعد خطوات من الشاطئ يتميز بغرف مواجهة للمحيط، وشراكة مع مدرسة لتعليم ركوب الأمواج، وبار مأكولات بحرية على السطح." }
    ]
  },
  nature: {
    EN: [
      { name: "Eco-Lodge", suffix: "Valley Retreat", type: "hotel", desc: "A sustainable mountain eco-lodge built with local stone and wood, offering heated rooms, organic farm-to-table meals, and guided treks." },
      { name: "", suffix: "High Atlas Mountain Retreat", type: "hotel", desc: "A cozy mountain retreat nestled among cedar forests with fireplaces, hot tubs, and a wellness center offering argan oil treatments." }
    ],
    FR: [
      { name: "Éco-Lodge", suffix: "de la Vallée", type: "hotel", desc: "Un éco-lodge de montagne durable construit en pierre et bois locaux, proposant des chambres chauffées, des repas bio de la ferme à la table et des randonnées guidées." },
      { name: "", suffix: "Refuge du Haut Atlas", type: "hotel", desc: "Un refuge de montagne chaleureux niché au cœur des forêts de cèdres avec cheminées, bains à remous et espace bien-être proposant des soins à l'huile d'argan." }
    ],
    AR: [
      { name: "إيكو لودج", suffix: "ملاذ الوادي البيئي", type: "hotel", desc: "إيكو لودج جبلي مستدام مبني بالحجر والخشب المحليين، يوفر غرفاً دافئة، ووجبات عضوية من المزرعة إلى المائدة، ورحلات إرشادية." },
      { name: "ملاذ", suffix: "جبال الأطلس الكبير", type: "hotel", desc: "ملاذ جبلي مريح يقع وسط غابات الأرز مع مداخن، وأحواض استحمام ساخنة، ومركز عافية يقدم علاجات بزيت الأركان للراحة والاسترخاء." }
    ]
  }
};

export const buildMockTripData = (location, noOfDays, traveler, budget, lang = "FR") => {
  const city = MOROCCO_CITIES.find(
    (item) => item.toLowerCase() === (location || "").trim().toLowerCase()
  ) || "Marrakech";

  const days = Number(noOfDays) > 0 ? Number(noOfDays) : 3;
  const category = getCityCategory(city);
  const safeLang = ["FR", "EN", "AR"].includes(lang) ? lang : "FR";

  const pool = ACTIVITIES[category]?.[safeLang] || ACTIVITIES[category]?.["FR"] || ACTIVITIES[category]?.["EN"];
  const hotelTemplates = HOTEL_TEMPLATES[category]?.[safeLang] || HOTEL_TEMPLATES[category]?.["FR"] || HOTEL_TEMPLATES[category]?.["EN"];

  const hotels = hotelTemplates.map((tmpl) => {
    const hotelName = tmpl.name
      ? `${tmpl.name} ${city} ${tmpl.suffix}`.trim()
      : `${city} ${tmpl.suffix}`.trim();

    let priceRange = "";
    if (safeLang === "AR") {
      priceRange = budget === "Luxury" ? "1500–2500 درهم / ليلة" : budget === "Cheap" ? "250–450 درهم / ليلة" : "600–1000 درهم / ليلة";
    } else if (safeLang === "FR") {
      priceRange = budget === "Luxury" ? "1500–2500 MAD / nuit" : budget === "Cheap" ? "250–450 MAD / nuit" : "600–1000 MAD / nuit";
    } else {
      priceRange = budget === "Luxury" ? "1500–2500 MAD / night" : budget === "Cheap" ? "250–450 MAD / night" : "600–1000 MAD / night";
    }

    return {
      name: hotelName,
      address: safeLang === "AR" ? `${city}، المغرب` : `${city}, Morocco`,
      price: priceRange,
      image_url: getMoroccoImageByText(city, tmpl.type),
      rating: "4." + (6 + Math.floor(Math.random() * 4)),
      description: tmpl.desc,
    };
  });

  const itinerary = Array.from({ length: days }, (_, index) => {
    const dayActivities = pool[index % pool.length];

    const plan = dayActivities.map((act) => ({
      ...act,
      place: act.place.includes(city) ? act.place : safeLang === "AR" ? `${act.place}، ${city}` : `${act.place}, ${city}`,
      image_url: act.image_url || getMoroccoImageByText(city, act.place),
    }));

    let dayLabel = "";
    if (safeLang === "AR") {
      dayLabel = `اليوم ${index + 1}`;
    } else if (safeLang === "FR") {
      dayLabel = `Jour ${index + 1}`;
    } else {
      dayLabel = `Day ${index + 1}`;
    }

    return {
      day: dayLabel,
      plan,
    };
  });

  return {
    hotel_options: hotels,
    itinerary,
    metadata: {
      source: "mock",
      traveler,
      budget,
      lang: safeLang
    },
  };
};

export const normalizeTripData = (rawData, fallbackArgs = {}) => {
  const fallback = buildMockTripData(
    fallbackArgs.location,
    fallbackArgs.noOfDays,
    fallbackArgs.traveler,
    fallbackArgs.budget,
    fallbackArgs.lang || "FR"
  );

  if (!rawData || typeof rawData !== "object") {
    return fallback;
  }

  const hotelOptions = Array.isArray(rawData.hotel_options) ? rawData.hotel_options : [];
  const itinerary = Array.isArray(rawData.itinerary) ? rawData.itinerary : [];

  if (hotelOptions.length === 0 || itinerary.length === 0) {
    return fallback;
  }

  const safeItinerary = itinerary
    .map((dayItem, dayIndex) => ({
      day: dayItem?.day || (fallbackArgs.lang === "AR" ? `اليوم ${dayIndex + 1}` : fallbackArgs.lang === "FR" ? `Jour ${dayIndex + 1}` : `Day ${dayIndex + 1}`),
      plan: Array.isArray(dayItem?.plan)
        ? dayItem.plan.filter((place) => place && typeof place === "object")
        : [],
    }))
    .filter((dayItem) => dayItem.plan.length > 0);

  if (safeItinerary.length === 0) {
    return fallback;
  }

  return {
    ...fallback,
    ...rawData,
    hotel_options: hotelOptions,
    itinerary: safeItinerary,
    metadata: {
      ...(rawData.metadata || {}),
      source: rawData?.metadata?.source || "ai",
    },
  };
};
