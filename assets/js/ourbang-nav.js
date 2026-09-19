/* OURBANG COMMON NAV v1 */
(() => {
  'use strict';

  const ROUTES = [
    ['HOME','index.html'],
    ['COLLECTIONS','collections.html'],
    ['STUDIO','create.html'],
    ['LIVE','live.html'],
    ['VISION','vision.html'],
    ['CONTACT','contact.html']
  ];

  function currentFile(){
    const file = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
    return file.toLowerCase();
  }

  function markCurrent(root){
    const file = currentFile();
    root.querySelectorAll('a[href]').forEach(a => {
      const href = (a.getAttribute('href') || '').split('#')[0].split('?')[0].toLowerCase();
      if (href && (href === file || (file === '' && href === 'index.html'))) {
        a.setAttribute('aria-current','page');
      }
    });
  }

  function initNav(){
    const nav = document.querySelector('[data-ob-nav]');
    if(!nav) return;

    const desktop = nav.querySelector('[data-ob-links]');
    const panel = document.querySelector('[data-ob-mobile-panel]');
    const button = nav.querySelector('[data-ob-menu]');

    if(desktop && !desktop.children.length){
      ROUTES.forEach(([label,href]) => {
        const a=document.createElement('a'); a.href=href; a.textContent=label; desktop.appendChild(a);
      });
    }
    if(panel && !panel.children.length){
      ROUTES.forEach(([label,href]) => {
        const a=document.createElement('a'); a.href=href; a.textContent=label; panel.appendChild(a);
      });
    }

    markCurrent(nav);
    if(panel) markCurrent(panel);

    const close=()=>{
      nav.classList.remove('is-open');
      document.body.classList.remove('ob-menu-open');
      button?.setAttribute('aria-expanded','false');
    };
    button?.addEventListener('click',()=>{
      const open=!nav.classList.contains('is-open');
      nav.classList.toggle('is-open',open);
      document.body.classList.toggle('ob-menu-open',open);
      button.setAttribute('aria-expanded',String(open));
    });
    panel?.addEventListener('click',e=>{ if(e.target.closest('a')) close(); });
    addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
    addEventListener('resize',()=>{ if(innerWidth>820) close(); });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initNav);
  else initNav();
})();
