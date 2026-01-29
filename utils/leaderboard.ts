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

export const fetchLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('leaderboard_entries')
    .select('id,nickname,score,created_at')
    .order('score', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(10);

  if (error || !data) {
    console.error('Supabase leaderboard fetch failed', error);
    return [];
  }
  return data as LeaderboardEntry[];
};

export const submitScore = async (nickname: string, score: number) => {
  if (!supabase || score <= 0) return;
  const { data, error: fetchError } = await supabase
    .from('leaderboard_entries')
    .select('score')
    .eq('nickname', nickname)
    .maybeSingle();

  if (fetchError) {
    console.error('Supabase leaderboard fetch failed', fetchError);
    return;
  }

  if (!data) {
    const { error: insertError } = await supabase.from('leaderboard_entries').insert({ nickname, score });
    if (insertError) {
      console.error('Supabase leaderboard insert failed', insertError);
    }
    return;
  }

  if (score > data.score) {
    const { error: updateError } = await supabase
      .from('leaderboard_entries')
      .update({ score })
      .eq('nickname', nickname);
    if (updateError) {
      console.error('Supabase leaderboard update failed', updateError);
    }
  }
};
