import React from 'react';
import { GameState, GameScore } from '../types';
import { GAME_CONFIG, LEADERBOARD_ENTRIES } from '../constants';
import { Play, RotateCw, Trophy, Copy, Heart, Gift, Sparkles, Crown, ArrowLeft } from 'lucide-react';

interface UIOverlayProps {
  gameState: GameState;
  score: GameScore;
  onStart: () => void;
  onResume: () => void;
  onRestart: () => void;
  onOpenLeaderboard: () => void;
  onCloseLeaderboard: () => void;
}

const UIOverlay: React.FC<UIOverlayProps> = ({ gameState, score, onStart, onResume, onRestart, onOpenLeaderboard, onCloseLeaderboard }) => {
  const [copied, setCopied] = React.useState(false);
  const [claimed, setClaimed] = React.useState(false);

  React.useEffect(() => {
    if (gameState !== GameState.GAME_OVER) {
      setClaimed(false);
    }
  }, [gameState]);

  const copyCode = () => {
    navigator.clipboard.writeText(GAME_CONFIG.promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <div className="mb-6 space-y-3 text-gray-300 text-sm leading-relaxed">
            <p>
              🌙 <span className="text-yellow-400 font-bold">В Рамадан</span> мы хотим доставить радость в каждый дом!
            </p>
            <p>
              Твоя задача — построить самую высокую башню из подарков и техники. Чем выше башня — тем больше людей получат свои заказы к празднику.
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-[#1a2f36] rounded-xl p-4 mb-8 text-left space-y-3 border border-white/5">
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
          
          {/* CTA Button */}
          <button 
            onClick={onStart}
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

  if (gameState === GameState.LEADERBOARD) {
    const entries = [...LEADERBOARD_ENTRIES].sort((a, b) => b.score - a.score);

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
              {entries.map((entry, index) => (
                <div
                  key={`${entry.name}-${entry.score}`}
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
                    <span className="font-semibold">{entry.name}</span>
                  </div>
                  <div className="text-sm font-bold text-white/80">{entry.score}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#FF2C00]/20 bg-[#FF2C00]/10 px-4 py-3 text-sm text-white/80">
              Твой рекорд: <span className="font-bold text-white">{score.best}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // GAME OVER SCREEN
  if (gameState === GameState.GAME_OVER) {
    if (score.current > 0) {
      const bonusMax = GAME_CONFIG.bonusMax;
      const bonus = Math.min(score.current, bonusMax);
      const isCapped = score.current >= bonusMax;

      return (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#FF2C00]/30 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-6 shadow-2xl">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FF2C00]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF2C00]/20 text-[#FF2C00]">
                    <Gift size={26} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Твои бонусы</p>
                    <h2 className="text-2xl font-black text-white">Башня упала, но бонусы остались</h2>
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
                <p className="text-[11px] uppercase tracking-widest text-white/50">Бонусы</p>
                <div className="flex items-end gap-3">
                  <p className="text-5xl font-black text-[#FF2C00]">{bonus}</p>
                  <span className="mb-1 text-xs text-white/60">макс {bonusMax}</span>
                </div>
                <p className="mt-2 text-xs text-white/60">Забирай сейчас или сыграй ещё — можно получить больше.</p>
              </div>

              <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Sparkles size={18} className="text-yellow-300 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Чем выше башня — тем больше бонусов.</p>
                    <p className="text-white/60">Максимум за одну игру — {bonusMax}. Если хочешь больше — сыграй ещё раз.</p>
                    {isCapped && (
                      <p className="mt-2 text-xs font-bold text-yellow-300">Ты достиг максимума бонусов за одну игру.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setClaimed(true)}
                  disabled={claimed}
                  className={`w-full rounded-xl px-6 py-3 text-base font-bold transition-all ${
                    claimed
                      ? 'bg-green-600/80 text-white cursor-default'
                      : 'bg-[#FF2C00] text-white hover:bg-[#ff3b12] hover:scale-[1.01] active:scale-95'
                  }`}
                >
                  {claimed ? 'Бонусы зарезервированы' : 'Забрать бонусы'}
                </button>
                <button
                  onClick={onRestart}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-bold text-white hover:bg-white/10 transition-colors"
                >
                  Сыграть ещё раз и взять больше
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

          <h3 className="text-2xl font-bold text-white mb-2">Невероятная высота!</h3>
          <p className="text-blue-200 text-sm mb-6">
            Ты построил отличную башню. Забирай заслуженный подарок к празднику!
          </p>
          
          <div className="bg-black/40 rounded-xl p-4 border border-dashed border-white/20 mb-6 relative group cursor-pointer transition-colors hover:bg-black/60" onClick={copyCode}>
            <p className="text-[10px] text-white/40 uppercase mb-1 tracking-widest">Промокод</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#FF2C00] font-mono text-2xl font-black tracking-widest">{GAME_CONFIG.promoCode}</span>
              <Copy size={18} className="text-white/40 group-hover:text-white transition-colors" />
            </div>
            {copied && (
              <div className="absolute inset-0 flex items-center justify-center bg-green-600/90 rounded-xl text-white text-sm font-bold backdrop-blur-sm">
                СКОПИРОВАНО!
              </div>
            )}
          </div>

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
  return renderHUD();
};

export default UIOverlay;
