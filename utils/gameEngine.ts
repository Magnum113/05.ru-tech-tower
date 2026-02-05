import { COLORS, GAME_CONFIG, PERFECT_MESSAGES, getEmojiForLevel } from '../constants';
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
  variant?: 'full' | 'cut';
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  isCrescent?: boolean;
}

type BoxStyle = 'legacy' | 'v2';

interface BoxTemplate {
  frontHeight: number;
  frontY: number;
  frontWidth: number;
  contentWidth: number;
  contentHeight: number;
  topFace: Array<{ x: number; y: number }>;
  sideFace: Array<{ x: number; y: number }>;
  outerTopStrip: { x: number; y: number; w: number; h: number };
  outerBottomStrip: { x: number; y: number; w: number; h: number };
  innerTopStrip: { x: number; y: number; w: number; h: number };
  innerBottomStrip: { x: number; y: number; w: number; h: number };
  panelXs: number[];
  panelYs: number[];
  panelW: number;
  panelH: number;
}

export class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private blocks: Block[] = [];
  private debris: Block[] = [];
  private stars: Star[] = [];
  private floatingTexts: FloatingText[] = [];
  
  private currentBlock: Block | null = null;
  private direction: number = 1; 
  private speed: number = GAME_CONFIG.initialSpeed;
  private score: number = 0;
  private cameraY: number = 0;
  private state: GameState = GameState.START;
  private perfectStreak: number = 0;
  private lastPlacement: { x: number; y: number; time: number } | null = null;
  private lastFrameTime: number = performance.now();
  
  private onScoreUpdate: (score: number) => void;
  private onGameOver: (score: number) => void;
  private animationId: number = 0;
  private boxStyle: BoxStyle = 'legacy';

  constructor(
    canvas: HTMLCanvasElement, 
    callbacks: { 
      onScoreUpdate: (s: number) => void; 
      onGameOver: (s: number) => void;
    },
    options?: { boxStyle?: BoxStyle }
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.onScoreUpdate = callbacks.onScoreUpdate;
    this.onGameOver = callbacks.onGameOver;
    this.boxStyle = options?.boxStyle ?? 'legacy';

    this.initStars();
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
    
    // Start loop immediately for background animation
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

    // Add Ramadan crescents in place of some stars
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

    // Initial Base Block
    const baseBlock: Block = {
      x: (this.canvas.width - GAME_CONFIG.baseWidth) / 2,
      y: this.canvas.height - 150,
      width: GAME_CONFIG.baseWidth,
      color: COLORS.boxMain,
      emoji: '',
      variant: 'full',
    };
    this.blocks.push(baseBlock);

    this.spawnNextBlock();
  }

  private spawnNextBlock() {
    const prevBlock = this.blocks[this.blocks.length - 1];
    // Next emoji depends on the *next* level (current score + 1)
    const nextEmoji = getEmojiForLevel(this.score + 1);
    
    this.currentBlock = {
      x: -prevBlock.width,
      y: prevBlock.y - GAME_CONFIG.blockHeight,
      width: prevBlock.width,
      color: COLORS.boxMain,
      emoji: nextEmoji,
      variant: 'full',
    };
    
    // Randomize start side
    this.direction = Math.random() > 0.5 ? 1 : -1;
    if (this.direction === 1) {
        this.currentBlock.x = -this.currentBlock.width;
    } else {
        this.currentBlock.x = this.canvas.width;
    }
  }

  public handleInput() {
    if (this.state !== GameState.PLAYING || !this.currentBlock) return;

    const prevBlock = this.blocks[this.blocks.length - 1];
    const current = this.currentBlock;

    const dist = current.x - prevBlock.x;
    const absDist = Math.abs(dist);

    // 1. Check Miss
    if (absDist >= current.width) {
      this.gameOver();
      return;
    }

    // 2. Check Perfect or Cut
    let newWidth = current.width;
    let newX = current.x;
    let newVariant: Block['variant'] = 'full';

    if (absDist <= GAME_CONFIG.perfectTolerance) {
      // Perfect Snap
      newX = prevBlock.x;
      newWidth = prevBlock.width; 
      newVariant = 'full';
      
      this.handlePerfectMatch(newX, current.y);
      
      // Recovery Mechanic: Grow block on streak
      if (this.perfectStreak > 0 && this.perfectStreak % GAME_CONFIG.comboThreshold === 0) {
        newWidth = Math.min(newWidth + GAME_CONFIG.widthBonus, GAME_CONFIG.baseWidth * 1.5);
        // Center the growth
        newX = prevBlock.x - (GAME_CONFIG.widthBonus / 2);
        this.addFloatingText(`Больше баллов!`, this.canvas.width / 2, this.canvas.height / 2 - 100, '#4ADE80');
      }

    } else {
      // Cut
      this.perfectStreak = 0; // Reset streak
      newWidth = current.width - absDist;
      newVariant = 'cut';
      
      let debrisX, debrisWidth;
      if (dist > 0) {
        // Block to right, cut right excess
        newX = current.x; 
        debrisX = prevBlock.x + prevBlock.width;
        debrisWidth = absDist;
      } else {
        // Block to left, cut left excess
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
        r: 0
      });
    }

    // Commit Block
    this.blocks.push({
      ...current,
      x: newX,
      width: newWidth,
      variant: newVariant,
    });

    this.lastPlacement = {
      x: newX + newWidth / 2,
      y: current.y + GAME_CONFIG.blockHeight / 2,
      time: Date.now(),
    };

    this.score++;
    this.onScoreUpdate(this.score);

    // Increase Speed
    this.speed = Math.min(GAME_CONFIG.maxSpeed, GAME_CONFIG.initialSpeed + (this.score * GAME_CONFIG.speedIncrement));

    this.spawnNextBlock();
  }

  private handlePerfectMatch(x: number, y: number) {
    this.perfectStreak++;
    
    // Flash effect (handled in draw via globalAlpha or overlay)
    
    // Floating Text
    const msg = PERFECT_MESSAGES[Math.floor(Math.random() * PERFECT_MESSAGES.length)];
    this.addFloatingText(msg, x + Math.random() * 50, y);
    
    // Add sparkles/particles? (Simplified to just text for now to keep code clean)
  }

  private addFloatingText(text: string, x: number, y: number, color?: string) {
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
        r: 0
      });
    }
    
    this.currentBlock = null;
    this.onGameOver(this.score);
  }

  private update(delta: number) {
    // Always update stars
    // But gameplay logic only when playing/gameover debris
    
    if (this.state === GameState.PLAYING && this.currentBlock) {
      this.currentBlock.x += this.speed * this.direction * delta;
      
      if (this.currentBlock.x + this.currentBlock.width > this.canvas.width) {
        this.direction = -1;
      } else if (this.currentBlock.x < 0) {
        this.direction = 1;
      }
    }

    // Update Debris
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i];
      d.y += (d.vy || 0) * delta;
      d.vy = (d.vy || 0) + 0.5 * delta;
      d.r = (d.r || 0) + 0.1 * delta;
      
      if (d.y > this.canvas.height + 100) {
        this.debris.splice(i, 1);
      }
    }

    // Update Floating Texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y -= 1 * delta;
      ft.life -= delta;
      ft.opacity = ft.life / 30; // Fade out
      if (ft.life <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }

    // Camera Logic
    const targetY = (this.blocks.length * GAME_CONFIG.blockHeight) - (this.canvas.height / 2);
    const safeTargetY = Math.max(0, targetY);
    if (safeTargetY > this.cameraY) {
       this.cameraY += (safeTargetY - this.cameraY) * 0.1 * delta;
    }
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Background
    const grad = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    grad.addColorStop(0, COLORS.backgroundTop);
    grad.addColorStop(1, COLORS.backgroundBottom);
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Stars + crescents
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
    // Camera Transform
    // Shift world DOWN based on cameraY
    this.ctx.translate(0, this.cameraY);

    // Draw Blocks
    this.blocks.forEach(b => this.drawBlock(b));
    this.debris.forEach(d => this.drawBlock(d, true));

    if (this.currentBlock) {
      this.drawBlock(this.currentBlock);
    }

    // Placement ring animation
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

    // Floating Texts (Rendered in world space or screen space? Better screen space usually, but here they are attached to blocks)
    // Actually let's render them in world space so they move with camera
    this.floatingTexts.forEach(ft => {
        this.ctx.globalAlpha = Math.max(0, Math.min(1, ft.opacity));
        this.ctx.fillStyle = COLORS.accentGold;
        this.ctx.font = 'bold 24px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.shadowColor = 'black';
        this.ctx.shadowBlur = 4;
        this.ctx.fillText(ft.text, ft.x + (this.currentBlock?.width || 100)/2, ft.y);
        this.ctx.shadowBlur = 0;
    });
    this.ctx.globalAlpha = 1.0;

    this.ctx.restore();
  }

  private drawBlock(b: Block, isDebris = false) {
    if (isDebris) {
        this.ctx.save();
        this.ctx.translate(b.x + b.width/2, b.y + GAME_CONFIG.blockHeight/2);
        this.ctx.rotate(b.r || 0);
        this.ctx.translate(-b.width/2, -GAME_CONFIG.blockHeight/2);
        this.drawBlockShape(0, 0, b.width, GAME_CONFIG.blockHeight, b.color, b.emoji, 'debris');
        this.ctx.restore();
    } else {
        const variant = b.variant === 'cut' ? 'cut' : 'full';
        this.drawBlockShape(b.x, b.y, b.width, GAME_CONFIG.blockHeight, b.color, b.emoji, variant);
    }
  }

  private drawBlockShape(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    emoji: string,
    variant: 'full' | 'cut' | 'debris'
  ) {
    if (this.boxStyle === 'v2') {
      this.drawBlockShapeV2(x, y, w, h, variant);
      return;
    }
    const depth = 12; // Deeper 3D effect
    
    // Main Face
    this.ctx.save();
    this.ctx.shadowColor = 'rgba(0,0,0,0.25)';
    this.ctx.shadowBlur = 12;
    this.ctx.shadowOffsetY = 4;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
    this.ctx.restore();
    
    // Top Face (Light)
      this.ctx.fillStyle = COLORS.boxLight;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + depth, y - depth);
    this.ctx.lineTo(x + w + depth, y - depth);
    this.ctx.lineTo(x + w, y);
    this.ctx.closePath();
    this.ctx.fill();

    // Side Face (Dark)
    this.ctx.fillStyle = COLORS.boxDark;
    this.ctx.beginPath();
    this.ctx.moveTo(x + w, y);
    this.ctx.lineTo(x + w + depth, y - depth);
    this.ctx.lineTo(x + w + depth, y + h - depth);
    this.ctx.lineTo(x + w, y + h);
    this.ctx.closePath();
    this.ctx.fill();

    // Tape strip (front face)
    this.ctx.fillStyle = COLORS.boxTape;
    const tapeW = Math.max(10, Math.min(26, w * 0.18));
    this.ctx.fillRect(x + w / 2 - tapeW / 2, y, tapeW, h);

    // Tape strip (top face)
    this.ctx.fillStyle = 'rgba(255,255,255,0.35)';
    this.ctx.beginPath();
    this.ctx.moveTo(x + w / 2 - tapeW / 2, y);
    this.ctx.lineTo(x + w / 2 - tapeW / 2 + depth, y - depth);
    this.ctx.lineTo(x + w / 2 + tapeW / 2 + depth, y - depth);
    this.ctx.lineTo(x + w / 2 + tapeW / 2, y);
    this.ctx.closePath();
    this.ctx.fill();

    // Subtle corrugation lines
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

    // Edge Highlighting for polish
    this.ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(x, y, w, h);
  }

  private drawBlockShapeV2(x: number, y: number, w: number, h: number, variant: 'full' | 'cut' | 'debris') {
    const template = this.getBoxTemplate(variant);
    const sx = w / template.frontWidth;
    const sy = h / template.frontHeight;
    const mapX = (vx: number) => x + vx * sx;
    const mapY = (vy: number) => y + (vy - template.frontY) * sy;

    // Base face
    this.ctx.fillStyle = '#EDD098';
    this.ctx.fillRect(x, y, w, h);

    // Panel lines exactly as in the design component
    for (const py of template.panelYs) {
      for (const px of template.panelXs) {
        const rx = mapX(px);
        const ry = mapY(py);
        const rw = template.panelW * sx;
        const rh = template.panelH * sy;
        const grad = this.ctx.createLinearGradient(0, ry, 0, ry + Math.max(3 * sy, 1));
        grad.addColorStop(0, '#FFFAF1');
        grad.addColorStop(1, '#FFE5B8');
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(rx, ry, rw, rh);
      }
    }

    // Bottom strip
    this.ctx.fillStyle = '#E9E9E9';
    this.ctx.fillRect(
      mapX(template.outerBottomStrip.x),
      mapY(template.outerBottomStrip.y),
      template.outerBottomStrip.w * sx,
      template.outerBottomStrip.h * sy,
    );

    // Right side face
    this.ctx.fillStyle = '#CACACA';
    this.drawBoxPolygon(template.sideFace, mapX, mapY);

    // Top strip + top face
    this.ctx.fillStyle = '#E9E9E9';
    this.ctx.fillRect(
      mapX(template.outerTopStrip.x),
      mapY(template.outerTopStrip.y),
      template.outerTopStrip.w * sx,
      template.outerTopStrip.h * sy,
    );

    this.ctx.fillStyle = '#F5F5F5';
    this.drawBoxPolygon(template.topFace, mapX, mapY);

    // Thin strips with stroke
    this.ctx.fillStyle = '#E9E9E9';
    this.ctx.strokeStyle = '#D2D2D2';
    this.ctx.lineWidth = Math.max(1, Math.min(sx, sy));

    this.ctx.fillRect(
      mapX(template.innerBottomStrip.x),
      mapY(template.innerBottomStrip.y),
      template.innerBottomStrip.w * sx,
      template.innerBottomStrip.h * sy,
    );
    this.ctx.strokeRect(
      mapX(template.innerBottomStrip.x),
      mapY(template.innerBottomStrip.y),
      template.innerBottomStrip.w * sx,
      template.innerBottomStrip.h * sy,
    );

    this.ctx.fillRect(
      mapX(template.innerTopStrip.x),
      mapY(template.innerTopStrip.y),
      template.innerTopStrip.w * sx,
      template.innerTopStrip.h * sy,
    );
    this.ctx.strokeRect(
      mapX(template.innerTopStrip.x),
      mapY(template.innerTopStrip.y),
      template.innerTopStrip.w * sx,
      template.innerTopStrip.h * sy,
    );
  }

  private drawBoxPolygon(
    points: Array<{ x: number; y: number }>,
    mapX: (x: number) => number,
    mapY: (y: number) => number,
  ) {
    if (points.length === 0) return;
    this.ctx.beginPath();
    this.ctx.moveTo(mapX(points[0].x), mapY(points[0].y));
    for (let i = 1; i < points.length; i++) {
      this.ctx.lineTo(mapX(points[i].x), mapY(points[i].y));
    }
    this.ctx.closePath();
    this.ctx.fill();
  }

  private getBoxTemplate(variant: 'full' | 'cut' | 'debris'): BoxTemplate {
    if (variant === 'debris') {
      return {
        frontHeight: 64,
        frontY: 19.5,
        frontWidth: 49,
        contentWidth: 65.5,
        contentHeight: 89.5,
        topFace: [
          { x: 21.6251, y: 0 },
          { x: 65.5, y: 0 },
          { x: 49, y: 13.5 },
          { x: 0.046, y: 13.5987 },
        ],
        sideFace: [
          { x: 49, y: 13.5 },
          { x: 65.5, y: 0 },
          { x: 65.5, y: 76 },
          { x: 49, y: 89.5 },
        ],
        outerTopStrip: { x: 0, y: 13.5, w: 49, h: 6 },
        outerBottomStrip: { x: 0, y: 83.5, w: 49, h: 6 },
        innerTopStrip: { x: 0.5, y: 15, w: 48, h: 3 },
        innerBottomStrip: { x: 0.5, y: 85, w: 48, h: 3 },
        panelXs: [0],
        panelYs: [20.5, 41.5, 62.5],
        panelW: 49,
        panelH: 20,
      };
    }

    if (variant === 'cut') {
      return {
        frontHeight: 64,
        frontY: 19.5,
        frontWidth: 149,
        contentWidth: 165.5,
        contentHeight: 89.5,
        topFace: [
          { x: 27.25, y: 0 },
          { x: 165.5, y: 0 },
          { x: 149, y: 13.5 },
          { x: 0, y: 13.5 },
        ],
        sideFace: [
          { x: 149, y: 13.5 },
          { x: 165.5, y: 0 },
          { x: 165.5, y: 76 },
          { x: 149, y: 89.5 },
        ],
        outerTopStrip: { x: 0, y: 13.5, w: 149, h: 6 },
        outerBottomStrip: { x: 0, y: 83.5, w: 149, h: 6 },
        innerTopStrip: { x: 1.5, y: 15, w: 146, h: 3 },
        innerBottomStrip: { x: 1.5, y: 85, w: 146, h: 3 },
        panelXs: [0, 50, 100],
        panelYs: [20.5, 41.5, 62.5],
        panelW: 49,
        panelH: 20,
      };
    }

    return {
      frontHeight: 64,
      frontY: 19.5,
      frontWidth: 199,
      contentWidth: 215.5,
      contentHeight: 89.5,
      topFace: [
        { x: 21.5, y: 0 },
        { x: 215.5, y: 0 },
        { x: 199, y: 13.5 },
        { x: 0, y: 13.5 },
      ],
      sideFace: [
        { x: 199, y: 13.5 },
        { x: 215.5, y: 0 },
        { x: 215.5, y: 76 },
        { x: 199, y: 89.5 },
      ],
      outerTopStrip: { x: 0, y: 13.5, w: 199, h: 6 },
      outerBottomStrip: { x: 0, y: 83.5, w: 199, h: 6 },
      innerTopStrip: { x: 2.5, y: 15, w: 194, h: 3 },
      innerBottomStrip: { x: 2.5, y: 85, w: 194, h: 3 },
      panelXs: [0, 50, 100, 150],
      panelYs: [20.5, 41.5, 62.5],
      panelW: 49,
      panelH: 20,
    };
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

    // Feathered tips: fade out to create tapering ends
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
