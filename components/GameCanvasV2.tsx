import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { GameEngineV2 } from '../utils/gameEngineV2';

interface GameCanvasV2Props {
  onScoreUpdate: (score: number) => void;
  onGameOver: (score: number) => void;
}

export interface GameCanvasV2Handle {
  startGame: () => void;
  handleTap: () => void;
}

const GameCanvasV2 = forwardRef<GameCanvasV2Handle, GameCanvasV2Props>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GameEngineV2 | null>(null);

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

    const engine = new GameEngineV2(canvasRef.current, {
      onScoreUpdate: props.onScoreUpdate,
      onGameOver: props.onGameOver,
    });
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

GameCanvasV2.displayName = 'GameCanvasV2';
export default GameCanvasV2;
