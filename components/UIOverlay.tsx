import React from 'react';
import { GameState, GameScore, LeaderboardEntry, PromoReward } from '../types';
import { PROMO_REWARDS } from '../constants';
import { Play, RotateCw, Trophy, Copy, Heart, Sparkles, Crown, ArrowLeft } from 'lucide-react';

interface UIOverlayProps {
  gameState: GameState;
  score: GameScore;
  onStart: () => void;
  onResume: () => void;
  onRestart: () => void;
  onOpenLeaderboard: () => void;
  onCloseLeaderboard: () => void;
  leaderboardEntries: LeaderboardEntry[];
  nickname: string;
  promoReward: PromoReward | null;
}

const UIOverlay: React.FC<UIOverlayProps> = ({ gameState, score, onStart, onResume, onRestart, onOpenLeaderboard, onCloseLeaderboard, leaderboardEntries, nickname, promoReward }) => {
  const [copied, setCopied] = React.useState(false);
  const [onboardingStep, setOnboardingStep] = React.useState(1);
  const nextReward = PROMO_REWARDS.find(reward => reward.score > score.current) ?? null;
  const remainingToReward = nextReward ? Math.max(0, nextReward.score - score.current) : 0;
  const activePromoCode = promoReward?.code ?? PROMO_REWARDS[PROMO_REWARDS.length - 1]?.code;

  const copyCode = () => {
    if (!activePromoCode) return;
    navigator.clipboard.writeText(activePromoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  React.useEffect(() => {
    if (gameState !== GameState.START) {
      setOnboardingStep(1);
    }
  }, [gameState]);

  // HUD (Always visible during play)
  const renderHUD = () => (
    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start pointer-events-none z-20">
      <div className="flex flex-col">
        <span className="text-white/60 text-xs font-bold uppercase tracking-widest drop-shadow-sm">Этаж</span>
        <span className="text-white text-4xl font-black drop-shadow-md tracking-tighter">{score.current}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-white/60 text-xs font-bold uppercase tracking-widest drop-shadow-sm">Рекорд</span>
        <span className="text-yellow-400 text-2xl font-bold drop-shadow-md">{score.best}</span>
      </div>
    </div>
  );

  // 1. ONBOARDING & NARRATIVE
  if (gameState === GameState.START) {
    if (onboardingStep === 1) {
      return (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md p-6 animate-in fade-in duration-500">
          <div className="w-full max-w-md bg-[#15252B] border border-blue-500/20 rounded-2xl shadow-2xl p-6 relative overflow-hidden text-center">
            
            {/* Header */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
              <h1 className="relative text-3xl font-black text-white italic tracking-tighter uppercase transform -skew-x-3">
                Высокие Технологии
                <span className="block text-[#FF2C00] text-4xl mt-1">05.RU</span>
              </h1>
            </div>

            {/* The Story */}
            <div className="mb-8 space-y-3 text-gray-300 text-sm leading-relaxed">
              <p>
                🌙 <span className="text-yellow-400 font-bold">В Рамадан</span> мы хотим доставить радость в каждый дом!
              </p>
              <p>
                Твоя задача — построить самую высокую башню из подарков и техники. Чем выше башня — тем больше людей получат свои заказы к празднику.
              </p>
              <p>
                Каждый набранный балл мы переводим в рубли и отправляем на благотворительность в конце Рамадана.
              </p>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={() => setOnboardingStep(2)}
              className="w-full group relative px-6 py-4 bg-[#FF2C00] text-white font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(255,44,0,0.4)] hover:bg-[#ff3b12] hover:scale-[1.02] transition-all duration-200 active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <Play size={20} fill="currentColor" />
                Начать стройку
              </span>
              <div className="absolute inset-0 rounded-xl border border-white/10"></div>
            </button>

            <button
              onClick={onOpenLeaderboard}
              className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Crown size={18} />
              Таблица лидеров
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md p-6 animate-in fade-in duration-500">
        <div className="w-full max-w-md bg-[#15252B] border border-blue-500/20 rounded-2xl shadow-2xl p-6 relative overflow-hidden text-center">
          
          <div className="mb-4 text-center">
            <p className="text-[10px] uppercase tracking-widest text-white/50">Шаг 2 из 2</p>
            <h2 className="text-2xl font-black text-white mt-2">Правила и награды</h2>
          </div>

          {/* Instructions */}
          <div className="bg-[#1a2f36] rounded-xl p-4 mb-6 text-left space-y-3 border border-white/5">
            <h3 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">Как играть:</h3>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF2C00] text-white flex items-center justify-center text-xs font-bold">1</span>
              <p className="text-xs text-gray-400">Тапай по экрану, когда ящик окажется над башней.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF2C00] text-white flex items-center justify-center text-xs font-bold">2</span>
              <p className="text-xs text-gray-400">Будь точен! Лишние края обрезаются.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF2C00] text-white flex items-center justify-center text-xs font-bold">3</span>
              <p className="text-xs text-gray-400">Делай идеальные укладки подряд для бонусов.</p>
            </div>
          </div>

          {/* Rewards Ladder */}
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
          <p className="mt-3 text-xs text-white/50">Достигни уровня — получи промокод сразу.</p>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={onStart}
            className="w-full group relative px-6 py-4 bg-[#FF2C00] text-white font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(255,44,0,0.4)] hover:bg-[#ff3b12] hover:scale-[1.02] transition-all duration-200 active:scale-95"
          >
            <span className="flex items-center justify-center gap-2">
              <Play size={20} fill="currentColor" />
              Начать игру
            </span>
            <div className="absolute inset-0 rounded-xl border border-white/10"></div>
          </button>

          <button
            onClick={() => setOnboardingStep(1)}
            className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors"
          >
            Назад
          </button>
        </div>
      </div>
    );
  }

  if (gameState === GameState.LEADERBOARD) {
    const entries = [...leaderboardEntries].sort((a, b) => b.score - a.score);

    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-6 animate-in fade-in duration-300">
        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FF2C00]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF2C00]/20 text-[#FF2C00]">
                  <Crown size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Топ игроков</p>
                  <h2 className="text-2xl font-black text-white">Таблица лидеров</h2>
                </div>
              </div>
              <button
                onClick={onCloseLeaderboard}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70 hover:bg-white/10 transition-colors"
              >
                <ArrowLeft size={14} />
                Назад
              </button>
            </div>

            <div className="space-y-2">
              {entries.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/60">
                  Лидеров пока нет. Сыграй первым и зафиксируй результат.
                </div>
              ) : (
                entries.map((entry, index) => (
                  <div
                    key={`${entry.nickname}-${entry.score}-${entry.id ?? index}`}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                      index === 0
                        ? 'border-yellow-400/30 bg-yellow-400/10 text-yellow-200'
                        : 'border-white/10 bg-white/5 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                        index === 0 ? 'bg-yellow-400/20 text-yellow-200' : 'bg-white/10 text-white/70'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-semibold">{entry.nickname}</span>
                    </div>
                    <div className="text-sm font-bold text-white/80">{entry.score}</div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-5 rounded-2xl border border-[#FF2C00]/20 bg-[#FF2C00]/10 px-4 py-3 text-sm text-white/80 flex items-center justify-between">
              <span>Твой ник: <span className="font-bold text-white">{nickname}</span></span>
              <span>Рекорд: <span className="font-bold text-white">{score.best}</span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // GAME OVER SCREEN
  if (gameState === GameState.GAME_OVER) {
    if (score.current > 0) {
      const donation = score.current;

      return (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#FF2C00]/30 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-6 shadow-2xl">
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
                    <h2 className="text-2xl font-black text-white">Твоя игра = добро</h2>
                  </div>
                </div>
                {score.current >= score.best && (
                  <div className="flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-300">
                    <Trophy size={14} />
                    Новый рекорд
                  </div>
                )}
              </div>

              <div className="mb-4 rounded-2xl border border-[#FF2C00]/20 bg-[#FF2C00]/10 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-widest text-white/50">Очки</p>
                  <p className="text-3xl font-black text-white">{score.current}</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-widest text-white/50">Пожертвование</p>
                  <p className="text-4xl font-black text-[#FF2C00]">{donation} ₽</p>
                </div>
                <p className="mt-2 text-xs text-white/60">Мы отправим такую же сумму в рублях на благотворительность в конце Рамадана.</p>
              </div>

              <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Sparkles size={18} className="text-yellow-300 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Каждое очко = 1 ₽ в копилку добра.</p>
                    <p className="text-white/60">Сыграй ещё раз, чтобы увеличить сумму пожертвования.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={onRestart}
                  className="w-full rounded-xl px-6 py-3 text-base font-bold transition-all bg-[#FF2C00] text-white hover:bg-[#ff3b12] hover:scale-[1.01] active:scale-95"
                >
                  Сыграть ещё раз и увеличить сумму
                </button>
                <button
                  onClick={onOpenLeaderboard}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/70 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Crown size={16} />
                  Таблица лидеров
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md animate-in zoom-in-95 duration-300">
        <h2 className="text-4xl font-bold text-white mb-2 uppercase tracking-tight">Башня упала!</h2>
        
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-white/60 text-lg">Высота:</span>
          <span className="text-[#FF2C00] text-5xl font-black">{score.current}</span>
        </div>

        {score.current >= score.best && score.current > 0 && (
          <div className="flex items-center gap-2 text-yellow-400 mb-8 bg-yellow-400/10 px-6 py-3 rounded-full border border-yellow-400/20 animate-bounce">
            <Trophy size={20} />
            <span className="font-bold">НОВЫЙ РЕКОРД!</span>
          </div>
        )}

        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={onRestart}
            className="px-8 py-3 bg-white text-[#15252B] font-bold text-lg rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg"
          >
            <RotateCw size={20} />
            Попробовать снова
          </button>
          <button
            onClick={onOpenLeaderboard}
            className="px-6 py-2 rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white/70 hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Crown size={16} />
            Таблица лидеров
          </button>
        </div>
      </div>
    );
  }

  // PROMO REWARD SCREEN
  if (gameState === GameState.PROMO_PAUSE) {
    const reward = promoReward ?? PROMO_REWARDS[PROMO_REWARDS.length - 1];
    const upcoming = PROMO_REWARDS.filter(item => item.score > (reward?.score ?? 0));
    return (
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#15252B]/95 backdrop-blur-xl p-6 animate-in fade-in duration-500">
        <div className="w-full max-w-sm bg-gradient-to-br from-[#1a2f36] to-[#15252B] border border-[#FF2C00]/30 rounded-2xl p-6 text-center shadow-2xl relative overflow-hidden">
          
          {/* Confetti Decoration (simulated with CSS/Elements) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>

          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-[#FF2C00]/20 rounded-full flex items-center justify-center text-[#FF2C00]">
              <Heart size={32} fill="currentColor" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Награда открыта!</h3>
          <p className="text-blue-200 text-sm mb-4">
            Ты достиг уровня <span className="font-semibold text-white">{reward.score} очков</span>.
          </p>
          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
            Промокод на скидку <span className="font-bold text-white">{reward.discount} ₽</span>
          </div>
          
          <div className="bg-black/40 rounded-xl p-4 border border-dashed border-white/20 mb-6 relative group cursor-pointer transition-colors hover:bg-black/60" onClick={copyCode}>
            <p className="text-[10px] text-white/40 uppercase mb-1 tracking-widest">Промокод</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#FF2C00] font-mono text-2xl font-black tracking-widest">{reward.code}</span>
              <Copy size={18} className="text-white/40 group-hover:text-white transition-colors" />
            </div>
            {copied && (
              <div className="absolute inset-0 flex items-center justify-center bg-green-600/90 rounded-xl text-white text-sm font-bold backdrop-blur-sm">
                СКОПИРОВАНО!
              </div>
            )}
          </div>

          {upcoming.length > 0 && (
            <div className="mb-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
              Следующая цель: {upcoming[0].score} очков — скидка {upcoming[0].discount} ₽
            </div>
          )}

          <button 
            onClick={onResume}
            className="w-full py-3 bg-[#FF2C00] text-white font-bold rounded-lg hover:bg-[#d82600] transition-colors shadow-lg"
          >
            ПРОДОЛЖИТЬ ИГРУ
          </button>
        </div>
      </div>
    );
  }

  // Playing State
  if (gameState === GameState.PLAYING) {
    return (
      <>
        {renderHUD()}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 w-[min(92vw,520px)]">
          <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-center text-xs text-white/80 backdrop-blur">
            {nextReward ? (
              <>
                До промокода: <span className="text-white font-semibold">{remainingToReward} этажей</span> — скидка {nextReward.discount} ₽
              </>
            ) : (
              <>
                Все награды получены. Продолжай строить башню!
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  return renderHUD();
};

export default UIOverlay;
