/* OURBANG COMMON NAV — safe shared behavior */
(() => {
  'use strict';

  const panel = document.getElementById('mobilePanel');
  const menu = document.querySelector('.menuBtn');

  // FINAL INDEX already contains its own working navigation/i18n script.
  // On that page, do not bind a second menu toggle.
  const hasInlineController =
    document.getElementById('ourbang-i18n-inline') ||
    document.getElementById('ourbang-designer-v5-js');

  if (menu && panel && !hasInlineController && !menu.dataset.ourbangBound) {
    menu.dataset.ourbangBound = '1';

    const closeMenu = () => {
      panel.classList.remove('open');
      document.body.classList.remove('menuOpen');
      menu.setAttribute('aria-expanded', 'false');
    };

    menu.addEventListener('click', () => {
      const open = !panel.classList.contains('open');
      panel.classList.toggle('open', open);
      document.body.classList.toggle('menuOpen', open);
      menu.setAttribute('aria-expanded', String(open));
    });

    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1180) closeMenu();
    }, {passive:true});
  }

  // Keep active navigation state consistent on every page.
  const clean = s => (s || '').replace(/index\.html$/i,'').replace(/\.html$/i,'').replace(/\/+$/,'');
  const here = clean(location.pathname.split('/').pop() || '');
  document.querySelectorAll('.links a, .mobilePanel a').forEach(a => {
    const raw = (a.getAttribute('href') || '').split('#')[0].split('?')[0];
    const target = clean(raw.split('/').pop() || '');
    const isHome = (here === '' && (target === '' || target === '.'));
    const active = isHome || (here && target === here);
    if (active) a.classList.add('active');
    else a.classList.remove('active');
  });
})();
