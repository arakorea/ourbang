/* OURBANG COMMON NAVIGATION V2 */
(() => {
  'use strict';

  const aliases = {
    home: ['','index','index.html','home','home.html'],
    collections: ['collections','collections.html','explore','explore.html'],
    studio: ['create','create.html','studio','studio.html'],
    live: ['live','live.html'],
    vision: ['vision','vision.html'],
    contact: ['contact','contact.html']
  };

  function routeKey(){
    let part = location.pathname.split('/').filter(Boolean).pop() || '';
    part = part.toLowerCase();
    for (const [key, values] of Object.entries(aliases)){
      if(values.includes(part)) return key;
    }
    return '';
  }

  function linkKey(a){
    const text = (a.dataset.en || a.textContent || '').trim().toLowerCase();
    if(text === 'home') return 'home';
    if(text === 'collections') return 'collections';
    if(text === 'studio') return 'studio';
    if(text === 'live') return 'live';
    if(text === 'vision') return 'vision';
    if(text === 'contact') return 'contact';
    return '';
  }

  function markCurrent(){
    const current = routeKey();
    document.querySelectorAll('.links a,.mobilePanel a').forEach(a => {
      const active = linkKey(a) === current;
      a.classList.toggle('active', active);
      if(active) a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });
  }

  function initMenu(){
    const button = document.querySelector('.menuBtn');
    const panel = document.getElementById('mobilePanel') || document.querySelector('.mobilePanel');
    if(!button || !panel || button.dataset.obNavReady === '1') return;

    button.dataset.obNavReady = '1';

    const close = () => {
      panel.classList.remove('open');
      document.body.classList.remove('menuOpen');
      button.setAttribute('aria-expanded','false');
    };

    button.addEventListener('click', () => {
      const open = !panel.classList.contains('open');
      panel.classList.toggle('open', open);
      document.body.classList.toggle('menuOpen', open);
      button.setAttribute('aria-expanded', String(open));
    });

    panel.addEventListener('click', e => {
      if(e.target.closest('a')) close();
    });

    addEventListener('keydown', e => {
      if(e.key === 'Escape') close();
    });

    addEventListener('resize', () => {
      if(innerWidth > 1180) close();
    });
  }

  function init(){
    markCurrent();
    initMenu();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, {once:true});
  }else{
    init();
  }
})();
