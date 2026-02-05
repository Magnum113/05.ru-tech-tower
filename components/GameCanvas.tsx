import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { GameEngine } from '../utils/gameEngine';

interface GameCanvasProps {
  onScoreUpdate: (score: number) => void;
  onGameOver: (score: number) => void;
  boxStyle?: 'legacy' | 'v2';
}

export interface GameCanvasHandle {
  startGame: () => void;
  handleTap: () => void;
}

const GameCanvas = forwardRef<GameCanvasHandle, GameCanvasProps>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GameEngine | null>(null);

  useImperativeHandle(ref, () => ({
    startGame: () => {
      engineRef.current?.start();
    },
    handleTap: () => {
      engineRef.current?.handleInput();
    }
  }));

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new GameEngine(
      canvasRef.current,
      {
        onScoreUpdate: props.onScoreUpdate,
        onGameOver: props.onGameOver,
      },
      {
        boxStyle: props.boxStyle ?? 'legacy',
      }
    );
    engineRef.current = engine;

    return () => {
      engine.cleanup();
    };
  }, [props.onScoreUpdate, props.onGameOver]);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full touch-none"
    />
  );
});

GameCanvas.displayName = 'GameCanvas';
export default GameCanvas;
