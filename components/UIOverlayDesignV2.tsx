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
    <div className="absolute top-0 left-0 w-full p-4 pointer-events-none z-20">
      <div className="content-stretch flex items-start justify-between relative w-full" data-name="div.flex">
        <div className="content-stretch flex flex-col items-start relative" data-name="div.flex">
          <div className="content-stretch flex flex-col items-start relative w-full" data-name="span.text-xs">
            <div className="flex flex-col font-['PP_Right_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#f2f5f6] text-[12px] uppercase whitespace-nowrap">
              <p className="leading-[16px]">Этаж</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative w-full" data-name="span.text-white">
            <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">
              <p className="leading-[40px]">{score.current}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-end relative" data-name="div.flex">
          <div className="content-stretch flex flex-col items-start relative" data-name="span.text-xs">
            <div className="flex flex-col font-['PP_Right_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
              <p className="leading-[16px]">Рекорд</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative" data-name="span.text-yellow-400">
            <div className="flex flex-col font-['PP_Right_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffd466] text-[24px] whitespace-nowrap">
              <p className="leading-[32px]">{score.best}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (gameState === GameState.START) {
    if (onboardingStep === 1) {
      return (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
          <div className="relative my-auto w-full max-w-[448px]">
            <div className="bg-[#f2f5f6] h-[486.5px] overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full" data-name="div.w-full">
              <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[25px] right-[25px] top-[25px]" data-name="div.mb-6">
                <div className="content-stretch flex flex-col items-center relative w-full" data-name="p.relative">
                  <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[20px]">Рамадан — время заботы и добрых дел</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative w-full" data-name="h1.relative">
                  <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[40px] text-center tracking-[-0.75px] whitespace-nowrap">
                    <p className="leading-[36px]">Башня доброты</p>
                  </div>
                </div>
              </div>

              <div className="absolute content-stretch flex flex-col gap-[10px] h-[141.175px] items-start left-[25px] pb-[10px] right-[25px] top-[130.87px]" data-name="div.mb-8">
                <div className="content-stretch flex flex-col items-center relative w-full" data-name="p">
                  <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[18px] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                    <p className="mb-0">Эта игра — ваш небольшой, но значимый вклад.</p>
                    <p className="mb-0">Постройте ровную и высокую башню из коробок</p>
                    <p>и зарабатывайте баллы.</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center pb-[0.625px] relative w-full" data-name="p">
                  <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[18px] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                    <p className="mb-0">В конце месяца Рамадан все набранные баллы будут</p>
                    <p>направлены на благотворительные цели.</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center pb-[0.75px] relative w-full" data-name="p">
                  <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[18px]">Будьте терпеливы, и всё обязательно сложится.</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOnboardingStep(2)}
                className="absolute content-stretch flex items-start justify-center left-[25px] px-[24px] py-[16px] right-[25px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(255,44,0,0.4)] top-[309.87px]"
                data-name="button.w-full"
              >
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="span.flex">
                  <div className="relative shrink-0 size-[20px]" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Frame">
                        <path d={svgPaths.p1d055380} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-2, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
                    <p className="leading-[28px]">Построить башню!</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-[12px]" data-name="div.absolute">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
              </button>

              <button
                type="button"
                onClick={onOpenLeaderboard}
                className="absolute bg-[#b4d3ff] content-stretch flex gap-[8px] items-center justify-center left-[25px] px-[17px] py-[13px] right-[25px] rounded-[12px] top-[385.5px]"
                data-name="button.mt-4"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
                <div className="relative shrink-0 size-[18px]" data-name="Frame">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="Frame">
                      <path d={svgPaths.p34d63080} id="Vector" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M3.75 15.75H14.25" id="Vector_2" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">Посмотреть рейтинг игроков</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setShowParticipationRules(true)}
                className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-[443px]"
                data-name="button.mt-3"
              >
                <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">
                  <p className="leading-[16px]">Правила участия</p>
                </div>
              </button>
            </div>
          </div>

          {showParticipationRules && (
            <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
              <div className="bg-[#f2f5f6] content-stretch flex flex-col gap-[12px] items-start max-w-[448px] overflow-clip p-[20px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full" data-name="div.w-full">
                <div className="relative w-full" data-name="div.flex">
                  <div className="content-stretch flex items-center justify-between relative w-full">
                    <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[18px] whitespace-nowrap">
                      <p className="leading-[28px]">Правила участия</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowParticipationRules(false)}
                      className="content-stretch flex flex-col items-end relative shrink-0"
                    >
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Закрыть</p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="relative w-full" data-name="div.mt-3">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
                    <div className="content-stretch flex flex-col items-start relative w-full" data-name="p">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[14px] w-full">
                        <p className="leading-[20px] whitespace-pre-wrap">Моковый текст. Здесь будут юридические правила участия в акции.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative w-full" data-name="p">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[14px] w-full">
                        <p className="leading-[20px] whitespace-pre-wrap">Добавьте условия, сроки, ограничения и прочую обязательную информацию.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative w-full" data-name="p">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[14px] w-full">
                        <p className="leading-[20px] whitespace-pre-wrap">Текст будет заменён позднее.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        <div className="relative my-auto w-full max-w-[448px]">
          <div className="bg-[#f2f5f6] content-stretch flex flex-col gap-[16px] items-start max-w-[448px] overflow-clip p-[24px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full" data-name="div.w-full">
            <div className="relative w-[398px]" data-name="div.mb-4">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                <div className="content-stretch flex flex-col items-center relative w-full" data-name="p.uppercase">
                  <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
                    <p className="leading-[15px]">Шаг 2 из 2</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative w-full" data-name="h2.text-2xl">
                  <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[24px] text-center whitespace-nowrap">
                    <p className="leading-[32px]">Правила и награды</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#b4d3ff] relative rounded-[12px] shrink-0 w-[398px]" data-name="div.rounded-xl">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
              <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative w-full">
                <div className="relative shrink-0 w-[364px]" data-name="h3.text-xs">
                  <div className="content-stretch flex flex-col items-start relative w-full">
                    <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
                      <p className="leading-[16px]">Какие же правила?</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-[364px]" data-name="div.flex">
                  <div className="content-stretch flex gap-[12px] items-start relative w-full">
                    <div className="relative shrink-0 size-[20px]" data-name="span.flex-shrink-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="span.flex-shrink-0">
                          <rect fill="var(--fill-0, #F2F5F6)" height="20" rx="10" width="20" />
                          <path d={svgPaths.p2c9b1700} fill="var(--fill-0, #FF2C00)" id="1" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-col items-start pr-[20.98px] relative shrink-0" data-name="p.text-xs">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[13px] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
                        <p className="mb-0">«Отпускайте» ящик, когда он окажется над башней,</p>
                        <p>одним нажатием на экран;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-[364px]" data-name="div.flex">
                  <div className="content-stretch flex gap-[12px] items-start relative w-full">
                    <div className="relative shrink-0 size-[20px]" data-name="span.flex-shrink-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="span.flex-shrink-0">
                          <rect fill="var(--fill-0, #F2F5F6)" height="20" rx="10" width="20" />
                          <path d={svgPaths.p20eb9d00} fill="var(--fill-0, #FF2C00)" id="2" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-col items-start pr-[11.16px] relative shrink-0" data-name="p.text-xs">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[13px] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
                        <p className="mb-0">Старайтесь собирать башню ровно. Если края выйдут</p>
                        <p>за границы, они будут обрезаны;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-[364px]" data-name="div.flex">
                  <div className="content-stretch flex gap-[12px] items-start relative w-full">
                    <div className="relative shrink-0 size-[20px]" data-name="span.flex-shrink-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="span.flex-shrink-0">
                          <rect fill="var(--fill-0, #F2F5F6)" height="20" rx="10" width="20" />
                          <path d={svgPaths.p2cea7a00} fill="var(--fill-0, #FF2C00)" id="3" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-col items-start pr-[73.25px] relative shrink-0" data-name="p.text-xs">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[13px] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
                        <p className="mb-0">Чем выше башня, тем больше баллов будет</p>
                        <p>направлено на благотворительность.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white relative rounded-[12px] shrink-0 w-[398px]" data-name="div.rounded-xl">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
              <div className="content-stretch flex flex-col gap-[12px] items-start px-[17px] py-[25px] relative w-full">
                <div className="relative shrink-0 w-[364px]" data-name="h3.text-xs">
                  <div className="content-stretch flex flex-col items-start relative w-full">
                    <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
                      <p className="leading-[16px]">Награды за уровни</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-[364px]" data-name="div.space-y-2">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                    {PROMO_REWARDS.map((reward) => (
                      <div key={reward.score} className="bg-[rgba(180,211,255,0.2)] relative rounded-[8px] shrink-0 w-full" data-name="div.flex">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.text-xs">
                              <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
                                <p className="leading-[16px]">{reward.score} очков</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="span.font-semibold">
                              <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[14px] text-right whitespace-nowrap">
                                <p className="leading-[20px]">Скидка {reward.discount} ₽</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onStart}
              className="relative rounded-[12px] shadow-[0px_4px_20px_0px_rgba(255,44,0,0.4)] shrink-0 w-[398px]"
              data-name="button.w-full"
            >
              <div className="content-stretch flex items-start justify-center px-[24px] py-[16px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="span.flex">
                  <div className="relative shrink-0 size-[20px]" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Frame">
                        <path d={svgPaths.p1d055380} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-2, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
                    <p className="leading-[28px]">Начать игру</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-[12px]" data-name="div.absolute">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setOnboardingStep(1)}
              className="bg-[#b4d3ff] relative rounded-[12px] shrink-0 w-[398px]"
              data-name="button.mt-4"
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
              <div className="content-stretch flex items-center justify-center px-[17px] py-[13px] relative w-full">
                <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">Назад</p>
                </div>
              </div>
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
        <div className="relative my-auto w-full max-w-[512px]">
          <div className="bg-[#f2f5f6] max-w-[512px] relative rounded-[24px] shrink-0 w-full" data-name="div.w-full">
            <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[25px] relative rounded-[inherit] w-full">
              <div className="relative w-[462px]" data-name="div.relative">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
                  <div className="content-stretch flex items-center justify-between relative w-full" data-name="div.mb-5">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.flex">
                      <div className="bg-[rgba(255,212,102,0.3)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[44px]" data-name="div.flex">
                        <div className="relative shrink-0 size-[22px]" data-name="Frame">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                            <g id="Frame">
                              <path d={svgPaths.p2f60c500} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
                              <path d="M4.58333 19.25H17.4167" id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
                        <div className="content-stretch flex flex-col items-start relative w-full" data-name="p.font-bold">
                          <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
                            <p className="leading-[15px]">Топ игроков</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative w-full" data-name="h2.text-2xl">
                          <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[24px] whitespace-nowrap">
                            <p className="leading-[32px]">Рейтинг игроков</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={onCloseLeaderboard}
                      className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center px-[13px] py-[9px] relative rounded-[9999px] shrink-0"
                      data-name="button.flex"
                    >
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                      <div className="relative shrink-0 size-[14px]" data-name="Frame">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <g id="Frame">
                            <path d={svgPaths.p2c0cbc0} id="Vector" opacity="0.5" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                            <path d="M11.0833 7H2.91667" id="Vector_2" opacity="0.5" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Назад</p>
                      </div>
                    </button>
                  </div>

                  {leaderboardStatus === 'error' ? (
                    <div className="bg-[#ffd466] relative rounded-[16px] shrink-0 w-full" data-name="div.rounded-2xl">
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <div className="flex flex-col items-center size-full">
                        <div className="content-stretch flex flex-col items-center px-[17px] py-[25px] relative w-full">
                          <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                            <p className="leading-[20px]">Рейтинг игроков пока недоступен</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : entries.length === 0 ? (
                    <div className="bg-[#ffd466] relative rounded-[16px] shrink-0 w-full" data-name="div.rounded-2xl">
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <div className="flex flex-col items-center size-full">
                        <div className="content-stretch flex flex-col items-center px-[17px] py-[25px] relative w-full">
                          <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                            <p className="leading-[20px]">Игроков в списке пока нет, но вы можете стать первым :)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full" data-name="div.space-y-3">
                      {entries.map((entry, index) => {
                        const isUser = entry.nickname === nickname;
                        const rowClass = isUser ? 'bg-[#ffd466]' : 'bg-[#f6e4b7]';
                        return (
                          <div
                            key={`${entry.nickname}-${entry.score}-${entry.id ?? index}`}
                            className={`${rowClass} relative rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full`}
                            data-name="div.flex"
                          >
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
                                <div className="relative shrink-0" data-name="div.flex">
                                  <div className="content-stretch flex gap-[12px] items-center relative">
                                    <div className="bg-[#f2f5f6] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="div.flex">
                                      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[12px] text-center whitespace-nowrap">
                                        <p className="leading-[16px]">{index + 1}</p>
                                      </div>
                                    </div>
                                    <div className="font-['PP_Right_Grotesk:Medium',sans-serif] h-[24px] leading-[0] not-italic relative shrink-0">
                                      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#15252b] text-[16px] top-[12px] whitespace-nowrap">
                                        <p className="leading-[24px]">{entry.nickname}</p>
                                      </div>
                                      {isUser && (
                                        <div className="-translate-y-1/2 absolute flex flex-col h-[15px] justify-center left-[115px] text-[10px] text-[rgba(21,37,43,0.5)] top-[14px] tracking-[1px] uppercase whitespace-nowrap">
                                          <p className="leading-[15px]">это вы</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="relative shrink-0" data-name="div.text-sm">
                                  <div className="content-stretch flex flex-col items-start relative">
                                    <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
                                      <p className="leading-[20px]">{entry.score}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="bg-[#b4d3ff] relative rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div.mt-5">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between pl-[16px] pr-[15.99px] py-[12px] relative w-full">
                        <div className="relative shrink-0" data-name="span">
                          <div className="content-stretch flex flex-col items-start relative">
                            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[0px] whitespace-nowrap">
                              <p className="text-[14px]">
                                <span className="font-['PP_Right_Grotesk:Medium',sans-serif] leading-[20px]">Ваш ник:</span>
                                <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px]"> </span>
                                <span className="font-['PP_Right_Grotesk:Medium',sans-serif] leading-[20px]">{nickname || '—'}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0" data-name="span">
                          <div className="content-stretch flex flex-col items-start relative">
                            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[0px] whitespace-nowrap">
                              <p className="text-[14px]">
                                <span className="font-['PP_Right_Grotesk:Regular',sans-serif] leading-[20px]">Рекорд:</span>
                                <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px]"> </span>
                                <span className="font-['PP_Right_Grotesk:Medium',sans-serif] leading-[20px]">{score.best}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#f2f5f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
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
          <div className="relative my-auto w-full max-w-[512px]">
            <div className="bg-[#f2f5f6] content-stretch flex flex-col items-start max-w-[512px] overflow-clip p-[24px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full" data-name="div.relative">
              <div className="absolute bg-[rgba(59,130,246,0.1)] blur-[32px] bottom-[-79px] left-[-79px] rounded-[9999px] size-[192px]" data-name="div.absolute" />
              <div className="relative shrink-0 w-[462px]" data-name="div.relative">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
                  <div className="content-stretch flex items-start justify-between relative w-full" data-name="div.mb-5">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.flex">
                      <div className="bg-[rgba(255,44,0,0.2)] content-stretch flex h-[48px] items-center justify-center relative rounded-[16px] shrink-0 w-[39.7px]" data-name="div.flex">
                        <div className="relative shrink-0 size-[26px]" data-name="Frame">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                            <g id="Frame">
                              <path d={svgPaths.p10c19f00} fill="var(--fill-0, #FF2C00)" id="Vector" stroke="var(--stroke-3, #FF2C00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.16667" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
                        <div className="content-stretch flex flex-col items-start relative w-full" data-name="p.font-bold">
                          <div className="flex flex-col font-['PP_Right_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] tracking-[1.5px] uppercase whitespace-nowrap">
                            <p className="leading-[15px]">Благотворительность</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative w-full" data-name="h2.text-2xl">
                          <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[26px] not-italic relative shrink-0 text-[#15252b] text-[24px] whitespace-nowrap">
                            <p className="mb-0">Каждая игра —</p>
                            <p>шаг к добру</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {score.current >= score.best && (
                      <div className="bg-[rgba(255,212,102,0.2)] content-stretch flex items-center justify-between pl-[13px] pr-[41.84px] py-[5px] relative rounded-[9999px] shrink-0 w-[120.31px]" data-name="div.flex">
                        <div aria-hidden="true" className="absolute border border-[#ffd466] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                        <div className="h-[14.001px] relative shrink-0 w-[11.47px]" data-name="Frame">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.47 14.0015">
                            <g id="Frame">
                              <path d={svgPaths.p17d743e8} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                              <path d={svgPaths.p2a89eb80} id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                              <path d={svgPaths.p54eb100} id="Vector_3" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                              <path d="M1.91167 11.7799H9.55753" id="Vector_4" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                              <path d={svgPaths.p57a9b00} id="Vector_5" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                              <path d={svgPaths.p17482af0} id="Vector_6" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.955833" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[12px] not-italic relative shrink-0 text-[#ffd466] text-[12px] whitespace-nowrap">
                          <p className="mb-0">Новый</p>
                          <p>рекорд</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-[#b4d3ff] h-[170px] relative rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="div.mb-4">
                    <div className="absolute content-stretch flex items-center justify-between left-[21px] right-[21px] top-[21px]" data-name="div.flex">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.uppercase">
                        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                          <p className="leading-[16.5px]">Очки</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.text-3xl">
                        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[30px] whitespace-nowrap">
                          <p className="leading-[36px]">{score.current}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex items-center justify-between left-[21px] right-[21px] top-[69px]" data-name="div.mt-3">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.uppercase">
                        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                          <p className="leading-[16.5px]">Пожертвование</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="p.text-4xl">
                        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[36px] whitespace-nowrap">
                          <p className="leading-[40px]">{donation} ₽</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[117px]" data-name="p.mt-2">
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[14px] not-italic relative shrink-0 text-[#15252b] text-[12px] whitespace-nowrap">
                        <p className="mb-0">В конце Рамадана эта сумма будет направлена</p>
                        <p>на благотворительность</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16px] shrink-0 w-full" data-name="div.mb-6">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
                    <div className="content-stretch flex flex-col items-start pb-[17px] pt-[13px] px-[17px] relative w-full">
                      <div className="relative shrink-0 w-[428px]" data-name="div.flex">
                        <div className="content-stretch flex gap-[12px] items-start relative w-full">
                          <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[17.7px]" data-name="svg.lucide:margin">
                            <div className="h-[17.997px] relative shrink-0 w-[17.7px]" data-name="Frame">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7 17.9968">
                                <g id="Frame">
                                  <path d={svgPaths.p3f949880} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
                                  <path d="M14.75 1.62342V4.57394" id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
                                  <path d="M16.2255 3.09842H13.275" id="Vector_3" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
                                  <path d={svgPaths.p2491c700} id="Vector_4" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.475" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[5px] items-start min-w-[398.29998779296875px] relative shrink-0" data-name="div">
                            <div className="content-stretch flex flex-col items-start relative w-full" data-name="p.font-semibold">
                              <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
                                <p className="leading-[20px]">Каждый балл — вклад в копилку добра.</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative w-full" data-name="p">
                              <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-none not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
                                <p className="mb-0">Можно сыграть ещё раз и увеличить сумму</p>
                                <p>пожертвования</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {earnedReward && (
                    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="div.mb-6">
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
                      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[21px] px-[17px] relative w-full">
                        <div className="relative shrink-0 w-[428px]" data-name="div.flex">
                          <div className="content-stretch flex gap-[12px] items-start relative w-full">
                            <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="svg.lucide:margin">
                              <div className="relative shrink-0 size-[18px]" data-name="Frame">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                  <g id="Frame">
                                    <path d={svgPaths.p34d63080} id="Vector" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path d="M3.75 15.75H14.25" id="Vector_2" stroke="var(--stroke-0, #FFD466)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
                              <div className="content-stretch flex flex-col items-start relative w-full" data-name="p.font-semibold">
                                <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
                                  <p className="leading-[20px]">Ваша награда:</p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative w-full" data-name="p">
                                <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] whitespace-nowrap">
                                  <p className="leading-[20px]">Скидка на {earnedReward.discount} ₽ при покупке от 25 000 ₽</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={copyCode}
                          className="bg-[#b4d3ff] relative rounded-[12px] shrink-0 w-[428px]"
                          data-name="div.mt-3"
                        >
                          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
                          <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
                            <div className="relative shrink-0 w-[402px]" data-name="p.uppercase">
                              <div className="content-stretch flex flex-col items-center relative w-full">
                                <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
                                  <p className="leading-[20px]">Промокод</p>
                                </div>
                              </div>
                            </div>
                            <div className="relative shrink-0 w-[402px]" data-name="div.flex">
                              <div className="content-stretch flex gap-[12px] items-center justify-center relative w-full">
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.font-mono">
                                  <div className="flex flex-col font-['Menlo:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[20px] tracking-[2px] whitespace-nowrap">
                                    <p className="leading-[28px]">{earnedReward.code}</p>
                                  </div>
                                </div>
                                <div className="relative shrink-0 size-[16px]" data-name="Frame">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                    <g id="Frame">
                                      <path d={svgPaths.p216f800} id="Vector" opacity="0.2" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                      <path d={svgPaths.p13e4b3c0} id="Vector_2" opacity="0.2" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          {copied && (
                            <div className="absolute inset-0 flex items-center justify-center rounded-[12px] bg-[#15252b]/90 text-white text-sm font-semibold">
                              СКОПИРОВАНО!
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className={`content-stretch flex flex-col gap-[12px] items-start pt-[4px] relative w-full ${gameOverCooldown ? 'pointer-events-none opacity-70' : ''}`} data-name="div.flex">
                    <button
                      type="button"
                      onClick={onRestart}
                      disabled={gameOverCooldown}
                      className="relative rounded-[12px] shadow-[0px_4px_20px_0px_rgba(255,44,0,0.4)] shrink-0 w-full"
                      data-name="button.w-full"
                    >
                      <div className="flex flex-col items-center justify-center size-full">
                        <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative w-full">
                          <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                            <p className="leading-[24px]">Сыграть ещё раз</p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenLeaderboard}
                      disabled={gameOverCooldown}
                      className="bg-[#b4d3ff] relative rounded-[12px] shrink-0 w-full"
                      data-name="button.w-full"
                    >
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]" />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center px-[25px] py-[13px] relative w-full">
                          <div className="relative shrink-0 size-[16px]" data-name="Frame">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g id="Frame">
                                <path d={svgPaths.p10a7d900} id="Vector" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d="M3.33333 14H12.6667" id="Vector_2" stroke="var(--stroke-0, #15252B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              </g>
                            </svg>
                          </div>
                          <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15252b] text-[14px] text-center whitespace-nowrap">
                            <p className="leading-[20px]">Посмотреть рейтинг игроков</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] overflow-y-auto">
        <div className="relative my-auto w-full max-w-[512px]">
          <div className="max-w-[512px] relative shrink-0 w-full" data-name="div.w-full">
            <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-[25px] relative w-full">
              <div className="relative shrink-0 w-[448px]" data-name="div.w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                  <div className="content-stretch flex flex-col items-center relative w-full" data-name="h2.text-4xl">
                    <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2c00] text-[36px] text-center whitespace-nowrap">
                      <p className="leading-[40px]">Ваша башня упала</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative w-full" data-name="p.mb-4">
                    <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">
                      <p className="leading-[24px]">Но можно попробовать ещё раз</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="div.flex">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between leading-[0] not-italic px-[170px] relative text-center w-full">
                        <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] h-[28px] justify-center relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] w-[70.007px]">
                          <p className="leading-[28px] whitespace-pre-wrap">Высота:</p>
                        </div>
                        <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] h-[48px] justify-center relative shrink-0 text-[#ff2c00] text-[48px] w-[33.711px]">
                          <p className="leading-[48px] whitespace-pre-wrap">{score.current}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`content-stretch flex flex-col gap-[12px] items-center pt-[24px] relative w-full ${gameOverCooldown ? 'pointer-events-none opacity-70' : ''}`} data-name="div.flex">
                    <button
                      type="button"
                      onClick={onRestart}
                      disabled={gameOverCooldown}
                      className="content-stretch flex gap-[8px] items-center overflow-clip px-[32px] py-[12px] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                      data-name="button.px-8"
                    >
                      <div className="relative shrink-0 size-[20px]" data-name="Frame">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Frame">
                            <path d={svgPaths.pd0f9a00} id="Vector" stroke="var(--stroke-0, #F2F5F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M17.5 2.5V6.66667H13.3333" id="Vector_2" stroke="var(--stroke-0, #F2F5F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col font-['PP_Right_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5f6] text-[18px] text-center whitespace-nowrap">
                        <p className="leading-[28px]">Попробовать снова</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenLeaderboard}
                      disabled={gameOverCooldown}
                      className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center px-[25px] py-[9px] relative rounded-[9999px]"
                      data-name="button.px-6"
                    >
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                      <div className="relative shrink-0 size-[16px]" data-name="Frame">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="Frame">
                            <path d={svgPaths.p10a7d900} id="Vector" stroke="var(--stroke-0, #F2F5F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M3.33333 14H12.6667" id="Vector_2" stroke="var(--stroke-0, #F2F5F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col font-['PP_Right_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5f6] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">Посмотреть рейтинг игроков</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === GameState.PLAYING) {
    return (
      <>
        {renderHUD()}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 w-[min(92vw,560px)] pointer-events-none bg-[#15252B]">
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
                <div className="relative w-full" data-name="div.mt-3">
                  <div className="content-stretch flex gap-[4px] items-start justify-center pt-[4px] relative w-full">
                    {PROMO_REWARDS.map((reward, index) => {
                      const fill = Math.round(segmentProgress(index) * 100);
                      const isReached = score.current >= reward.score;
                      const partialClass = !isReached ? 'bg-[#f2f5f6]' : '';
                      return (
                        <div key={reward.score} className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[8px] items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 w-[172.67px]" data-name="div.relative">
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
