export const COLORS = {
  backgroundTop: '#15252B', // Brand dark
  backgroundBottom: '#0F1B20', // Deeper shade for gradient
  primaryRed: '#FF2C00', // Brand bright
  primaryRedLight: '#FF6A4D',
  primaryRedDark: '#C81F00',
  boxMain: '#CB9F7F',
  boxLight: '#DCC0A6',
  boxDark: '#B08363',
  boxTape: '#E9D4BD',
  text: '#ffffff',
  accentGold: '#FFD700',
  success: '#4ADE80',
};

export const GAME_CONFIG = {
  baseWidth: 220,
  blockHeight: 70,
  initialSpeed: 4,
  speedIncrement: 0.2,
  maxSpeed: 14.4,
  perfectTolerance: 3, // Tightened tolerance
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

export const PROMO_REWARDS = [
  { score: 10, code: 'RMLD', discount: 500 },
  { score: 20, code: 'HJKL', discount: 1000 },
  { score: 30, code: 'KLSD', discount: 1500 },
];
