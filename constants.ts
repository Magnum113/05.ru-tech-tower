export const COLORS = {
  backgroundTop: '#0F172A', // Darker night blue
  backgroundBottom: '#3B0764', // Deep purple
  primaryRed: '#E30613', // 05.ru Brand Red
  primaryRedLight: '#ff4d58',
  primaryRedDark: '#a3000b',
  text: '#ffffff',
  accentGold: '#FFD700',
  success: '#4ADE80',
};

export const GAME_CONFIG = {
  baseWidth: 220,
  blockHeight: 50,
  initialSpeed: 5,
  speedIncrement: 0.25,
  maxSpeed: 18,
  perfectTolerance: 3, // Tightened tolerance
  promoLevel: 25, // Updated goal
  promoCode: 'TOWER05',
  bonusMax: 1000,
  comboThreshold: 3, // Consecutive perfects for bonus
  widthBonus: 20, // Pixel growth on combo
};

export const PERFECT_MESSAGES = [
  "Идеально!",
  "Красавчик!",
  "Супер!",
  "Чётко!",
  "Мастер!",
];

export const getEmojiForLevel = (level: number): string => {
  if (level >= 20) return '🕋'; // Special Gift
  if (level >= 16) return '📺'; // TV
  if (level >= 11) return '💻'; // Laptop
  if (level >= 6) return '🎧'; // Headphones
  return '📱'; // Phone
};
