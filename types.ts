export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
  PROMO_PAUSE = 'PROMO_PAUSE',
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
