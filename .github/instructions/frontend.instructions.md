---
applyTo: 'frontend/**' 
---
## 프로젝트 개요 및 목표

*   **프로젝트명:** 컴플레토 (Completo)
    *   의미: 과제 완성도를 확인한다는 'complete'와 칠레 핫도그 '컴플레토'의 합성어.
*   **핵심 기능:** AI 기반 과제 제출 양식 자동 검사 서비스 (상세 내용은 루트 README.md 참조)
*   **주요 타겟 사용자:** 대학생. 
*   **전체적인 방향:** 루트 [README.md](c:\Private\git\DAIC-Shine_muscat\README.md) 파일의 내용을 최우선으로 따른다.

## 프론트엔드 1차 개발 목표

다음 페이지들을 우선적으로 완성합니다:
1.  **메인 페이지:** 서비스 소개 및 시작점.
2.  **과제 제출 페이지:** 학생이 과제 파일(요구 조건 문서, 과제물)을 업로드하는 페이지.
3.  **로딩 페이지:** 파일 제출 후 RAG(Retrieval Augmented Generation) 시스템이 평가를 진행하는 동안 표시될 페이지.
4.  **평가 결과 페이지:** 양식 검사 결과를 사용자에게 보여주는 페이지.

## UI/UX 가이드라인

*   **전체적인 분위기:** 밝고 가벼운 느낌. 사용자 친화적이고 직관적인 인터페이스. (컴플레토 핫도그의 이미지를 연상시키는 따뜻하고 식욕을 돋우는 느낌 추가)
*   **컬러 팔레트:** (컴플레토 핫도그에서 영감을 받은 색상)
    *   Ochre (오커): `#C57B27` (번듯한 번 빵(브리오슈)색 - 주요 배경 또는 강조색으로 활용)
    *   Mustard Yellow (머스터드 옐로우): `#E8AE02` (머스터드 소스의 노란색 - 보조 강조색, 포인트 컬러로 활용)
    *   Fire Engine Red (파이어 엔진 레드): `#CC2522` (케첩, 소시지의 선명한 빨강 - 주요 액션, 경고, 하이라이트 컬러로 활용)
    *   Redwood (레드우드): `#995F4C` (구운 소시지, 고기색 - 텍스트, 아이콘, 구분선 등 차분한 요소에 활용)
*   **폰트:** Lexend, Noto Sans (기존 [`index.html`](c:\Private\git\DAIC-Shine_muscat\frontend\index.html) 설정 유지).
*   **레이아웃:** 반응형 디자인을 고려하여 다양한 화면 크기에서 사용성을 확보한다.
*   **애니메이션/트랜지션:** 과하지 않게 사용하여 사용자 경험을 부드럽게 한다.
*   **아이콘:** 명확하고 이해하기 쉬운 아이콘 사용 (예: Heroicons, Lucide React).
*   **접근성(a11y):** 키보드 네비게이션, ARIA 속성 등을 고려하여 웹 접근성을 준수한다.

## 코딩 스타일 및 규칙

*   **명명 규칙:**
    *   컴포넌트 이름: PascalCase (예: `FileUploadForm`)
    *   변수 및 함수 이름: camelCase (예: `handleFileUpload`, `isLoading`)
    *   CSS 클래스 (Tailwind CSS 사용 시): 유틸리티 우선 접근. 커스텀 클래스는 kebab-case.
*   **들여쓰기:** 스페이스 2칸.
*   **주석:** 복잡한 로직, 중요한 결정, TODO 항목에 주석 작성.
*   **파일 구조:**
    *   컴포넌트: `src/components` 내 기능별 또는 페이지별 하위 폴더로 그룹화 (예: `src/components/layout`, `src/components/upload`, `src/components/results`).
    *   페이지 컴포넌트: `src/pages` 폴더에 구성 고려.
    *   각 컴포넌트는 자체 폴더 또는 파일로 관리 (`[ComponentName].tsx`).
*   **상태 관리:**
    *   로컬 상태: `useState`, `useReducer`.
    *   전역 상태: 필요시 Zustand 또는 React Context API 사용. (1차 목표 범위에서는 Context API로 충분할 수 있음)
*   **API 호출:**
    *   `fetch` API 또는 `axios` 사용 (`async/await` 활용).
    *   API 관련 로직은 `src/services` 또는 `src/api` 폴더에 분리.
    *   백엔드 API 엔드포인트 (FastAPI):
        *   `/test/` (POST): 과제 요구사항 문서와 학생 과제물 문서를 받아 처리 (현재 [`app/routes/test_route.py`](c:\Private\git\DAIC-Shine_muscat\app\routes\test_route.py) 참조).

## 선호하는 라이브러리 및 패턴

*   **폼 처리:** React Hook Form 사용 고려.
*   **라우팅:** React Router DOM 사용.
*   **에러 처리:** API 호출 및 주요 로직에서 명확한 에러 처리 및 사용자 피드백 제공.
*   **코드 분할:** 페이지 단위로 `React.lazy`와 `Suspense` 활용.

## 피해야 할 패턴

*   전역 CSS 직접 수정 최소화 (Tailwind CSS 유틸리티 클래스 및 컴포넌트 스코프 스타일 우선).
*   `any` 타입 사용 최소화. 구체적인 타입 정의.
*   과도한 prop drilling.

---
이 지침은 프로젝트 진행 상황에 따라 지속적으로 업데이트될 수 있습니다.
AI는 코드 생성 및 수정 시 이 지침을 최우선으로 고려해야 합니다.