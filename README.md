# Neethow

니트컴퍼니 서대문점 "고민나누기" 기록물. 서버 없이 `index.html` 하나로 동작하는 정적 사이트입니다.

## GitHub Pages 배포
1. 이 폴더의 파일을 전부 저장소 루트에 올립니다. (`.nojekyll` 포함)
2. 저장소 Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)` → Save
3. 잠시 뒤 `https://<사용자명>.github.io/<저장소명>/` 으로 열립니다.

## 배포 후 한 번만 할 것
- `index.html` 상단의 `og:image`를 절대 주소로 바꿔주세요. (카톡·밴드 링크 미리보기용)
  `content="og.png"` → `content="https://<사용자명>.github.io/<저장소명>/og.png"`
- 같은 위치에 `<meta property="og:url" content="https://<사용자명>.github.io/<저장소명>/">`를 추가하면 더 좋습니다.

## 공개 범위
- GitHub Pages는 무료 플랜에서 저장소가 공개입니다. 검색엔진에 잡히지 않도록 `noindex`가 들어 있지만, 주소를 아는 사람은 누구나 볼 수 있습니다.
- 검색에 노출해도 되면 `index.html`의 `<meta name="robots" ...>` 줄을 지우세요.

## 오프라인
- 한 번 열어본 기기에서는 인터넷 없이도 열립니다. (`sw.js`)
- `index.html` 내용을 고쳤다면 `sw.js` 맨 위 `VERSION` 숫자를 올려야 기존 방문자에게 반영됩니다.
- 폰트(Noto Sans KR)는 Google Fonts에서 받아 첫 방문 시 캐시됩니다. 오프라인·차단 환경에서는 기기 기본 한글 폰트로 보입니다.

## 파일
- `index.html` : 사이트 전체 (스타일·스크립트·사연 데이터 포함)
- `sw.js`, `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png`, `favicon.svg` : 오프라인·홈 화면 추가·아이콘
- `og.png` : 링크 공유 미리보기 이미지

