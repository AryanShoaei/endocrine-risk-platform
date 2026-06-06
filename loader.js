// Shared loading screen + page transitions for EndoRisk v2

(function(){
  // Create loader overlay
  const loader = document.createElement('div');
  loader.id = 'endo-loader';
  loader.innerHTML = `
    <div class="loader-inner">
      <div class="loader-logo">ENDORISK</div>
      <div class="loader-bar-wrap"><div class="loader-bar" id="loader-bar"></div></div>
      <div class="loader-status" id="loader-status">Initializing clinical models...</div>
    </div>
  `;
  loader.style.cssText = `
    position:fixed;top:0;left:0;right:0;bottom:0;
    background:#04040a;z-index:99999;
    display:flex;align-items:center;justify-content:center;
    font-family:'Syne',sans-serif;
    transition:opacity 0.5s ease;
  `;
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .loader-inner{text-align:center}
      .loader-logo{font-size:32px;font-weight:800;letter-spacing:-0.04em;
        background:linear-gradient(135deg,#6c63ff,#00d4ff);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        margin-bottom:2rem;}
      .loader-bar-wrap{width:200px;height:2px;background:rgba(108,99,255,0.15);
        border-radius:2px;margin:0 auto 1rem;overflow:hidden;}
      .loader-bar{height:100%;width:0%;background:linear-gradient(90deg,#6c63ff,#00d4ff);
        border-radius:2px;transition:width 0.3s ease;}
      .loader-status{font-size:11px;font-family:'JetBrains Mono',monospace;
        color:#4a485a;letter-spacing:0.06em;text-transform:uppercase;}
    </style>
  `);
  document.body.prepend(loader);

  const messages = [
    'Initializing clinical models...',
    'Loading biomarker schemas...',
    'Calibrating risk engine...',
    'Rendering 3D visualization...',
    'Ready.'
  ];
  let progress = 0;
  let msgIdx = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 25 + 10;
    if(progress > 100) progress = 100;
    document.getElementById('loader-bar').style.width = progress + '%';
    if(msgIdx < messages.length - 1 && progress > (msgIdx + 1) * 20) {
      msgIdx++;
      document.getElementById('loader-status').textContent = messages[msgIdx];
    }
    if(progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
      }, 300);
    }
  }, 120);

  // Page transition links
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if(!a || !a.href || a.href.startsWith('#') || a.target === '_blank') return;
    if(a.hostname !== window.location.hostname) return;
    e.preventDefault();
    const dest = a.href;
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;top:0;left:0;right:0;bottom:0;
      background:#04040a;z-index:99998;opacity:0;
      transition:opacity 0.25s ease;pointer-events:none;
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      setTimeout(() => { window.location.href = dest; }, 250);
    });
  });
})();
