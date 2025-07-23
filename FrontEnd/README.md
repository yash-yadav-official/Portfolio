# 포트폴리오 웹사이트 - 리팩토링된 구조

## 개요
기존의 단일 HTML 파일 구조에서 컴포넌트 기반의 모듈화된 구조로 리팩토링했습니다.

## 새로운 파일 구조

```
FrontEnd/
├── index-new.html          # 새로운 메인 HTML 파일
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트들
│   │   ├── sidebar.html   # 사이드바 컴포넌트
│   │   └── navbar.html    # 네비게이션 바 컴포넌트
│   ├── pages/             # 페이지별 컴포넌트들
│   │   ├── about.html     # About 페이지
│   │   ├── resume.html    # Resume 페이지
│   │   ├── projects.html  # Projects 페이지
│   │   ├── blog.html      # Blog 페이지
│   │   └── contact.html   # Contact 페이지
│   ├── styles/            # CSS 파일들 (기능별 분리)
│   │   ├── base.css       # 기본 스타일 및 변수
│   │   ├── components.css # 컴포넌트별 스타일
│   │   ├── pages.css      # 페이지별 스타일
│   │   └── responsive.css # 반응형 스타일
│   └── js/                # JavaScript 파일들 (기능별 분리)
│       ├── utils.js       # 유틸리티 함수들
│       ├── sidebar.js     # 사이드바 관련 기능
│       ├── navigation.js  # 네비게이션 관련 기능
│       ├── projects.js    # 프로젝트 관련 기능
│       ├── contact.js     # 연락처 폼 관련 기능
│       └── chatbot.js     # 챗봇 관련 기능
└── assets/                # 기존 assets 폴더 (변경 없음)
    ├── css/
    ├── js/
    └── images/
```

## 주요 개선사항

### 1. 컴포넌트 기반 구조
- **재사용성**: 사이드바, 네비게이션 바 등을 별도 컴포넌트로 분리
- **유지보수성**: 각 컴포넌트를 독립적으로 수정 가능
- **확장성**: 새로운 컴포넌트 추가가 용이

### 2. CSS 모듈화
- **base.css**: 기본 스타일, 변수, 리셋
- **components.css**: 사이드바, 네비게이션, 챗봇 등 컴포넌트 스타일
- **pages.css**: About, Resume, Projects, Blog, Contact 페이지 스타일
- **responsive.css**: 모든 반응형 스타일

### 3. JavaScript 모듈화
- **utils.js**: 공통 유틸리티 함수들
- **sidebar.js**: 사이드바 토글 기능
- **navigation.js**: 페이지 네비게이션 기능
- **projects.js**: 프로젝트 필터링 및 모달 기능
- **contact.js**: 연락처 폼 검증 기능
- **chatbot.js**: 챗봇 메시지 처리 기능

### 4. 동적 컴포넌트 로딩
- 페이지 로드 시 각 컴포넌트를 동적으로 불러옴
- `loadComponent()` 함수를 통해 HTML 컴포넌트 로드
- 에러 처리 및 로딩 상태 관리

## 사용 방법

### 1. 새로운 구조 사용
```bash
# index-new.html 파일을 브라우저에서 열기
open FrontEnd/index-new.html
```

### 2. 컴포넌트 수정
- 각 컴포넌트는 `src/components/` 또는 `src/pages/` 폴더에서 수정
- 수정 후 페이지 새로고침으로 변경사항 확인

### 3. 스타일 수정
- 기본 스타일: `src/styles/base.css`
- 컴포넌트 스타일: `src/styles/components.css`
- 페이지 스타일: `src/styles/pages.css`
- 반응형 스타일: `src/styles/responsive.css`

### 4. JavaScript 기능 수정
- 각 기능별로 분리된 JS 파일에서 수정
- `src/js/` 폴더 내 해당 기능 파일 수정

## 기존 기능 유지

### ✅ 유지된 기능들
- 사이드바 토글 기능
- 페이지 네비게이션
- 프로젝트 필터링 및 모달
- 연락처 폼 검증
- 챗봇 기능
- 모든 반응형 디자인
- GitHub 기여도 그래프
- 모든 애니메이션 및 전환 효과

### 🔄 개선된 부분
- **코드 구조**: 모듈화로 인한 가독성 향상
- **유지보수성**: 기능별 분리로 수정 용이
- **확장성**: 새로운 기능 추가가 쉬움
- **재사용성**: 컴포넌트 재사용 가능

## 마이그레이션 가이드

### 기존 파일에서 새 구조로 전환
1. `index.html` → `index-new.html` 사용
2. 기존 `style.css` → 분리된 CSS 파일들 사용
3. 기존 `script.js` → 분리된 JS 파일들 사용

### 주의사항
- 로컬 서버에서 실행해야 컴포넌트 로딩이 정상 작동
- 파일 경로가 정확해야 함
- 브라우저 캐시 클리어 필요할 수 있음

## 개발 환경 설정

### 로컬 서버 실행 (권장)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

### 브라우저에서 접속
```
http://localhost:8000/FrontEnd/index-new.html
```

## 향후 개선 계획

1. **빌드 시스템 도입**: Webpack 또는 Vite 사용
2. **CSS 전처리기**: Sass/SCSS 도입
3. **JavaScript 모듈**: ES6 모듈 시스템 활용
4. **상태 관리**: 간단한 상태 관리 시스템 도입
5. **테스트**: 각 컴포넌트별 단위 테스트 추가

---

이 리팩토링을 통해 코드의 유지보수성과 확장성이 크게 향상되었습니다. 각 기능이 독립적으로 관리되어 개발 효율성이 높아졌습니다. 
