/* OURBANG COMMON NAV
   GitHub path: assets/js/ourbang-nav.js
   Preserves existing HTML navigation; standardizes active state + mobile menu.
*/
(() => {
  'use strict';

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const aliases = {
    '': 'index.html',
    'index': 'index.html',
    'explore': 'explore.html',
    'create': 'create.html',
    'live': 'live.html',
    'vision': 'vision.html',
    'contact': 'contact.html'
  };
  const current = aliases[page] || (page.endsWith('.html') ? page : page + '.html');

  document.querySelectorAll('.links a, .mobilePanel a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0].split('?')[0];
    const target = href.split('/').pop().toLowerCase() || 'index.html';
    const isActive = target === current;
    a.classList.toggle('active', isActive);
    if (isActive) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });

  const btn = document.querySelector('.menuBtn');
  const panel = document.querySelector('.mobilePanel');
  if (!btn || !panel) return;

  const close = () => {
    panel.classList.remove('open');
    document.body.classList.remove('menuOpen');
    btn.setAttribute('aria-expanded','false');
  };
  const open = () => {
    panel.classList.add('open');
    document.body.classList.add('menuOpen');
    btn.setAttribute('aria-expanded','true');
  };

  btn.addEventListener('click', () => panel.classList.contains('open') ? close() : open());
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', () => { if (innerWidth > 1180) close(); });
})();
