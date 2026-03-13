/**
 * Merchant Protocol - CRT Effects Module
 * Adds atmospheric overlays: CRT scanlines, film grain, cursor glow
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
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

  // Init on load and on route change (SPA navigation)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCRTEffects);
  } else {
    initCRTEffects();
  }
}
