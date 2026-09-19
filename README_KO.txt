OURBANG COMMON NAV V2 — HOME 기준 공통 네비게이션

이번 파일은 2026-09-19 최신 HOME/index의 실제 네비게이션을 기준으로 만들었습니다.

GitHub 업로드:
1) assets/css/ourbang-nav.css
2) assets/js/ourbang-nav.js
3) index.html  ← 기존 HOME index.html 교체

이번 단계에서 건드리지 않은 것:
- HOME Six Rooms / Three.js / OrbitControls
- ROOM drag / mobile room rail
- HOME 본문 디자인
- 기존 언어 번역 시스템

공통화된 것:
- OURBANG 로고 크기/간격
- HOME · COLLECTIONS · STUDIO · LIVE · VISION · CONTACT
- active page 표시
- EN / KO / JA / 中文 버튼의 크기와 배치
- tablet/phone hamburger
- mobile panel
- ESC/resize/menu close behavior

다음 단계:
HOME에서 PC / iPad / phone 세로·가로 확인 후,
동일한 ourbang-nav.css + ourbang-nav.js를 STUDIO에 연결합니다.
그 다음 COLLECTIONS / LIVE / VISION / CONTACT 순서로 연결하면
앞으로 네비게이션 수정은 공통 파일 한 번만 수정하면 됩니다.
