import React from 'react';
import { PROMO_REWARDS, PERFECT_MESSAGES } from '../constants';

const sampleNickname = 'Сильный Енот';

const sampleLeaderboard = [
  { nickname: sampleNickname, score: 23, isMe: true },
  { nickname: 'Лунный Филин', score: 18 },
  { nickname: 'Северный Барс', score: 12 },
];

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-xl font-black text-white">{title}</h2>
    {children}
  </section>
);

const Card: React.FC<{ children: React.ReactNode; maxWidth?: string }> = ({ children, maxWidth }) => (
  <div
    className={`w-full ${maxWidth ?? 'max-w-xl'} rounded-2xl border border-white/10 bg-[#15252B] p-5 shadow-2xl`}
  >
    {children}
  </div>
);

export default function DesignShowcase() {
  React.useEffect(() => {
    document.title = 'Page For Design — 05.ru Tech Tower';
  }, []);

  React.useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyTouch = document.body.style.touchAction;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
    document.documentElement.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.touchAction = prevBodyTouch;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 space-y-12">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">pagefordesign</p>
          <h1 className="text-3xl font-black">Каталог текстов и состояний</h1>
          <p className="text-white/60">
            Страница для копирайтера и дизайнера: все элементы, тексты и состояния в одном месте.
          </p>
        </header>

        <Section title="Онбординг — Шаг 1 (история)">
          <Card maxWidth="max-w-md">
            <div className="text-center space-y-4">
              <div>
                <h3 className="text-2xl font-black">Высокие Технологии</h3>
                <p className="text-3xl font-black text-[#FF2C00]">05.RU</p>
              </div>
              <div className="space-y-2 text-sm text-white/70">
                <p>🌙 В Рамадан мы хотим доставить радость в каждый дом!</p>
                <p>Твоя задача — построить самую высокую башню из подарков и техники. Чем выше башня — тем больше людей получат свои заказы к празднику.</p>
                <p>Каждый набранный балл мы переводим в рубли и отправляем на благотворительность в конце Рамадана.</p>
              </div>
              <div className="grid gap-2">
                <button className="w-full rounded-xl bg-[#FF2C00] px-5 py-3 text-sm font-bold">Начать стройку</button>
                <button className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80">Таблица лидеров</button>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Онбординг — Шаг 2 (правила и награды)">
          <Card maxWidth="max-w-md">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-white/50">Шаг 2 из 2</p>
                <h3 className="text-2xl font-black">Правила и награды</h3>
              </div>
              <div className="rounded-xl border border-white/5 bg-[#1a2f36] p-4 space-y-3 text-sm text-white/70">
                <p className="text-xs uppercase tracking-widest text-white/60">Как играть:</p>
                <p>1. Тапай по экрану, когда ящик окажется над башней.</p>
                <p>2. Будь точен! Лишние края обрезаются.</p>
                <p>3. Делай идеальные укладки подряд для бонусов.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-[#101e23] p-4 space-y-2">
                <p className="text-xs uppercase tracking-widest text-white/60">Награды за уровни</p>
                {PROMO_REWARDS.map((reward) => (
                  <div key={reward.score} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm">
                    <span className="text-white/60">{reward.score} очков</span>
                    <span className="font-semibold">Скидка {reward.discount} ₽</span>
                  </div>
                ))}
              </div>
              <div className="grid gap-2">
                <button className="w-full rounded-xl bg-[#FF2C00] px-5 py-3 text-sm font-bold">Начать игру</button>
                <button className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80">Назад</button>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="HUD и прогресс награды (во время игры)">
          <div className="grid gap-4 md:grid-cols-2">
            <Card maxWidth="max-w-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">Этаж</p>
                  <p className="text-4xl font-black">12</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-white/60">Рекорд</p>
                  <p className="text-2xl font-bold text-yellow-400">23</p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white/90 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/60">
                  <span>До награды</span>
                  <span>8 этажей</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-white">Скидка 1000 ₽</span>
                  <span className="text-white/70">12/20</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1">
                  <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#FF2C00] via-[#ff6a4d] to-[#FF2C00] shadow-[0_0_10px_rgba(255,44,0,0.6)]" style={{ width: '100%' }} />
                  </div>
                  <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#FF2C00] via-[#ff6a4d] to-[#FF2C00] shadow-[0_0_10px_rgba(255,44,0,0.6)]" style={{ width: '20%' }} />
                  </div>
                  <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-white/40 via-white/60 to-white/40" style={{ width: '0%' }} />
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] text-white/50">
                  <span>Прогресс</span>
                  <span>40%</span>
                </div>
              </div>
            </Card>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-white/50">Состояние (комментарий): все награды</p>
              <Card maxWidth="max-w-md">
                <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-center text-xs text-white/70 backdrop-blur">
                  Все награды получены. Продолжай строить башню!
                </div>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="Фон игры (звёзды и полумесяцы)">
          <Card maxWidth="max-w-4xl">
            <div className="space-y-3 text-sm text-white/70">
              <p>
                В игре фон рисуется на Canvas (градиент + мерцающие звёзды + полумесяцы). Это не DOM‑элемент, поэтому ниже — макет‑подсказка и описание для дизайнера.
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#15252B] to-[#0F1B20]">
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute left-[10%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/80" />
                  <div className="absolute left-[30%] top-[35%] h-1 w-1 rounded-full bg-white/60" />
                  <div className="absolute left-[55%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/70" />
                  <div className="absolute left-[70%] top-[40%] h-1 w-1 rounded-full bg-white/50" />
                  <div className="absolute left-[85%] top-[25%] h-1.5 w-1.5 rounded-full bg-white/75" />
                </div>
                <div className="absolute right-[18%] top-[30%] h-8 w-8">
                  <div className="absolute inset-0 rounded-full bg-white/90" />
                  <div className="absolute inset-0 translate-x-1 rounded-full bg-[#15252B]" />
                </div>
                <div className="absolute left-[20%] bottom-[18%] h-6 w-6">
                  <div className="absolute inset-0 rounded-full bg-white/70" />
                  <div className="absolute inset-0 translate-x-1 rounded-full bg-[#15252B]" />
                </div>
              </div>
              <ul className="grid gap-1 text-xs text-white/60">
                <li>Градиент: сверху #15252B → снизу #0F1B20.</li>
                <li>Звёзды: мелкие белые точки с мягким мерцанием.</li>
                <li>Полумесяцы: белые, мягкие, с плавным мерцанием.</li>
                <li>Количество полумесяцев: ~7.</li>
              </ul>
            </div>
          </Card>
        </Section>

        <Section title="Экран результата (есть очки)">
          <Card maxWidth="max-w-lg">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Благотворительность</p>
                <h3 className="text-2xl font-black">Твоя игра = добро</h3>
              </div>
              <div className="rounded-2xl border border-[#FF2C00]/20 bg-[#FF2C00]/10 p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/60">Очки</span>
                  <span className="font-bold">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/60">Пожертвование</span>
                  <span className="font-black text-[#FF2C00]">23 ₽</span>
                </div>
                <p className="text-xs text-white/60">Мы отправим такую же сумму в рублях на благотворительность в конце Рамадана.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <p className="font-semibold text-white">Каждое очко = 1 ₽ в копилку добра.</p>
                <p>Сыграй ещё раз, чтобы увеличить сумму пожертвования.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <p className="font-semibold text-white">Награда за 20 очков</p>
                <p>Ваша скидка на 1000 ₽.</p>
                <div className="mt-3 rounded-xl border border-dashed border-white/20 bg-black/40 p-3 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Промокод</p>
                  <p className="font-mono text-lg text-[#FF2C00]">HJKL</p>
                  <p className="mt-1 text-xs text-green-400">СКОПИРОВАНО!</p>
                </div>
              </div>
              <div className="grid gap-2">
                <button className="w-full rounded-xl bg-[#FF2C00] px-5 py-3 text-sm font-bold">Сыграть ещё раз и увеличить сумму</button>
                <button className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80">Таблица лидеров</button>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Экран результата (очков 0)">
          <Card maxWidth="max-w-md">
            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-black uppercase">Башня упала!</h3>
              <p className="text-white/60">Высота: <span className="text-[#FF2C00] font-black">0</span></p>
              <div className="rounded-full bg-yellow-400/10 text-yellow-300 px-4 py-2 text-xs font-bold inline-flex items-center justify-center">НОВЫЙ РЕКОРД!</div>
              <div className="grid gap-2">
                <button className="w-full rounded-full bg-white px-5 py-3 text-sm font-bold text-[#15252B]">Попробовать снова</button>
                <button className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80">Таблица лидеров</button>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Таблица лидеров (с результатами)">
          <Card maxWidth="max-w-lg">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">Топ игроков</p>
                  <h3 className="text-2xl font-black">Таблица лидеров</h3>
                </div>
                <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70">Назад</button>
              </div>
              <div className="space-y-2">
                {sampleLeaderboard.map((entry, idx) => (
                  <div
                    key={entry.nickname}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                      entry.isMe ? 'border-[#FF2C00]/40 bg-[#FF2C00]/15' : idx === 0 ? 'border-yellow-400/30 bg-yellow-400/10' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-black">{idx + 1}</div>
                      <span className="font-semibold">{entry.nickname}{entry.isMe && <span className="ml-2 text-[10px] uppercase tracking-widest text-white/60">это вы</span>}</span>
                    </div>
                    <div className="text-sm font-bold text-white/80">{entry.score}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-[#FF2C00]/20 bg-[#FF2C00]/10 px-4 py-3 text-sm">
                Твой ник: <span className="font-bold">{sampleNickname}</span> · Рекорд: <span className="font-bold">23</span>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Таблица лидеров (пустая)">
          <Card maxWidth="max-w-lg">
            <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/60">
              Лидеров пока нет. Сыграй первым и зафиксируй результат.
            </p>
          </Card>
        </Section>

        <Section title="Всплывающие тексты в игре">
          <Card maxWidth="max-w-lg">
            <div className="space-y-2 text-sm text-white/70">
              <p className="font-semibold text-white">Perfect‑сообщения:</p>
              <div className="flex flex-wrap gap-2">
                {PERFECT_MESSAGES.map(msg => (
                  <span key={msg} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{msg}</span>
                ))}
              </div>
              <p className="font-semibold text-white mt-3">Бонусы:</p>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">БОНУС ШИРИНЫ!</span>
            </div>
          </Card>
        </Section>

        <Section title="Тексты (список для копирайтера с контекстом)">
          <Card maxWidth="max-w-4xl">
            <ul className="grid gap-2 text-sm text-white/70">
              <li><span className="text-white/50">HUD (игра):</span> Этаж</li>
              <li><span className="text-white/50">HUD (игра):</span> Рекорд</li>
              <li><span className="text-white/50">Онбординг шаг 1 (заголовок):</span> Высокие Технологии / 05.RU</li>
              <li><span className="text-white/50">Онбординг шаг 1 (описание):</span> 🌙 В Рамадан мы хотим доставить радость в каждый дом!</li>
              <li><span className="text-white/50">Онбординг шаг 1 (описание):</span> Твоя задача — построить самую высокую башню из подарков и техники. Чем выше башня — тем больше людей получат свои заказы к празднику.</li>
              <li><span className="text-white/50">Онбординг шаг 1 (описание):</span> Каждый набранный балл мы переводим в рубли и отправляем на благотворительность в конце Рамадана.</li>
              <li><span className="text-white/50">Онбординг шаг 1 (кнопка):</span> Начать стройку</li>
              <li><span className="text-white/50">Онбординг шаг 1 (кнопка):</span> Таблица лидеров</li>
              <li><span className="text-white/50">Онбординг шаг 2 (лейбл):</span> Шаг 2 из 2</li>
              <li><span className="text-white/50">Онбординг шаг 2 (заголовок):</span> Правила и награды</li>
              <li><span className="text-white/50">Онбординг шаг 2 (подзаголовок):</span> Как играть:</li>
              <li><span className="text-white/50">Онбординг шаг 2 (инструкция):</span> Тапай по экрану, когда ящик окажется над башней.</li>
              <li><span className="text-white/50">Онбординг шаг 2 (инструкция):</span> Будь точен! Лишние края обрезаются.</li>
              <li><span className="text-white/50">Онбординг шаг 2 (инструкция):</span> Делай идеальные укладки подряд для бонусов.</li>
              <li><span className="text-white/50">Онбординг шаг 2 (блок наград):</span> Награды за уровни</li>
              <li><span className="text-white/50">Онбординг шаг 2 (наградный ряд):</span> {'{score}'} очков</li>
              <li><span className="text-white/50">Онбординг шаг 2 (наградный ряд):</span> Скидка {'{discount}'} ₽</li>
              <li><span className="text-white/50">Онбординг шаг 2 (кнопка):</span> Начать игру</li>
              <li><span className="text-white/50">Онбординг шаг 2 (кнопка):</span> Назад</li>
              <li><span className="text-white/50">Лидерборд (заголовок):</span> Топ игроков</li>
              <li><span className="text-white/50">Лидерборд (заголовок):</span> Таблица лидеров</li>
              <li><span className="text-white/50">Лидерборд (пустое состояние):</span> Лидеров пока нет. Сыграй первым и зафиксируй результат.</li>
              <li><span className="text-white/50">Лидерборд (метка пользователя):</span> это вы</li>
              <li><span className="text-white/50">Лидерборд (подвал):</span> Твой ник:</li>
              <li><span className="text-white/50">Game Over (заголовок):</span> Благотворительность</li>
              <li><span className="text-white/50">Game Over (заголовок):</span> Твоя игра = добро</li>
              <li><span className="text-white/50">Game Over (бейдж):</span> Новый рекорд</li>
              <li><span className="text-white/50">Game Over (поле):</span> Очки</li>
              <li><span className="text-white/50">Game Over (поле):</span> Пожертвование</li>
              <li><span className="text-white/50">Game Over (описание):</span> Мы отправим такую же сумму в рублях на благотворительность в конце Рамадана.</li>
              <li><span className="text-white/50">Game Over (подсказка):</span> Каждое очко = 1 ₽ в копилку добра.</li>
              <li><span className="text-white/50">Game Over (подсказка):</span> Сыграй ещё раз, чтобы увеличить сумму пожертвования.</li>
              <li><span className="text-white/50">Game Over (награда):</span> Награда за {'{score}'} очков</li>
              <li><span className="text-white/50">Game Over (награда):</span> Ваша скидка на {'{discount}'} ₽.</li>
              <li><span className="text-white/50">Game Over (промокод):</span> Промокод</li>
              <li><span className="text-white/50">Game Over (промокод):</span> СКОПИРОВАНО!</li>
              <li><span className="text-white/50">Game Over (кнопка):</span> Сыграть ещё раз и увеличить сумму</li>
              <li><span className="text-white/50">Game Over (нулевой счёт):</span> Башня упала!</li>
              <li><span className="text-white/50">Game Over (нулевой счёт):</span> Высота:</li>
              <li><span className="text-white/50">Game Over (нулевой счёт):</span> НОВЫЙ РЕКОРД!</li>
              <li><span className="text-white/50">Game Over (нулевой счёт):</span> Попробовать снова</li>
              <li><span className="text-white/50">Game Over (нулевой счёт):</span> Таблица лидеров</li>
              <li><span className="text-white/50">HUD (прогресс):</span> До награды</li>
              <li><span className="text-white/50">HUD (прогресс):</span> {'{n}'} этажей</li>
              <li><span className="text-white/50">HUD (прогресс):</span> Прогресс / Все награды</li>
              <li><span className="text-white/50">HUD (прогресс):</span> Все награды получены. Продолжай строить башню!</li>
              <li><span className="text-white/50">Игра (floating texts):</span> Идеально! / Красавчик! / Супер! / Чётко! / Мастер!</li>
              <li><span className="text-white/50">Игра (floating texts):</span> БОНУС ШИРИНЫ!</li>
            </ul>
          </Card>
        </Section>
      </div>
    </div>
  );
}
