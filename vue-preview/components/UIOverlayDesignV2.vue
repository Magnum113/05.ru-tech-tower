<template>
  <div>
    <template v-if="gameState === GameStateEnum.START">
      <div
        v-if="onboardingStep === 1"
        data-overlay="start-step1"
        class="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
        style="padding-top: max(1rem, env(safe-area-inset-top)); padding-bottom: max(1rem, env(safe-area-inset-bottom));"
      >
        <div class="my-auto w-full max-w-md rounded-2xl bg-[#f2f5f6] p-5 sm:p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div class="mb-4 text-center">
            <p class="text-[14px] leading-5 font-medium text-[#15252b]">Рамадан — время заботы и добрых дел</p>
            <h1
              data-name="h1.relative"
              class="mt-2 text-[42px] leading-[40px] font-medium text-[#ff2c00]"
              style="letter-spacing: -0.75px; font-size: clamp(40px, 12vw, 56px); line-height: 0.95"
            >
              Башня доброты
            </h1>
          </div>

          <div class="mb-5 space-y-2 text-center text-[14px] leading-[20px] text-[#15252b]">
            <p>Эта игра — ваш небольшой, но значимый вклад.</p>
            <p>Постройте ровную и высокую башню из коробок и зарабатывайте баллы.</p>
            <p>В конце месяца Рамадан все набранные баллы будут направлены на благотворительные цели.</p>
            <p>Будьте терпеливы, и всё обязательно <em>сложится</em>.</p>
          </div>

          <div class="flex flex-col gap-3">
            <button
              type="button"
              data-name="button.w-full"
              class="w-full rounded-[12px] px-6 py-4 text-white"
              style="background: radial-gradient(408.24% 368.51% at 67.25% 87.2%, #FF0000 0%, rgba(255, 92, 0, 0) 100%), #FF5C00; box-shadow: 0px 4px 20px rgba(255, 44, 0, 0.4); border: 1px solid rgba(255,255,255,0.1)"
              @click="onNextOnboarding"
            >
              <span class="flex items-center justify-center gap-2 text-[18px] leading-7 font-medium">
                <span data-name="Frame" class="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path :d="svgPaths.p1d055380" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.66667" />
                  </svg>
                </span>
                Построить башню!
              </span>
            </button>

            <button
              type="button"
              data-name="button.mt-4"
              class="w-full rounded-[12px] border border-white/10 bg-[#b4d3ff] px-4 py-[13px] shadow-[2px_2px_12px_rgba(0,0,0,0.05)]"
              @click="onOpenLeaderboard"
            >
              <span class="flex items-center justify-center gap-2 text-[14px] leading-5 font-medium text-[#15252b]">
                <span data-name="Frame" class="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                  <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                    <path :d="svgPaths.p34d63080" stroke="#15252B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                    <path d="M3.75 15.75H14.25" stroke="#15252B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                  </svg>
                </span>
                Посмотреть рейтинг игроков
              </span>
            </button>

            <button
              type="button"
              data-name="button.mt-3"
              class="w-full bg-transparent text-center text-xs leading-4 text-[#15252B]"
              @click="showParticipationRules = true"
            >
              Правила участия
            </button>
          </div>
        </div>

        <div v-if="showParticipationRules" class="absolute inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div class="w-full max-w-md rounded-2xl bg-[#f2f5f6] p-5 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div class="mb-3 flex items-start justify-between gap-4">
              <h3 class="text-lg font-medium text-[#15252b]">Правила участия</h3>
              <button type="button" class="text-xs text-[#15252b]/60" @click="showParticipationRules = false">Закрыть</button>
            </div>
            <div class="space-y-3 text-sm leading-5 text-[#15252b]/70">
              <p><strong>Правила участия в промо-игре «Башня доброты»</strong></p>
              <div class="max-h-[55vh] overflow-y-auto pr-1">
                <ol class="list-decimal list-inside space-y-2 pl-1">
                  <li v-for="rule in participationRules" :key="rule">{{ rule }}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        data-overlay="start-step2"
        class="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
        style="padding-top: max(1rem, env(safe-area-inset-top)); padding-bottom: max(1rem, env(safe-area-inset-bottom));"
      >
        <div class="my-auto w-full max-w-md rounded-2xl bg-[#f2f5f6] p-5 sm:p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div class="mb-4 text-center">
            <p class="text-[10px] leading-[15px] tracking-[1px] uppercase text-[#15252b]">Шаг 2 из 2</p>
            <h2 class="mt-2 text-[24px] leading-8 font-medium text-[#15252b]">Правила и награды</h2>
          </div>

          <div class="mb-3 rounded-xl bg-[#b4d3ff] p-4 shadow-[2px_2px_12px_rgba(0,0,0,0.05)]">
            <p class="mb-2 text-[14px] leading-4 font-medium text-[#15252b]">Какие же правила?</p>
            <div class="space-y-2">
              <div v-for="(rule, index) in rules" :key="rule" class="flex items-start gap-2.5">
                <span class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f2f5f6] text-[12px] leading-5 font-bold text-[#ff2c00]">{{ index + 1 }}</span>
                <span class="text-[12px] leading-[16px] text-[#15252b]">{{ rule }}</span>
              </div>
            </div>
          </div>

          <div class="mb-3 rounded-xl bg-white p-4 shadow-[2px_2px_12px_rgba(0,0,0,0.05)]">
            <p class="mb-2 text-[14px] leading-4 font-medium text-[#15252b]">Награды за уровни</p>
            <div class="space-y-2">
              <div v-for="reward in PROMO_REWARDS" :key="reward.score" class="flex items-center justify-between rounded-lg bg-[rgba(180,211,255,0.2)] px-3 py-2">
                <span class="text-[12px] leading-4 text-[#15252b]">{{ reward.score }} очков</span>
                <span class="text-[14px] leading-5 font-medium text-[#ff2c00]">Скидка {{ reward.discount }} ₽</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2.5">
            <button
              type="button"
              data-name="button.w-full"
              class="w-full rounded-[12px] px-6 py-4 text-white"
              style="background: radial-gradient(408.24% 368.51% at 67.25% 87.2%, #FF0000 0%, rgba(255, 92, 0, 0) 100%), #FF5C00; box-shadow: 0px 4px 20px rgba(255, 44, 0, 0.4); border: 1px solid rgba(255,255,255,0.1)"
              @click="onStart"
            >
              <span class="flex items-center justify-center gap-2 text-[18px] leading-7 font-medium">
                <span data-name="Frame" class="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path :d="svgPaths.p1d055380" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.66667" />
                  </svg>
                </span>
                Начать игру
              </span>
            </button>

            <button
              type="button"
              data-name="button.mt-4"
              class="w-full rounded-[12px] border border-white/10 bg-[#b4d3ff] px-4 py-[13px] text-[14px] leading-5 font-medium text-[#15252b] shadow-[2px_2px_12px_rgba(0,0,0,0.05)]"
              @click="onBackOnboarding"
            >
              Назад
            </button>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="gameState === GameStateEnum.LEADERBOARD">
      <div class="absolute inset-0 z-50 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto" style="padding-top: max(1rem, env(safe-area-inset-top)); padding-bottom: max(1rem, env(safe-area-inset-bottom));">
        <div class="my-auto w-full max-w-md rounded-3xl bg-[#f2f5f6] p-5 sm:p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div class="mb-5 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(255,212,102,0.3)]">
                <svg class="h-[22px] w-[22px]" fill="none" viewBox="0 0 22 22">
                  <path :d="svgPaths.p2f60c500" stroke="#FFD466" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.83333" />
                  <path d="M4.58333 19.25H17.4167" stroke="#FFD466" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.83333" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] leading-[15px] tracking-[1px] uppercase text-[#15252b]">Топ игроков</p>
                <h2 class="text-[24px] leading-8 font-medium text-[#15252b]">Рейтинг игроков</h2>
              </div>
            </div>
            <button type="button" class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#15252b]/60" @click="onCloseLeaderboard">
              Назад
            </button>
          </div>

          <div v-if="leaderboardStatus === 'error'" class="rounded-2xl bg-[#ffd466] px-4 py-6 text-center text-[14px] leading-5 text-[#15252b]">
            Рейтинг игроков пока недоступен
          </div>
          <div v-else-if="sortedEntries.length === 0" class="rounded-2xl bg-[#ffd466] px-4 py-6 text-center text-[14px] leading-5 text-[#15252b]">
            Игроков в списке пока нет, но вы можете стать первым :)
          </div>
          <div v-else class="space-y-3">
            <div
              v-for="(entry, index) in sortedEntries"
              :key="`${entry.nickname}-${entry.score}-${entry.id || index}`"
              :class="[(entry.nickname === nickname ? 'bg-[#FFD466]' : 'bg-[#F6E4B7]'), 'flex items-center justify-between rounded-2xl px-4 py-3 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]']"
            >
              <div class="flex min-w-0 items-center gap-3">
                <div class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2f5f6] text-[12px] leading-4 font-medium text-[#15252b]">
                  {{ index + 1 }}
                </div>
                <div class="flex min-w-0 items-center gap-2">
                  <span class="truncate text-[16px] leading-6 font-medium text-[#15252b]">{{ entry.nickname }}</span>
                  <span
                    v-if="entry.nickname === nickname"
                    class="whitespace-nowrap text-[10px] leading-[15px] tracking-[1px] uppercase text-[rgba(21,37,43,0.5)]"
                  >
                    это вы
                  </span>
                </div>
              </div>
              <span class="ml-3 shrink-0 text-[14px] leading-5 font-medium text-[#15252b]">{{ entry.score }}</span>
            </div>
          </div>

          <div class="mt-3 rounded-2xl bg-[#b4d3ff] px-4 py-3 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex min-w-0 items-center gap-1 text-[14px] leading-5 text-[#15252b]">
                <span class="font-medium">Ваш ник:</span>
                <span class="max-w-[42vw] truncate font-bold sm:max-w-[220px]">{{ nickname || '—' }}</span>
              </div>
              <div class="flex items-center gap-1 text-[14px] leading-5 text-[#15252b]">
                <span class="font-normal">Рекорд:</span>
                <span class="font-medium">{{ score.best }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="gameState === GameStateEnum.GAME_OVER">
      <div
        v-if="score.current > 0"
        class="absolute inset-0 z-40 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
        style="padding-top: max(1rem, env(safe-area-inset-top)); padding-bottom: max(1rem, env(safe-area-inset-bottom));"
      >
        <div class="my-auto w-full max-w-md rounded-3xl bg-[#f2f5f6] p-5 sm:p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div class="mb-4 flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,44,0,0.2)]">
                <svg class="h-[26px] w-[26px]" fill="none" viewBox="0 0 26 26">
                  <path :d="svgPaths.p10c19f00" fill="#FF2C00" stroke="#FF2C00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.16667" />
                </svg>
              </div>
              <div>
                <p class="text-[10px] leading-[15px] tracking-[1.5px] uppercase text-[#15252b]">Благотворительность</p>
                <h2 class="text-[24px] leading-[26px] font-medium text-[#15252b]">Каждая игра — шаг к добру</h2>
              </div>
            </div>
            <div v-if="score.current >= score.best" class="inline-flex items-center gap-2 rounded-full border border-[#ffd466] bg-[rgba(255,212,102,0.2)] px-3 py-1">
              <span class="text-[12px] leading-4 font-medium text-[#ffd466]">Новый рекорд</span>
            </div>
          </div>

          <div class="mb-4 rounded-2xl bg-[#b4d3ff] p-4 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]">
            <div class="mb-2 flex items-center justify-between">
              <span class="text-[11px] leading-[16.5px] tracking-[1px] uppercase text-[#15252b]">Очки</span>
              <span class="text-[30px] leading-9 font-medium text-[#15252b]">{{ score.current }}</span>
            </div>
            <div class="mb-2 flex items-center justify-between">
              <span class="text-[11px] leading-[16.5px] tracking-[1px] uppercase text-[#15252b]">Пожертвование</span>
              <span class="text-[36px] leading-10 font-medium text-[#ff2c00]">{{ score.current }} ₽</span>
            </div>
            <p class="text-[12px] leading-[14px] text-[#15252b]">В конце Рамадана эта сумма будет направлена на благотворительность</p>
          </div>

          <div class="mb-4 rounded-2xl bg-[rgba(255,255,255,0.5)] p-4 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]">
            <div class="flex items-start gap-3">
              <div>
                <p class="text-[14px] leading-5 font-medium text-[#15252b]">Каждый балл — вклад в копилку добра.</p>
                <p class="text-[14px] leading-5 text-[#15252b]">Можно сыграть ещё раз и увеличить сумму пожертвования</p>
              </div>
            </div>
          </div>

          <div v-if="earnedReward" class="mb-4 rounded-2xl bg-white p-4 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.05)]">
            <div class="mb-3 flex items-start gap-3">
              <div>
                <p class="text-[14px] leading-5 font-medium text-[#15252b]">Ваша награда:</p>
                <p class="text-[14px] leading-5 text-[#15252b]">
                  <span>Скидка на {{ earnedReward.discount }} ₽ </span>
                  <span class="whitespace-nowrap">при покупке от 25 000 ₽</span>
                </p>
                <p class="text-[12px] leading-4 text-[#15252b]/70">(не действует на технику Apple)</p>
              </div>
            </div>
            <button type="button" class="relative w-full rounded-xl border border-dashed border-[rgba(255,255,255,0.2)] bg-[#b4d3ff] p-3" @click="copyCode">
              <p class="text-center text-[10px] leading-5 tracking-[1px] uppercase text-[#15252b]">Промокод</p>
              <div class="mt-1 flex items-center justify-center gap-2">
                <span class="font-['Menlo:Bold',sans-serif] text-[20px] leading-7 tracking-[2px] text-[#15252b]">{{ earnedReward.code }}</span>
              </div>
              <div
                v-if="copied"
                class="absolute inset-0 flex items-center justify-center rounded-xl bg-[#15252b]/90 text-sm font-semibold text-white"
              >
                СКОПИРОВАНО!
              </div>
            </button>
          </div>

          <div :class="['flex flex-col gap-3', gameOverCooldown ? 'pointer-events-none opacity-70' : '']">
            <button
              type="button"
              data-name="button.w-full"
              class="w-full rounded-[12px] px-6 py-3 text-[16px] leading-6 font-medium text-white"
              style="background: radial-gradient(408.24% 368.51% at 67.25% 87.2%, #FF0000 0%, rgba(255, 92, 0, 0) 100%), #FF5C00; box-shadow: 0px 4px 20px rgba(255, 44, 0, 0.4); border: 1px solid rgba(255,255,255,0.1)"
              :disabled="gameOverCooldown"
              @click="onRestart"
            >
              Сыграть ещё раз
            </button>
            <button
              type="button"
              data-name="button.w-full"
              class="flex w-full items-center justify-center gap-2 rounded-[12px] border border-white/10 bg-[#b4d3ff] px-6 py-3 text-[14px] leading-5 font-medium text-[#15252b]"
              :disabled="gameOverCooldown"
              @click="onOpenLeaderboard"
            >
              Посмотреть рейтинг игроков
            </button>
          </div>
        </div>
      </div>

      <div
        v-else
        class="absolute inset-0 z-40 flex flex-col items-center justify-start bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
        style="padding-top: max(1rem, env(safe-area-inset-top)); padding-bottom: max(1rem, env(safe-area-inset-bottom));"
      >
        <div class="my-auto w-full max-w-md text-center">
          <h2 class="text-[36px] leading-10 font-medium text-[#ff2c00]">Ваша башня упала</h2>
          <p class="mt-1 text-[16px] leading-6 text-white/60">Но можно попробовать ещё раз</p>

          <div class="mt-3 flex items-center justify-center gap-3 text-center">
            <span class="text-[18px] leading-7 text-white/60">Высота:</span>
            <span class="text-[48px] leading-[48px] font-medium text-[#ff2c00]">{{ score.current }}</span>
          </div>

          <div :class="['mt-6 flex flex-col items-center gap-3', gameOverCooldown ? 'pointer-events-none opacity-70' : '']">
            <button
              type="button"
              data-name="button.px-8"
              class="inline-flex items-center gap-2 rounded-full px-8 py-3 text-[18px] leading-7 text-[#f2f5f6]"
              style="background: radial-gradient(408.24% 368.51% at 67.25% 87.2%, #FF0000 0%, rgba(255, 92, 0, 0) 100%), #FF5C00; box-shadow: 0px 4px 20px rgba(255, 44, 0, 0.4); border: 1px solid rgba(255,255,255,0.1)"
              :disabled="gameOverCooldown"
              @click="onRestart"
            >
              Попробовать снова
            </button>
            <button
              type="button"
              data-name="button.px-6"
              class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-[9px] text-[14px] leading-5 text-[#f2f5f6]"
              :disabled="gameOverCooldown"
              @click="onOpenLeaderboard"
            >
              Посмотреть рейтинг игроков
            </button>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div
        data-overlay="hud"
        class="absolute top-0 left-0 z-20 flex w-full items-start justify-between p-4 pointer-events-none"
      >
        <div class="flex flex-col">
          <span class="text-[12px] uppercase text-[rgba(255,255,255,0.6)] leading-[16px]">Этаж</span>
          <span class="text-white text-[36px] leading-[40px] font-medium">{{ score.current }}</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-[12px] uppercase text-[rgba(255,255,255,0.6)] leading-[16px]">Рекорд</span>
          <span class="text-[#ffd466] text-[24px] leading-[32px] font-bold">{{ score.best }}</span>
        </div>
      </div>

      <div
        v-if="gameState === GameStateEnum.PLAYING"
        data-overlay="progress"
        class="absolute top-20 left-1/2 -translate-x-1/2 z-20 w-[min(92vw,560px)] pointer-events-none bg-[#15252B]"
      >
        <div v-if="nextReward" class="backdrop-blur-[4px] bg-[#15252B] relative rounded-[16px] shrink-0 w-full" data-name="div.rounded-2xl">
          <div class="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.35)]" />
          <div class="content-stretch flex flex-col gap-[8px] items-start pb-[13px] pt-[12px] px-[17px] relative w-full">
            <div class="relative w-full" data-name="div.flex">
              <div class="content-stretch flex items-center justify-between relative w-full">
                <div class="text-[11px] text-[rgba(255,255,255,0.6)] uppercase">До награды</div>
                <div class="text-[11px] text-[rgba(255,255,255,0.6)] uppercase">{{ remainingToReward }} этажей</div>
              </div>
            </div>
            <div class="relative w-full" data-name="div.mt-2">
              <div class="content-stretch flex items-center justify-between relative w-full">
                <div class="text-[14px] text-white">
                  <span>Скидка </span>
                  <span class="text-[#ffd466]">{{ nextReward.discount }} ₽</span>
                </div>
                <div class="text-[14px] text-[rgba(255,255,255,0.7)]">{{ score.current }}/{{ nextReward.score }}</div>
              </div>
            </div>
            <div class="relative w-full mt-1" data-name="div.mt-3">
              <div class="grid grid-cols-3 gap-1 relative w-full">
                <div v-for="(reward, index) in PROMO_REWARDS" :key="reward.score" class="bg-[rgba(255,255,255,0.1)] h-[8px] overflow-clip relative rounded-[9999px] w-full" data-name="div.relative">
                  <div :class="['h-full rounded-[9999px]', score.current < reward.score ? 'bg-[#f2f5f6]' : '']" data-name="div.h-full" :style="{ width: segmentWidth(index) }" />
                </div>
              </div>
            </div>
            <div class="relative w-full" data-name="div.mt-2">
              <div class="content-stretch flex items-center justify-between relative w-full">
                <div class="text-[10px] text-[rgba(255,255,255,0.5)]">Прогресс</div>
                <div class="text-[10px] text-[rgba(255,255,255,0.5)]">{{ Math.round(overallProgress * 100) }}%</div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="backdrop-blur-[4px] bg-[#ffd466] content-stretch flex flex-col items-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0 w-full" data-name="div.rounded-full">
          <div class="absolute border border-[#ffd466] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          <div class="text-[#15252b] text-[12px] text-center whitespace-nowrap">Все награды получены. Продолжайте играть!</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  PropType,
  ref,
  watch
} from '@nuxtjs/composition-api';
import { GameState, GameScore, LeaderboardEntry, LeaderboardStatus, PromoReward } from '~/shared/types';
import { PROMO_REWARDS } from '~/shared/constants';
import svgPaths from '~/shared/svgPaths';

export default defineComponent({
  name: 'UIOverlayDesignV2',
  props: {
    gameState: {
      type: String as PropType<GameState>,
      required: true
    },
    score: {
      type: Object as PropType<GameScore>,
      required: true
    },
    leaderboardEntries: {
      type: Array as PropType<LeaderboardEntry[]>,
      required: true
    },
    leaderboardStatus: {
      type: String as PropType<LeaderboardStatus>,
      required: true
    },
    nickname: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const copied = ref(false);
    const onboardingStep = ref(1);
    const gameOverCooldown = ref(false);
    const showParticipationRules = ref(false);
    let cooldownTimer: ReturnType<typeof setTimeout> | null = null;
    let copiedTimer: ReturnType<typeof setTimeout> | null = null;

    const rules = [
      '«Отпускайте» ящик, когда он окажется над башней, одним нажатием на экран.',
      'Старайтесь собирать башню ровно. Если края выйдут за границы, они будут обрезаны.',
      'Чем выше башня, тем больше баллов будет направлено на благотворительность.'
    ];

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
      'Акция не является лотереей и не требует обязательной покупки.'
    ];

    const nextReward = computed<PromoReward | null>(() => {
      return PROMO_REWARDS.find((reward) => reward.score > props.score.current) || null;
    });

    const remainingToReward = computed(() => {
      return nextReward.value ? Math.max(0, nextReward.value.score - props.score.current) : 0;
    });

    const earnedReward = computed<PromoReward | null>(() => {
      const reversed = [...PROMO_REWARDS].reverse();
      return reversed.find((reward) => reward.score <= props.score.current) || null;
    });

    const totalGoal = computed(() => PROMO_REWARDS[PROMO_REWARDS.length - 1]?.score || 0);

    const overallProgress = computed(() => {
      if (!totalGoal.value) return 0;
      return Math.min(1, props.score.current / totalGoal.value);
    });

    const segmentProgress = (index: number) => {
      if (!totalGoal.value || PROMO_REWARDS.length === 0) return 0;
      const segmentSize = totalGoal.value / PROMO_REWARDS.length;
      const segmentStart = index * segmentSize;
      const segmentEnd = segmentStart + segmentSize;
      if (props.score.current <= segmentStart) return 0;
      if (props.score.current >= segmentEnd) return 1;
      return (props.score.current - segmentStart) / segmentSize;
    };

    const segmentWidth = (index: number) => `${Math.round(segmentProgress(index) * 100)}%`;

    const sortedEntries = computed(() => {
      return [...props.leaderboardEntries].sort((a, b) => b.score - a.score);
    });

    const copyCode = async () => {
      if (!earnedReward.value || !process.client) return;
      try {
        await navigator.clipboard.writeText(earnedReward.value.code);
        copied.value = true;
        if (copiedTimer) clearTimeout(copiedTimer);
        copiedTimer = setTimeout(() => {
          copied.value = false;
        }, 2000);
      } catch (_) {
        copied.value = false;
      }
    };

    watch(
      () => props.gameState,
      (value) => {
        if (value !== GameState.START) {
          onboardingStep.value = 1;
          showParticipationRules.value = false;
        }

        if (value === GameState.GAME_OVER) {
          gameOverCooldown.value = true;
          if (cooldownTimer) clearTimeout(cooldownTimer);
          cooldownTimer = setTimeout(() => {
            gameOverCooldown.value = false;
          }, 1200);
        } else {
          gameOverCooldown.value = false;
          if (cooldownTimer) {
            clearTimeout(cooldownTimer);
            cooldownTimer = null;
          }
        }
      },
      { immediate: true }
    );

    onBeforeUnmount(() => {
      if (cooldownTimer) clearTimeout(cooldownTimer);
      if (copiedTimer) clearTimeout(copiedTimer);
    });

    const onStart = () => emit('start');
    const onRestart = () => emit('restart');
    const onOpenLeaderboard = () => emit('open-leaderboard');
    const onCloseLeaderboard = () => emit('close-leaderboard');
    const onNextOnboarding = () => {
      onboardingStep.value = 2;
    };
    const onBackOnboarding = () => {
      onboardingStep.value = 1;
    };

    return {
      GameStateEnum: GameState,
      PROMO_REWARDS,
      svgPaths,
      rules,
      participationRules,
      onboardingStep,
      showParticipationRules,
      gameOverCooldown,
      copied,
      nextReward,
      remainingToReward,
      earnedReward,
      overallProgress,
      sortedEntries,
      segmentWidth,
      copyCode,
      onStart,
      onRestart,
      onOpenLeaderboard,
      onCloseLeaderboard,
      onNextOnboarding,
      onBackOnboarding
    };
  }
});
</script>
