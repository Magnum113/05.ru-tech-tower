import React from 'react';
import { GameState, GameScore, LeaderboardEntry, LeaderboardStatus } from '../types';
import { PROMO_REWARDS } from '../constants';
import svgPaths from '../newdesign/src/imports/svg-o1stykekh4';

interface UIOverlayDesignV2Props {
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

const UIOverlayDesignV2: React.FC<UIOverlayDesignV2Props> = ({
  gameState,
  score,
  onStart,
  onRestart,
  onOpenLeaderboard,
  onCloseLeaderboard,
  leaderboardEntries,
  leaderboardStatus,
  nickname,
}) => {
  const [copied, setCopied] = React.useState(false);
  const [onboardingStep, setOnboardingStep] = React.useState(1);
  const [gameOverCooldown, setGameOverCooldown] = React.useState(false);
  const [showParticipationRules, setShowParticipationRules] = React.useState(false);

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

  const renderHUD = () => (
    <div data-overlay="hud" className="absolute top-0 left-0 z-20 flex w-full items-start justify-between p-4 pointer-events-none">
      <div className="flex flex-col">
        <span className="text-[12px] font-['PP_Right_Grotesk:Bold',sans-serif] uppercase text-[rgba(255,255,255,0.6)] leading-[16px]">
          Этаж
        </span>
        <span className="text-white text-[36px] leading-[40px] font-['PP_Right_Grotesk:Medium',sans-serif]">
          {score.current}
        </span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[12px] font-['PP_Right_Grotesk:Bold',sans-serif] uppercase text-[rgba(255,255,255,0.6)] leading-[16px]">
          Рекорд
        </span>
        <span className="text-[#ffd466] text-[24px] leading-[32px] font-['PP_Right_Grotesk:Bold',sans-serif]">
          {score.best}
        </span>
      </div>
    </div>
  );

  if (gameState === GameState.START) {
    const rules = [
      '«Отпускайте» ящик, когда он окажется над башней, одним нажатием на экран.',
      'Старайтесь собирать башню ровно. Если края выйдут за границы, они будут обрезаны.',
      'Чем выше башня, тем больше баллов будет направлено на благотворительность.',
    ];

    const primaryButtonStyle: React.CSSProperties = {
      background:
        'radial-gradient(408.24% 368.51% at 67.25% 87.2%, #FF0000 0%, rgba(255, 92, 0, 0) 100%), #FF5C00',
      boxShadow: '0px 4px 20px rgba(255, 44, 0, 0.4)',
      border: '1px solid rgba(255,255,255,0.1)',
    };

    const renderRulesModal = () =>
      showParticipationRules ? (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#f2f5f6] p-5 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-[#15252b]">Правила участия</h3>
              <button
                type="button"
                onClick={() => setShowParticipationRules(false)}
                className="text-xs text-[#15252b]/60"
              >
                Закрыть
              </button>
            </div>
            <div className="space-y-3 text-sm leading-5 text-[#15252b]/70">
              <p>Моковый текст. Здесь будут юридические правила участия в акции.</p>
              <p>Добавьте условия, сроки, ограничения и прочую обязательную информацию.</p>
              <p>Текст будет заменён позднее.</p>
            </div>
          </div>
        </div>
      ) : null;

    if (onboardingStep === 1) {
      return (
        <div
          data-overlay="start-step1"
          className="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto"
        >
          <div className="my-auto w-full max-w-md rounded-2xl bg-[#f2f5f6] p-5 sm:p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="mb-4 text-center">
              <p className="text-[14px] leading-5 font-medium text-[#15252b]">Рамадан — время заботы и добрых дел</p>
              <h1
                data-name="h1.relative"
                className="mt-2 text-[42px] leading-[40px] font-medium text-[#ff2c00]"
                style={{ letterSpacing: '-0.75px' }}
              >
                Башня доброты
              </h1>
            </div>

            <div className="mb-5 space-y-2 text-center text-[14px] leading-[20px] text-[#15252b]">
              <p>Эта игра — ваш небольшой, но значимый вклад.</p>
              <p>Постройте ровную и высокую башню из коробок и зарабатывайте баллы.</p>
              <p>В конце месяца Рамадан все набранные баллы будут направлены на благотворительные цели.</p>
              <p>
                Будьте терпеливы, и всё обязательно <em>сложится</em>.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setOnboardingStep(2)}
                data-name="button.w-full"
                className="w-full rounded-[12px] px-6 py-4 text-white"
                style={primaryButtonStyle}
              >
                <span className="flex items-center justify-center gap-2 text-[18px] leading-7 font-medium">
                  <span data-name="Frame" className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p1d055380} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </span>
                  Построить башню!
                </span>
              </button>

              <button
                type="button"
                onClick={onOpenLeaderboard}
                data-name="button.mt-4"
                className="w-full rounded-[12px] border border-white/10 bg-[#b4d3ff] px-4 py-[13px] shadow-[2px_2px_12px_rgba(0,0,0,0.05)]"
              >
                <span className="flex items-center justify-center gap-2 text-[14px] leading-5 font-medium text-[#15252b]">
                  <span data-name="Frame" className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p34d63080} stroke="#15252B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M3.75 15.75H14.25" stroke="#15252B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </span>
                  Посмотреть рейтинг игроков
                </span>
              </button>

              <button
                type="button"
                onClick={() => setShowParticipationRules(true)}
                data-name="button.mt-3"
                className="w-full bg-transparent text-center text-xs leading-4 text-[#15252B]"
              >
                Правила участия
              </button>
            </div>
          </div>
          {renderRulesModal()}
        </div>
      );
    }

    return (
      <div
        data-overlay="start-step2"
        className="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto"
      >
        <div className="my-auto w-full max-w-md rounded-2xl bg-[#f2f5f6] p-5 sm:p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="mb-4 text-center">
            <p className="text-[10px] leading-[15px] tracking-[1px] uppercase text-[#15252b]">Шаг 2 из 2</p>
            <h2 className="mt-2 text-[24px] leading-8 font-medium text-[#15252b]">Правила и награды</h2>
          </div>

          <div className="mb-3 rounded-xl bg-[#b4d3ff] p-4 shadow-[2px_2px_12px_rgba(0,0,0,0.05)]">
            <p className="mb-2 text-[14px] leading-4 font-medium text-[#15252b]">Какие же правила?</p>
            <div className="space-y-2">
              {rules.map((rule, index) => (
                <div key={rule} className="flex items-start gap-2.5">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f2f5f6] text-[12px] leading-5 font-bold text-[#ff2c00]">
                    {index + 1}
                  </span>
                  <span className="text-[12px] leading-[16px] text-[#15252b]">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3 rounded-xl bg-white p-4 shadow-[2px_2px_12px_rgba(0,0,0,0.05)]">
            <p className="mb-2 text-[14px] leading-4 font-medium text-[#15252b]">Награды за уровни</p>
            <div className="space-y-2">
              {PROMO_REWARDS.map((reward) => (
                <div key={reward.score} className="flex items-center justify-between rounded-lg bg-[rgba(180,211,255,0.2)] px-3 py-2">
                  <span className="text-[12px] leading-4 text-[#15252b]">{reward.score} очков</span>
                  <span className="text-[14px] leading-5 font-medium text-[#ff2c00]">Скидка {reward.discount} ₽</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={onStart}
              data-name="button.w-full"
              className="w-full rounded-[12px] px-6 py-4 text-white"
              style={primaryButtonStyle}
            >
              <span className="flex items-center justify-center gap-2 text-[18px] leading-7 font-medium">
                <span data-name="Frame" className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1d055380} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </span>
                Начать игру
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOnboardingStep(1)}
              data-name="button.mt-4"
              className="w-full rounded-[12px] border border-white/10 bg-[#b4d3ff] px-4 py-[13px] text-[14px] leading-5 font-medium text-[#15252b] shadow-[2px_2px_12px_rgba(0,0,0,0.05)]"
            >
              Назад
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === GameState.LEADERBOARD) {
    const entries = [...leaderboardEntries].sort((a, b) => b.score - a.score);

    return (
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        <div className="my-auto w-full max-w-md rounded-3xl bg-[#f2f5f6] p-5 sm:p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(255,212,102,0.3)]">
                <svg className="h-[22px] w-[22px]" fill="none" viewBox="0 0 22 22">
                  <path d={svgPaths.p2f60c500} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
                  <path d="M4.58333 19.25H17.4167" stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] leading-[15px] tracking-[1px] uppercase text-[#15252b]">Топ игроков</p>
                <h2 className="text-[24px] leading-8 font-medium text-[#15252b]">Рейтинг игроков</h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onCloseLeaderboard}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#15252b]/60"
            >
              <svg className="h-[14px] w-[14px]" fill="none" viewBox="0 0 14 14">
                <path d={svgPaths.p2c0cbc0} opacity="0.5" stroke="#15252B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M11.0833 7H2.91667" opacity="0.5" stroke="#15252B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
              Назад
            </button>
          </div>

          {leaderboardStatus === 'error' ? (
            <div className="rounded-2xl bg-[#ffd466] px-4 py-6 text-center text-[14px] leading-5 text-[#15252b]">
              Рейтинг игроков пока недоступен
            </div>
          ) : entries.length === 0 ? (
            <div className="rounded-2xl bg-[#ffd466] px-4 py-6 text-center text-[14px] leading-5 text-[#15252b]">
              Игроков в списке пока нет, но вы можете стать первым :)
            </div>
          ) : (
            <div className="space-y-3">
              {entries.map((entry, index) => {
                const isUser = entry.nickname === nickname;
                const rowClass = isUser ? 'bg-[#FFD466]' : 'bg-[#F6E4B7]';

                return (
                  <div
                    key={`${entry.nickname}-${entry.score}-${entry.id ?? index}`}
                    className={`${rowClass} flex items-center justify-between rounded-2xl px-4 py-3 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2f5f6] text-[12px] leading-4 font-medium text-[#15252b]">
                        {index + 1}
                      </div>
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="truncate text-[16px] leading-6 font-medium text-[#15252b]">{entry.nickname}</span>
                        {isUser && (
                          <span className="whitespace-nowrap text-[10px] leading-[15px] tracking-[1px] uppercase text-[rgba(21,37,43,0.5)]">
                            это вы
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="ml-3 shrink-0 text-[14px] leading-5 font-medium text-[#15252b]">{entry.score}</span>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-3 rounded-2xl bg-[#b4d3ff] px-4 py-3 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-1 text-[14px] leading-5 text-[#15252b]">
                <span className="font-medium">Ваш ник:</span>
                <span className="max-w-[42vw] truncate font-bold sm:max-w-[220px]">{nickname || '—'}</span>
              </div>
              <div className="flex items-center gap-1 text-[14px] leading-5 text-[#15252b]">
                <span className="font-normal">Рекорд:</span>
                <span className="font-medium">{score.best}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === GameState.GAME_OVER) {
    if (score.current > 0) {
      const donation = score.current;
      return (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
          <div className="my-auto w-full max-w-md rounded-3xl bg-[#f2f5f6] p-5 sm:p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,44,0,0.2)]">
                  <svg className="h-[26px] w-[26px]" fill="none" viewBox="0 0 26 26">
                    <path d={svgPaths.p10c19f00} fill="#FF2C00" stroke="#FF2C00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] leading-[15px] tracking-[1.5px] uppercase text-[#15252b]">Благотворительность</p>
                  <h2 className="text-[24px] leading-[26px] font-medium text-[#15252b]">Каждая игра — шаг к добру</h2>
                </div>
              </div>
              {score.current >= score.best && (
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd466] bg-[rgba(255,212,102,0.2)] px-3 py-1">
                  <svg className="h-[14px] w-[12px]" fill="none" viewBox="0 0 11.47 14.0015">
                    <path d={svgPaths.p17d743e8} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                    <path d={svgPaths.p2a89eb80} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                    <path d={svgPaths.p54eb100} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                    <path d="M1.91167 11.7799H9.55753" stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                    <path d={svgPaths.p57a9b00} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                    <path d={svgPaths.p17482af0} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                  </svg>
                  <span className="text-[12px] leading-4 font-medium text-[#ffd466]">Новый рекорд</span>
                </div>
              )}
            </div>

            <div className="mb-4 rounded-2xl bg-[#b4d3ff] p-4 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] leading-[16.5px] tracking-[1px] uppercase text-[#15252b]">Очки</span>
                <span className="text-[30px] leading-9 font-medium text-[#15252b]">{score.current}</span>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] leading-[16.5px] tracking-[1px] uppercase text-[#15252b]">Пожертвование</span>
                <span className="text-[36px] leading-10 font-medium text-[#ff2c00]">{donation} ₽</span>
              </div>
              <p className="text-[12px] leading-[14px] text-[#15252b]">В конце Рамадана эта сумма будет направлена на благотворительность</p>
            </div>

            <div className="mb-4 rounded-2xl bg-[rgba(255,255,255,0.5)] p-4 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]">
              <div className="flex items-start gap-3">
                <svg className="mt-[2px] h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 17.7 17.9968">
                  <path d={svgPaths.p3f949880} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
                  <path d="M14.75 1.62342V4.57394" stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
                  <path d="M16.2255 3.09842H13.275" stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
                  <path d={svgPaths.p2491c700} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
                </svg>
                <div>
                  <p className="text-[14px] leading-5 font-medium text-[#15252b]">Каждый балл — вклад в копилку добра.</p>
                  <p className="text-[14px] leading-5 text-[#15252b]">Можно сыграть ещё раз и увеличить сумму пожертвования</p>
                </div>
              </div>
            </div>

            {earnedReward && (
              <div className="mb-4 rounded-2xl bg-white p-4 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]">
                <div className="mb-3 flex items-start gap-3">
                  <svg className="mt-[2px] h-[18px] w-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p34d63080} stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M3.75 15.75H14.25" stroke="#FFD466" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <div>
                    <p className="text-[14px] leading-5 font-medium text-[#15252b]">Ваша награда:</p>
                    <p className="text-[14px] leading-5 text-[#15252b]">Скидка на {earnedReward.discount} ₽ при покупке от 25 000 ₽</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyCode}
                  className="relative w-full rounded-xl border border-dashed border-[rgba(255,255,255,0.2)] bg-[#b4d3ff] p-3"
                >
                  <p className="text-center text-[10px] leading-5 tracking-[1px] uppercase text-[#15252b]">Промокод</p>
                  <div className="mt-1 flex items-center justify-center gap-2">
                    <span className="font-['Menlo:Bold',sans-serif] text-[20px] leading-7 tracking-[2px] text-[#15252b]">{earnedReward.code}</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p216f800} opacity="0.2" stroke="#15252B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p13e4b3c0} opacity="0.2" stroke="#15252B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                  {copied && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#15252b]/90 text-sm font-semibold text-white">
                      СКОПИРОВАНО!
                    </div>
                  )}
                </button>
              </div>
            )}

            <div className={`flex flex-col gap-3 ${gameOverCooldown ? 'pointer-events-none opacity-70' : ''}`}>
              <button
                type="button"
                onClick={onRestart}
                disabled={gameOverCooldown}
                data-name="button.w-full"
                className="w-full rounded-[12px] px-6 py-3 text-[16px] leading-6 font-medium text-white"
                style={{
                  background:
                    'radial-gradient(408.24% 368.51% at 67.25% 87.2%, #FF0000 0%, rgba(255, 92, 0, 0) 100%), #FF5C00',
                  boxShadow: '0px 4px 20px rgba(255, 44, 0, 0.4)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                Сыграть ещё раз
              </button>
              <button
                type="button"
                onClick={onOpenLeaderboard}
                disabled={gameOverCooldown}
                data-name="button.w-full"
                className="flex w-full items-center justify-center gap-2 rounded-[12px] border border-white/10 bg-[#b4d3ff] px-6 py-3 text-[14px] leading-5 font-medium text-[#15252b]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p10a7d900} stroke="#15252B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M3.33333 14H12.6667" stroke="#15252B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                Посмотреть рейтинг игроков
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        <div className="my-auto w-full max-w-md text-center">
          <h2 className="text-[36px] leading-10 font-medium text-[#ff2c00]">Ваша башня упала</h2>
          <p className="mt-1 text-[16px] leading-6 text-white/60">Но можно попробовать ещё раз</p>

          <div className="mt-3 flex items-center justify-center gap-3 text-center">
            <span className="text-[18px] leading-7 text-white/60">Высота:</span>
            <span className="text-[48px] leading-[48px] font-medium text-[#ff2c00]">{score.current}</span>
          </div>

          <div className={`mt-6 flex flex-col items-center gap-3 ${gameOverCooldown ? 'pointer-events-none opacity-70' : ''}`}>
            <button
              type="button"
              onClick={onRestart}
              disabled={gameOverCooldown}
              data-name="button.px-8"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-[18px] leading-7 text-[#f2f5f6]"
              style={{
                background:
                  'radial-gradient(408.24% 368.51% at 67.25% 87.2%, #FF0000 0%, rgba(255, 92, 0, 0) 100%), #FF5C00',
                boxShadow: '0px 4px 20px rgba(255, 44, 0, 0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center" data-name="Frame">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pd0f9a00} stroke="#F2F5F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M17.5 2.5V6.66667H13.3333" stroke="#F2F5F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </span>
              Попробовать снова
            </button>
            <button
              type="button"
              onClick={onOpenLeaderboard}
              disabled={gameOverCooldown}
              data-name="button.px-6"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-[9px] text-[14px] leading-5 text-[#f2f5f6]"
            >
              <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center" data-name="Frame">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p10a7d900} stroke="#F2F5F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M3.33333 14H12.6667" stroke="#F2F5F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </span>
              Посмотреть рейтинг игроков
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === GameState.PLAYING) {
    return (
      <>
        {renderHUD()}
        <div
          data-overlay="progress"
          className="absolute top-20 left-1/2 -translate-x-1/2 z-20 w-[min(92vw,560px)] pointer-events-none bg-[#15252B]"
          style={{ backgroundColor: '#15252B' }}
        >
          {nextReward ? (
            <div className="backdrop-blur-[4px] bg-[#15252B] relative rounded-[16px] shrink-0 w-full" data-name="div.rounded-2xl">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.35)]" />
              <div className="content-stretch flex flex-col gap-[8px] items-start pb-[13px] pt-[12px] px-[17px] relative w-full">
                <div className="relative w-full" data-name="div.flex">
                  <div className="content-stretch flex items-center justify-between relative w-full">
                    <div className="content-stretch flex flex-col items-start relative" data-name="span">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
                        <p className="leading-[16.5px]">До награды</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative" data-name="span">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
                        <p className="leading-[16.5px]">{remainingToReward} этажей</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full" data-name="div.mt-2">
                  <div className="content-stretch flex items-center justify-between relative w-full">
                    <div className="content-stretch flex flex-col items-start relative" data-name="span.font-semibold">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                        <p>
                          <span className="leading-[20px]">Скидка </span>
                          <span className="leading-[20px] text-[#ffd466]">{nextReward.discount} ₽</span>
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative" data-name="span">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">
                        <p className="leading-[20px]">{score.current}/{nextReward.score}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full mt-1" data-name="div.mt-3">
                  <div className="grid grid-cols-3 gap-1 relative w-full">
                    {PROMO_REWARDS.map((reward, index) => {
                      const fill = Math.round(segmentProgress(index) * 100);
                      const isReached = score.current >= reward.score;
                      const partialClass = !isReached ? 'bg-[#f2f5f6]' : '';
                      return (
                        <div key={reward.score} className="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[9999px] w-full" data-name="div.relative">
                          <div
                            className={`h-full rounded-[9999px] ${partialClass}`}
                            data-name="div.h-full"
                            style={{ width: `${fill}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="relative w-full" data-name="div.mt-2">
                  <div className="content-stretch flex items-center justify-between relative w-full">
                    <div className="content-stretch flex flex-col items-start relative" data-name="span">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
                        <p className="leading-[15px]">Прогресс</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative" data-name="span">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
                        <p className="leading-[15px]">{Math.round(overallProgress * 100)}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="backdrop-blur-[4px] bg-[#ffd466] content-stretch flex flex-col items-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0 w-full" data-name="div.rounded-full">
              <div aria-hidden="true" className="absolute border border-[#ffd466] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
                <p className="leading-[16px]">Все награды получены. Продолжайте играть!</p>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  return renderHUD();
};

export default UIOverlayDesignV2;
