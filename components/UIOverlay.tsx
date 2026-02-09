import React from 'react';
import { GameState, GameScore, LeaderboardEntry, LeaderboardStatus } from '../types';
import { PROMO_REWARDS } from '../constants';
import { Play, RotateCw, Trophy, Copy, Heart, Sparkles, Crown, ArrowLeft } from 'lucide-react';

interface UIOverlayProps {
  gameState: GameState;
  score: GameScore;
  onStart: () => void;
  onRestart: () => void;
  onOpenLeaderboard: () => void;
  onCloseLeaderboard: () => void;
  leaderboardEntries: LeaderboardEntry[];
  leaderboardStatus: LeaderboardStatus;
  nickname: string;
}

const UIOverlay: React.FC<UIOverlayProps> = ({ gameState, score, onStart, onRestart, onOpenLeaderboard, onCloseLeaderboard, leaderboardEntries, leaderboardStatus, nickname }) => {
  const [copied, setCopied] = React.useState(false);
  const [onboardingStep, setOnboardingStep] = React.useState(1);
  const [gameOverCooldown, setGameOverCooldown] = React.useState(false);
  const [showParticipationRules, setShowParticipationRules] = React.useState(false);
  const participationRules = [
    'Организатор акции — магазин электроники 05.ru.',
    'Период проведения акции: с 17 февраля 2026 года по 19 марта 2026 года включительно.',
    'К участию допускаются физические лица старше 18 лет.',
    'Участник играет в «Башню доброты» и получает баллы за успешную установку блоков.',
    'Каждый балл учитывается как 1 ₽ в благотворительную копилку акции.',
    'В конце Рамадана организатор перечисляет сумму, эквивалентную сумме баллов, на благотворительные цели.',
    'Баллы не являются денежными средствами, не подлежат выводу, передаче третьим лицам и не могут использоваться для оплаты товаров.',
    'Промокоды по уровням: 10 баллов — 500 ₽, 20 баллов — 1000 ₽, 30 баллов — 1500 ₽.',
    'Все промокоды действуют до 19 марта 2026 года включительно.',
    'Скидка применяется при покупке от 25 000 ₽ и не действует на технику Apple.',
    'Организатор вправе исключать результаты, полученные с использованием ботов, автоматизации и иных недобросовестных методов участия.',
    'Организатор вправе досрочно завершить акцию и/или изменить правила, включая сроки. Актуальная редакция размещается на сайте 05.ru в разделе «Акции».',
    'Участвуя в акции, участник подтверждает согласие на обработку персональных данных в объеме, необходимом для проведения акции.',
    'Акция не является лотереей и не требует обязательной покупки.',
  ];
  const nextReward = PROMO_REWARDS.find(reward => reward.score > score.current) ?? null;
  const remainingToReward = nextReward ? Math.max(0, nextReward.score - score.current) : 0;
  const earnedReward = [...PROMO_REWARDS].reverse().find(reward => reward.score <= score.current) ?? null;
  const activePromoCode = earnedReward?.code ?? null;
  const totalGoal = PROMO_REWARDS[PROMO_REWARDS.length - 1]?.score ?? 0;
  const overallProgress = totalGoal > 0 ? Math.min(1, score.current / totalGoal) : 0;
  const segmentCount = PROMO_REWARDS.length;
  const segmentProgress = (index: number) => {
    if (!totalGoal || segmentCount === 0) return 0;
    const segmentSize = totalGoal / segmentCount;
    const segmentStart = index * segmentSize;
    const segmentEnd = segmentStart + segmentSize;
    if (score.current <= segmentStart) return 0;
    if (score.current >= segmentEnd) return 1;
    return (score.current - segmentStart) / segmentSize;
  };

  const copyCode = () => {
    if (!activePromoCode) return;
    navigator.clipboard.writeText(activePromoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  React.useEffect(() => {
    if (gameState !== GameState.START) {
      setOnboardingStep(1);
      setShowParticipationRules(false);
    }
  }, [gameState]);

  React.useEffect(() => {
    if (gameState === GameState.GAME_OVER) {
      setGameOverCooldown(true);
      const timer = window.setTimeout(() => setGameOverCooldown(false), 1200);
      return () => window.clearTimeout(timer);
    }
    setGameOverCooldown(false);
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
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/80 backdrop-blur-md p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto animate-in fade-in duration-500">
          <div className="w-full max-w-md bg-[#15252B] border border-blue-500/20 rounded-2xl shadow-2xl p-6 relative overflow-hidden text-center -translate-y-5 sm:translate-y-0 my-auto">
            
            {/* Header */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
              <p className="relative text-sm font-black text-white/90 mb-3">
                Рамадан — время заботы и добрых дел
              </p>
              <h1 className="relative text-3xl font-black text-white tracking-tight">
                Башня доброты
              </h1>
            </div>

            {/* The Story */}
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
            
            {/* CTA Button */}
            <button 
              onClick={() => setOnboardingStep(2)}
              className="w-full group relative px-6 py-4 bg-[#FF2C00] text-white font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(255,44,0,0.4)] hover:bg-[#ff3b12] hover:scale-[1.02] transition-all duration-200 active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <Play size={20} fill="currentColor" />
                Построить башню!
              </span>
              <div className="absolute inset-0 rounded-xl border border-white/10"></div>
            </button>

            <button
              onClick={onOpenLeaderboard}
              className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Crown size={18} />
              Посмотреть рейтинг игроков
            </button>

            <button
              onClick={() => setShowParticipationRules(true)}
              className="mt-3 text-xs text-white/60 hover:text-white/80 transition-colors"
            >
              Правила участия
            </button>
          </div>

          {showParticipationRules && (
            <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#15252B] p-5 text-left shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black text-white">Правила участия</h3>
                  <button
                    onClick={() => setShowParticipationRules(false)}
                    className="text-xs text-white/60 hover:text-white/80"
                  >
                    Закрыть
                  </button>
                </div>
                <div className="mt-3 space-y-3 text-sm text-white/70">
                  <p>
                    <strong>Правила участия в промо-игре «Башня доброты»</strong>
                  </p>
                  <div className="max-h-[55vh] overflow-y-auto pr-1">
                    <ol className="list-decimal list-inside space-y-2 pl-1">
                      {participationRules.map((rule) => (
                        <li key={rule}>{rule}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/80 backdrop-blur-md p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto animate-in fade-in duration-500">
        <div className="w-full max-w-md bg-[#15252B] border border-blue-500/20 rounded-2xl shadow-2xl p-6 relative overflow-hidden text-center my-auto">
          
          <div className="mb-4 text-center">
            <p className="text-[10px] uppercase tracking-widest text-white/50">Шаг 2 из 2</p>
            <h2 className="text-2xl font-black text-white mt-2">Правила и награды</h2>
          </div>

          {/* Instructions */}
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
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/85 backdrop-blur-md p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto animate-in fade-in duration-300">
        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-5 sm:p-6 shadow-2xl relative my-auto">
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
              <button
                onClick={onCloseLeaderboard}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70 hover:bg-white/10 transition-colors"
              >
                <ArrowLeft size={14} />
                Назад
              </button>
            </div>

            <div className="space-y-2">
              {leaderboardStatus === 'error' ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/60">
                  Рейтинг игроков пока недоступен
                </div>
              ) : entries.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm text-white/60">
                  Игроков в списке пока нет, но вы можете стать первым :)
                </div>
              ) : (
                entries.map((entry, index) => (
                  <div
                    key={`${entry.nickname}-${entry.score}-${entry.id ?? index}`}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                      entry.nickname === nickname
                        ? 'border-[#FF2C00]/40 bg-[#FF2C00]/15 text-white shadow-[0_0_0_1px_rgba(255,44,0,0.25)]'
                        : index === 0
                          ? 'border-yellow-400/30 bg-yellow-400/10 text-yellow-200'
                          : 'border-white/10 bg-white/5 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                        entry.nickname === nickname
                          ? 'bg-[#FF2C00]/20 text-white'
                          : index === 0
                            ? 'bg-yellow-400/20 text-yellow-200'
                            : 'bg-white/10 text-white/70'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-semibold">
                        {entry.nickname}
                        {entry.nickname === nickname && <span className="ml-2 text-[10px] uppercase tracking-widest text-white/60">это вы</span>}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white/80">{entry.score}</div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-5 rounded-2xl border border-[#FF2C00]/20 bg-[#FF2C00]/10 px-4 py-3 text-sm text-white/80 flex items-center justify-between">
              <span>Ваш ник: <span className="font-bold text-white">{nickname || '—'}</span></span>
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
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-start bg-black/90 backdrop-blur-md p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg rounded-3xl border border-[#FF2C00]/30 bg-gradient-to-br from-[#15252B] via-[#0f1b20] to-[#111827] p-5 sm:p-6 shadow-2xl my-auto">
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

              {earnedReward && (
                <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  <div className="flex items-start gap-3">
                    <Crown size={18} className="text-yellow-300 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Ваша награда:</p>
                      <p className="text-white/60">Скидка на {earnedReward.discount} ₽ при покупке от 25 000 ₽</p>
                    </div>
                  </div>
                  <div className="mt-3 bg-black/40 rounded-xl p-3 border border-dashed border-white/20 relative group cursor-pointer transition-colors hover:bg-black/60" onClick={copyCode}>
                    <p className="text-[10px] text-white/40 uppercase mb-1 tracking-widest">Промокод</p>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-[#FF2C00] font-mono text-xl font-black tracking-widest">{earnedReward.code}</span>
                      <Copy size={16} className="text-white/40 group-hover:text-white transition-colors" />
                    </div>
                    {copied && (
                      <div className="absolute inset-0 flex items-center justify-center bg-green-600/90 rounded-xl text-white text-sm font-bold backdrop-blur-sm">
                        СКОПИРОВАНО!
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className={`flex flex-col gap-3 ${gameOverCooldown ? 'pointer-events-none opacity-80' : ''}`}>
                <button
                  onClick={onRestart}
                  disabled={gameOverCooldown}
                  className="w-full rounded-xl px-6 py-3 text-base font-bold transition-all bg-[#FF2C00] text-white hover:bg-[#ff3b12] hover:scale-[1.01] active:scale-95"
                >
                  Сыграть ещё раз
                </button>
                <button
                  onClick={onOpenLeaderboard}
                  disabled={gameOverCooldown}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/70 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Crown size={16} />
                  Посмотреть рейтинг игроков
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md animate-in zoom-in-95 duration-300">
        <h2 className="text-4xl font-bold text-white mb-2 uppercase tracking-tight">Ваша башня упала</h2>
        <p className="text-white/60 mb-4">Но можно попробовать ещё раз</p>
        
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

        <div className={`flex flex-col items-center gap-3 ${gameOverCooldown ? 'pointer-events-none opacity-80' : ''}`}>
          <button 
            onClick={onRestart}
            disabled={gameOverCooldown}
            className="px-8 py-3 bg-white text-[#15252B] font-bold text-lg rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg"
          >
            <RotateCw size={20} />
            Попробовать снова
          </button>
          <button
            onClick={onOpenLeaderboard}
            disabled={gameOverCooldown}
            className="px-6 py-2 rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white/70 hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Crown size={16} />
            Посмотреть рейтинг игроков
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
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 w-[min(92vw,560px)]">
          {nextReward ? (
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-black/45 via-black/35 to-black/45 px-4 py-3 text-white/90 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/60">
                <span>До награды</span>
                <span>{remainingToReward} этажей</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-white">Скидка {nextReward.discount} ₽</span>
                <span className="text-white/70">{score.current}/{nextReward.score}</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1">
                {PROMO_REWARDS.map((reward, index) => {
                  const fill = Math.round(segmentProgress(index) * 100);
                  const isReached = score.current >= reward.score;
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
                <span>{overallProgress >= 1 ? 'Все награды' : 'Прогресс'}</span>
                <span>{Math.round(overallProgress * 100)}%</span>
              </div>
            </div>
          ) : (
            <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-center text-xs text-white/80 backdrop-blur">
              Все награды получены. Продолжайте играть!
            </div>
          )}
        </div>
      </>
    );
  }

  return renderHUD();
};

export default UIOverlay;
