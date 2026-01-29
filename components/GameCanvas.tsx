import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { GameEngine } from '../utils/gameEngine';
import { PromoReward } from '../types';

interface GameCanvasProps {
  onScoreUpdate: (score: number) => void;
  onGameOver: (score: number) => void;
  onPromoTrigger: (reward: PromoReward) => void;
}

export interface GameCanvasHandle {
  startGame: () => void;
  resumeGame: () => void;
  handleTap: () => void;
}

const GameCanvas = forwardRef<GameCanvasHandle, GameCanvasProps>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GameEngine | null>(null);

  useImperativeHandle(ref, () => ({
    startGame: () => {
      engineRef.current?.start();
    },
    resumeGame: () => {
      engineRef.current?.resume();
    },
    handleTap: () => {
      engineRef.current?.handleInput();
    }
  }));

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new GameEngine(canvasRef.current, {
      onScoreUpdate: props.onScoreUpdate,
      onGameOver: props.onGameOver,
      onPromoTrigger: props.onPromoTrigger,
    });
    engineRef.current = engine;

    return () => {
      engine.cleanup();
    };
  }, [props.onScoreUpdate, props.onGameOver, props.onPromoTrigger]);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full touch-none"
    />
  );
});

GameCanvas.displayName = 'GameCanvas';
export default GameCanvas;
