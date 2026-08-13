# 🏛️ 국립고대문화박물관 행정 통합 전산망
> **National Museum of Ancient Culture - Administrative Intranet System**

대한민국 정부기관 및 공공기관의 공식 행정전산망 스타일을 기반으로 제작된 웹 애플리케이션입니다.  
국립고대문화박물관의 보안 1급 내부 전산망 환경을 모사하여, **관장 강은아 계정의 보도자료 작성 및 예약 발송 관리 시스템**과 **유물 보안 관제 서비스**를 제공합니다.

---

## 📌 주요 특징 (Key Features)

1. **🏛️ 정부기관 전산망 톤앤매너 디자인**
   - 대한민국 공공기관 행정망(GPKI 인증, 보안 1급) 특유의 절제되고 신뢰감 있는 레이아웃
   - 공식 국립고대문화박물관 태극 로고 및 행정 서식 문서 양식 구현

2. **🔒 행정망 통합 로그인 & GPKI 보안 인증**
   - 공직자 계정 로그인 검증 및 무단 접근 보안 경고 모듈
   - 1.5초 간의 현실감 있는 GPKI 행정전자서명 및 세션 검증 로딩 연출

3. **📑 보도자료 작성 및 자동 예약 발송 시스템**
   - 특별전 개막 당일 보물 `언약의 토기` 도난 사건 보도자료 관리 (Image 1 기반 100% 복원)
   - 문서 제목 및 본문 실시간 수정, 전산 저장, 발송 예약 취소/재개 기능
   - 우측 속성 패널에서 단일 행(Single Line) 상태 표시 및 95% 진행률 게이지 바 제공

4. **🚨 유물 관제 및 보안 현황 모니터링**
   - 제1기획전시실 '언약의 토기' 센서 파손 경보 및 실시간 CCTV 관제 현황 제공

---

## 🔑 데모 로그인 계정 (Demo Credentials)

| 항목 | 정보 |
| --- | --- |
| **행정망 ID (이메일)** | `dmsdk0224@korea.kr` |
| **비밀번호** | `jesus101#!` |
| **접속자 명의** | 관장 강은아 (`eunah_kang`) / 국립고대문화박물관 행정실 |

*(로그인 화면의 '관장 강은아 계정 정보 자동 입력' 버튼으로도 테스트 가능합니다.)*

---

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend**: React 19, Vite 6
- **Styling**: Pure Vanilla CSS (정부 전산 시스템 디자인 솔루션)
- **Icons**: Lucide React
- **Font**: Google Noto Sans KR, Nanum Myeongjo

---

## 📂 프로젝트 구조 (Project Structure)

```text
REFIND_박물관 전산망/
├── public/
│   ├── museum_logo.png     # 국립고대문화박물관 로고
│   └── document_ref.jpg    # 전산 수신 원본 공문서 이미지
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── LoginView.jsx            # 통합 로그인 화면
│   │   ├── LoadingView.jsx          # GPKI 보안 검증 로딩
│   │   ├── IntranetDashboard.jsx    # 보도자료 시스템 메인
│   │   ├── ArtifactSurveillance.jsx # 유물 관제 탭
│   │   └── Toast.jsx                # 시스템 알림 토스트
│   ├── App.jsx
│   ├── App.css
│   ├── index.css                    # 공공기관 전산망 디자인 시스템
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 시작하기 (Getting Started)

### 1. 설치 및 실행 (Development)
```bash
# 1. 패키지 설치
npm install

# 2. 로컬 개발 서버 구동
npm run dev
```
구동 후 브라우저에서 `http://localhost:5173/`으로 접속합니다.

### 2. 맥(Mac) 간편 실행
폴더 내 `1_웹페이지_실행하기.command` 파일을 더블 클릭하면 자동으로 서버가 구동되고 브라우저가 열립니다.

### 3. 프로덕션 빌드 (Production Build)
```bash
npm run build
```

---

## 📤 깃허브(GitHub) 업로드 방법

터미널에서 아래 명령어로 깃허브 저장소에 업로드할 수 있습니다:

```bash
# 깃 저장소 초기화
git init

# 파일 스테이징 및 첫 커밋
git add .
git commit -m "feat: Initial commit for Museum Intranet System"

# 깃허브 원격 저장소 연결 및 푸시
git branch -M main
git remote add origin https://github.com/사용자이름/저장소이름.git
git push -u origin main
```

---

*Copyright ⓒ 2026 National Museum of Ancient Culture. All Rights Reserved.*
