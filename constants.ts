export const COLORS = {
  backgroundTop: '#15252B', // Brand dark
  backgroundBottom: '#0F1B20', // Deeper shade for gradient
  primaryRed: '#FF2C00', // Brand bright
  primaryRedLight: '#FF6A4D',
  primaryRedDark: '#C81F00',
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

export const LEADERBOARD_FALLBACK = [
  { name: 'StackMaster', score: 1284 },
  { name: 'LunaShift', score: 1140 },
  { name: 'TechNomad', score: 985 },
  { name: 'RedFox', score: 840 },
  { name: 'NightPixel', score: 765 },
  { name: 'Skyline', score: 702 },
  { name: 'ByteStorm', score: 641 },
  { name: 'Maverick', score: 590 },
  { name: 'NovaWave', score: 532 },
  { name: 'IronStack', score: 480 },
];

export const DONATION_PROGRESS = {
  total: 284_500,
  goal: 1_000_000,
};
