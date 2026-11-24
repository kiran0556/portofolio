/**
 * Interactive Neural Network / Constellation Particle Canvas
 * Represents AI/ML connectivity and data structures.
 */

class ParticleNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 140 };
    this.animationFrameId = null;

    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    // Particle density based on screen area
    const particleCount = Math.floor((this.width * this.height) / 12000);
    const count = Math.min(Math.max(particleCount, 45), 110);

    const isLight = document.documentElement.classList.contains('light');

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        baseColor: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#818cf8' : '#34d399',
        alpha: Math.random() * 0.5 + 0.3
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  update() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // Bounce off walls
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse interactivity
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const isLight = document.documentElement.classList.contains('light');

    // Draw connecting lines
    const maxDistance = 135;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * (isLight ? 0.15 : 0.22);
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = isLight
            ? `rgba(14, 165, 233, ${opacity})`
            : `rgba(56, 189, 248, ${opacity})`;
          this.ctx.lineWidth = 0.85;
          this.ctx.stroke();
        }
      }

      // Connect to mouse
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const p = this.particles[i];
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const opacity = (1 - dist / this.mouse.radius) * 0.35;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    // Draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.baseColor;
      this.ctx.globalAlpha = isLight ? 0.7 : p.alpha;
      this.ctx.fill();

      // Glow effect in dark mode
      if (!isLight) {
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = p.baseColor;
      }
    }
    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;
  }

  animate() {
    this.update();
    this.draw();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  refreshTheme() {
    this.createParticles();
  }
}

// Global hook
window.addEventListener('DOMContentLoaded', () => {
  window.particleNetwork = new ParticleNetwork('hero-canvas');
});
