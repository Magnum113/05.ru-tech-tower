import React from 'react';
import { Play, Crown, ArrowLeft, Heart, Sparkles, Trophy, RotateCw, Copy } from 'lucide-react';
import { COLORS, PROMO_REWARDS, PERFECT_MESSAGES } from '../constants';

const sampleNickname = 'Сильный Енот';

const sampleLeaderboard = [
  { nickname: sampleNickname, score: 23, isMe: true },
  { nickname: 'Лунный Филин', score: 18 },
  { nickname: 'Северный Барс', score: 12 },
];

const sampleScore = 12;
const sampleBest = 23;
const sampleNextReward = PROMO_REWARDS.find((reward) => reward.score > sampleScore) ?? null;
const sampleRemainingToReward = sampleNextReward ? Math.max(0, sampleNextReward.score - sampleScore) : 0;
const sampleTotalGoal = PROMO_REWARDS[PROMO_REWARDS.length - 1]?.score ?? 0;
const sampleOverallProgress = sampleTotalGoal > 0 ? Math.min(1, sampleScore / sampleTotalGoal) : 0;
const sampleSegmentCount = PROMO_REWARDS.length;
const sampleSegmentProgress = (index: number) => {
  if (!sampleTotalGoal || sampleSegmentCount === 0) return 0;
  const segmentSize = sampleTotalGoal / sampleSegmentCount;
  const segmentStart = index * segmentSize;
  const segmentEnd = segmentStart + segmentSize;
  if (sampleScore <= segmentStart) return 0;
  if (sampleScore >= segmentEnd) return 1;
  return (sampleScore - segmentStart) / segmentSize;
};

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

const BlockPreview: React.FC<{
  width: number;
  height: number;
  color?: string;
  rotate?: number;
  className?: string;
}> = ({ width, height, color = COLORS.boxMain, rotate = 0, className }) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const depth = 12;
    const padding = 16;
    const extraX = depth;
    const extraY = depth;
    canvas.width = Math.ceil(width + extraX + padding * 2);
    canvas.height = Math.ceil(height + extraY + padding * 2);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawBlockShape = (x: number, y: number, w: number, h: number, fillColor: string) => {
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.25)';
      ctx.shadowBlur = 12;
      ctx.shadowOffsetY = 4;
      ctx.fillStyle = fillColor;
      ctx.fillRect(x, y, w, h);
      ctx.restore();

      ctx.fillStyle = COLORS.boxLight;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + depth, y - depth);
      ctx.lineTo(x + w + depth, y - depth);
      ctx.lineTo(x + w, y);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = COLORS.boxDark;
      ctx.beginPath();
      ctx.moveTo(x + w, y);
      ctx.lineTo(x + w + depth, y - depth);
      ctx.lineTo(x + w + depth, y + h - depth);
      ctx.lineTo(x + w, y + h);
      ctx.closePath();
      ctx.fill();

      const tapeW = Math.max(10, Math.min(26, w * 0.18));
      ctx.fillStyle = COLORS.boxTape;
      ctx.fillRect(x + w / 2 - tapeW / 2, y, tapeW, h);

      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.beginPath();
      ctx.moveTo(x + w / 2 - tapeW / 2, y);
      ctx.lineTo(x + w / 2 - tapeW / 2 + depth, y - depth);
      ctx.lineTo(x + w / 2 + tapeW / 2 + depth, y - depth);
      ctx.lineTo(x + w / 2 + tapeW / 2, y);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = 'rgba(0,0,0,0.08)';
      ctx.lineWidth = 1;
      const lineCount = Math.max(3, Math.floor(w / 40));
      for (let i = 1; i <= lineCount; i += 1) {
        const lx = x + (w * i) / (lineCount + 1);
        ctx.beginPath();
        ctx.moveTo(lx, y);
        ctx.lineTo(lx, y + h);
        ctx.stroke();
      }

      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, w, h);
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (rotate !== 0) {
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotate);
      drawBlockShape(-width / 2, -height / 2, width, height, color);
      ctx.restore();
    } else {
      drawBlockShape(padding, padding + depth, width, height, color);
    }
  }, [width, height, color, rotate]);

  return <canvas ref={canvasRef} className={className ?? 'mx-auto'} />;
};

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

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70 space-y-3">
          <h2 className="text-lg font-black text-white">Короткий гайд для дизайнера</h2>
          <ul className="grid gap-2">
            <li>• Работай от двух артбордов: Desktop и Mobile.</li>
            <li>• Сохраняем композицию и порядок блоков, на мобилке всё в одну колонку.</li>
            <li>• Карточки центрируем; на мобилке тянем почти на всю ширину экрана.</li>
            <li>• На мобилке уплотняем отступы и расстояния между блоками.</li>
            <li>• Кнопки — во всю ширину карточки, с одной визуальной высотой.</li>
            <li>• Игровой Canvas всегда во весь экран; оверлеи центрируются по горизонтали, с безопасными боковыми полями.</li>
          </ul>
        </section>

        <Section title="Онбординг — Шаг 1 (история)">
          <div className="w-full max-w-md bg-[#15252B] border border-blue-500/20 rounded-2xl shadow-2xl p-6 relative overflow-hidden text-center -translate-y-5 sm:translate-y-0 mx-auto">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
              <p className="relative text-sm font-black text-white/90 mb-3">
                Рамадан — время заботы и добрых дел
              </p>
              <h1 className="relative text-3xl font-black text-white tracking-tight">
                Башня доброты
              </h1>
            </div>

            <div className="mb-8 space-y-3 text-gray-300 text-sm leading-relaxed">
              <p>
                Эта игра — ваш небольшой, но значимый вклад. Постройте ровную и высокую башню из коробок и зарабатывайте баллы.
              </p>
              <p>
                В конце месяца Рамадан все набранные баллы будут направлены на благотворительные цели.
              </p>
              <p>
                Будьте терпеливы, и всё обязательно <em>сложится</em>.
              </p>
            </div>

            <button className="w-full group relative px-6 py-4 bg-[#FF2C00] text-white font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(255,44,0,0.4)] hover:bg-[#ff3b12] hover:scale-[1.02] transition-all duration-200 active:scale-95">
              <span className="flex items-center justify-center gap-2">
                <Play size={20} fill="currentColor" />
                Построить башню!
              </span>
              <div className="absolute inset-0 rounded-xl border border-white/10"></div>
            </button>

            <button className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Crown size={18} />
              Посмотреть рейтинг игроков
            </button>

            <button className="mt-3 text-xs text-white/60 hover:text-white/80 transition-colors">
              Правила участия
            </button>
          </div>
        </Section>

        <Section title="Правила участия (попап)">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#15252B] p-5 text-left shadow-2xl mx-auto">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-black text-white">Правила участия</h3>
              <button className="text-xs text-white/60 hover:text-white/80">Закрыть</button>
            </div>
            <div className="mt-3 space-y-3 text-sm text-white/70">
              <p>Моковый текст. Здесь будут юридические правила участия в акции.</p>
              <p>Добавьте условия, сроки, ограничения и прочую обязательную информацию.</p>
              <p>Текст будет заменён позднее.</p>
            </div>
          </div>
        </Section>

        <Section title="Онбординг — Шаг 2 (правила и награды)">
          <div className="w-full max-w-md bg-[#15252B] border border-blue-500/20 rounded-2xl shadow-2xl p-6 relative overflow-hidden text-center mx-auto">
            <div className="mb-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-white/50">Шаг 2 из 2</p>
              <h2 className="text-2xl font-black text-white mt-2">Правила и награды</h2>
            </div>

            <div className="bg-[#1a2f36] rounded-xl p-4 mb-6 text-left space-y-3 border border-white/5">
              <h3 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">Какие же правила?</h3>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF2C00] text-white flex items-center justify-center text-xs font-bold">1</span>
                <p className="text-xs text-gray-400">«Отпускайте» ящик, когда он окажется над башней, одним нажатием на экран</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF2C00] text-white flex items-center justify-center text-xs font-bold">2</span>
                <p className="text-xs text-gray-400">Старайтесь собирать башню ровно. Если края выйдут за границы, они будут обрезаны</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF2C00] text-white flex items-center justify-center text-xs font-bold">3</span>
                <p className="text-xs text-gray-400">Чем выше башня, тем больше баллов будет направлено на благотворительность</p>
              </div>
            </div>

            <div className="bg-[#101e23] rounded-xl p-4 mb-6 text-left border border-white/5">
              <h3 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-3">Награды за уровни</h3>
              <div className="space-y-2 text-sm">
                {PROMO_REWARDS.map((reward) => (
                  <div
                    key={reward.score}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-white/80"
                  >
                    <span className="text-xs uppercase tracking-widest text-white/50">{reward.score} очков</span>
                    <span className="font-semibold text-white">Скидка {reward.discount} ₽</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full group relative px-6 py-4 bg-[#FF2C00] text-white font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(255,44,0,0.4)] hover:bg-[#ff3b12] hover:scale-[1.02] transition-all duration-200 active:scale-95">
              <span className="flex items-center justify-center gap-2">
                <Play size={20} fill="currentColor" />
                Начать игру
              </span>
              <div className="absolute inset-0 rounded-xl border border-white/10"></div>
            </button>

            <button className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors">
              Назад
            </button>
          </div>
        </Section>

        <Section title="HUD и прогресс награды (во время игры)">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest drop-shadow-sm">Этаж</span>
                <span className="text-white text-4xl font-black drop-shadow-md tracking-tighter">{sampleScore}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest drop-shadow-sm">Рекорд</span>
                <span className="text-yellow-400 text-2xl font-bold drop-shadow-md">{sampleBest}</span>
              </div>
            </div>

            <div className="w-[min(92vw,560px)] mx-auto">
              {sampleNextReward ? (
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-black/45 via-black/35 to-black/45 px-4 py-3 text-white/90 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/60">
                    <span>До награды</span>
                    <span>{sampleRemainingToReward} этажей</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-white">Скидка {sampleNextReward.discount} ₽</span>
                    <span className="text-white/70">{sampleScore}/{sampleNextReward.score}</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1">
                    {PROMO_REWARDS.map((reward, index) => {
                      const fill = Math.round(sampleSegmentProgress(index) * 100);
                      const isReached = sampleScore >= reward.score;
                      return (
                        <div key={reward.score} className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              isReached
                                ? 'bg-gradient-to-r from-[#FF2C00] via-[#ff6a4d] to-[#FF2C00] shadow-[0_0_10px_rgba(255,44,0,0.6)]'
                                : 'bg-gradient-to-r from-white/40 via-white/60 to-white/40'
                            }`}
                            style={{ width: `${fill}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-white/50">
                    <span>{sampleOverallProgress >= 1 ? 'Все награды' : 'Прогресс'}</span>
                    <span>{Math.round(sampleOverallProgress * 100)}%</span>
                  </div>
                </div>
              ) : (
                <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-center text-xs text-white/80 backdrop-blur">
                  Все награды получены. Продолжайте играть!
                </div>
              )}
            </div>

            <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-center text-xs text-white/80 backdrop-blur w-[min(92vw,560px)] mx-auto">
              Все награды получены. Продолжайте играть!
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
                <li>Текущее: градиент #15252B → #0F1B20, звёзды и полумесяцы.</li>
              </ul>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70 space-y-2">
                <p className="text-white/80 font-semibold">Что можно сделать:</p>
                <ul className="grid gap-1">
                  <li>• Заменить градиент на любой другой или сделать однотонный фон.</li>
                  <li>• Звёзды и луна — отдельные элементы, их можно заменить на любые декоративные.</li>
                  <li>• Можно упростить фон до плоской заливки или сделать сложный атмосферный градиент.</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Коробки и их состояния (дизайн блоков)">
          <Card maxWidth="max-w-4xl">
            <div className="space-y-4 text-sm text-white/70">
              <p>Блоки рисуются на Canvas как «картонные» коробки: светлая верхняя грань, тёмная боковая, «скотч» по центру и лёгкие линии гофры.</p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-[#0f1b20] p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Основной блок</p>
                  <BlockPreview width={220} height={70} />
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0f1b20] p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Обрезанный блок</p>
                  <BlockPreview width={150} height={70} />
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0f1b20] p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Падающий осколок</p>
                  <BlockPreview width={70} height={70} color={COLORS.boxDark} rotate={0.25} />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70 space-y-2">
                <p className="text-white/80 font-semibold">Состояния:</p>
                <ul className="grid gap-1">
                  <li>• Perfect: блок точно совпал по ширине.</li>
                  <li>• Cut: лишняя часть отрезается и падает как осколок.</li>
                  <li>• Debris: осколки падают с вращением.</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Экран результата (есть очки)">
          <div className="relative w-full max-w-lg rounded-3xl border border-[#FF2C00]/30 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-5 sm:p-6 shadow-2xl mx-auto">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FF2C00]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF2C00]/20 text-[#FF2C00]">
                    <Heart size={26} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Благотворительность</p>
                    <h2 className="text-2xl font-black text-white">Каждая игра — шаг к добру</h2>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-300">
                  <Trophy size={14} />
                  Новый рекорд
                </div>
              </div>

              <div className="mb-4 rounded-2xl border border-[#FF2C00]/20 bg-[#FF2C00]/10 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-widest text-white/50">Очки</p>
                  <p className="text-3xl font-black text-white">23</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-widest text-white/50">Пожертвование</p>
                  <p className="text-4xl font-black text-[#FF2C00]">23 ₽</p>
                </div>
                <p className="mt-2 text-xs text-white/60">В конце Рамадана эта сумма будет направлена на благотворительность</p>
              </div>

              <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Sparkles size={18} className="text-yellow-300 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Каждый балл — вклад в копилку добра.</p>
                    <p className="text-white/60">Можно сыграть ещё раз и увеличить сумму пожертвования</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Crown size={18} className="text-yellow-300 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Ваша награда:</p>
                    <p className="text-white/60">Скидка на 1000 ₽ при покупке от 25 000 ₽</p>
                  </div>
                </div>
                <div className="mt-3 bg-black/40 rounded-xl p-3 border border-dashed border-white/20 relative group cursor-pointer transition-colors hover:bg-black/60">
                  <p className="text-[10px] text-white/40 uppercase mb-1 tracking-widest">Промокод</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-[#FF2C00] font-mono text-xl font-black tracking-widest">HJKL</span>
                    <Copy size={16} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full rounded-xl px-6 py-3 text-base font-bold transition-all bg-[#FF2C00] text-white hover:bg-[#ff3b12] hover:scale-[1.01] active:scale-95">
                  Сыграть ещё раз
                </button>
                <button className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/70 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Crown size={16} />
                  Посмотреть рейтинг игроков
                </button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Экран результата (очков 0)">
          <div className="w-full max-w-md mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-2 uppercase tracking-tight">Ваша башня упала</h2>
            <p className="text-white/60 mb-4">Но можно попробовать ещё раз</p>

            <div className="flex items-baseline gap-2 mb-8 justify-center">
              <span className="text-white/60 text-lg">Высота:</span>
              <span className="text-[#FF2C00] text-5xl font-black">0</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button className="px-8 py-3 bg-white text-[#15252B] font-bold text-lg rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg">
                <RotateCw size={20} />
                Попробовать снова
              </button>
              <button className="px-6 py-2 rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white/70 hover:bg-white/10 transition-colors flex items-center gap-2">
                <Crown size={16} />
                Посмотреть рейтинг игроков
              </button>
            </div>
          </div>
        </Section>

        <Section title="Рейтинг игроков (с результатами)">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-5 sm:p-6 shadow-2xl relative mx-auto">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FF2C00]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF2C00]/20 text-[#FF2C00]">
                    <Crown size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Топ игроков</p>
                    <h2 className="text-2xl font-black text-white">Рейтинг игроков</h2>
                  </div>
                </div>
                <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70 hover:bg-white/10 transition-colors">
                  <ArrowLeft size={14} />
                  Назад
                </button>
              </div>

              <div className="space-y-2">
                {sampleLeaderboard.map((entry, index) => (
                  <div
                    key={entry.nickname}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                      entry.isMe
                        ? 'border-[#FF2C00]/40 bg-[#FF2C00]/15 text-white shadow-[0_0_0_1px_rgba(255,44,0,0.25)]'
                        : index === 0
                          ? 'border-yellow-400/30 bg-yellow-400/10 text-yellow-200'
                          : 'border-white/10 bg-white/5 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                        entry.isMe
                          ? 'bg-[#FF2C00]/20 text-white'
                          : index === 0
                            ? 'bg-yellow-400/20 text-yellow-200'
                            : 'bg-white/10 text-white/70'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-semibold">
                        {entry.nickname}
                        {entry.isMe && <span className="ml-2 text-[10px] uppercase tracking-widest text-white/60">это вы</span>}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white/80">{entry.score}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-[#FF2C00]/20 bg-[#FF2C00]/10 px-4 py-3 text-sm text-white/80 flex items-center justify-between">
                <span>Ваш ник: <span className="font-bold text-white">{sampleNickname}</span></span>
                <span>Рекорд: <span className="font-bold text-white">23</span></span>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Рейтинг игроков (пустой)">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-5 sm:p-6 shadow-2xl relative mx-auto">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FF2C00]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF2C00]/20 text-[#FF2C00]">
                    <Crown size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Топ игроков</p>
                    <h2 className="text-2xl font-black text-white">Рейтинг игроков</h2>
                  </div>
                </div>
                <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70 hover:bg-white/10 transition-colors">
                  <ArrowLeft size={14} />
                  Назад
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/60">
                Игроков в списке пока нет, но вы можете стать первым :)
              </div>
            </div>
          </div>
        </Section>

        <Section title="Рейтинг игроков (недоступен)">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-5 sm:p-6 shadow-2xl relative mx-auto">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FF2C00]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF2C00]/20 text-[#FF2C00]">
                    <Crown size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Топ игроков</p>
                    <h2 className="text-2xl font-black text-white">Рейтинг игроков</h2>
                  </div>
                </div>
                <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70 hover:bg-white/10 transition-colors">
                  <ArrowLeft size={14} />
                  Назад
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/60">
                Рейтинг игроков пока недоступен
              </div>
            </div>
          </div>
        </Section>

        <Section title="Всплывающие тексты в игре">
          <Card maxWidth="max-w-lg">
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-6 text-center">
              <div className="flex flex-col items-center gap-2">
                {PERFECT_MESSAGES.map((msg) => (
                  <span
                    key={msg}
                    className="text-2xl font-bold text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                  >
                    {msg}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Тексты (список для копирайтера с контекстом)">
          <Card maxWidth="max-w-4xl">
            <div className="space-y-6 text-sm text-white/70">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">HUD (игра)</p>
                <ul className="mt-2 grid gap-2">
                  <li>Этаж</li>
                  <li>Рекорд</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Онбординг шаг 1 (история)</p>
                <ul className="mt-2 grid gap-2">
                  <li>Рамадан — время заботы и добрых дел</li>
                  <li>Башня доброты</li>
                  <li>Эта игра — ваш небольшой, но значимый вклад. Постройте ровную и высокую башню из коробок и зарабатывайте баллы.</li>
                  <li>В конце месяца Рамадан все набранные баллы будут направлены на благотворительные цели.</li>
                  <li>Будьте терпеливы, и всё обязательно <em>сложится</em>.</li>
                  <li>Построить башню!</li>
                  <li>Посмотреть рейтинг игроков</li>
                  <li>Правила участия</li>
                  <li>Моковый текст правил участия (будет заменён позднее).</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Онбординг шаг 2 (правила и награды)</p>
                <ul className="mt-2 grid gap-2">
                  <li>Шаг 2 из 2</li>
                  <li>Правила и награды</li>
                  <li>Какие же правила?</li>
                  <li>«Отпускайте» ящик, когда он окажется над башней, одним нажатием на экран</li>
                  <li>Старайтесь собирать башню ровно. Если края выйдут за границы, они будут обрезаны</li>
                  <li>Чем выше башня, тем больше баллов будет направлено на благотворительность</li>
                  <li>Награды за уровни</li>
                  <li>{'{score}'} очков</li>
                  <li>Скидка {'{discount}'} ₽</li>
                  <li>Начать игру</li>
                  <li>Назад</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Лидерборд</p>
                <ul className="mt-2 grid gap-2">
                  <li>Топ игроков</li>
                  <li>Рейтинг игроков</li>
                  <li>Игроков в списке пока нет, но вы можете стать первым :)</li>
                  <li>Рейтинг игроков пока недоступен</li>
                  <li>это вы</li>
                  <li>Ваш ник:</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Game Over (результат)</p>
                <ul className="mt-2 grid gap-2">
                  <li>Благотворительность</li>
                  <li>Каждая игра — шаг к добру</li>
                  <li>Новый рекорд</li>
                  <li>Очки</li>
                  <li>Пожертвование</li>
                  <li>В конце Рамадана эта сумма будет направлена на благотворительность</li>
                  <li>Каждый балл — вклад в копилку добра.</li>
                  <li>Можно сыграть ещё раз и увеличить сумму пожертвования</li>
                  <li>Ваша награда:</li>
                  <li>Скидка на {'{discount}'} ₽ при покупке от 25 000 ₽</li>
                  <li>Промокод</li>
                  <li>СКОПИРОВАНО!</li>
                  <li>Сыграть ещё раз</li>
                  <li>Посмотреть рейтинг игроков</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Game Over (нулевой счёт)</p>
                <ul className="mt-2 grid gap-2">
                  <li>Ваша башня упала</li>
                  <li>Но можно попробовать ещё раз</li>
                  <li>Высота:</li>
                  <li>Попробовать снова</li>
                  <li>Посмотреть рейтинг игроков</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">HUD (прогресс награды)</p>
                <ul className="mt-2 grid gap-2">
                  <li>До награды</li>
                  <li>{'{n}'} этажей</li>
                  <li>Прогресс / Все награды</li>
                  <li>Все награды получены. Продолжайте играть!</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">Всплывающие тексты</p>
                <ul className="mt-2 grid gap-2">
                  <li>ВАУ / Молодец / Идеально! / Ровненько! / Больше баллов! / Удачно!</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

      </div>
    </div>
  );
}
