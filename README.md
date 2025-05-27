# PlatoFormChecker

## 📌 개요
PlatoFormChecker는 부산대학교 PLATO 등 학교 서버에서 학생이 제출하는 과제가 평문으로 제시된 제출 양식을 정확히 지켰는지 자동으로 검사해주는 AI 기반 문서 포맷 검증 서비스입니다. 학생은 제출 전, 파일명·확장자·문서 내 항목 등 세부 조건을 실시간으로 확인하고 오류를 바로잡을 수 있어, 사소한 실수로 인한 감점을 방지할 수 있습니다.

## 🎯 문제 정의 및 기대 효과

### 문제 정의
- 학생들은 교수자가 제시한 과제 제출 조건을 놓치거나 잘못 해석해 감점당하는 일이 빈번합니다.
- 파일명, 확장자, 문서 내 특정 형식(예: 표지 유무, 장수 제한 등) 등 세부 조건을 직접 확인하는 것은 번거롭고 실수하기 쉽습니다.

### 중요성 및 필요성
- 학생은 불필요한 감점을 방지하고, 제출 전 스스로 조건 준수 여부를 점검할 수 있습니다.
- 반복적이고 소모적인 양식 확인 작업을 자동화하여, 자기주도적 학습과 과제 제출의 효율성을 높입니다.

### 기대 효과
- 학생이 제출 전 조건 준수 여부를 실시간으로 확인, 감점 방지
- 과제 제출 시스템(PLATO 등)과 연동하여 자동 양식 검증 및 통과 여부 안내
- 학교 전체의 과제 관리 효율성 향상

## ✅ Upstage API 활용

- **Upstage Document Parser**: 교수자가 작성한 과제 제출 조건을 LLM이 이해할 수 있는 포맷으로 변환하고, 학생이 업로드한 과제 파일 역시 분석하여 구조화합니다.
- **Solar LLM**: 추출된 조건을 바탕으로, 실제 제출물이 조건과 부합하는지 정교하게 판단합니다.

## 🚀 주요 기능

- ✨ **과제 조건 자동 파싱 및 구조화**
  - 교수자가 PLATO 등에 올린 제출 조건을 Document Parser가 자동으로 파싱하여, 문서 내 명시 항목 등 세부 조건을 추출합니다.

- ✨ **제출물 자동 검증**
  - 학생이 제출할 파일(docx, pdf 등)을 업로드하면, Solar LLM이 추출된 조건과 실제 파일을 비교해 부합 여부를 실시간으로 피드백합니다.
  - 예) 표지 유무, 이름/학번 명시, 장수 제한 등
  - **장점**: 제출 전 오류 즉시 확인, 감점 방지
    
- ✨ **조건 해석 불확실성 안내**
  - 조건 해석이 모호한 경우, 추가 확인이 필요함을 학생에게 안내하여, 제출 오류를 예방합니다.
    
## 🖼️ 데모
- 개발 중입니다.

## 🔬 기술 구현 요약

- **Document Parser(document-parse-250508)**
- **Solar LLM(solar-pro2-preview)**

## 🧰 기술 스택 및 시스템 아키텍처
- 사용 언어: TypeScript, Python
- 프레임워크: React, FastAPI

### 시스템 아키텍처
- 구체화 중입니다.

## 🔧 설치 및 사용 방법
### 백엔드
- API_KEY=... 입력 (./.env/data.env)
- uv run fastapi run main.py

## 📁 프로젝트 구조
- ...
## 🧑‍🤝‍🧑 팀원 소개

| 이름    | 역할     | GitHub                                      |
|--------|---------|---------------------------------------------|
| 정성우   |   팀장   | https://github.com/qda-sw    |
| 안나연   |   팀원   | https://github.com/annaaa4701  |
| 정재원   |   팀원   | https://github.com/wolfura-ark  |
| 임승우   |   팀원   | https://github.com/ChopinBag  |

## 💡 참고 자료 및 아이디어 출처

* [Upstage Document Parse](https://www.upstage.ai/products/document-parse)
* [Upstage: Building end-to-end RAG system using Solar LLM and MongoDB Atlas](https://www.upstage.ai/blog/en/building-rag-system-using-solar-llm-and-mongodb-atlas)
* [PLATO 공식 문서](https://plato.pusan.ac.kr)
