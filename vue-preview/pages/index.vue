<template>
  <div class="designv2 relative w-full h-screen overflow-hidden bg-[#15252B] select-none" @pointerdown="handleScreenTap">
    <GameCanvas
      ref="canvasRef"
      box-style="v2"
      @score-update="updateScore"
      @game-over="handleGameOver"
    />
    <UIOverlayDesignV2
      :game-state="gameState"
      :score="score"
      :leaderboard-entries="leaderboardEntries"
      :leaderboard-status="leaderboardStatus"
      :nickname="nickname"
      @start="startGame"
      @restart="restartGame"
      @open-leaderboard="openLeaderboard"
      @close-leaderboard="closeLeaderboard"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch
} from '@nuxtjs/composition-api';
import GameCanvas from '~/components/GameCanvas.vue';
import UIOverlayDesignV2 from '~/components/UIOverlayDesignV2.vue';
import { GameState, GameScore, LeaderboardEntry, LeaderboardStatus } from '~/shared/types';
import { fetchLeaderboard, getOrCreateNickname, submitScore } from '~/shared/leaderboard';

const STORAGE_KEY = '05ru_tech_tower_best';

export default defineComponent({
  name: 'VuePreviewGame',
  components: {
    GameCanvas,
    UIOverlayDesignV2
  },
  setup() {
    const gameState = ref<GameState>(GameState.START);
    const leaderboardReturnState = ref<GameState>(GameState.START);
    const leaderboardEntries = ref<LeaderboardEntry[]>([]);
    const leaderboardStatus = ref<LeaderboardStatus>('ok');
    const nickname = ref('');
    const canvasRef = ref<any>(null);

    const score = reactive<GameScore>({
      current: 0,
      best: process.client ? parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) : 0
    });

    const handleScreenTap = () => {
      if (gameState.value === GameState.PLAYING) {
        canvasRef.value?.handleTap?.();
      }
    };

    const updateScore = (newScore: number) => {
      score.current = newScore;
    };

    const handleGameOver = (finalScore: number) => {
      gameState.value = GameState.GAME_OVER;
      const newBest = Math.max(score.best, finalScore);
      score.current = finalScore;
      score.best = newBest;
      if (process.client) {
        localStorage.setItem(STORAGE_KEY, String(newBest));
      }

      if (finalScore > 0) {
        if (nickname.value) {
          submitScore(nickname.value, finalScore);
        } else {
          getOrCreateNickname().then((created) => {
            nickname.value = created;
            submitScore(created, finalScore);
          });
        }
      }
    };

    const openLeaderboard = () => {
      leaderboardReturnState.value = gameState.value;
      gameState.value = GameState.LEADERBOARD;
      fetchLeaderboard().then(({ entries, status }) => {
        leaderboardEntries.value = entries;
        leaderboardStatus.value = status;
      });
    };

    const closeLeaderboard = () => {
      gameState.value = leaderboardReturnState.value;
    };

    const startGame = () => {
      gameState.value = GameState.PLAYING;
      canvasRef.value?.startGame?.();
    };

    const restartGame = () => {
      gameState.value = GameState.PLAYING;
      canvasRef.value?.startGame?.();
    };

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      if (gameState.value === GameState.START) {
        startGame();
      } else if (gameState.value === GameState.GAME_OVER) {
        restartGame();
      } else if (gameState.value === GameState.PLAYING) {
        canvasRef.value?.handleTap?.();
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', keydownHandler);
      getOrCreateNickname().then((created) => {
        nickname.value = created;
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', keydownHandler);
    });

    watch(
      gameState,
      (value) => {
        if (!process.client) return;
        const allowScroll = value !== GameState.PLAYING;
        document.body.style.overflow = allowScroll ? 'auto' : 'hidden';
        document.body.style.touchAction = allowScroll ? 'auto' : 'none';
        document.documentElement.style.overflow = allowScroll ? 'auto' : 'hidden';
      },
      { immediate: true }
    );

    return {
      gameState,
      score,
      leaderboardEntries,
      leaderboardStatus,
      nickname,
      canvasRef,
      updateScore,
      handleGameOver,
      handleScreenTap,
      openLeaderboard,
      closeLeaderboard,
      startGame,
      restartGame
    };
  }
});
</script>
