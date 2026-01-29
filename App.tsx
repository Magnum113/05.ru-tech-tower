import React, { useState, useRef, useEffect, useCallback } from 'react';
import GameCanvas, { GameCanvasHandle } from './components/GameCanvas';
import UIOverlay from './components/UIOverlay';
import { GameState, GameScore } from './types';

const STORAGE_KEY = '05ru_tech_tower_best';

export default function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [leaderboardReturnState, setLeaderboardReturnState] = useState<GameState>(GameState.START);
  const [score, setScore] = useState<GameScore>({
    current: 0,
    best: parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10),
  });
  
  const canvasRef = useRef<GameCanvasHandle>(null);

  // Input Handling (Global)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        if (gameState === GameState.START) startGame();
        else if (gameState === GameState.GAME_OVER) restartGame();
        else if (gameState === GameState.PLAYING) canvasRef.current?.handleTap();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  const handleScreenTap = () => {
    if (gameState === GameState.PLAYING) {
      canvasRef.current?.handleTap();
    }
  };

  const updateScore = useCallback((newScore: number) => {
    setScore(prev => ({ ...prev, current: newScore }));
  }, []);

  const handleGameOver = useCallback((finalScore: number) => {
    setGameState(GameState.GAME_OVER);
    setScore(prev => {
      const newBest = Math.max(prev.best, finalScore);
      localStorage.setItem(STORAGE_KEY, newBest.toString());
      return { current: finalScore, best: newBest };
    });
  }, []);

  const handlePromoTrigger = useCallback(() => {
    setGameState(GameState.PROMO_PAUSE);
  }, []);

  const openLeaderboard = useCallback(() => {
    setLeaderboardReturnState(gameState);
    setGameState(GameState.LEADERBOARD);
  }, [gameState]);

  const closeLeaderboard = useCallback(() => {
    setGameState(leaderboardReturnState);
  }, [leaderboardReturnState]);

  const startGame = () => {
    setGameState(GameState.PLAYING);
    canvasRef.current?.startGame();
  };

  const restartGame = () => {
    setGameState(GameState.PLAYING);
    canvasRef.current?.startGame();
  };

  const resumeGame = () => {
    setGameState(GameState.PLAYING);
    canvasRef.current?.resumeGame();
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-[#15252B] select-none"
      onPointerDown={handleScreenTap}
    >
      <GameCanvas 
        ref={canvasRef}
        onScoreUpdate={updateScore}
        onGameOver={handleGameOver}
        onPromoTrigger={handlePromoTrigger}
      />
      <UIOverlay 
        gameState={gameState}
        score={score}
        onStart={startGame}
        onResume={resumeGame}
        onRestart={restartGame}
        onOpenLeaderboard={openLeaderboard}
        onCloseLeaderboard={closeLeaderboard}
      />
      
      {/* Decorative scanline overlay */}
      <div className="scanlines pointer-events-none" />
    </div>
  );
}
