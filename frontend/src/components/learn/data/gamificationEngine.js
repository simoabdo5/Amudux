// Gamification and Progression System Engine
// Designed for the AMUDUX Immersive Learning Platform

export const MASTERY_RANKS = [
  { level: 1, title: "Arrivée à Casablanca", minXp: 0, color: "#A0A0A0" },
  { level: 2, title: "Passage à Rabat", minXp: 500, color: "#cd7f32" },
  { level: 3, title: "Les Ruelles de Fès", minXp: 1200, color: "#2D6B4F" },
  { level: 4, title: "Médina de Marrakech", minXp: 2500, color: "#4A90E2" },
  { level: 5, title: "Le Tumulte du Souk", minXp: 4000, color: "#8E44AD" },
  { level: 6, title: "Portes de Ouarzazate", minXp: 6000, color: "#2980B9" },
  { level: 7, title: "Vallée du Dadès", minXp: 8500, color: "#E67E22" },
  { level: 8, title: "Sommets de l'Atlas", minXp: 11500, color: "#F1C40F" },
  { level: 9, title: "Le Vent du Chergui", minXp: 15000, color: "#D35400" },
  { level: 10, title: "Dunes de Merzouga", minXp: 20000, color: "#C0392B" },
  { level: 11, title: "Sagesse Amazighe", minXp: 26000, color: "#FFD700" },
  { level: 12, title: "Légende du Sahara", minXp: 35000, color: "#00FFcc" }
];

export const ACHIEVEMENTS = [
  { id: 'first_word', title: "Premier Pas", description: "Apprendre votre premier mot", icon: "Flag", color: "#4A90E2", xpReward: 50 },
  { id: 'streak_3', title: "Régularité", description: "3 jours de suite", icon: "Calendar", color: "#E67E22", xpReward: 100 },
  { id: 'perfect_quiz', title: "Sans Faute", description: "Terminer un quiz à 100%", icon: "Target", color: "#F1C40F", xpReward: 150 },
  { id: 'speed_demon', title: "Réflexe", description: "Réponse en moins d'une seconde", icon: "Zap", color: "#C0392B", xpReward: 100 },
  { id: 'darija_speaker', title: "Conversationaliste", description: "Terminer un scénario de vie", icon: "MessageCircle", color: "#8E44AD", xpReward: 200 },
  { id: 'alphabet_master', title: "Gardien des Lettres", description: "Maîtriser tout l'alphabet Tifinagh", icon: "Book", color: "#2D6B4F", xpReward: 500 },
  { id: 'cultural_scholar', title: "Érudit", description: "Lire 5 mythes culturels", icon: "Compass", color: "#D35400", xpReward: 250 }
];

export const FEATURE_UNLOCKS = [
  { id: 'quiz_survival', title: 'Arène : Mode Survie', requiredLevel: 3, icon: 'Heart', hub: 'tifinagh' },
  { id: 'quiz_timed', title: 'Arène : Contre-la-montre', requiredLevel: 5, icon: 'Timer', hub: 'tifinagh' },
  { id: 'quiz_audio', title: 'Arène : À l\'Aveugle', requiredLevel: 7, icon: 'Volume2', hub: 'tifinagh' },
  { id: 'name_converter', title: 'Studio de Calligraphie', requiredLevel: 2, icon: 'Award', hub: 'tifinagh' },
  { id: 'pronunciation_lab', title: 'Laboratoire Phonétique', requiredLevel: 4, icon: 'Mic', hub: 'tifinagh' },
  { id: 'darija_taxi', title: 'Scénario : Le Petit Taxi', requiredLevel: 2, icon: 'MapPin', hub: 'darija' }
];

export const getNewlyUnlockedFeatures = (oldXp, newXp) => {
   const oldLevel = getRankByXp(oldXp).currentRank.level;
   const newLevel = getRankByXp(newXp).currentRank.level;
   if (newLevel > oldLevel) {
       return FEATURE_UNLOCKS.filter(f => f.requiredLevel > oldLevel && f.requiredLevel <= newLevel);
   }
   return [];
};


// Local Storage Keys
const STORAGE_KEYS = {
  USER_STATS: 'amudux_learn_stats',
  LEARNED_LETTERS: 'amudux_learned_letters',
  UNLOCKED_CARDS: 'amudux_unlocked_cards',
  ACHIEVEMENTS: 'amudux_achievements',
  DAILY_STATE: 'amudux_daily_state',
  WORD_MASTERY: 'amudux_word_mastery'
};

// Initial State Template
const INITIAL_STATS = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: null,
  streakFreezes: 1,
  totalQuizzesTaken: 0,
  correctAnswers: 0
};

export const getRankByXp = (xp) => {
  let currentRank = MASTERY_RANKS[0];
  let nextRank = MASTERY_RANKS[1];

  for (let i = 0; i < MASTERY_RANKS.length; i++) {
    if (xp >= MASTERY_RANKS[i].minXp) {
      currentRank = MASTERY_RANKS[i];
      nextRank = MASTERY_RANKS[i + 1] || null;
    } else {
      break;
    }
  }

  // Calculate progress to next level
  let progressPercentage = 100;
  if (nextRank) {
    const xpIntoLevel = xp - currentRank.minXp;
    const xpRequiredForNextLevel = nextRank.minXp - currentRank.minXp;
    progressPercentage = (xpIntoLevel / xpRequiredForNextLevel) * 100;
  }

  return { currentRank, nextRank, progressPercentage };
};

export const loadProgress = () => {
  try {
    const statsStr = localStorage.getItem(STORAGE_KEYS.USER_STATS);
    const learnedStr = localStorage.getItem(STORAGE_KEYS.LEARNED_LETTERS);
    const unlockedStr = localStorage.getItem(STORAGE_KEYS.UNLOCKED_CARDS);
    const achievementsStr = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);

    let stats = statsStr ? JSON.parse(statsStr) : { ...INITIAL_STATS };
    const learnedLetters = learnedStr ? JSON.parse(learnedStr) : [];
    const unlockedCards = unlockedStr ? JSON.parse(unlockedStr) : ['anzar']; // give one free
    const unlockedAchievements = achievementsStr ? JSON.parse(achievementsStr) : [];

    // Check streak
    const today = new Date().toDateString();
    if (stats.lastActiveDate !== today) {
      if (stats.lastActiveDate) {
        const lastDate = new Date(stats.lastActiveDate);
        const diffDays = Math.floor((new Date() - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          stats.streak += 1;
        } else if (diffDays > 1) {
          // Check for freeze
          if (stats.streakFreezes > 0) {
            stats.streakFreezes -= 1;
            // Streak preserved!
          } else {
            stats.streak = 1; // Reset streak, but count today
          }
        }
      } else {
        stats.streak = 1; // First day
      }
      stats.lastActiveDate = today;
      saveStats(stats);
    }

    const { currentRank, nextRank, progressPercentage } = getRankByXp(stats.xp);

    return {
      stats,
      learnedLetters,
      unlockedCards,
      unlockedAchievements,
      currentRank,
      nextRank,
      progressPercentage
    };
  } catch (e) {
    console.error("Error loading progress", e);
    return {
      stats: { ...INITIAL_STATS },
      learnedLetters: [],
      unlockedCards: ['anzar'],
      unlockedAchievements: [],
      ...getRankByXp(0)
    };
  }
};

export const saveStats = (stats) => {
  localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats));
};

export const addXp = (amount) => {
  try {
    const statsStr = localStorage.getItem(STORAGE_KEYS.USER_STATS);
    let stats = statsStr ? JSON.parse(statsStr) : { ...INITIAL_STATS };
    
    const oldXp = stats.xp;
    const oldLevel = getRankByXp(oldXp).currentRank.level;
    stats.xp += amount;
    const newLevel = getRankByXp(stats.xp).currentRank.level;
    
    const newUnlocks = getNewlyUnlockedFeatures(oldXp, stats.xp);
    
    saveStats(stats);
    
    return {
      stats,
      leveledUp: newLevel > oldLevel,
      newLevel,
      newUnlocks
    };
  } catch (e) {
    console.error("Error adding XP", e);
    return null;
  }
};

export const markLetterLearned = (char) => {
  try {
    const learnedStr = localStorage.getItem(STORAGE_KEYS.LEARNED_LETTERS);
    let learnedLetters = learnedStr ? JSON.parse(learnedStr) : [];
    
    if (!learnedLetters.includes(char)) {
      learnedLetters.push(char);
      localStorage.setItem(STORAGE_KEYS.LEARNED_LETTERS, JSON.stringify(learnedLetters));
      return true; // newly learned
    }
    return false; // already learned
  } catch (e) {
    console.error("Error marking letter", e);
    return false;
  }
};

export const unlockAchievement = (achievementId) => {
  try {
    const achievementsStr = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    let achievements = achievementsStr ? JSON.parse(achievementsStr) : [];
    
    if (!achievements.includes(achievementId)) {
      achievements.push(achievementId);
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
      
      const achievementDef = ACHIEVEMENTS.find(a => a.id === achievementId);
      if (achievementDef && achievementDef.xpReward) {
        addXp(achievementDef.xpReward);
      }
      return achievementDef;
    }
    return null;
  } catch (e) {
    console.error("Error unlocking achievement", e);
    return null;
  }
};

// --- SPACED REPETITION & MEMORY ---
export const recordWordAttempt = (wordId, isCorrect) => {
  try {
     const str = localStorage.getItem(STORAGE_KEYS.WORD_MASTERY);
     let mastery = str ? JSON.parse(str) : {};
     if (!mastery[wordId]) mastery[wordId] = { attempts: 0, correct: 0 };
     mastery[wordId].attempts += 1;
     if (isCorrect) mastery[wordId].correct += 1;
     mastery[wordId].lastAttempt = Date.now();
     localStorage.setItem(STORAGE_KEYS.WORD_MASTERY, JSON.stringify(mastery));
  } catch (e) {}
};

export const getWordMastery = () => {
  try {
     const str = localStorage.getItem(STORAGE_KEYS.WORD_MASTERY);
     return str ? JSON.parse(str) : {};
  } catch (e) { return {}; }
};