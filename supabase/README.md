# Supabase setup

1. Открой Supabase SQL Editor проекта `supabase-05ru-tower`.
2. Выполни `leaderboard.sql` из этой папки.
3. Убедись, что включены RLS‑политики и таблица `leaderboard_entries` доступна на чтение/запись.

## Переменные окружения для клиента (Vite)
Задай их в Vercel для проекта (Production/Preview/Development):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Где используется
- Чтение лидеров: `utils/leaderboard.ts` → `fetchLeaderboard()`
- Запись результата: `utils/leaderboard.ts` → `submitScore()`
- Клиент: `utils/supabaseClient.ts`
