export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
  LEADERBOARD = 'LEADERBOARD',
}

export interface GameScore {
  current: number;
  best: number;
}

export interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
  opacity: number;
  life: number;
}

export interface LeaderboardEntry {
  id?: string;
  nickname: string;
  score: number;
  created_at?: string;
}

export interface PromoReward {
  score: number;
  code: string;
  discount: number;
}
