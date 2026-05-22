// Darija Language & Cultural Data
// Designed for the AMUDUX Immersive Learning Platform

export const darijaVocab = [
  // --- BEGINNER: GREETINGS & BASICS ---
  { id: 'v1', darija: "Salam", french: "Bonjour", category: "Basiques", difficulty: 1 },
  { id: 'v2', darija: "Labas?", french: "Comment ça va ?", category: "Basiques", difficulty: 1 },
  { id: 'v3', darija: "Bslama", french: "Au revoir", category: "Basiques", difficulty: 1 },
  { id: 'v4', darija: "Chokran", french: "Merci", category: "Basiques", difficulty: 1 },
  { id: 'v5', darija: "Wakaha", french: "D'accord / OK", category: "Basiques", difficulty: 1 },
  { id: 'v6', darija: "Afak", french: "S'il te plaît", category: "Basiques", difficulty: 1 },
  
  // --- INTERMEDIATE: CAFE & RESTAURANT ---
  { id: 'v7', darija: "Bghit", french: "Je voudrais", category: "Restaurant", difficulty: 2 },
  { id: 'v8', darija: "Atini", french: "Donne-moi", category: "Restaurant", difficulty: 2 },
  { id: 'v9', darija: "Qahwa k7la", french: "Café noir", category: "Restaurant", difficulty: 2 },
  { id: 'v10', darija: "Atay b n3na3", french: "Thé à la menthe", category: "Restaurant", difficulty: 2 },
  { id: 'v11', darija: "Bch7al?", french: "C'est combien ?", category: "Restaurant", difficulty: 2 },
  { id: 'v12', darija: "L7sab 3afak", french: "L'addition s'il vous plaît", category: "Restaurant", difficulty: 2 },

  // --- ADVANCED: STREET & SLANG ---
  { id: 'v13', darija: "Safi", french: "C'est bon / Ça suffit", category: "Street", difficulty: 3 },
  { id: 'v14', darija: "Bezzaf", french: "Beaucoup", category: "Street", difficulty: 3 },
  { id: 'v15', darija: "Zwin", french: "Beau / Bien", category: "Street", difficulty: 3 },
  { id: 'v16', darija: "Walo", french: "Rien", category: "Street", difficulty: 3 },
  { id: 'v17', darija: "Daba", french: "Maintenant", category: "Street", difficulty: 3 },
  { id: 'v18', darija: "Machi mouchkil", french: "Pas de problème", category: "Street", difficulty: 3 }
];

export const darijaConversations = [
  {
    id: "cafe_marrakech",
    title: "Un Café à Marrakech",
    description: "Commandez un thé traditionnel à la Médina.",
    difficulty: "Facile",
    xpReward: 50,
    steps: [
      {
        npcText: "Salam khouya, achnou bghiti tachrob?",
        npcAudioLabel: "salam_cafe", // placeholder for speech synth
        translation: "Bonjour mon frère, que veux-tu boire ?",
        options: [
          { text: "Bghit atay b n3na3, 3afak.", isCorrect: true, feedback: "Excellent ! Le classique marocain." },
          { text: "Fin kayn tran?", isCorrect: false, feedback: "Non, ça veut dire 'Où est le train ?'" },
          { text: "Bchhal hada?", isCorrect: false, feedback: "Tu ne demandes pas encore le prix." }
        ]
      },
      {
        npcText: "Wakha, b soukkar wla bla soukkar?",
        translation: "D'accord, avec ou sans sucre ?",
        options: [
          { text: "Bla soukkar 3afak.", isCorrect: true, feedback: "Parfait ! 'Bla' veut dire 'sans'." },
          { text: "Zwin bezzaf.", isCorrect: false, feedback: "Tu viens de dire 'C'est très beau'." },
          { text: "Safi, bslama.", isCorrect: false, feedback: "Tu pars déjà ?" }
        ]
      },
      {
        npcText: "Hanta a sidi. L7sab houwa 15 dirham.",
        translation: "Voici monsieur. L'addition est de 15 dirhams.",
        options: [
          { text: "Chokran, tfadal.", isCorrect: true, feedback: "Tfadal = Tiens/Je t'en prie. Très poli !" },
          { text: "Walo.", isCorrect: false, feedback: "'Walo' veut dire 'rien'. Mauvaise réponse." },
          { text: "Machi mouchkil.", isCorrect: false, feedback: "Pas vraiment adapté ici." }
        ]
      }
    ]
  },
  {
    id: "petit_taxi",
    title: "Le Petit Taxi",
    description: "Négociez et dirigez votre taxi.",
    difficulty: "Moyen",
    xpReward: 80,
    steps: [
      {
        npcText: "Salam, fin ghadi?",
        translation: "Bonjour, où vas-tu ?",
        options: [
          { text: "Gare routière 3afak, khdem lcompteur.", isCorrect: true, feedback: "Très intelligent de demander le compteur ('khdem lcompteur') !" },
          { text: "Bghit qahwa.", isCorrect: false, feedback: "Le taxi ne sert pas de café." },
          { text: "Atini l7sab.", isCorrect: false, feedback: "Tu n'es pas encore arrivé." }
        ]
      },
      {
        npcText: "Wakha sidi. Z7am daba f triq.",
        translation: "D'accord monsieur. Il y a des embouteillages maintenant.",
        options: [
          { text: "Machi mouchkil, andi lwaqt.", isCorrect: true, feedback: "'Pas de problème, j'ai le temps'." },
          { text: "Bchhal?", isCorrect: false, feedback: "Il a mis le compteur, pas besoin de négocier." },
          { text: "Bslama.", isCorrect: false, feedback: "Tu sautes du taxi en marche ?" }
        ]
      }
    ]
  },
  {
    id: "souk_marrakech",
    title: "Le Tapis de Marrakech",
    description: "Négociez le prix d'un tapis Zellige avec un vendeur coriace.",
    difficulty: "Avancé",
    xpReward: 150,
    steps: [
      {
        npcText: "Marhaba! Zid a khouya, chouf had zrabi, sena3a dyal yedd!",
        translation: "Bienvenue ! Approche mon frère, regarde ces tapis, faits à la main !",
        mood: "Accueillant",
        options: [
          { text: "Salam, bchhal had zarbiya?", isCorrect: true, feedback: "Direct au but, très bien.", moodImpact: "Intéressé" },
          { text: "Zwin bezzaf, bghito fabor.", isCorrect: false, feedback: "Tu demandes que ce soit gratuit ('fabor'). Il ne va pas aimer.", moodImpact: "Vexé" },
          { text: "Bslama.", isCorrect: false, feedback: "Tu ne veux même pas regarder ?", moodImpact: "Confus" }
        ]
      },
      {
        npcText: "Hadi? Hadi a sidi b 1500 dirham. Taman mzyan lik.",
        translation: "Celle-ci ? C'est 1500 dirhams monsieur. Un bon prix pour toi.",
        mood: "Vendeur",
        options: [
          { text: "Ghali bezzaf! N3tik 500 dirham.", isCorrect: false, feedback: "Trop bas ! C'est insultant dans la négociation marocaine de diviser par 3 d'un coup.", moodImpact: "En colère" },
          { text: "Taman ghali chwiya a khoya. Bchhal men lekher?", isCorrect: true, feedback: "'Combien en dernier prix ?' - La phrase magique du souk !", moodImpact: "Respectueux" },
          { text: "Wakha, hahiya 1500.", isCorrect: false, feedback: "Règle numéro 1 au Maroc : ne jamais accepter le premier prix !", moodImpact: "Riche Touriste" }
        ]
      },
      {
        npcText: "Nqs lik chwiya. Khalliha b 1000 dirham, wllah ma rb7t fiha.",
        translation: "Je te baisse un peu. Laisse-la à 1000 dirhams, je te jure que je n'y gagne rien.",
        mood: "Négociateur",
        options: [
          { text: "Nqsamha flnass, 800 dirham w nakhoudha daba.", isCorrect: true, feedback: "'On coupe la poire en deux, 800 et je la prends de suite'. Magistral !", moodImpact: "Impressionné" },
          { text: "La, 200 dirham w safi.", isCorrect: false, feedback: "Tu forces trop, il va refuser de te la vendre.", moodImpact: "Fermé" }
        ]
      }
    ]
  }
];
