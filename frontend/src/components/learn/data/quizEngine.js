// Adaptive Quiz Engine
// Designed for the AMUDUX Immersive Learning Platform
import { tifinaghAlphabet } from "./tifnaghData";

export const QUESTION_TYPES = {
  CHAR_TO_LATIN: "char_to_latin",
  LATIN_TO_CHAR: "latin_to_char",
  AUDIO_TO_CHAR: "audio_to_char"
};

// Generates a random integer between min and max (inclusive)
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Shuffles an array in place
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Generates a single question based on the provided pool of characters and type.
 * @param {Array} availableChars - Pool of characters to draw from based on user's current tier
 * @param {String} type - The type of question to generate
 * @param {Array} allChars - The entire alphabet to draw distractors from
 * @returns {Object} A formatted question object
 */
export const generateQuestion = (availableChars, type, allChars = tifinaghAlphabet) => {
  if (!availableChars || availableChars.length === 0) {
    availableChars = allChars; // Fallback
  }

  // Pick a correct answer
  const correctItem = availableChars[getRandomInt(0, availableChars.length - 1)];
  
  // Pick 3 distractors
  let distractors = [];
  while (distractors.length < 3) {
    const randomItem = allChars[getRandomInt(0, allChars.length - 1)];
    if (randomItem.char !== correctItem.char && !distractors.find(d => d.char === randomItem.char)) {
      distractors.push(randomItem);
    }
  }

  // Combine and shuffle options
  const options = shuffleArray([correctItem, ...distractors]);

  let questionText = "";
  let correctAnswer = "";
  let formattedOptions = [];

  switch (type) {
    case QUESTION_TYPES.CHAR_TO_LATIN:
      questionText = `Quelle est la lettre latine pour : ${correctItem.char} ?`;
      correctAnswer = correctItem.transliteration;
      formattedOptions = options.map(opt => ({
        id: opt.char,
        label: opt.transliteration,
        isCorrect: opt.char === correctItem.char
      }));
      break;

    case QUESTION_TYPES.LATIN_TO_CHAR:
      questionText = `Quelle est la lettre Tifinagh pour : ${correctItem.transliteration.toUpperCase()} ?`;
      correctAnswer = correctItem.char;
      formattedOptions = options.map(opt => ({
        id: opt.transliteration,
        label: opt.char,
        isCorrect: opt.char === correctItem.char
      }));
      break;

    case QUESTION_TYPES.AUDIO_TO_CHAR:
      questionText = `Écoutez le son et trouvez la lettre correspondante.`;
      correctAnswer = correctItem.char;
      formattedOptions = options.map(opt => ({
        id: opt.transliteration,
        label: opt.char,
        isCorrect: opt.char === correctItem.char
      }));
      break;
      
    default:
      questionText = `Quelle est la lettre latine pour : ${correctItem.char} ?`;
      correctAnswer = correctItem.transliteration;
      formattedOptions = options.map(opt => ({
        id: opt.char,
        label: opt.transliteration,
        isCorrect: opt.char === correctItem.char
      }));
  }

  return {
    id: `q_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    type,
    questionText,
    correctItem,
    correctAnswer,
    options: formattedOptions
  };
};

/**
 * Calculates XP reward based on answer speed, current combo, and mode multiplier.
 */
export const calculateXpReward = (baseXp, answerTimeMs, combo, modeMultiplier = 1) => {
  let speedBonus = 0;
  if (answerTimeMs < 2000) {
    speedBonus = 10; // Rapid answer bonus
  } else if (answerTimeMs < 4000) {
    speedBonus = 5;
  }
  
  // Combo multiplier
  let comboMultiplier = 1;
  if (combo >= 10) comboMultiplier = 3;
  else if (combo >= 5) comboMultiplier = 2;
  else if (combo >= 3) comboMultiplier = 1.5;

  const totalXp = Math.floor((baseXp + speedBonus) * comboMultiplier * modeMultiplier);
  
  return {
    totalXp,
    speedBonus,
    comboMultiplier,
    baseXp
  };
};

/**
 * Determines the next difficulty tier based on recent accuracy.
 */
export const calculateAdaptiveTier = (currentTier, recentAccuracy) => {
  if (recentAccuracy > 0.85 && currentTier < 5) {
    return currentTier + 1;
  } else if (recentAccuracy < 0.4 && currentTier > 1) {
    return currentTier - 1;
  }
  return currentTier;
};