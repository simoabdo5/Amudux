/**
 * Apprendre Ecosystem — Database Architecture
 * 
 * This file documents the required database entities for the AMUDUX 
 * language and culture learning platform. These schemas are designed 
 * to be implemented in a relational database (PostgreSQL/MySQL) or 
 * adapted for NoSQL (MongoDB/Firebase).
 */

/**
 * 1. Users & Profiles
 * -----------------------------------------
 */
const User = {
  id: "uuid",
  email: "string",
  name: "string",
  avatarUrl: "string",
  preferredLanguage: "enum: [FR, EN, AR]",
  createdAt: "datetime",
  lastLoginAt: "datetime"
};

const UserSettings = {
  userId: "uuid (fk)",
  theme: "enum: [light, dark, system]",
  audioSpeed: "float (default: 1.0)",
  dailyGoalXp: "integer (default: 50)",
  notificationsEnabled: "boolean"
};

/**
 * 2. Progression & Gamification
 * -----------------------------------------
 */
const UserProgress = {
  userId: "uuid (fk)",
  totalXp: "integer",
  currentStreak: "integer",
  longestStreak: "integer",
  streakFreezes: "integer",
  lastActiveDate: "date",
  currentRankLevel: "integer"
};

const XPHistory = {
  id: "uuid",
  userId: "uuid (fk)",
  amount: "integer",
  source: "string (e.g., 'quiz_completed', 'lesson_viewed')",
  timestamp: "datetime"
};

const UserAchievements = {
  userId: "uuid (fk)",
  achievementId: "string",
  unlockedAt: "datetime"
};

/**
 * 3. Core Learning Content
 * -----------------------------------------
 */
const Modules = {
  id: "string", // e.g., 'tifinagh_alphabet', 'darija_basics'
  hubId: "enum: [tifinagh, darija, culture]",
  orderIndex: "integer",
  isPremium: "boolean"
};

const Lessons = {
  id: "string",
  moduleId: "string (fk)",
  type: "enum: [vocabulary, conversation, culture_card, alphabet]",
  orderIndex: "integer",
  xpReward: "integer"
};

const LessonTranslations = {
  lessonId: "string (fk)",
  languageCode: "enum: [FR, EN, AR]",
  title: "string",
  description: "text",
  content: "jsonb"
};

/**
 * 4. Tifinagh Specifics
 * -----------------------------------------
 */
const TifinaghLetters = {
  id: "string",
  char: "string (e.g., ⴰ)",
  name: "string",
  transliteration: "string",
  ipa: "string",
  arabicEquivalent: "string",
  category: "string",
  tier: "integer"
};

const TifinaghPronunciations = {
  letterId: "string (fk)",
  audioFileUrl: "string",
  dialect: "string",
  speakerGender: "enum: [M, F]"
};

/**
 * 5. Darija Specifics
 * -----------------------------------------
 */
const Phrases = {
  id: "uuid",
  darija: "string",
  audioFileUrl: "string",
  difficulty: "integer",
  categoryId: "string",
  tags: "string[]"
};

const PhraseTranslations = {
  phraseId: "uuid (fk)",
  languageCode: "enum: [FR, EN, AR]",
  translation: "string",
  literalMeaning: "string",
  contextNote: "text"
};

const ConversationScenarios = {
  id: "string",
  difficulty: "integer",
  xpReward: "integer",
  tags: "string[]"
};

const ConversationMessages = {
  id: "uuid",
  scenarioId: "string (fk)",
  orderIndex: "integer",
  speaker: "enum: [npc, user]",
  darijaText: "string",
  audioFileUrl: "string"
};

/**
 * 6. Travel & Culture
 * -----------------------------------------
 */
const DestinationContexts = {
  id: "string (e.g., 'marrakech')",
  atmosphereType: "string",
  accentColor: "string",
  coordinates: "jsonb"
};

const TravelTips = {
  id: "uuid",
  categoryId: "string",
  iconName: "string",
  isImportant: "boolean",
  applicableDestinations: "string[]"
};

const TravelTipTranslations = {
  tipId: "uuid (fk)",
  languageCode: "enum: [FR, EN, AR]",
  title: "string",
  content: "text"
};

/**
 * 7. Quizzes & Challenges
 * -----------------------------------------
 */
const Quizzes = {
  id: "uuid",
  type: "enum: [multiple_choice, listening, matching]",
  moduleId: "string (fk)",
  difficulty: "integer",
  timeLimitSeconds: "integer"
};

const QuizQuestions = {
  id: "uuid",
  quizId: "uuid (fk)",
  questionType: "string",
  targetId: "string (reference to phrase or letter)",
  points: "integer"
};

const QuizAnswers = {
  id: "uuid",
  questionId: "uuid (fk)",
  content: "string",
  isCorrect: "boolean"
};

const DailyChallenges = {
  date: "date",
  taskType: "string",
  targetCount: "integer",
  xpReward: "integer"
};

export const SchemaDocumentation = {
  version: "1.0.0",
  entities: 25,
  readyForPrisma: true
};
