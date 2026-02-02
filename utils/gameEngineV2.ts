import { COLORS, GAME_CONFIG, PERFECT_MESSAGES } from '../constants';
import { GameState, FloatingText } from '../types';

interface Block {
  x: number;
  y: number;
  width: number;
  color: string;
  emoji: string;
  isDebris?: boolean;
  vy?: number;
  r?: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  isCrescent?: boolean;
}

export class GameEngineV2 {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private blocks: Block[] = [];
  private debris: Block[] = [];
  private stars: Star[] = [];
  private floatingTexts: FloatingText[] = [];

  private currentBlock: Block | null = null;
  private speed: number = GAME_CONFIG.initialSpeed;
  private score: number = 0;
  private cameraY: number = 0;
  private state: GameState = GameState.START;
  private perfectStreak: number = 0;
  private lastPlacement: { x: number; y: number; time: number } | null = null;

  private onScoreUpdate: (score: number) => void;
  private onGameOver: (score: number) => void;
  private animationId: number = 0;
  private lastFrameTime: number = performance.now();

  // Swing/drop mechanics
  private swingTime: number = 0;
  private swingPhase: number = 0;
  private swingAmplitude: number = 140;
  private swingSpeed: number = 0.06;
  private ropeLength: number = 140;
  private pivotX: number = 0;
  private pivotY: number = 0;
  private isDropping: boolean = false;
  private dropVelocity: number = 0;

  constructor(
    canvas: HTMLCanvasElement,
    callbacks: {
      onScoreUpdate: (s: number) => void;
      onGameOver: (s: number) => void;
    }
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.onScoreUpdate = callbacks.onScoreUpdate;
    this.onGameOver = callbacks.onGameOver;

    this.initStars();
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));

    this.loop();
  }

  private resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initStars() {
    this.stars = [];
    for (let i = 0; i < 70; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05 + 0.01,
      });
    }

    const crescentCount = 7;
    for (let i = 0; i < crescentCount; i++) {
      const idx = Math.floor(Math.random() * this.stars.length);
      this.stars[idx] = {
        ...this.stars[idx],
        isCrescent: true,
        size: (Math.random() * 3 + 3.5) * 1.4,
        opacity: Math.random() * 0.4 + 0.6,
        speed: Math.random() * 0.015 + 0.004,
      };
    }
  }

  public start() {
    this.blocks = [];
    this.debris = [];
    this.floatingTexts = [];
    this.score = 0;
    this.perfectStreak = 0;
    this.speed = GAME_CONFIG.initialSpeed;
    this.state = GameState.PLAYING;
    this.cameraY = 0;
    this.onScoreUpdate(0);

    const baseBlock: Block = {
      x: (this.canvas.width - GAME_CONFIG.baseWidth) / 2,
      y: this.canvas.height - 150,
      width: GAME_CONFIG.baseWidth,
      color: COLORS.boxMain,
      emoji: '',
    };
    this.blocks.push(baseBlock);

    this.spawnNextBlock();
  }

  private spawnNextBlock() {
    const prevBlock = this.blocks[this.blocks.length - 1];
    const baseY = prevBlock.y - GAME_CONFIG.blockHeight - 40;
    this.currentBlock = {
      x: prevBlock.x,
      y: baseY,
      width: prevBlock.width,
      color: COLORS.boxMain,
      emoji: '',
    };

    this.swingTime = 0;
    this.swingPhase = Math.random() * Math.PI * 2;
    this.swingAmplitude = Math.min(220, 120 + this.score * 2);
    this.swingSpeed = 0.05 + this.score * 0.002;
    this.ropeLength = 140;
    this.pivotX = prevBlock.x + prevBlock.width / 2;
    this.pivotY = baseY - this.ropeLength;
    this.isDropping = false;
    this.dropVelocity = 0;
  }

  public handleInput() {
    if (this.state !== GameState.PLAYING || !this.currentBlock) return;
    if (this.isDropping) return;
    this.isDropping = true;
    this.dropVelocity = 0.5;
  }

  private handlePlacement() {
    if (!this.currentBlock) return;
    const prevBlock = this.blocks[this.blocks.length - 1];
    const current = this.currentBlock;

    const dist = current.x - prevBlock.x;
    const absDist = Math.abs(dist);

    if (absDist >= current.width) {
      this.gameOver();
      return;
    }

    let newWidth = current.width;
    let newX = current.x;

    if (absDist <= GAME_CONFIG.perfectTolerance) {
      newX = prevBlock.x;
      newWidth = prevBlock.width;
      this.handlePerfectMatch(newX, current.y);

      if (this.perfectStreak > 0 && this.perfectStreak % GAME_CONFIG.comboThreshold === 0) {
        newWidth = Math.min(newWidth + GAME_CONFIG.widthBonus, GAME_CONFIG.baseWidth * 1.5);
        newX = prevBlock.x - (GAME_CONFIG.widthBonus / 2);
        this.addFloatingText('БОНУС ШИРИНЫ!', this.canvas.width / 2, this.canvas.height / 2 - 100);
      }
    } else {
      this.perfectStreak = 0;
      newWidth = current.width - absDist;

      let debrisX, debrisWidth;
      if (dist > 0) {
        newX = current.x;
        debrisX = prevBlock.x + prevBlock.width;
        debrisWidth = absDist;
      } else {
        newX = prevBlock.x;
        debrisX = current.x;
        debrisWidth = absDist;
      }

      this.debris.push({
        x: debrisX,
        y: current.y,
        width: debrisWidth,
        color: COLORS.boxDark,
        emoji: '',
        isDebris: true,
        vy: 2,
        r: 0,
      });
    }

    this.blocks.push({
      ...current,
      x: newX,
      width: newWidth,
    });

    this.lastPlacement = {
      x: newX + newWidth / 2,
      y: current.y + GAME_CONFIG.blockHeight / 2,
      time: Date.now(),
    };

    this.score++;
    this.onScoreUpdate(this.score);
    this.speed = Math.min(GAME_CONFIG.maxSpeed, GAME_CONFIG.initialSpeed + (this.score * GAME_CONFIG.speedIncrement));
    this.spawnNextBlock();
  }

  private handlePerfectMatch(x: number, y: number) {
    this.perfectStreak++;
    const msg = PERFECT_MESSAGES[Math.floor(Math.random() * PERFECT_MESSAGES.length)];
    this.addFloatingText(msg, x + Math.random() * 50, y);
  }

  private addFloatingText(text: string, x: number, y: number) {
    this.floatingTexts.push({
      id: Date.now() + Math.random(),
      x,
      y,
      text,
      opacity: 1,
      life: 60,
    });
  }

  private gameOver() {
    this.state = GameState.GAME_OVER;
    if (this.currentBlock) {
      this.debris.push({
        ...this.currentBlock,
        isDebris: true,
        vy: 5,
        r: 0,
      });
    }
    this.currentBlock = null;
    this.onGameOver(this.score);
  }

  private update(delta: number) {
    if (this.state === GameState.PLAYING && this.currentBlock) {
      if (!this.isDropping) {
        this.swingTime += delta;
        const swingX = this.pivotX + this.swingAmplitude * Math.sin(this.swingTime * this.swingSpeed + this.swingPhase);
        this.currentBlock.x = swingX - this.currentBlock.width / 2;
        this.currentBlock.y = this.pivotY + this.ropeLength;
      } else {
        this.dropVelocity += 0.8 * delta;
        this.currentBlock.y += this.dropVelocity * delta * 2.4;
        const prevBlock = this.blocks[this.blocks.length - 1];
        const targetY = prevBlock.y - GAME_CONFIG.blockHeight;
        if (this.currentBlock.y >= targetY) {
          this.currentBlock.y = targetY;
          this.isDropping = false;
          this.handlePlacement();
        }
      }
    }

    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i];
      d.y += (d.vy || 0) * delta;
      d.vy = (d.vy || 0) + 0.5 * delta;
      d.r = (d.r || 0) + 0.1 * delta;
      if (d.y > this.canvas.height + 100) {
        this.debris.splice(i, 1);
      }
    }

    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y -= 1 * delta;
      ft.life -= delta;
      ft.opacity = ft.life / 30;
      if (ft.life <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }

    const targetY = (this.blocks.length * GAME_CONFIG.blockHeight) - (this.canvas.height / 2);
    const safeTargetY = Math.max(0, targetY);
    if (safeTargetY > this.cameraY) {
      this.cameraY += (safeTargetY - this.cameraY) * 0.1 * delta;
    }
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const grad = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    grad.addColorStop(0, COLORS.backgroundTop);
    grad.addColorStop(1, COLORS.backgroundBottom);
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = '#FFF';
    this.stars.forEach(star => {
      const alpha = star.isCrescent
        ? (0.75 + 0.25 * Math.sin(Date.now() * star.speed)) * star.opacity
        : Math.abs(Math.sin(Date.now() * star.speed)) * star.opacity;
      this.ctx.globalAlpha = alpha;
      if (star.isCrescent) {
        this.drawCrescent(star.x, star.y, star.size);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });
    this.ctx.globalAlpha = 1.0;

    this.ctx.save();
    this.ctx.translate(0, this.cameraY);

    // Rope
    if (this.currentBlock && !this.isDropping) {
      this.ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(this.pivotX, this.pivotY);
      this.ctx.lineTo(this.currentBlock.x + this.currentBlock.width / 2, this.currentBlock.y);
      this.ctx.stroke();
    }

    this.blocks.forEach(b => this.drawBlock(b));
    this.debris.forEach(d => this.drawBlock(d, true));
    if (this.currentBlock) {
      this.drawBlock(this.currentBlock);
    }

    if (this.lastPlacement) {
      const elapsed = Date.now() - this.lastPlacement.time;
      const t = Math.min(1, elapsed / 300);
      if (t >= 1) {
        this.lastPlacement = null;
      } else {
        const radius = 10 + t * 26;
        this.ctx.save();
        this.ctx.globalAlpha = 1 - t;
        this.ctx.strokeStyle = 'rgba(255,255,255,0.35)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(this.lastPlacement.x, this.lastPlacement.y, radius, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.restore();
      }
    }

    this.floatingTexts.forEach(ft => {
      this.ctx.globalAlpha = Math.max(0, Math.min(1, ft.opacity));
      this.ctx.fillStyle = COLORS.accentGold;
      this.ctx.font = 'bold 24px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.shadowColor = 'black';
      this.ctx.shadowBlur = 4;
      this.ctx.fillText(ft.text, ft.x + (this.currentBlock?.width || 100) / 2, ft.y);
      this.ctx.shadowBlur = 0;
    });
    this.ctx.globalAlpha = 1.0;

    this.ctx.restore();
  }

  private drawBlock(b: Block, isDebris = false) {
    if (isDebris) {
      this.ctx.save();
      this.ctx.translate(b.x + b.width / 2, b.y + GAME_CONFIG.blockHeight / 2);
      this.ctx.rotate(b.r || 0);
      this.ctx.translate(-b.width / 2, -GAME_CONFIG.blockHeight / 2);
      this.drawBlockShape(0, 0, b.width, GAME_CONFIG.blockHeight, b.color, b.emoji);
      this.ctx.restore();
    } else {
      this.drawBlockShape(b.x, b.y, b.width, GAME_CONFIG.blockHeight, b.color, b.emoji);
    }
  }

  private drawBlockShape(x: number, y: number, w: number, h: number, color: string, emoji: string) {
    const depth = 12;
    this.ctx.save();
    this.ctx.shadowColor = 'rgba(0,0,0,0.25)';
    this.ctx.shadowBlur = 12;
    this.ctx.shadowOffsetY = 4;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
    this.ctx.restore();

    this.ctx.fillStyle = COLORS.boxLight;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + depth, y - depth);
    this.ctx.lineTo(x + w + depth, y - depth);
    this.ctx.lineTo(x + w, y);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle = COLORS.boxDark;
    this.ctx.beginPath();
    this.ctx.moveTo(x + w, y);
    this.ctx.lineTo(x + w + depth, y - depth);
    this.ctx.lineTo(x + w + depth, y + h - depth);
    this.ctx.lineTo(x + w, y + h);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle = COLORS.boxTape;
    const tapeW = Math.max(10, Math.min(26, w * 0.18));
    this.ctx.fillRect(x + w / 2 - tapeW / 2, y, tapeW, h);

    this.ctx.fillStyle = 'rgba(255,255,255,0.35)';
    this.ctx.beginPath();
    this.ctx.moveTo(x + w / 2 - tapeW / 2, y);
    this.ctx.lineTo(x + w / 2 - tapeW / 2 + depth, y - depth);
    this.ctx.lineTo(x + w / 2 + tapeW / 2 + depth, y - depth);
    this.ctx.lineTo(x + w / 2 + tapeW / 2, y);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.strokeStyle = 'rgba(0,0,0,0.08)';
    this.ctx.lineWidth = 1;
    const lineCount = Math.max(3, Math.floor(w / 40));
    for (let i = 1; i <= lineCount; i++) {
      const lx = x + (w * i) / (lineCount + 1);
      this.ctx.beginPath();
      this.ctx.moveTo(lx, y);
      this.ctx.lineTo(lx, y + h);
      this.ctx.stroke();
    }

    this.ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(x, y, w, h);

    if (emoji && w > 30) {
      this.ctx.font = `${Math.min(h, w) * 0.6}px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillStyle = '#FFF';
      this.ctx.fillText(emoji, x + w / 2, y + h / 2 + 2);
    }
  }

  private drawCrescent(x: number, y: number, r: number) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(Math.PI / 2);

    const outerR = r;
    const innerR = r * 0.6;
    const offset = r * 0.35;

    this.ctx.fillStyle = 'rgba(255,255,255,0.9)';
    this.ctx.beginPath();
    this.ctx.arc(0, 0, outerR, -1.15, 1.15);
    this.ctx.arc(offset, 0, innerR, 1.15, -1.15, true);
    this.ctx.closePath();
    this.ctx.fill();

    const grad = this.ctx.createRadialGradient(0, 0, innerR * 0.6, 0, 0, outerR * 1.05);
    grad.addColorStop(0, 'rgba(255,255,255,0)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.15)');
    grad.addColorStop(1, 'rgba(255,255,255,0.0)');
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.fillStyle = grad;
    this.ctx.beginPath();
    this.ctx.arc(0, -outerR * 0.92, outerR * 0.7, 0, Math.PI * 2);
    this.ctx.arc(0, outerR * 0.92, outerR * 0.7, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.restore();
  }

  private loop = () => {
    const now = performance.now();
    const deltaMs = Math.min(50, now - this.lastFrameTime);
    this.lastFrameTime = now;
    const delta = deltaMs / 16.6667;
    this.update(delta);
    this.draw();
    this.animationId = requestAnimationFrame(this.loop);
  };

  public cleanup() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resize);
  }
}
