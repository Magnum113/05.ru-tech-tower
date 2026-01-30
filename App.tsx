import React, { useState, useRef, useEffect, useCallback } from 'react';
import GameCanvas, { GameCanvasHandle } from './components/GameCanvas';
import UIOverlay from './components/UIOverlay';
import { GameState, GameScore, LeaderboardEntry } from './types';
import { fetchLeaderboard, getOrCreateNickname, submitScore } from './utils/leaderboard';

const STORAGE_KEY = '05ru_tech_tower_best';

export default function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [leaderboardReturnState, setLeaderboardReturnState] = useState<GameState>(GameState.START);
  const [leaderboardEntries, setLeaderboardEntries] = useState<LeaderboardEntry[]>([]);
  const [nickname, setNickname] = useState<string>('');
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

  useEffect(() => {
    const allowScroll = gameState !== GameState.PLAYING;
    document.body.style.overflow = allowScroll ? 'auto' : 'hidden';
    document.body.style.touchAction = allowScroll ? 'auto' : 'none';
    document.documentElement.style.overflow = allowScroll ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };
  }, [gameState]);

  useEffect(() => {
    let mounted = true;
    if (!nickname) {
      getOrCreateNickname().then(created => {
        if (mounted) setNickname(created);
      });
    }
    return () => {
      mounted = false;
    };
  }, [nickname]);

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
    if (finalScore > 0) {
      if (nickname) {
        submitScore(nickname, finalScore);
      } else {
        getOrCreateNickname().then(created => {
          setNickname(created);
          submitScore(created, finalScore);
        });
      }
    }
  }, []);

  const openLeaderboard = useCallback(() => {
    setLeaderboardReturnState(gameState);
    setGameState(GameState.LEADERBOARD);
    fetchLeaderboard().then(setLeaderboardEntries);
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

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-[#15252B] select-none"
      onPointerDown={handleScreenTap}
    >
      <GameCanvas 
        ref={canvasRef}
        onScoreUpdate={updateScore}
        onGameOver={handleGameOver}
      />
      <UIOverlay 
        gameState={gameState}
        score={score}
        onStart={startGame}
        onRestart={restartGame}
        onOpenLeaderboard={openLeaderboard}
        onCloseLeaderboard={closeLeaderboard}
        leaderboardEntries={leaderboardEntries}
        nickname={nickname}
      />
      
      {/* Decorative scanline overlay */}
      <div className="scanlines pointer-events-none" />
    </div>
  );
}
