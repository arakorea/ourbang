/* OURBANG COMMON LANGUAGE v1
   Common language state only.
   Page-specific translations remain on each page for now.
*/
(() => {
  'use strict';
  const KEY='ourbang-language';
  const SUPPORTED=['en','ko','ja','zh'];
  const HTML_LANG={en:'en',ko:'ko',ja:'ja',zh:'zh-CN'};

  function normalize(v){
    v=(v||'').toLowerCase();
    if(v.startsWith('ko')) return 'ko';
    if(v.startsWith('ja')) return 'ja';
    if(v.startsWith('zh')) return 'zh';
    return 'en';
  }
  function get(){
    const saved=localStorage.getItem(KEY);
    return SUPPORTED.includes(saved) ? saved : normalize(navigator.language);
  }
  function apply(lang, notify=true){
    if(!SUPPORTED.includes(lang)) lang='en';
    localStorage.setItem(KEY,lang);
    document.documentElement.lang=HTML_LANG[lang];
    document.querySelectorAll('[data-ob-lang]').forEach(el=>{ el.value=lang; });
    if(notify) window.dispatchEvent(new CustomEvent('ourbang:languagechange',{detail:{lang}}));
    return lang;
  }
  function init(){
    const lang=apply(get(),false);
    document.querySelectorAll('[data-ob-lang]').forEach(el=>{
      el.value=lang;
      el.addEventListener('change',()=>apply(el.value,true));
    });
    window.dispatchEvent(new CustomEvent('ourbang:languagechange',{detail:{lang}}));
  }
  window.OURBANG_I18N={get,apply};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
