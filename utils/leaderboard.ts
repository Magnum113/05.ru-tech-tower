import { supabase } from './supabaseClient';
import { LeaderboardEntry, LeaderboardStatus } from '../types';

const NICKNAME_KEY = '05ru_tower_nickname';
const MAX_NICKNAME_ATTEMPTS = 25;

const ADJECTIVES = [
  'Быстрый', 'Смелый', 'Ловкий', 'Умный', 'Яркий', 'Тихий', 'Грозный', 'Ночной',
  'Шустрый', 'Добрый', 'Северный', 'Солнечный', 'Звёздный', 'Сильный', 'Гибкий',
  'Мудрый', 'Внимательный', 'Стальной', 'Лёгкий', 'Тёплый', 'Сияющий', 'Скрытный',
  'Отважный', 'Верный', 'Дикий', 'Скоростной', 'Спокойный', 'Искристый',
  'Гордый', 'Решительный', 'Снежный', 'Песочный', 'Небесный', 'Туманный',
  'Бархатный', 'Громкий', 'Сдержанный', 'Молниеносный', 'Храбрый', 'Честный',
  'Дальневидный', 'Острый', 'Лесной', 'Береговой', 'Горный', 'Речной',
  'Стремительный', 'Лунный', 'Рассветный', 'Сумеречный', 'Кедровый',
  'Янтарный', 'Коралловый', 'Алый', 'Серебряный', 'Золотой', 'Кристальный',
  'Штормовой', 'Ветреный', 'Пылающий', 'Игривый', 'Надёжный', 'Тихомирный',
  'Бывалый', 'Стройный', 'Гладкий', 'Лихой', 'Суровый', 'Сверкающий',
  'Пронырливый', 'Мягкий', 'Упрямый', 'Смышленый', 'Ритмичный', 'Искренний',
  'Уверенный', 'Проворный', 'Собранный', 'Свободный', 'Широкий', 'Ловчий',
  'Заряженный', 'Живой', 'Скромный', 'Молчаливый', 'Морской', 'Полевой',
  'Тропический', 'Скалистый', 'Пушистый', 'Пламенный', 'Сияющий', 'Степной',
  'Каменный', 'Солнечный', 'Непокорный', 'Седой', 'Лёдный', 'Песчаный',
  'Рассудительный', 'Вольный', 'Изумрудный', 'Лазурный', 'Мглистый',
  'Кедровый', 'Тенистый', 'Охотничий', 'Песочный', 'Куражный',
  'Железный', 'Страждущий', 'Турбулентный', 'Снежный',
];

const ANIMALS = [
  'Лис', 'Волк', 'Рысь', 'Сокол', 'Барс', 'Кит', 'Олень', 'Панда', 'Орёл',
  'Тигр', 'Дельфин', 'Медведь', 'Кролик', 'Енот', 'Сова', 'Леопард', 'Гепард',
  'Ястреб', 'Филин', 'Бобр', 'Выдра', 'Косатка', 'Лось', 'Лань', 'Журавль',
  'Кабан', 'Бизон', 'Антилопа', 'Фенек', 'Куница', 'Барсук', 'Тюлень',
  'Морж', 'Росомаха', 'Белка', 'Манул', 'Ирбис', 'Пеликан', 'Пума',
  'Кондор', 'Чайка', 'Стерх', 'Козерог', 'Муфлон', 'Ягуар', 'Оцелот',
  'Саламандра', 'Игуана', 'Лемур', 'Сурикат', 'Касатка', 'Аист',
  'Павлин', 'Фламинго', 'Скунс', 'Еж', 'Котик', 'Каракал', 'Стриж',
  'Жаворонок', 'Кулик', 'Сайгак', 'Кобра', 'Пингвин',
  'Жираф', 'Носорог', 'Горилла', 'Гепард', 'Лемминг', 'Лисица', 'Кенгуру',
  'Коала', 'Сурок', 'Суслик', 'Хорёк', 'Лягушка', 'Скат', 'Селёдка',
  'Щука', 'Окунь', 'Карась', 'Воробей', 'Синица', 'Скворец', 'Дрозд',
  'Коршун', 'Сыч', 'Глухарь', 'Тетерев', 'Перепёлка', 'Чибис',
  'Лебедь', 'Цапля', 'Иволга', 'Сокол', 'Сапсан', 'Тукан',
  'Варан', 'Черепаха', 'Ящерица', 'Крокодил', 'Бегемот',
  'Муравьед', 'Капибара', 'Омар', 'Краб', 'Мангуст',
  'Серна', 'Верблюд', 'Овцебык', 'Тапир', 'Лиса',
  'Ласка', 'Выдра', 'Цивета', 'Орангутан',
  'Шимпанзе', 'Слон', 'Пума', 'Леопард',
  'Утка', 'Фазан', 'Тритон', 'Сом',
  'Сурикат', 'Бурундук', 'Кабан', 'Антилопа', 'Какаду', 'Альбатрос',
];

const generateNickname = () => {
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `${adjective} ${animal}`;
};

const isNicknameTaken = async (nickname: string) => {
  if (!supabase) return false;
  const { data, error } = await supabase
    .from('leaderboard_entries')
    .select('id')
    .eq('nickname', nickname)
    .limit(1);
  if (error) {
    console.error('Supabase nickname check failed', error);
    return false;
  }
  return (data?.length ?? 0) > 0;
};

export const getOrCreateNickname = async () => {
  const existing = localStorage.getItem(NICKNAME_KEY);
  if (existing) return existing;

  if (!supabase) {
    const fallback = generateNickname();
    localStorage.setItem(NICKNAME_KEY, fallback);
    return fallback;
  }

  for (let i = 0; i < MAX_NICKNAME_ATTEMPTS; i += 1) {
    const candidate = generateNickname();
    const taken = await isNicknameTaken(candidate);
    if (!taken) {
      localStorage.setItem(NICKNAME_KEY, candidate);
      return candidate;
    }
  }

  const fallback = generateNickname();
  localStorage.setItem(NICKNAME_KEY, fallback);
  return fallback;
};

export const fetchLeaderboard = async (): Promise<{ entries: LeaderboardEntry[]; status: LeaderboardStatus }> => {
  if (!supabase) return { entries: [], status: 'error' };
  const { data, error } = await supabase
    .from('leaderboard_entries')
    .select('id,nickname,score,created_at')
    .order('score', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(10);

  if (error || !data) {
    console.error('Supabase leaderboard fetch failed', error);
    return { entries: [], status: 'error' };
  }

  if (data.length === 0) {
    return { entries: [], status: 'empty' };
  }

  return { entries: data as LeaderboardEntry[], status: 'ok' };
};

export const submitScore = async (nickname: string, score: number) => {
  if (!supabase || score <= 0) return;
  const { data: updatedRows, error: updateError } = await supabase
    .from('leaderboard_entries')
    .update({ score })
    .eq('nickname', nickname)
    .lt('score', score)
    .select('id');

  if (updateError) {
    console.error('Supabase leaderboard update failed', updateError);
  }

  if (updatedRows && updatedRows.length > 0) return;

  const { error: insertError } = await supabase
    .from('leaderboard_entries')
    .upsert({ nickname, score }, { onConflict: 'nickname', ignoreDuplicates: true });

  if (insertError) {
    console.error('Supabase leaderboard insert failed', insertError);
  }
};
