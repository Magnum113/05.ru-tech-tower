<template>
  <canvas ref="canvasRef" class="block w-full h-full touch-none" />
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from '@nuxtjs/composition-api';
import { GameEngine } from '~/shared/gameEngine';

export default defineComponent({
  name: 'GameCanvas',
  props: {
    boxStyle: {
      type: String,
      default: 'legacy'
    }
  },
  setup(props, { emit }) {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    let engine: GameEngine | null = null;

    const startGame = () => {
      engine?.start();
    };

    const handleTap = () => {
      engine?.handleInput();
    };

    onMounted(() => {
      if (!canvasRef.value) return;
      engine = new GameEngine(
        canvasRef.value,
        {
          onScoreUpdate: (score: number) => emit('score-update', score),
          onGameOver: (score: number) => emit('game-over', score)
        },
        {
          boxStyle: props.boxStyle as 'legacy' | 'v2'
        }
      );
    });

    onBeforeUnmount(() => {
      engine?.cleanup();
      engine = null;
    });

    return {
      canvasRef,
      startGame,
      handleTap
    };
  }
});
</script>
