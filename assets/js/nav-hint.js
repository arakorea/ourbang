
/* assets/js/nav-hint.js
   Smart hint for horizontal nav:
   - shows right fade only when there is more content to scroll
   - shows left fade only after user scrolls
*/
(function(){
  function init(){
    var menu = document.querySelector('.topbar .menu');
    if(!menu) return;

    function update(){
      // overflow?
      var hasOverflow = menu.scrollWidth > menu.clientWidth + 1;
      menu.classList.toggle('has-overflow', hasOverflow);

      // edges
      var atStart = menu.scrollLeft <= 1;
      var atEnd = (menu.scrollLeft + menu.clientWidth) >= (menu.scrollWidth - 1);
      menu.classList.toggle('at-start', atStart);
      menu.classList.toggle('at-end', atEnd);
    }

    // Make sure initial measurement is correct (fonts/layout settle)
    requestAnimationFrame(update);
    setTimeout(update, 60);

    menu.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{
    init();
  }
})();
