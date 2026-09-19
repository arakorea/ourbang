/* OURBANG COMMON LANGUAGE STATE
   GitHub path: assets/js/ourbang-i18n.js
   Does not replace each page's translation dictionary.
*/
(() => {
  'use strict';
  const KEY='ourbang-language';
  const supported=['en','ko','ja','zh'];
  const htmlLang={en:'en',ko:'ko',ja:'ja',zh:'zh-CN'};

  function detected(){
    const n=(navigator.language||'en').toLowerCase();
    if(n.startsWith('ko')) return 'ko';
    if(n.startsWith('ja')) return 'ja';
    if(n.startsWith('zh')) return 'zh';
    return 'en';
  }
  function get(){
    const v=localStorage.getItem(KEY);
    return supported.includes(v) ? v : detected();
  }
  function apply(lang, persist=true){
    if(!supported.includes(lang)) lang='en';
    if(persist) localStorage.setItem(KEY,lang);
    document.documentElement.lang=htmlLang[lang];
    document.querySelectorAll('.langBtn[data-lang]').forEach(b=>{
      const active=b.dataset.lang===lang;
      b.classList.toggle('active',active);
      b.setAttribute('aria-pressed',String(active));
    });
    window.dispatchEvent(new CustomEvent('ourbang:languagechange',{detail:{lang}}));
  }

  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.langBtn[data-lang]').forEach(b=>{
      b.addEventListener('click',()=>apply(b.dataset.lang));
    });
    apply(get(),false);
  });

  window.OURBANG_I18N={get,apply};
})();
