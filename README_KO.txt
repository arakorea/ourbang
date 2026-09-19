OURBANG COMMON NAV — HOME BASELINE

GitHub에 그대로 올릴 경로:
assets/css/ourbang-nav.css
assets/js/ourbang-nav.js
assets/js/ourbang-i18n.js

중요:
1. HOME(index.html)의 현재 네비게이션 디자인을 기준으로 만든 공통 파일입니다.
2. 기존 assets/templates/music 폴더는 그대로 둡니다.
3. HTML 본문 디자인/ROOM/PLAYER/LIVE 기능은 건드리지 않습니다.
4. 각 HTML <head>의 기존 페이지 CSS 뒤쪽에 다음을 연결:
   <link rel="stylesheet" href="assets/css/ourbang-nav.css">
5. </body> 바로 앞에 다음을 연결:
   <script src="assets/js/ourbang-i18n.js"></script>
   <script src="assets/js/ourbang-nav.js"></script>
6. 페이지 자체에 기존 언어 번역 JS가 있으면 유지합니다.
   ourbang-i18n.js는 공통 언어 상태와 버튼 active 상태만 담당합니다.
