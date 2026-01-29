import { supabase } from './supabaseClient';
import { LeaderboardEntry } from '../types';

const NICKNAME_KEY = '05ru_tower_nickname';

const ADJECTIVES = [
  'Быстрый', 'Смелый', 'Ловкий', 'Умный', 'Яркий', 'Тихий', 'Грозный', 'Ночной',
  'Шустрый', 'Добрый', 'Северный', 'Солнечный', 'Звёздный', 'Сильный',
];

const ANIMALS = [
  'Лис', 'Волк', 'Рысь', 'Сокол', 'Барс', 'Кит', 'Олень', 'Панда', 'Орёл',
  'Тигр', 'Дельфин', 'Медведь', 'Кролик', 'Енот', 'Сова',
];

export const getOrCreateNickname = () => {
  const existing = localStorage.getItem(NICKNAME_KEY);
  if (existing) return existing;
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const nickname = `${adjective} ${animal}`;
  localStorage.setItem(NICKNAME_KEY, nickname);
  return nickname;
};

export const fetchLeaderboard = async (): Promise<LeaderboardEntry[] | null> => {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('leaderboard_entries')
    .select('id,nickname,score,created_at')
    .order('score', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(10);

  if (error || !data) return null;
  return data as LeaderboardEntry[];
};

export const submitScore = async (nickname: string, score: number) => {
  if (!supabase || score <= 0) return;
  await supabase.from('leaderboard_entries').insert({ nickname, score });
};
