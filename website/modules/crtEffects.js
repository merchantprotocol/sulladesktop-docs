/**
 * Merchant Protocol - CRT Effects Module
 * Adds atmospheric overlays: CRT scanlines, film grain, Matrix rain, cursor glow
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Wait for DOM ready
  function initCRTEffects() {
    // Prevent double-init
    if (document.querySelector('.crt-overlay')) return;

    // CRT Overlay (scanlines + vignette)
    const crt = document.createElement('div');
    crt.className = 'crt-overlay';
    document.body.appendChild(crt);

    // Film Grain
    const grain = document.createElement('div');
    grain.className = 'film-grain';
    document.body.appendChild(grain);

    // Matrix Rain Canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'matrixCanvas';
    document.body.appendChild(canvas);
    initMatrixRain(canvas);

    // Cursor Glow
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function () {
      glow.style.opacity = '0';
    });
  }

  function initMatrixRain(canvas) {
    const ctx = canvas.getContext('2d');
    let columns, drops, activeColumns;

    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    const fontSize = 14;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
      activeColumns = new Array(columns).fill(false);
      for (let i = 0; i < columns; i++) {
        activeColumns[i] = Math.random() < 0.3;
      }
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < columns; i++) {
        if (!activeColumns[i]) continue;

        const char = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * fontSize;

        // Bright head character
        if (drops[i] > 0) {
          ctx.fillStyle = '#7ee787';
          ctx.fillText(char, i * fontSize, y);

          // Trail character slightly dimmer
          if (y - fontSize > 0) {
            ctx.fillStyle = 'rgba(63, 185, 80, 0.8)';
            const trailChar = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(trailChar, i * fontSize, y - fontSize);
          }
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          activeColumns[i] = Math.random() < 0.3;
        }

        drops[i] += 0.5 + Math.random() * 0.5;
      }
    }

    setInterval(draw, 50);
  }

  // Init on load and on route change (SPA navigation)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCRTEffects);
  } else {
    initCRTEffects();
  }
}
