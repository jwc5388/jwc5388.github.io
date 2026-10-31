import './App.css';
import React, { useState } from 'react';
import Entry from './Entry';
import degreeImage from './assets/images/graduation.jpg';
import judoImage1 from './assets/images/judo1.jpg';
import judoImage2 from './assets/images/judo2.jpg';
import judoImage3 from './assets/images/judo3.jpg';
import dissImage from './assets/images/dissertationlogo.jpg';
import cotonsImage1 from './assets/images/cotons1.jpg';
import cotonsImage2 from './assets/images/cotons2.jpg';
import favaImage1 from './assets/images/fava1.jpeg';
import favaImage2 from './assets/images/fava2.jpeg';
import cesImage1 from './assets/images/ces1.jpeg';
import cesImage2 from './assets/images/ces2.jpeg';
import cesImage3 from './assets/images/ces3.jpeg';
import jagriImage1 from './assets/images/jagri1.jpeg';
import jagriImage2 from './assets/images/jagri2.jpeg';
import edisonImage from './assets/images/edison1.jpeg';
import senseoneImage1 from './assets/images/senseone1.png';
import senseoneImage2 from './assets/images/senseone2.png';
import senseoneImage3 from './assets/images/senseone3.png';
import senseoneImage4 from './assets/images/senseone4.png';
import senseoneImage5 from './assets/images/senseone5.png';
import lawAIImage1 from './assets/images/lawai1.png';
import lawAIImage2 from './assets/images/lawai2.png';
import lawAIImage3 from './assets/images/lawai3.png';
import lawAIImage4 from './assets/images/lawai4.png';
import lawAIImage5 from './assets/images/lawai5.png';
import royalUrImage1 from './assets/images/royalur1.png';
import royalUrImage2 from './assets/images/royalur2.png';
import sudokuImage1 from './assets/images/sudoku1.png';
import sudokuImage2 from './assets/images/sudoku2.png';
import sudokuImage3 from './assets/images/sudoku3.png';
import sudokuImage4 from './assets/images/sudoku4.png';
import sudokuImage5 from './assets/images/sudoku5.png';
import auraIdIamge1 from './assets/images/auraid1.png';
import auraIdIamge2 from './assets/images/auraid2.png';
import auraIdIamge3 from './assets/images/auraid3.png';
import auraIdIamge4 from './assets/images/auraid4.png';
import auraIdIamge5 from './assets/images/auraid5.png';
import auraIdIamge6 from './assets/images/auraid6.png';
import auraIdIamge7 from './assets/images/auraid7.png';
import elizaImage1 from './assets/images/eliza1.png';
import elizaImage2 from './assets/images/eliza2.png';
import elizaImage3 from './assets/images/eliza3.png';
import gaugeImage1 from './assets/images/gauge1.jpg';
import lgaxImage1 from './assets/images/lgax1.jpg';
import lgaxImage2 from './assets/images/lgax2.jpg';
import shinhanImage0 from './assets/images/shinhan0.jpg';
import shinhanImage1 from './assets/images/shinhan1.jpg';
import shinhanImage2 from './assets/images/shinhan2.jpg';
import shinhanImage3 from './assets/images/shinhan3.jpg';
import quantumImage1 from './assets/images/quantum1.jpeg';
import quantumImage2 from './assets/images/quantum2.jpeg';
import quantumImage3 from './assets/images/quantum3.jpeg';
import quantumImage4 from './assets/images/quantum4.jpeg';
import daconImage1 from './assets/images/dacon1.png';
import daconImage2 from './assets/images/dacon2.png';
import daconImage3 from './assets/images/dacon3.png';
import daconImage4 from './assets/images/dacon4.png';
import daconImage5 from './assets/images/dacon5.png';
import hackathon1 from './assets/images/hackathon1.png';
import hackathon2 from './assets/images/hackathon2.png';
import hackathon3 from './assets/images/hackathon3.png';
import hackathon4 from './assets/images/hackathon4.png';
import hackathon5 from './assets/images/hackathon5.png';
import ibmImage1 from './assets/images/ibmImage1.png';
import dissertation1 from './assets/files/CSDissertation.pdf';
import dissertation2 from './assets/files/MathDissertation.pdf';
import dissertationImage1 from './assets/images/dissertation1.png';
import dissertationImage2 from './assets/images/dissertation2.png';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// ===== 스킬 아이콘 =====
import {
  SiPython, SiJavascript, SiTypescript, SiKotlin, SiDart,
  SiReact, SiFlutter,
  SiPytorch, SiTensorflow, SiKeras, SiNumpy, SiPandas,
  SiMysql, SiMongodb, SiPostgresql,
  SiGit, SiJira, SiSlack,
  SiFigma, SiOpenai, SiDocker, SiFastapi, SiOpencv, SiNextdotjs, SiAmazonaws
} from 'react-icons/si';

import { FaJava, FaServer, FaLink, FaSearch } from 'react-icons/fa';

function App() {

  // ===== 언어 상태 & 라벨 i18n =====
  const [lang, setLang] = useState('ENG'); // 'ENG' | 'KOR'
  const t = {
    ENG: {
      headerTitle: "Jae Woo Chang's Portfolio",
      work: "Work Experience",
      engagements: "Exhibitions & Events",
      projects: "Key Projects & Results",
      otherProjects: "Appendix: Other Projects",
      sideProjects: "Side Projects",
      projectIndex: "Projects by Field",
      achievements: "Achievements / Awards",
      education: "Education & Training",
      skills: "Skills",
      companyAbout: "What Company is CareSix?",
      futureOfVet: "Future of Veterinary Care",
      companyMore: "More about the company",
      officialSite: "official website",
      mainProjects: "Main Projects",
      resume: "Download Resume (PDF)",
      metaProblem: "Overview",
      metaTeam: "Team",
      metaRole: "Role",
      metaContribution: "Contribution",
      metaModel: "Tech Stack",
      metaWork: "What I Built",
      metaLessons: "Takeaways & Limitations",
      metaResults: "Key Results",
      collapseUp: "▴",
      collapseDown: "▾",
    },
    KOR: {
      headerTitle: "장재우 포트폴리오",
      work: "경력",
      engagements: "전시·행사",
      projects: "개발·프로젝트 주요 성과",
      otherProjects: "부록: 기타 프로젝트",
      sideProjects: "사이드 프로젝트",
      projectIndex: "분야별 프로젝트 참여내역",
      achievements: "수상 / 성과",
      education: "학력·교육",
      skills: "보유기술",
      companyAbout: "CareSix는 어떤 회사?",
      futureOfVet: "수의학의 미래",
      companyMore: "회사 더보기",
      officialSite: "공식 웹사이트",
      mainProjects: "주요 프로젝트",
      resume: "이력서 다운로드 (PDF)",
      metaProblem: "프로젝트 개요",
      metaTeam: "팀 구성",
      metaRole: "역할",
      metaContribution: "기여도",
      metaModel: "기술 스택",
      metaWork: "프로젝트 수행",
      metaLessons: "배운 점 · 한계",
      metaResults: "주요 성과",
      collapseUp: "▴",
      collapseDown: "▾",
    }
  };

  // 공통: 언어별 텍스트 배열에 공통 미디어 노드를 덧붙여 주는 헬퍼
  const getDetails = (engTexts, korTexts, mediaNode) => {
    const withMedia = mediaNode ? (arr) => [...arr, mediaNode] : (arr) => arr;
    return lang === 'ENG' ? withMedia(engTexts) : withMedia(korTexts);
  };

  // ===== 상단 요약 (헤더 아래) =====
  // 빈 값('')이나 빈 배열은 화면에 표시되지 않음
  const profile = {
    // 1) 한 줄 직함  2) 요약(학력 → 경력·전문 분야 → 일하는 방식)  3) 핵심 기술  4) 대표 성과(수치)
    tagline: {
      ENG: '',
      KOR: '',
    },
    summary: {
      ENG: "AI Engineer who takes LLM/VLM systems from a client's problem to deployment on the client's own servers. My Mathematics and Computer Science degree from the University of St Andrews shaped how I work: build a trustworthy evaluation first, then trace where errors come from. At Korea Deep Learning and CareSix, I have shipped document-AI, OCR, vision and generative-video systems with Docker to on-prem and air-gapped servers. I led Shinhan Vietnam Finance's PoC as PM and sole developer, and productized a single-client KIE pipeline into PPASS, an IDP platform with a modular backend I designed.",
      KOR: "고객의 문제 정의부터 고객 서버 배포까지 LLM·VLM 시스템을 책임지는 AI 엔지니어입니다. 세인트앤드루스 대학교에서 수학과 컴퓨터과학을 전공하며, 믿을 수 있는 평가 기준을 먼저 세우고 오류의 원인을 끝까지 추적하는 방식이 몸에 뱄습니다. 한국딥러닝과 케어식스에서 문서 AI·OCR·비전·생성형 영상 시스템을 Docker로 고객 서버와 폐쇄망에 배포했고, 신한베트남파이낸스 PoC를 PM 겸 단독 개발로 이끌었으며, 한 고객사용 KIE 파이프라인을 제품화해 모듈화 설계한 IDP 플랫폼 PPASS로 만들었습니다.",
    },
    skills: ["LLM / VLM", "KIE · OCR", "RAG · LangChain", "LLM Evaluation", "Docker", "On-prem Deployment", "FastAPI", "vLLM", "PyTorch", "Python"],
    highlights: {
      ENG: [
        "Led Shinhan Vietnam Finance's loan-document PoC as PM and sole developer: top 8 at Global Shinhan InnoBoost 2026, Open Innovation Reward, and Korea Deep Learning's first overseas revenue",
        "Delivered a document-extraction API to Seoyon E-Hwa's air-gapped server over 6 releases: 93.49% accuracy on the client's 3,920-cell audit ledger",
        "Productized Korea Deep Learning's single-client KIE pipeline into PPASS, an IDP platform with a modular backend I designed: classification, automatic schema definition, OCR and layout models plug in or out, and settings such as DPI change per client without code rewrites",
        "Raised handwriting OCR exact-match accuracy by 4.26 pp (85.23% → 89.49%); the weights were deployed in a Hyundai Capital project",
        "Built a real-time CCTV gauge-reading system solo for a government manufacturing project, from labeling to a production Docker API (mAP50-95 0.992 / 0.949)",
      ],
      KOR: [
        "신한베트남파이낸스 대출 서류 PoC를 PM 겸 단독 개발로 수행: 글로벌 신한 이노부스트 2026 상위 8개사, 오픈이노베이션 리워드, 한국딥러닝 첫 해외 매출",
        "서연이화 폐쇄망 서버에 문서 추출 API 6차 납품: 고객 검수 대장 3,920칸 기준 정확도 93.49%",
        "한국딥러닝의 단일 고객사용 KIE 파이프라인을 제품화해 IDP 플랫폼 PPASS로 백엔드 모듈화 설계: 분류·자동 스키마 정의·OCR·레이아웃 모델을 붙이고 떼고, DPI 같은 설정도 고객사마다 쉽게 바꿀 수 있게 구성",
        "필기체 OCR 정확도 4.26%p 향상(85.23% → 89.49%), 학습한 가중치를 현대캐피탈 프로젝트에 배포",
        "정부과제(제조혁신) CCTV 계기판 실시간 판독 시스템을 라벨링부터 Docker API 실서비스 배포까지 1인 구축 (mAP50-95 0.992 / 0.949)",
      ],
    },
    // 주요 이력 한눈에 보기 (직함 바로 아래 표시)
    glance: [
      {
        title: { ENG: 'Education & Experience', KOR: '학력 및 경력' },
        items: {
          ENG: [
            '2019.09 ~ 2024.06 : University of St Andrews, BSc Mathematics and Computer Science',
            '2024.09 ~ 2025.04 : CareSix, AI/ML Engineer',
            '2025.04 ~ 2025.10 : IBM x RedHat AI Transformation – AX Academy',
            '2025.11 ~ : Korea Deep Learning, ML Engineer (current)',
          ],
          KOR: [
            '2019.09 ~ 2024.06 : 세인트앤드루스 대학교 수학·컴퓨터과학 학사',
            '2024.09 ~ 2025.04 : 케어식스 AI/ML 엔지니어',
            '2025.04 ~ 2025.10 : IBM x RedHat AI Transformation – AX Academy',
            '2025.11 ~ : 한국딥러닝 ML 엔지니어 재직 중',
          ],
        },
      },
      {
        title: { ENG: 'Awards', KOR: '수상내역' },
        items: {
          ENG: [
            'Global Shinhan InnoBoost 2026 (Top 8 · Open Innovation Reward)',
            '2025 Quantum AI Hackathon (Excellence Prize, 1st in qualifier)',
            'Toss NEXT ML Challenge (30th of 2,206, résumé-screening pass)',
            'Boost up AI 2025 Drug Discovery (37th of 1,289, solo)',
          ],
          KOR: [
            '글로벌 신한 이노부스트 2026 (상위 8개사 · 오픈이노베이션 리워드)',
            '2025 퀀텀 AI 해커톤 (우수상, 예선 1위)',
            '토스 NEXT ML Challenge (2,206명 중 30위, 서류 면제)',
            'Boost up AI 2025 신약 개발 경진대회 (1,289명 중 37위, 개인)',
          ],
        },
      },
      {
        title: { ENG: 'Activities', KOR: '대내외 활동' },
        items: {
          ENG: [
            'Exhibited at CES 2025, J-AGRI Tokyo and FAVA 2024 (CareSix)',
            '2025 K-Digital Training AI Hackathon (Road Guardian)',
            'St Andrews Korean Society committee (Treasurer)',
          ],
          KOR: [
            'CES 2025 · J-AGRI 도쿄 · FAVA 2024 전시 참가 (케어식스)',
            '2025 K-디지털 트레이닝 AI 해커톤 (Road Guardian)',
            '세인트앤드루스 한인회 운영진 (회계)',
          ],
        },
      },
    ],
    // 이력서 PDF를 public/ 폴더에 넣고 경로 지정 (예: `${process.env.PUBLIC_URL}/resume.pdf`)
    resumeUrl: '',
  };

  // ===== 프로젝트 메타 (팀 / 역할 / 기여 / 성과 / 링크) =====
  // 빈 값('')인 항목은 화면에 표시되지 않음. links 예: { label: 'GitHub', href: 'https://...' }
  const projectMeta = {
    kdlProductPlanning: {
      problem: {
        ENG: "LG Electronics planners copied specs from review decks into master spec sheets by hand, then drew product roadmaps by hand too. One deck could cover up to 8 models, spread across slides, tables and attached Excel files.",
        KOR: "LG전자 상품기획팀은 검토의뢰서(PPT)의 스펙을 마스터 스펙시트에 손으로 옮겨 적고, 제품 로드맵도 직접 그렸습니다. 문서 하나에 모델이 최대 8개, 형식도 슬라이드·표·첨부 엑셀로 제각각이었습니다.",
      },
      team: { ENG: "Small team — teammates on frontend; all AI development by me", KOR: "소규모 팀 — 프론트엔드는 팀원, AI 개발은 전부 본인" },
      role: {
        ENG: "Sole AI developer — extraction, mapping, roadmap generation, model serving and on-prem deployment",
        KOR: "AI 개발 단독 담당 — 추출, 매핑, 로드맵 생성, 모델 서빙, 폐쇄망 배포",
      },
      contribution: {
        ENG: "100% of the AI development: LLM/VLM extraction and mapping pipeline, roadmap generation, FP8 evaluation and model serving, offline installer, demo-server operations and 30+ client requirements",
        KOR: "AI 개발 100%: LLM·VLM 추출·매핑 파이프라인, 로드맵 생성, FP8 평가·모델 서빙, 폐쇄망 설치 번들, 데모 서버 운영, 고객 요구사항 30여 건 대응",
      },
      model: {
        ENG: "9B VLM on vLLM (FP8) · FastAPI · React/TypeScript · direct OOXML patching · Docker Compose",
        KOR: "9B VLM (vLLM, FP8) · FastAPI · React/TypeScript · OOXML 직접 패치 · Docker Compose",
      },
      results: {
        ENG: "8-model document: 1,225 of 1,232 cells auto-filled · FP8: 40% less memory, 19% faster, no accuracy loss (85.2% → 85.5%)",
        KOR: "8개 모델 문서 1,232칸 중 1,225칸 자동 채움 · FP8 전환으로 메모리 40% 절감, 응답 19% 단축, 정확도 유지(85.2% → 85.5%)",
      },
      links: [],
    },
    kdlDocExtraction: {
      problem: {
        ENG: "Seoyon E-Hwa had 20 years of quality and process know-how scattered across thousands of Excel, PPT and PDF files that nobody could search. They wanted it turned into database-ready data on an offline server, with accuracy proven against their own audit ledger.",
        KOR: "서연이화의 20년 치 품질·공정 노하우가 엑셀·PPT·PDF 수천 건에 흩어져 있어 검색이 안 됐습니다. 이를 폐쇄망 서버에서 DB에 넣을 수 있는 데이터로 바꾸고, 고객 검수 대장 기준으로 정확도를 증명해야 했습니다.",
      },
      team: { ENG: "Solo", KOR: "단독" },
      role: {
        ENG: "Extraction pipeline design and implementation, accuracy verification, deployment packaging",
        KOR: "추출 파이프라인 설계·구현, 정확도 검수 체계, 배포 패키징",
      },
      contribution: {
        ENG: "100% — sole developer of all 7 extraction types, the accuracy-verification harness, the review UI matching and on-prem releases",
        KOR: "100% — 문서 7종 추출, 정확도 검수 체계, 검수 UI 위치 매칭, 폐쇄망 납품까지 단독 수행",
      },
      model: {
        ENG: "Python · FastAPI · MinerU-based document parser + vision LLM on vLLM · LibreOffice · Docker · Next.js (review UI)",
        KOR: "Python · FastAPI · MinerU 기반 문서 파서 + 비전 LLM (vLLM) · LibreOffice · Docker · Next.js (검수 UI)",
      },
      results: {
        ENG: "Quality-report accuracy 90.84% → 93.49% on the client's 3,920-cell audit ledger · process-design mismatches 389 → 3 · 6 on-prem releases",
        KOR: "품질 대책서 정확도 90.84% → 93.49% (고객 검수 대장 3,920칸) · 공정설계 검수 불일치 389 → 3건 · 6차 납품",
      },
      lessons: {
        ENG: "Most remaining errors (~210 cells) are LLM judgment calls on how much text to copy — knowing where rules must stop mattered as much as raising accuracy",
        KOR: "남은 오답(약 210칸) 대부분은 '어느 칸 글을 얼마나 옮길지'라는 LLM 판단 문제 — 정확도를 올리는 것만큼 규칙으로 밀면 안 되는 지점을 아는 게 중요했음",
      },
      links: [],
    },
    kdlGaugeReading: {
      problem: {
        ENG: "Someone had to walk up to each analog gauge to read it, so nobody could watch them around the clock. The goal was to read the gauges automatically from the CCTV cameras already on site.",
        KOR: "현장의 아날로그 계기판은 사람이 직접 가서 봐야 해서 24시간 지켜볼 수 없었습니다. 이미 달려 있는 CCTV로 계기판 값을 자동으로 읽는 게 목표였습니다.",
      },
      team: {
        ENG: "Solo",
        KOR: "1인",
      },
      role: {
        ENG: "Data collection and labeling, model design and training, deployment",
        KOR: "데이터 구축(라벨링 포함), 모델 설계·학습, 배포",
      },
      contribution: {
        ENG: "100% — owned everything from data collection and labeling to model training and the Docker API deployment",
        KOR: "100% — 데이터 수집·라벨링부터 모델 학습, Docker 기반 API 배포까지 전 과정 단독 수행",
      },
      model: {
        ENG: "Two-stage: YOLO26x detection (gauge, 960 px) → YOLO26x-OBB (needle, 128 px) · Python · PyTorch · Ultralytics · X-AnyLabeling · Docker Compose on NVIDIA GPU",
        KOR: "2단계: YOLO26x Detection (계기판, 960px) → YOLO26x-OBB (바늘, 128px) · Python · PyTorch · Ultralytics · X-AnyLabeling · Docker Compose (NVIDIA GPU)",
      },
      results: {
        ENG: "Gauge detection mAP50-95 0.992 · needle detection mAP50-95 0.949 (OBB, vs 0.930 with standard boxes) · 10,834 gauge + 9,594 needle images labeled solo · deployed to production",
        KOR: "계기판 검출 mAP50-95 0.992 · 바늘 검출 mAP50-95 0.949 (OBB, 일반 박스 0.930 대비) · 계기판 10,834장 + 바늘 9,594장 1인 구축 · 실서비스 배포",
      },
      lessons: {
        ENG: "Splitting a tiny-object problem into two stages let each model focus on one job, and choosing a label format that carries what the reading needs (the needle angle, via OBB) helped both accuracy and post-processing",
        KOR: "작은 객체를 2단계로 나눠 각 모델이 자기 문제에만 집중하게 하고, 판독에 필요한 정보(각도)를 담는 라벨 표현(OBB)을 고르는 것이 성능과 후처리 모두에 유리했음",
      },
      links: [],
    },
    kdlOcrResearch: {
      problem: {
        ENG: "The OCR model in production read only 68.63% of real handwritten form fields correctly and often mixed up look-alike characters such as 0/ㅇ/O. There was also no reliable handwriting test set to measure progress against.",
        KOR: "운영 중인 OCR 모델은 실제 손글씨 서식을 68.63%만 정확히 읽었고, 0/ㅇ/O처럼 비슷한 글자를 자주 헷갈렸습니다. 개선 정도를 잴 만한 실제 손글씨 평가셋도 없었습니다.",
      },
      team: { ENG: "2 people", KOR: "2명" },
      role: {
        ENG: "Recognizer research — data, training, evaluation and architecture experiments",
        KOR: "Recognizer 연구 — 데이터, 학습, 평가, 아키텍처 실험",
      },
      contribution: {
        ENG: "85% of the recognizer research",
        KOR: "Recognizer 연구 기여도 85%",
      },
      model: {
        ENG: "Two-stage OCR (text detector → recognizer) · recognizers compared: PARSeq, PP-OCRv5, SVTRv2 · PyTorch · PaddleOCR · MX-Font and Gemini image generation (synthetic data)",
        KOR: "2-stage OCR (텍스트 Detector → Recognizer) · Recognizer 비교: PARSeq, PP-OCRv5, SVTRv2 · PyTorch · PaddleOCR · MX-Font, Gemini 이미지 생성 (합성 데이터)",
      },
      results: {
        ENG: "Exact match 85.23% → 89.49% (+4.26 pp) and CER 7.52% → 5.09% on 158,898 test samples · handwriting +5.49 pp · handwriting goldenset 68.63% → 77.33% · trained the weights deployed to a Hyundai Capital project",
        KOR: "테스트 158,898개 기준 정확도 85.23% → 89.49% (+4.26%p), CER 7.52% → 5.09% · 필기체 +5.49%p · 필기체 골든셋 68.63% → 77.33% · 현대캐피탈 프로젝트 배포 가중치 학습",
      },
      lessons: {
        ENG: "Ablation showed the synthetic handwriting data added only ~0.2 pp — the gain came from data curation and the training recipe, so further generation was stopped before scaling it up",
        KOR: "ablation 결과 합성 필기체 데이터의 기여는 약 0.2%p — 향상은 데이터 큐레이션과 학습 레시피에서 나왔음을 확인하고, 합성 데이터 추가 생성을 확대 전에 중단",
      },
      links: [],
    },
    kdlDisasterVideo: {
      problem: {
        ENG: "Wildfire and flood detectors need footage of the moment a disaster starts, and real CCTV almost never captures it. The client wanted a large batch of realistic videos made from their own CCTV stills, within 9 days.",
        KOR: "산불·침수 탐지 모델을 학습하려면 재난이 막 시작되는 장면이 필요한데, 실제 CCTV에는 거의 남아 있지 않습니다. 고객은 자기 CCTV 사진으로 자연스러운 재난 영상을 9일 안에 대량으로 만들어 달라고 했습니다.",
      },
      team: { ENG: "Solo", KOR: "단독" },
      role: {
        ENG: "Pipeline design, implementation and operation; prompt and quality criteria; client feedback",
        KOR: "파이프라인 설계·구현·운영, 프롬프트·품질 기준 설계, 고객 피드백 대응",
      },
      contribution: {
        ENG: "100% — sole developer of the generation pipeline, automated QA, multi-GPU operation and authoring tool",
        KOR: "100% — 생성 파이프라인, 자동 검수, 다중 GPU 운영, 저작툴까지 단독 수행",
      },
      model: {
        ENG: "FLUX.2-dev (image edit) → Wan2.2-I2V-A14B (image-to-video, 720p) → RIFE 4.7 (interpolation) · 8B VLM + OpenCV (QA) · FastAPI",
        KOR: "FLUX.2-dev (이미지 편집) → Wan2.2-I2V-A14B (이미지→영상, 720p) → RIFE 4.7 (프레임 보간) · 8B VLM + OpenCV (검수) · FastAPI",
      },
      results: {
        ENG: "In 9 days: ~190 wildfire and ~150 flood videos passed QA · 572 of 1,768 staged videos auto-selected · ~30 attempts/hour on 4 GPUs",
        KOR: "9일간 산불 190여 건·침수 150여 건 검수 통과 · 단계별 영상 1,768건 중 572건 자동 선별 · GPU 4장 기준 시간당 약 30건",
      },
      lessons: {
        ENG: "Generative models follow a described state well but not the speed of change — putting the start state in the image and the change in the prompt was the key",
        KOR: "생성 모델은 '상태'는 잘 따르지만 '변화 속도'는 잘 못 따름 — 시작 상태는 이미지로, 변화는 문장으로 분리한 설계가 핵심",
      },
      links: [],
    },
    sense1Vet: {
      problem: {
        ENG: "The collar's heart-rate reading broke down whenever the dog shivered or moved, and at home there is no ECG to check it against.",
        KOR: "강아지가 떨거나 움직이면 목걸이의 심박 측정값이 크게 흔들렸고, 집에서는 비교할 ECG도 없었습니다.",
      },
      team: { ENG: 'Solo on the algorithm, working with the hardware and production teams', KOR: '알고리즘 단독, 하드웨어·생산팀과 협업' },
      role: { ENG: 'AI/ML Engineer — sole developer of the heart-rate algorithm', KOR: 'AI/ML 엔지니어 — 심박 알고리즘 단독 개발' },
      contribution: {
        ENG: '100% — owned the full pipeline end to end: BCG signal processing, model design and training, and validation',
        KOR: '100% — BCG 신호처리, 모델 설계·학습, 검증까지 전 과정 단독 수행',
      },
      model: {
        ENG: 'LSTM (TensorFlow / Keras) on FFT + wavelet-denoised BCG signals, with unsupervised IJK peak detection',
        KOR: 'FFT·웨이블릿으로 노이즈 제거한 BCG 신호 기반 LSTM (TensorFlow / Keras) + 비지도 IJK 피크 검출',
      },
      results: {
        ENG: '96% accuracy — 96% of heart-rate readings judged correct, where trembling and motion previously made readings unreliable',
        KOR: '정확도 96% — 떨림·움직임으로 불안정하던 심박 측정을, 측정값의 96%가 정답으로 판정되는 수준까지 개선',
      },
      links: [],
    },
    lawIntelligence: {
      problem: {
        ENG: "General chatbots answer Korean legal questions without pointing to real laws or court cases, so there is no way to check where an answer came from.",
        KOR: "일반 챗봇은 실제 법령·판례 없이 법률 질문에 답해서, 답의 근거를 확인할 수 없었습니다.",
      },
      team: { ENG: '5 members', KOR: '5명' },
      role: { ENG: 'Team Lead', KOR: '팀장' },
      contribution: {
        ENG: 'Led the team and built the core AI: developed the RAG system and designed the LangChain pipeline',
        KOR: '팀을 이끌며 핵심 AI를 직접 구현: RAG 개발 및 LangChain 파이프라인 설계·구성',
      },
      model: {
        ENG: 'Llama-3-8B · RAG (bge-m3 embeddings, FAISS / ChromaDB) · LangChain agents · FastAPI · AWS EC2 · Docker',
        KOR: 'Llama-3-8B · RAG (bge-m3 임베딩, FAISS·ChromaDB) · LangChain 에이전트 · FastAPI · AWS EC2 · Docker',
      },
      results: {
        ENG: 'Delivered the working system and presented it at the final presentation that concluded the IBM x RedHat program',
        KOR: '동작하는 시스템을 완성해 IBM x RedHat 과정 마무리 최종 발표에서 시연·발표',
      },
      lessons: {
        ENG: 'Retrieval quality was evaluated only qualitatively. Next step: a labeled legal Q&A set to measure Recall@k and answer accuracy quantitatively',
        KOR: '검색 정확도를 정성적으로만 평가한 점이 한계. 다음 단계로 정답이 라벨링된 법률 Q&A 셋을 만들어 Recall@k·답변 정확도를 정량 측정',
      },
      links: [],
    },
    eliza: {
      team: { ENG: '', KOR: '' },
      role: { ENG: '', KOR: '' },
      contribution: { ENG: '', KOR: '' },
      results: { ENG: '', KOR: '' },
      links: [],
    },
    royalGame: {
      team: { ENG: '', KOR: '' },
      role: { ENG: '', KOR: '' },
      contribution: { ENG: '', KOR: '' },
      results: { ENG: '', KOR: '' },
      links: [],
    },
    sudokuGame: {
      team: { ENG: '', KOR: '' },
      role: { ENG: '', KOR: '' },
      contribution: { ENG: '', KOR: '' },
      results: { ENG: '', KOR: '' },
      links: [],
    },
    auraid: {
      team: { ENG: '', KOR: '' },
      role: { ENG: '', KOR: '' },
      contribution: { ENG: '', KOR: '' },
      results: { ENG: '', KOR: '' },
      links: [],
    },
    shinhanVietnam: {
      problem: {
        ENG: "Loan underwriters at Shinhan Vietnam Finance compared each applicant's ID card and bank statement by eye and typed the numbers in by hand. It was slow, and mistakes slipped through. The PoC goal: upload the documents once and get a first screening result with reasons, while the underwriter still makes the final call.",
        KOR: "신한베트남파이낸스 대출 심사역은 신청자의 신분증과 은행거래명세서를 눈으로 비교하고 숫자를 손으로 옮겨 적었습니다. 느리고 실수도 잦았습니다. 서류를 한 번 올리면 이유와 함께 1차 심사 결과가 나오고, 최종 판단은 심사역이 하도록 만드는 게 PoC 목표였습니다.",
      },
      team: {
        ENG: "Korea Deep Learning — I ran the PoC as PM and sole developer, on top of the in-house IDP platform (PPASS)",
        KOR: "한국딥러닝 — 사내 IDP 플랫폼(PPASS) 위에서 PM 겸 단독 개발로 수행",
      },
      role: {
        ENG: "PM and sole developer — client communication, requirements and design, classification and extraction, all validation logic, result UI, deployment and client documents",
        KOR: "PM 겸 단독 개발 — 고객사 소통, 요구사항 정의·설계, 분류·추출, 검수 자동화 로직 전부, 결과 화면, 배포, 고객 제출 문서",
      },
      contribution: {
        ENG: "100% — from client communication and design to all Vietnam PoC code (backend 25 commits / +3,556 lines, frontend 43 commits / +2,890 lines) and every client deliverable",
        KOR: "100% — 고객사 소통·설계부터 베트남 PoC 코드 전부(백엔드 25커밋·+3,556줄, 프론트엔드 43커밋·+2,890줄)와 고객 제출 문서 전부",
      },
      model: {
        ENG: "27B VLM on vLLM · FastAPI · Next.js 16 / React 19 / TypeScript · MongoDB · SeaweedFS · Docker Compose · GitHub Actions (self-hosted)",
        KOR: "27B VLM (vLLM) · FastAPI · Next.js 16 / React 19 / TypeScript · MongoDB · SeaweedFS · Docker Compose · GitHub Actions (self-hosted)",
      },
      results: {
        ENG: "Top 8 of the participating companies · Open Innovation Reward (VND 200,000,000) · the PoC became an actual business deal, Korea Deep Learning's first overseas revenue · all 5 SoW scenarios covered by 7 automated checks · tested by the client's underwriters in UAT",
        KOR: "참가 기업 중 상위 8개사 · 오픈이노베이션 리워드(VND 200,000,000) · PoC가 실제 사업으로 이어져 한국딥러닝 첫 해외 매출 · SoW 시나리오 5개를 자동 검증 7종으로 구현 · 고객 심사역 UAT 진행",
      },
      lessons: {
        ENG: "'The VLM only reads; deterministic code decides' — every prompt rule got a code backstop, because prompts are a weak guarantee. Limits stated honestly: image-forgery forensics was scoped out and replaced with logical-consistency checks, and an automated accuracy report against the 92% target was not built (UAT was evaluated manually)",
        KOR: "'VLM은 읽기만, 판단은 결정론적 코드가' — 프롬프트는 약한 보장이라 모든 프롬프트 규칙에 코드 백스톱을 둠. 한계: 이미지 위변조 포렌식은 범위에서 제외하고 논리 일관성 검증으로 대체했고, 92% 목표 대비 자동 정확도 리포트는 만들지 못함(UAT는 수동 평가)",
      },
      links: [],
    },
    quantumAIHackathon: {
      team: { ENG: '4 members', KOR: '4명' },
      role: { ENG: '', KOR: '' },
      contribution: { ENG: '', KOR: '' },
      results: {
        ENG: '1st in the preliminaries; Excellence Prize (₩750,000) in the finals — the 3rd-highest award, given to 2 teams',
        KOR: '예선 1위, 본선 우수상(상금 75만 원) — 대상·최우수상 다음 등급, 2팀 수상',
      },
      links: [],
    },
    kdigitalHackathon: {
      problem: {
        ENG: "To report reckless driving, you had to dig up the dashcam clip yourself and type in the plate number, place and violation.",
        KOR: "난폭운전을 신고하려면 블랙박스 영상을 직접 찾아서 차량번호·장소·위반 내용을 일일이 입력해야 했습니다.",
      },
      team: { ENG: '6 members (Team Road Guardian)', KOR: '6명 (팀 Road Guardian)' },
      role: { ENG: 'Object-detection model & data', KOR: '객체 인식 모델·데이터 담당' },
      contribution: {
        ENG: 'Trained the customized YOLOv8 model and built the data preprocessing for the team\'s reckless-driving dataset',
        KOR: '커스텀 YOLOv8 모델 학습 및 팀 수집 난폭운전 데이터 전처리 담당',
      },
      model: {
        ENG: 'Customized YOLOv8 (vehicle detection) + customized ViT (driving-behavior classification) + OCR (license plates) + LLM-based report summarization',
        KOR: '커스텀 YOLOv8(차량 객체 인식) + 커스텀 ViT(난폭운전 행동 분류) + OCR(번호판 인식) + LLM 기반 신고서 자동 요약',
      },
      results: {
        ENG: 'Finalist; raised object-detection mAP@0.5 to 93% on the team\'s own reckless-driving dataset',
        KOR: '본선 진출, 팀이 직접 수집한 난폭운전 데이터에서 객체 인식 mAP@0.5 93% 달성',
      },
      links: [],
    },
    daconCompetitions: {
      team: { ENG: 'Toss: team of 4', KOR: '토스: 4인 팀' },
      role: {
        ENG: 'Toss: owned the full pipeline — feature preprocessing, model training and inference',
        KOR: '토스: 피처 전처리 → 모델 학습 → 추론 전 과정 담당',
      },
      contribution: { ENG: '', KOR: '' },
      model: {
        ENG: 'Toss CTR: ensemble of three gradient-boosting models — XGBoost, LightGBM, CatBoost',
        KOR: '토스 CTR: 부스팅 모델 3종(XGBoost, LightGBM, CatBoost) 앙상블',
      },
      results: {
        ENG: 'Toss NEXT ML Challenge: finished 30th of 2,206 participants, earning a résumé-screening pass for Toss hiring',
        KOR: '토스 NEXT ML Challenge 참가자 2,206명 중 최종 30위 — 토스 채용 서류전형 면제',
      },
      links: [],
    },
  };

  // projectMeta[key] → Entry props (빈 값 제외)
  // 순서: 개요 → (프로젝트 수행 bullet) → 주요 성과 → 팀·역할·기여도 → 기술 스택 → 배운 점
  const getMeta = (key) => {
    const m = projectMeta[key];
    if (!m) return {};
    const row = (label, v) => ({ label, value: v?.[lang] });
    const stack = m.model?.[lang];
    const meta = [
      row(t[lang].metaResults, m.results),
      row(t[lang].metaTeam, m.team),
      row(t[lang].metaRole, m.role),
      row(t[lang].metaContribution, m.contribution),
      stack && { label: t[lang].metaModel, value: stack, chips: stack.split(' · ') },
      row(t[lang].metaLessons, m.lessons),
    ].filter((r) => r && r.value);
    return {
      overview: [row(t[lang].metaProblem, m.problem)].filter((r) => r.value),
      meta,
      links: m.links,
      labels: { work: t[lang].metaWork },
    };
  };

  const [expandedSections, setExpandedSections] = useState({
    // 핵심(경력·주요 프로젝트)은 펼쳐 두고, 부가 정보(기타 프로젝트·전시·사진)는 접어 둠
    experience: {expanded: true, entries: {koreaDeepLearning: true, aiAlgorithm: true, appdeveloper: true, mathematician: true}},
    education: {expanded: true, entries: {}},
    skills: {expanded: true},
    engagements: {expanded: true, entries: {}},
    projects: {expanded: true, entries: {
      shinhanVietnam: true, kdlProductPlanning: true, kdlDocExtraction: true, kdlDisasterVideo: true,
      kdlOcrResearch: true, kdlGaugeReading: true, sense1Vet: true, lawIntelligence: true,
    }},
    achievements: {expanded: true, entries: {shinhanInnoboost: true}},
  });

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        expanded: !prevState[section].expanded,
      },
    }));
  };

  const toggleEntry = (section, entry) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        entries: {
          ...prevState[section].entries,
          [entry]: !prevState[section].entries[entry],
        },
      },
    }));
  };

  // ====== Work ======
  const work_kdl_title = lang === 'ENG' ? "ML Engineer, Korea Deep Learning" : "ML 엔지니어, 한국딥러닝";
  const work_kdl_details_ENG = [
    "Work directly with enterprise clients from requirements to delivery: build LLM/VLM document-automation systems and ship them with Docker to offline, on-prem GPU servers in iterative releases.",
    "Productized a KIE pipeline built for one client into PPASS, the company's IDP platform, and designed its modular backend: document-template classification, automatic extraction-schema definition, OCR and layout models are separate modules that plug in or out, and settings such as rendering DPI are easy to change per client.",
    "Product-planning document automation for LG Electronics: PPT → master spec sheet → product roadmap, with human-in-the-loop review.",
    "Quality and process document extraction API for Seoyon E-Hwa (automotive parts): 7 document types, 93.49% accuracy on the client's audit ledger.",
    "Generative video augmentation (wildfire, flood) from real CCTV stills to train disaster-detection models.",
    "R&D on the recognizer of the company's two-stage OCR (detector → recognizer) for Korean handwriting: +4.26 pp exact match, weights deployed to a Hyundai Capital project.",
    "Shinhan Vietnam Finance PoC (Global Shinhan InnoBoost 2026): as PM and sole developer, led client communication and design and built the loan-document classification, extraction and 7-check validation system end to end; it placed in the top 8, won the Open Innovation Reward and led to an actual business deal — the company's first overseas revenue.",
    "Government-funded manufacturing innovation project — real-time analog gauge reading from CCTV with a two-stage YOLO26 pipeline (detection → OBB): gauge mAP50-95 0.992, needle 0.949, deployed as a Docker API.",
  ];
  const work_kdl_details_KOR = [
    "기업 고객과 직접 소통하며 요구사항 정의부터 납품까지 수행: LLM·VLM 문서 자동화 시스템을 개발하고 Docker로 폐쇄망 GPU 서버에 차수별 납품.",
    "한 고객사용 KIE 파이프라인을 제품화해 사내 IDP 플랫폼 PPASS로 만들고 백엔드를 모듈화 설계: 문서 틀 분류·추출 스키마 자동 정의·OCR·레이아웃 모델을 독립 모듈로 나눠 붙이고 뗄 수 있게 하고, 렌더링 DPI 같은 설정도 고객사마다 쉽게 수정 가능.",
    "LG전자 상품기획 문서 자동화: PPT → 마스터 스펙시트 → 제품 로드맵, 사람 검수(HITL) 포함.",
    "서연이화(자동차 부품) 품질·공정 문서 추출 API: 문서 7종, 고객 검수 대장 기준 정확도 93.49%.",
    "실제 CCTV 사진 기반 재난(산불·침수) 영상 생성 증강으로 재난 탐지 모델 학습 데이터 구축.",
    "사내 2-stage OCR(Detector → Recognizer)의 한국어 필기체 Recognizer 연구: 정확도 +4.26%p, 현대캐피탈 프로젝트에 가중치 배포.",
    "신한베트남파이낸스 PoC(글로벌 신한 이노부스트 2026): PM 겸 단독 개발로 고객사 소통·설계를 맡고 대출 서류 분류·추출·자동 검증 7종 시스템을 처음부터 끝까지 개발 — 상위 8개사 선정, 오픈이노베이션 리워드 수상, 실제 사업으로 이어져 회사의 첫 해외 매출 달성.",
    "정부과제(제조혁신) — CCTV 아날로그 계기판 실시간 판독(2단계 YOLO26 Detection → OBB): 계기판 mAP50-95 0.992, 바늘 0.949, Docker API로 실서비스 배포.",
  ];

  // ===== Projects – Korea Deep Learning =====
  const kdl_planning_ENG = [
    "Automated LG Electronics' manual flow — product-planning review decks (PPT) → master spec sheet (Excel) → product roadmap — with LLM/VLM extraction, rule-based mapping and a human-in-the-loop review console used by the client's planners.",
    "Merged values from several sources by priority (deck body > in-deck spec table > embedded Excel), flagging conflicts with per-source evidence; fixed multi-model documents so 1,225 of 1,232 cells fill automatically.",
    "Wrote into large Excel files by patching sheet XML directly, keeping original formatting and avoiding the bloat openpyxl caused (a 1.5MB file growing past 1GB).",
    "Generated product roadmaps by fixing lanes from PPT coordinates and reading only quarters with a VLM, with rule-based date normalization and carry-over of schedules from the previous roadmap.",
    "Evaluated FP8 vs bf16 on a 28-document set with a re-written, unbiased answer key: same accuracy, 40% less memory, 19% faster.",
    "Shipped an offline installer (install / update / rollback / backup) for an air-gapped server without sudo, ran the demo server, and delivered 30+ client requirements tracked by ID and priority — including a same-day IP-restriction security request.",
  ];
  const kdl_planning_KOR = [
    "LG전자 상품기획팀이 수작업으로 하던 '검토의뢰서(PPT) → 마스터 스펙시트(Excel) → 제품 로드맵' 과정을 LLM·VLM 추출 + 규칙 매핑 + 사람 검수(HITL) 콘솔로 자동화, 고객 실무자가 실제 사용.",
    "여러 원천(본문 > 본문 스펙표 > 첨부 엑셀)을 우선순위로 병합하고 충돌은 근거와 함께 검수로 올림, 다중 모델 문서 1,232칸 중 1,225칸 자동 채움.",
    "시트 XML을 직접 패치해 대형 엑셀의 서식을 유지하고, openpyxl 저장 시 1.5MB 파일이 1GB 넘게 부풀던 문제 제거.",
    "로드맵 생성: 레인은 PPT 좌표로 확정하고 분기만 VLM으로 판독, 날짜는 규칙으로 정규화하고 이전 로드맵의 일정·상태를 이어받음.",
    "편향을 제거한 정답셋(28건)으로 FP8 vs bf16 평가: 정확도 동일, 메모리 40% 절감, 응답 19% 단축.",
    "sudo 없는 폐쇄망 서버용 설치 번들(install/update/rollback/backup) 제작, 데모 서버 운영, 고객 요구사항 30여 건을 ID·우선순위로 관리해 반영(IP 제한 보안 요청 당일 처리).",
  ];

  const lgax_media = (
    <div key="lgax-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={lgaxImage1} alt="Master spec sheet screen in the deployed LG Electronics service (client values blurred)" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={lgaxImage2} alt="Generated product roadmap screen (roadmap content blurred)" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );

  const kdl_extract_ENG = [
    "Built an extraction API that turns 20 years of automotive parts maker Seoyon E-Hwa's quality and process documents (thousands of Excel/PPT/PDF files in Korean, English and Chinese) into DB-ready data across 7 document types; delivered to the client's offline GPU server.",
    "Deterministic first: 5 Excel types are parsed from cell borders, merges and styles without an LLM, so results are identical every run; LLMs only for free-form reports and images.",
    "Built a grader that exactly reproduces the client's audit-ledger accuracy, plus an LLM/parser response cache to separate code effects from model noise; no change shipped if any correct cell regressed.",
    "Recovered attachment names by parsing OLE binaries and reading text inside icon images: 244 → 1,182.",
    "Accepted OCR from small images only when two models agree (≥50% trigram overlap), cleanly separating hallucinated tables (0–0.16) from real ones (0.57–1.0).",
    "Replaced model-based source highlighting (15–41% accurate) in the review UI with rule-based word-coordinate matching: 97.1% of table cells matched.",
  ];
  const kdl_extract_KOR = [
    "자동차 부품 제조사 서연이화의 20년 치 품질·공정 문서(엑셀·PPT·PDF 수천 건, 국·영·중 혼재)를 DB 적재용 데이터로 뽑는 추출 API 개발, 문서 7종 지원, 고객 폐쇄망 GPU 서버에 납품.",
    "결정론 우선: 엑셀 계열 5종은 LLM 없이 셀 테두리·병합·서식으로 구조를 복원해 실행마다 같은 결과, LLM은 자유 양식 대책서와 그림에만 사용.",
    "고객 검수 대장 정확도를 그대로 재현하는 채점기와 LLM·파서 응답 캐시로 '코드 효과'와 '모델 잡음'을 분리, 정답 칸이 하나라도 깨지면 반영하지 않음.",
    "OLE 바이너리를 직접 해석하고 아이콘 그림 속 글자를 판독해 첨부 파일명 244 → 1,182개 확보.",
    "작은 그림 OCR은 두 모델의 판독 일치도(3글자 묶음 50% 이상)로만 채택해 지어낸 표(0~0.16)와 진짜 표(0.57~1.0)를 분리.",
    "검수 UI의 원문 위치 표시를 모델 질의(15~41%)에서 낱말 좌표 규칙 매칭으로 바꿔 표 칸 97.1% 매칭.",
  ];

  const kdl_ocr_ENG = [
    "Researched the recognizer stage of the company's two-stage OCR (text detector → recognizer) for Korean handwriting, switching and comparing architectures: PARSeq, PP-OCRv5 and SVTRv2 (trained on 40.86M filtered images).",
    "Built an auto-labeling pipeline from client ROI boxes and ground truth (box-center-in-ROI, then exact → space-free substring matching): about 80k handwriting labels without manual review.",
    "Built a 15,808-sample handwriting goldenset from real client forms with every label re-checked by hand: samples without valid ground truth (printed form labels) excluded, fully struck-out text excluded, and each sample tagged by difficulty (boundary: ambiguous like 이/01/OI; hard: genuinely bad handwriting), noise, strike-through and text type/length so errors can be sliced.",
    "Analyzed errors by confusion pair (0/ㅇ/O, ㄷ/ㄹ, l/ㅣ/1) and jamo level; found and fixed a metric bug that undercounted final-consonant accuracy.",
    "Generated synthetic handwriting — MX-Font with 38 styles and ascender/descender-aware word composition, then Gemini image generation for names, addresses and hard cases — and measured its real effect with ablations and gain/drop case analysis.",
    "Fine-tuned PARSeq on a curated 11.6M-sample mix (6.15M handwriting / 5.45M printed): best on 13 of 14 test datasets, and trained the weights deployed to a Hyundai Capital project.",
    "Built a handwriting/printed classifier on the frozen PARSeq encoder with attention pooling (85% accuracy).",
  ];
  const kdl_ocr_KOR = [
    "사내 2-stage OCR(텍스트 Detector → Recognizer) 중 Recognizer의 한국어 필기체 성능 개선 연구, 아키텍처를 바꿔 가며 비교: PARSeq, PP-OCRv5, SVTRv2(필터링한 4,086만 장 학습).",
    "고객 ROI 박스와 정답(GT)으로 오토라벨링 파이프라인 구축(bbox 중심이 ROI 안 → 정확 일치 → 띄어쓰기 제거 부분 일치): 검수 없이 필기체 라벨 약 8만 장.",
    "실제 고객 서식에서 필기체 골든셋 15,808개 구축, 모든 라벨을 직접 재검수: 정답이 없는 샘플(인쇄된 서식 문구)과 전체를 두 줄로 지운 텍스트는 제외, 난이도(boundary: 이/01/OI처럼 애매한 글자, hard: 실제 악필)·노이즈·취소선·문자 유형·길이로 태깅해 오류를 구간별로 분석 가능하게 설계.",
    "헷갈리는 글자 쌍(0/ㅇ/O, ㄷ/ㄹ, l/ㅣ/1)과 초성·중성·종성 단위로 오류 분석, 종성 정확도를 낮게 계산하던 지표 버그 발견·수정.",
    "합성 필기체 생성: MX-Font(필기체 38종, ascender/descender 정렬 단어 합성) → Gemini 이미지 생성(이름·주소·어려운 케이스), ablation과 gain/drop 케이스 분석으로 실제 효과 검증.",
    "필기체 615만 / 인쇄체 545만, 총 1,160만 장으로 데이터를 구성해 PARSeq fine-tuning: 테스트 14종 중 13종 1위, 현대캐피탈 프로젝트 배포 가중치 학습.",
    "PARSeq 인코더를 고정하고 attention pooling을 붙인 필기체/인쇄체 분류기 개발(정확도 85%).",
  ];

  const kdl_gauge_ENG = [
    "Built a real-time two-stage pipeline that reads analog gauges from factory CCTV (1920×1080): YOLO26x detects the gauge (960 px), the gauge is cropped to about 60×60 px, and YOLO26x-OBB detects the needle's position and rotation (128 px).",
    "Instead of searching the full FHD frame for a thin needle, cropped the gauge first and found the needle on a small input, securing both accuracy and inference speed.",
    "Designed and ran a semi-automatic labeling loop — a small hand-labeled set in X-AnyLabeling → first YOLO model → auto-labeling and review → final training — to build 10,834 gauge and 9,594 needle images alone.",
    "Mixed about 7,000 on-site CCTV frames with a public gauge dataset for variety in gauge types, and built the needle set from Stage 1 crops so training matched the real inference input.",
    "Gauge detection reached mAP50-95 0.992 (precision and recall 0.987), trained with cosine LR, AMP, early stopping and resumable checkpoints.",
    "Compared standard boxes and oriented boxes (OBB) for the needle under identical settings with ±180° rotation augmentation: OBB raised mAP50-95 from 0.930 to 0.949 and outputs the needle angle directly, so it was adopted.",
    "Deployed the API server with Docker Compose on an allocated NVIDIA GPU, with a /health check, restart: unless-stopped for automatic recovery, and ports and container names in env files for per-environment deployment.",
  ];
  const kdl_gauge_KOR = [
    "제조 현장 CCTV(1920×1080)에서 아날로그 계기판을 실시간으로 판독하는 2단계 파이프라인 구축: YOLO26x로 계기판 검출(960px) → 약 60×60px로 잘라 YOLO26x-OBB로 바늘의 위치·회전 방향 검출(128px).",
    "FHD 프레임 전체에서 가는 바늘을 바로 찾는 대신, 계기판만 잘라 작은 입력에서 바늘을 찾게 해 정확도와 추론 속도를 함께 확보.",
    "반자동 라벨링 루프 설계·운영: X-AnyLabeling 소량 수동 라벨 → 1차 YOLO 학습 → 오토라벨링·검수 → 최종 학습으로 계기판 10,834장·바늘 9,594장 데이터셋을 1인 구축.",
    "현장 CCTV 프레임 약 7,000장에 공개 계기판 데이터셋을 섞어 계기판 형태의 다양성을 확보하고, 바늘 데이터는 Stage 1 결과로 잘라낸 이미지로 만들어 실제 추론과 같은 입력 분포로 학습.",
    "계기판 검출 mAP50-95 0.992 (Precision·Recall 0.987), cosine LR·AMP·early stopping·체크포인트 재개 학습 적용.",
    "바늘 검출을 같은 조건에서 일반 박스와 회전 박스(OBB)로 비교(회전 ±180° 증강): OBB가 mAP50-95 0.930 → 0.949로 높고 판독에 쓸 각도를 직접 출력해 최종 채택.",
    "Docker Compose로 GPU를 할당한 API 서버 배포: /health 헬스체크, restart: unless-stopped 자동 복구, 포트·컨테이너명 env 분리로 환경별 배포.",
  ];

  const gauge_media = (
    <div key="gauge-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={gaugeImage1} alt="CCTV frame with detected gauges and needle angles" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );

  const kdl_video_ENG = [
    "Built a generative pipeline that turns real wildfire-watch and urban-flood CCTV stills into 'disaster starting and spreading' training videos: FLUX.2 draws the start state, Wan2.2 animates it, RIFE interpolates to 10 s.",
    "Removed sudden-onset artifacts structurally: FLUX draws each stage's start state and Wan only grows it, instead of prompting for gradual change.",
    "Made composites seamless with tone-matching on unchanged pixels, masks on changed regions only and LAB hue correction for smoke.",
    "Rising flood water: compared start/end-frame conditioning (dry road → FLUX-flooded road, ~52% pass) against reversing a receding video (0%), and fixed client feedback on 'cement-colored' water with prompt and color-check changes.",
    "Automated QA by pairing OpenCV measurements (camera motion, sudden change, fire area, smoke-before-fire order) with a VLM calibrated on known answers.",
    "Ran a 4-GPU queue with resident models (per-request load ~9 min → 0) and a progress-based watchdog, plus a FastAPI authoring tool and an automatic prompt-optimization loop.",
  ];
  const kdl_video_KOR = [
    "실제 산불감시·도시 침수 CCTV 사진으로 '재난이 시작되어 번지는' 학습용 영상을 생성하는 파이프라인 구축: FLUX.2가 시작 상태를 그리고, Wan2.2가 영상화, RIFE로 10초 보간.",
    "'점점 커지게' 문장 대신 FLUX로 단계별 시작 상태를 먼저 그리고 Wan은 키우기만 하도록 설계해 첫 프레임 급변을 구조적으로 제거.",
    "변하지 않은 픽셀 기준 톤 보정, 바뀐 영역만 마스크, LAB 색조 보정으로 합성 이질감 제거.",
    "침수 '차오름' 구현: 시작·끝 프레임 지정(마른 도로 → FLUX 침수 이미지, 통과율 약 52%)과 물 빠짐 영상 역재생(0%)을 비교해 채택, '시멘트색 물' 고객 피드백은 프롬프트·색 검수 기준 수정으로 해결.",
    "OpenCV 측정(화면 이동·급변·불 면적·연기→불 순서)과 정답셋으로 보정한 VLM을 결합한 자동 검수.",
    "GPU 4장 큐 워커와 모델 상주(요청당 로딩 약 9분 → 0), 진척 기반 자동 재시작, FastAPI 저작툴과 프롬프트 자동 최적화 루프 구축.",
  ];

  const work_ai_title = lang === 'ENG' ? "AI/ML Engineer & Researcher, CareSix Co., LTD" : "AI/ML 엔지니어 & 리서처, 케어식스";
  const work_ai_details_ENG = [
    "Sole developer of the LSTM-based canine heart-rate algorithm for the Sense1 Vet wearable: raised accuracy to 96% on readings that trembling and motion had made unreliable.",
    "Built the BCG signal-processing pipeline end to end — FFT and wavelet denoising, with the periodicity of IJK peaks modeled as domain features.",
    "Applied unsupervised IJK peak detection to reduce dependence on ECG, which is not available as a reference in everyday use.",
    "Validated each algorithm change statistically with Python and NumPy before adopting it.",
    "Worked with the hardware and production teams to improve data acquisition and signal quality on the device.",
    "AURA ID: built a web dog-recognition platform (React, TypeScript) integrating Jeju National University's image-recognition model, plus a veterinary hospital management system for patient tracking and cage records on AWS RDS.",
  ];
  const work_ai_details_KOR = [
    "Sense1 Vet 웨어러블의 LSTM 기반 반려견 심박 알고리즘 단독 개발: 떨림·움직임으로 불안정하던 심박 측정을 정확도 96%까지 개선.",
    "BCG 신호처리 파이프라인 전 과정 구축: FFT·웨이블릿 노이즈 제거, IJK 피크의 주기성을 도메인 피처로 모델링.",
    "비지도 IJK 피크 검출로, 일상 사용 환경에서는 기준 신호로 쓸 수 없는 ECG에 대한 의존도 감소.",
    "알고리즘 변경마다 Python·NumPy로 통계 검증을 거친 뒤 반영.",
    "하드웨어·생산팀과 협업해 기기의 데이터 수집과 신호 품질 개선.",
    "AURA ID: 제주대학교 이미지 인식 모델을 연동한 웹 기반 반려견 인식 플랫폼(React, TypeScript)과, 환자 추적·케이지 기록을 관리하는 동물병원 관리 시스템(AWS RDS) 개발.",
  ];


  const work_app_title = lang === 'ENG' ? "App Developer, CareSix Co., LTD" : "앱 개발자, 케어식스";
  const work_app_details_ENG = [
    'Developed a production-grade application in Kotlin for the Sense1 Vet model, actively used in the device manufacturing and deployment process. The app automated mapping of NFC tags, QR codes, and barcodes into a structured CSV format, ensuring traceability and quality control.',
    'Built a Bluetooth-enabled app (Cotons AI) in Flutter for capturing BCG signals, 6-axis sensor data, and temperature readings.',
  ];
  const work_app_details_KOR = [
    'Kotlin으로 Sense1 Vet 양산/배포 공정에 실제 사용되는 프로덕션급 앱을 개발. NFC/QR/바코드 매핑을 자동화하여 CSV로 내보내고, 추적 가능성과 품질 관리를 보장.',
    'Flutter(블루투스 연동)로 BCG/6축 센서/온도 데이터 수집 앱(Cotons AI) 개발.',
  ];

  const work_math_title = lang === 'ENG' ? "Mathematician, CareSix Co., LTD" : "수학 리서처, 케어식스";
  const work_math_details_ENG = [
    'Implemented a Fourier transform in Python to filter noise from BCG measurements, improving signal clarity.',
    'Conducted statistical analysis using Python and NumPy to validate algorithm effectiveness.',
  ];
  const work_math_details_KOR = [
    'Python 기반 푸리에 변환으로 BCG 노이즈 제거, 신호 명료도 향상.',
    'Python/NumPy 통계 분석으로 알고리즘 효과 검증.',
  ];

  // Company info
  const company_awards_list_ENG = ['CES Best Tech Innovation Award 2022', 'Edison Awards Nominee 2024'];
  const company_awards_list_KOR = ['CES Best Tech Innovation Award 2022', 'Edison Awards 후보 2024'];
  const company_awards_media = (
    <div 
      key="awards-images" 
      style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}
    >
      <img src={cotonsImage2} alt="CES Awards" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={edisonImage} alt="Edison Awards" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );

  // ===== Engagements =====
  const jAgri_media = (
    <div key="jagri-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={jagriImage1} alt="J-Agri Exhibition 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={jagriImage2} alt="J-Agri Exhibition 2" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const jAgri_ENG = [
    'Represented HRG as Lead Manager, showcasing the 2025 CES Innovation Awards-winning project: the first-ever wearable cow health monitor.',
    'Engaged with industry leaders, shared insights, and connected with experts in agricultural technology.',
    'Demonstrated wearable livestock health-monitoring technology to industry visitors.',
  ];
  const jAgri_KOR = [
    'HRG 리드 매니저로 참가, 2025 CES 혁신상 수상 프로젝트(세계 최초 착용형 소 헬스 모니터) 전시.',
    '애그테크 업계 리더들과 네트워킹 및 기술 인사이트 공유.',
    '착용형 가축 헬스 모니터링 기술을 업계 방문객에게 시연.',
  ];

  const fava_media = (
    <div key="fava-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={favaImage1} alt="Fava Exhibition 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={favaImage2} alt="Fava Exhibition 2" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const fava_ENG = [
    'Represented CareSix, connecting with veterinary professionals and industry innovators across Asia.',
    'Showcased award-winning devices, including the Sense1 Pro dog wearable and the Sense1 Guardian, both receiving positive feedback from doctors and professionals.',
    'Engaged in discussions about advancing veterinary technology and animal healthcare solutions.',
  ];
  const fava_KOR = [
    'CareSix 대표로 참가, 아시아 수의사/업계 혁신가들과 교류.',
    'Sense1 Pro/Guardian 등 수상 디바이스 전시, 의료진으로부터 긍정적 피드백 확보.',
    '수의 테크와 동물 헬스케어 솔루션 발전에 대한 논의 참여.',
  ];

  const ces_media = (
    <div key="ces2025-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={cesImage1} alt="CES 2025 Exhibition 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={cesImage2} alt="CES 2025 Exhibition 2" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={cesImage3} alt="CES 2025 Exhibition 3" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const ces_ENG = [
    'Exhibited at CES 2025 by invitation (Venetian Suite 29-225).',
    'Showcased the latest advances in veterinary technology and wearable animal-health monitoring devices.',
    'Networked with global tech leaders and innovators in animal healthcare.',
  ];
  const ces_KOR = [
    'CES 2025 Venetian Suite 29-225 전시 초청.',
    '수의 테크/웨어러블 헬스 모니터링 최신 기술 시연.',
    '글로벌 테크 리더·혁신가들과 동물 헬스케어 분야 네트워킹.',
  ];

  // --- Hackathon section (updated) ---
  const hackathon_media = (
    <div key="hackathon-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={hackathon1} alt="K-Digital Training AI Hackathon" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={hackathon2} alt="K-Digital Training AI Hackathon" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={hackathon3} alt="K-Digital Training AI Hackathon" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={hackathon4} alt="K-Digital Training AI Hackathon" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={hackathon5} alt="K-Digital Training AI Hackathon" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );

  const hackathon_ENG = [
    "K-Digital Training AI Hackathon – built a reckless-driving detection system (dashcam video).",
    "Trained a customized YOLOv8 (Ultralytics) for vehicle detection; a ViT classified driving behaviors from consecutive frames, and OCR read license plates.",
    "Behaviors detected: aggressive cut-in (unsafe lane insertion), hard braking/deceleration, overspeeding, etc.",
    "Mobile app flow: plate number, location, and offense type are auto-filled from inference; user adds details and submits a report.",
  ];

  const hackathon_KOR = [
    "K-디지털 트레이닝 AI 해커톤 – 대시캠 영상 기반 ‘난폭운전 감지 시스템’ 개발.",
    "커스텀 YOLOv8(Ultralytics)로 차량을 인식하고, ViT로 연속 프레임의 난폭운전 행동을 분류, OCR로 번호판 인식.",
    "탐지 항목: 무리한 끼어들기, 급정지/급제동, 과속 등 난폭운전 유형.",
    "앱 연동: 차량번호·위치·위반유형을 자동 추출해 포맷에 채워주고, 사용자가 상세 입력 후 신고 제출 가능.",
  ];

  // ===== Projects – Main =====
  const sense1_media = (
    <div key="sense1vet-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={senseoneImage1} alt="SenseOne Project 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={senseoneImage2} alt="SenseOne Project 2" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={senseoneImage3} alt="SenseOne Project 3" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={senseoneImage4} alt="SenseOne Project 4" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={senseoneImage5} alt="SenseOne Project 5" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );

  const pj_sense1_ENG = [
    "Built canine heart-rate estimation from ballistocardiogram (BCG) signals with an LSTM (TensorFlow / Keras), owning the pipeline end to end.",
    "Denoised raw BCG with FFT and wavelet decomposition, and modeled the periodicity of IJK peaks as domain features.",
    "Applied unsupervised IJK peak detection to reduce dependence on ECG reference signals, and validated each improvement statistically with Python and NumPy.",
    "Raised accuracy to 96% on readings that trembling and motion had made unreliable; worked with hardware and production teams on signal quality.",
  ];

  
  const pj_sense1_KOR = [
    "TensorFlow/Keras LSTM으로 BCG 신호 기반 반려견 심박 추정 알고리즘을 개발, 전 과정 단독 수행.",
    "FFT·웨이블릿 분해로 원시 BCG 노이즈를 제거하고, IJK 피크의 주기성을 수학적으로 모델링해 도메인 피처로 반영.",
    "비지도 IJK 피크 검출로 ECG 기준 신호 의존도를 줄이고, Python·NumPy 통계 분석으로 개선 효과 검증.",
    "떨림·움직임으로 불안정하던 측정을 정확도 96%까지 개선, 하드웨어·생산팀과 신호 품질 최적화.",
  ];


  const lawai_media = (
    <div key="lawai-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={lawAIImage1} alt="LAW-AI Project 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={lawAIImage4} alt="LAW-AI Project 4" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={lawAIImage2} alt="LAW-AI Project 2" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={lawAIImage3} alt="LAW-AI Project 3" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={lawAIImage5} alt="LAW-AI Project 5" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );


  const law_ENG = [
    "Built a Korean legal AI assistant combining Llama-3-8B with RAG over statutes and precedents from the National Law Information System.",
    "Designed the retrieval pipeline: legal-text cleaning and chunking, bge-m3 embeddings (1024-d), FAISS / ChromaDB search; served with FastAPI on AWS EC2 and Docker.",
    "Orchestrated retrieval, reasoning and drafting with LangChain agents — tool routing and session memory that reuses verified citations.",
    "Iterative RAG with CoT, role-based (plaintiff / defendant / bench) and ReAct prompting, ending in conclusions with explicit citations.",
    "Evaluated responses qualitatively for factual consistency and legal validity.",
  ];
  
  const law_KOR = [
    "국가법령정보시스템의 법령·판례를 기반으로 Llama-3-8B와 RAG를 결합한 한국어 법률 AI 어시스턴트 개발.",
    "검색 파이프라인 설계: 법률 텍스트 정제·청킹, bge-m3 임베딩(1024차원), FAISS·ChromaDB 검색, FastAPI 서빙 및 AWS EC2·Docker 배포.",
    "LangChain 에이전트로 검색·추론·문서 작성을 조율 — 툴 라우팅, 검증된 인용을 재사용하는 세션 메모리.",
    "CoT·역할 기반(원고·피고·재판부)·ReAct 프롬프팅의 반복 RAG로 출처를 명시한 결론 도출.",
    "사실 일치성·법적 타당성 관점에서 응답을 정성 평가.",
  ];


  // ===== Other Projects (이미지 포함) =====
  const eliza_media = (
    <div key="Eliza-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={elizaImage1} alt="Eliza Project 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={elizaImage2} alt="Eliza Project 2" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={elizaImage3} alt="Eliza Project 3" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const eliza_ENG = [
    'Developed an AI chatbot in Java using a scripting system with keywords, decomposition rules, and reassembly rules, simulating three personalities: a psychologist, a politician, and a five-year-old child. Implemented pre- and post-substitutions using regex for sentence transformation and synonym handling.',
    'Structured the chatbot engine into modular Java classes, including an Eliza Engine (managing input processing and response generation), a Decomposition Engine (applying regex-based pattern matching), and a Reassembly Engine (constructing responses with predefined grammatical structures).',
    'Implemented priority-based keyword matching, ensuring responses aligned with conversational context. Used regular expressions (regex) for pattern recognition, allowing dynamic sentence decomposition and reassembly for natural conversations.',
    'Collaborated using Mercurial for version control, managing project updates. Resolved merge conflicts with commands like hg resolve --all and hg merge, and manually edited clashing files for synchronization.',
    'Conducted iterative testing, refining keyword priorities to improve chatbot accuracy and ensuring smooth response flow. Identified challenges like post-substitution issues, where responses sometimes lacked precision, and planned improvements for more nuanced conversation handling.',
  ];
  const eliza_KOR = [
    'Java로 키워드·분해 규칙·재조립 규칙 기반 스크립팅 시스템을 구현, 심리학자/정치인/5세 어린이 3개 페르소나를 시뮬레이션. 정규식을 활용한 전/후 치환으로 문장 변환·동의어 처리.',
    'Eliza Engine(입력 처리/응답 생성), Decomposition Engine(정규식 패턴 매칭), Reassembly Engine(규칙 기반 응답 구성) 등 모듈형 아키텍처.',
    '우선순위 기반 키워드 매칭과 정규식 패턴 인식으로 문장 분해·재조립을 동적으로 수행.',
    'Mercurial 기반 협업/버전관리, 충돌 해결(hg resolve/merge) 및 수동 편집.',
    '반복 테스트로 키워드 우선순위를 다듬어 정확도 향상 및 응답 흐름 개선; 후치환 이슈 등 개선 과제 도출.',
  ];

  const royal_media = (
    <div key="RoyalUr-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={royalUrImage1} alt="RoyalUr Project 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={royalUrImage2} alt="RoyalUr Project 2" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const royal_ENG = [
    'Developed a digital version of the ancient board game "Royal Game of Ur" as part of a major university project.',
    'Implemented advanced game logic, AI opponents, and an interactive user interface to simulate strategic gameplay.',
    'Focused on enhancing user experience through a well-designed UI and optimized game mechanics.',
  ];
  const royal_KOR = [
    '고대 보드게임 “Royal Game of Ur”의 디지털 버전 개발(대학 메이저 프로젝트).',
    '고급 게임 로직/AI 상대/인터랙티브 UI를 구현해 전략적 플레이 시뮬레이션.',
    'UI/게임 메커닉스 최적화로 사용자 경험 강화.',
  ];

  const sudoku_media = (
    <div key="sudoku-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={sudokuImage1} alt="Sudoku Project 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={sudokuImage2} alt="Sudoku Project 2" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={sudokuImage3} alt="Sudoku Project 3" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={sudokuImage4} alt="Sudoku Project 4" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={sudokuImage5} alt="Sudoku Project 5" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const sudoku_ENG = [
    'Developed a collaborative Sudoku puzzle platform that allows users to create, share, and play puzzles.',
    'Designed and built the front-end with React.js, leveraging its flexibility, performance, and rich ecosystem. Implemented lifecycle methods to resolve rendering issues.',
    'Implemented a Node.js and Express.js backend, prioritizing speed, scalability, and security. Managed environment variables for secure authentication and database integration.',
    'Utilized MariaDB as the relational database, implementing primary and foreign keys for structured data relationships and efficient querying.',
    'Followed Agile development (Scrum methodology), utilizing sprints to ensure continuous progress and iterative development.',
    'Engineered advanced Sudoku generation and validation algorithms, supporting multiple difficulty levels for an engaging user experience.',
  ];
  const sudoku_KOR = [
    '사용자들이 스도쿠 퍼즐을 제작/공유/플레이할 수 있는 협업 플랫폼 개발.',
    'React.js 프론트엔드 설계·구현(성능/생태계 활용), 라이프사이클로 렌더링 이슈 해결.',
    'Node/Express 백엔드로 속도·확장성·보안 확보, 환경변수로 인증/DB 연동 관리.',
    'MariaDB(관계형)로 PK/FK 모델링·효율적 질의 설계.',
    '애자일(Scrum) 기반 스프린트로 반복적 개발/개선.',
    '난이도 조절 가능한 생성/검증 알고리즘으로 UX 강화.',
  ];

  const aura_media = (
    <div key="auraid-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={auraIdIamge1} alt="AuraId Project 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={auraIdIamge7} alt="AuraId Project 2" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={auraIdIamge2} alt="AuraId Project 3" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={auraIdIamge3} alt="AuraId Project 4" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={auraIdIamge4} alt="AuraId Project 5" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={auraIdIamge5} alt="AuraId Project 6" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={auraIdIamge6} alt="AuraId Project 7" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const aura_ENG = [
    'Developed a web-based dog recognition platform using TypeScript with React, integrating an image-recognition algorithm developed by Jeju National University for accurate dog identification.',
    'Designed and implemented a veterinary hospital management system, enabling efficient patient tracking and cage record management for veterinarians.',
    'Integrated AWS RDS (Relational Database Service) for secure, scalable data management, ensuring seamless data retrieval and storage for both the dog recognition platform and the hospital management system.',
  ];
  const aura_KOR = [
    'TypeScript/React 기반 반려견 인식 웹 플랫폼 개발(제주대 알고리즘 연동으로 정확도 강화).',
    '수의사 대상 병원 관리 시스템 설계/구현(환자 추적, 케이지 기록 관리).',
    'AWS RDS로 보안/확장성 보장, 플랫폼·병원 시스템 공용 데이터 파이프라인 구축.',
  ];

  // ===== Achievements =====
  const dacon = (
    <div key="dacon-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={daconImage1} alt="Dacon Competition 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={daconImage2} alt="Dacon Competition 2" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={daconImage3} alt="Dacon Competition 3" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={daconImage4} alt="Dacon Competition 4" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={daconImage5} alt="Dacon Competition 5" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const ach_dacon_ENG = [
    "Competed across tabular, time-series, molecular (drug discovery) and LLM-based problems.",
    "Toss NEXT ML Challenge – ad click-through-rate (CTR) prediction on tabular Parquet data (2,206 participants): in a team of 4, built the whole pipeline myself — feature preprocessing, an XGBoost + LightGBM + CatBoost ensemble, and inference — finishing 30th and earning a résumé-screening pass for Toss hiring.",
    "Boost up AI 2025 – drug discovery (1,289 participants): 37th, solo.",
    "2025 Power Consumption Forecasting (1,592 participants): 63rd, team of 3.",
    "Jump AI 2025 – drug discovery (1,126 participants): 65th, team of 4.",
    "2025 Dongwon x KAIST AI Competition – sales & demographics forecasting with LLM personas (670 participants): 61st on the public leaderboard, team of 4.",
  ];

  const ach_dacon_KOR = [
    "정형·시계열·분자 구조(신약)·LLM 기반 문제 등 다양한 유형의 대회에 참가.",
    "토스 NEXT ML Challenge – Parquet 형식 정형 데이터로 광고 클릭 예측(CTR) 모델 개발(참가자 2,206명): 4인 팀에서 피처 전처리, XGBoost·LightGBM·CatBoost 앙상블 학습, 추론까지 전 과정을 직접 맡아 최종 30위 — 토스 채용 서류전형 면제.",
    "Boost up AI 2025 신약 개발 경진대회(참가자 1,289명): 37위, 개인 참가.",
    "2025 전력사용량 예측 AI 경진대회(참가자 1,592명): 63위, 3인 팀.",
    "Jump AI 2025 제3회 AI 신약개발 경진대회(참가자 1,126명): 65위, 4인 팀.",
    "2025 동원 x 카이스트 AI 경진대회 – LLM 페르소나 기반 판매·인구 예측(참가자 670명): Public 리더보드 61위, 4인 팀.",
  ];

  const quantum_media = (
    <div key="quantum-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={quantumImage4} alt="Quantum AI Hackathon 4" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={quantumImage1} alt="Quantum AI Hackathon 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={quantumImage2} alt="Quantum AI Hackathon 2" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={quantumImage3} alt="Quantum AI Hackathon 3" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  // 수상 섹션용 (간략)
  const shinhan_ENG = [
    "Top 8 of the participating companies and Open Innovation Reward (VND 200,000,000) for the Shinhan Vietnam Finance loan-document PoC I developed; the PoC led to Korea Deep Learning's first overseas revenue.",
  ];
  const shinhan_KOR = [
    "직접 개발한 신한베트남파이낸스 대출 서류 PoC로 참가 기업 중 상위 8개사 선정, 오픈이노베이션 리워드(VND 200,000,000) 수상 — PoC가 한국딥러닝 첫 해외 매출로 이어짐.",
  ];
  const shinhan_award_media = (
    <div key="shinhan-award-image" style={{ padding:'10px 0' }}>
      <img src={shinhanImage0} alt="Global Shinhan InnoBoost 2026 award" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  // 프로젝트 섹션용 (상세)
  const shinhanPj_ENG = [
    "Ran the PoC as PM and sole developer: led client communication with SVFC from kickoff (06.09) through the SoW (06.30), integration testing, UAT with the client's underwriters and the final assessment (08.24), and owned the system design.",
    "Built SVFC's loan-document screening system: upload bank statements and CCCD ID cards (multiple files merged into one page sequence) → page classification → schema-based field extraction → 7 automated checks, returning pass / warn / fail with the reason and the exact fields to the underwriter.",
    "Turned the SoW and client Q&A into implementable checks — when the client asked for image-forgery forensics (font, color, compositing traces), scoped it out and replaced it with logical-consistency checks (front-back MRZ match, ID-number scheme), stating the limit in the user guide.",
    "Bank statements: balance reconciliation (opening + credits − debits = closing, ±1, sums recomputed from transaction rows), reference-number ↔ date logic (YYMMDD, Julian YYDDD, monotonic increase) to catch inserted rows, and monthly salary / bonus income with the matching evidence.",
    "ID cards: CCCD front ↔ back MRZ cross-check with ICAO 9303 check digits, Vietnamese ID-number scheme (birth year, century-gender code) and legal renewal ages (14/25/40/60), plus name match between statement holder and ID, ignoring Vietnamese tones.",
    "'The VLM only reads; code decides': every prompt rule has a deterministic backstop (totals recomputed, closing balance from the last row, FT/SAL/IB reference numbers by regex, forward-filled dates), and corrected values are written back so the UI, JSON export and validation cards always match.",
    "Handled Vietnamese locale details: VND thousands separators vs decimals, tone-insensitive matching, OCR-broken 'lương', and telling the bonus word 'thưởng' from the common name 'Thưởng'.",
    "Built the result UI (Next.js 16 / React 19): 7 validation cards, detailed extraction table, JSON download, server-paginated history that reopens past runs with the original file, 300 dpi preview, and a Korean / English / Vietnamese UI (180 keys).",
    "Deployed the demo with Docker Compose via a self-hosted GitHub Actions runner on NCP, and wrote the client deliverables: validation rulebook, solution architecture & hardware sizing for SVFC's on-prem server, and a 12-page English user guide.",
    "Secured quality with 24 unit tests and a 200-case synthetic test set across 14 Vietnamese bank templates, and shipped fixes from the client's UAT feedback.",
    "Placed in the top 8 at Global Shinhan InnoBoost 2026, demonstrated DEEP Agent live at the Demo Day booth and won the Open Innovation Reward (VND 200,000,000); the PoC turned into an actual business deal — Korea Deep Learning's first overseas revenue.",
  ];
  const shinhanPj_KOR = [
    "PM 겸 단독 개발로 PoC 수행: 킥오프(06.09) → SoW 확정(06.30) → 통합 테스트 → 고객 심사역 UAT → 최종 평가(08.24)까지 SVFC와의 소통을 직접 맡고 시스템 설계 전부 담당.",
    "SVFC 대출 서류 스크리닝 시스템 구축: 은행거래명세서·시민증(CCCD) 업로드(여러 파일을 하나의 페이지 시퀀스로 통합) → 페이지 분류 → 스키마 기반 필드 추출 → 자동 검증 7종 → 심사역에게 pass/warn/fail과 사유·문제 필드 제공.",
    "SoW와 고객 Q&A를 구현 가능한 검증 항목으로 정리 — 고객이 요구한 이미지 위변조 포렌식(폰트·색·합성 흔적)은 범위에서 제외하고 논리 일관성 검증(앞뒷면 MRZ 대조, ID 번호 체계)으로 대체, 한계는 사용자 가이드에 명시.",
    "은행명세서: 잔액 정합성(기초 + 입금 − 출금 = 기말, 허용 오차 ±1, 합계는 거래행에서 재계산), 참조번호 ↔ 거래일 논리 검증(YYMMDD·Julian YYDDD·단조 증가)으로 끼워 넣은 행 탐지, 급여·상여 성격 입금만 월별 합산하고 매칭 근거 반환.",
    "신분증: CCCD 앞면 ↔ 뒷면 MRZ 대조와 ICAO 9303 체크디지트, 베트남 ID 번호 체계(출생연도·세기·성별 코드)와 법정 갱신 연령(14/25/40/60세) 검증, 명세서 예금주와 신분증 이름을 성조 무시로 대조.",
    "'VLM은 읽기만, 판단은 코드가': 모든 프롬프트 규칙에 결정론적 백스톱(합계 재계산, 마지막 거래행 기말잔액, FT/SAL/IB 참조번호 정규식 추출, 거래일 forward-fill)을 두고, 보정값을 원본 필드에 다시 써 UI·JSON·검증 카드가 항상 같은 값을 보이게 함.",
    "베트남 로케일 처리: VND 천단위 구분자와 소수점 구분, 성조 무시 비교, OCR로 깨진 'lương', 상여 'thưởng'과 흔한 이름 'Thưởng' 구분.",
    "결과 화면 개발(Next.js 16 / React 19): 검증 카드 7종, 상세 추출 표, JSON 다운로드, 서버 페이지네이션 히스토리(원본과 함께 과거 결과 재오픈), 300dpi 프리뷰, 한·영·베 3개 국어 UI(180키).",
    "Docker Compose + NCP self-hosted GitHub Actions 러너로 데모 배포, 고객 제출 문서 작성: 검증 로직 룰북, SVFC 온프레미스 서버 기준 솔루션 아키텍처·HW 사이징, 영문 사용자 가이드 12쪽.",
    "단위 테스트 24건과 베트남 은행 템플릿 14종 × 합성 CCCD 200건 테스트셋으로 품질 확보, 고객 UAT 피드백을 반영해 수정.",
    "글로벌 신한 이노부스트 2026 상위 8개사 선정, 데모데이 부스에서 DEEP Agent 실시간 시연, 오픈이노베이션 리워드(VND 200,000,000) 수상 — PoC가 실제 사업으로 이어져 한국딥러닝 첫 해외 매출 달성.",
  ];
  const shinhan_media = (
    <div key="shinhan-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={shinhanImage0} alt="Global Shinhan InnoBoost 2026 award" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={shinhanImage1} alt="Global Shinhan InnoBoost 2026 award ceremony" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={shinhanImage2} alt="Korea Deep Learning booth at Demo Day 2026" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={shinhanImage3} alt="Shinhan Future's Lab Demo Day 2026" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );

  const quantum_ENG = [
    "Ranked 1st in the AI Factory preliminaries by solving a Fashion-MNIST quantum computing challenge.",
    "In the two-day overnight finals on real quantum hardware, combined quantum algorithms with AI methods and won the Excellence Prize.",
  ];
  const quantum_KOR = [
    "AI Factory 예선(패션-MNIST 양자 과제) 1위로 본선 진출.",
    "실제 양자 컴퓨터를 쓰는 1박 2일 본선에서 양자 알고리즘과 AI를 결합해 우수상 수상.",
  ];


  

  // ===== Skills 컴포넌트 & 데이터 =====
  const SkillItem = ({ Icon, label }) => (
    <div className="skill-item">
      <span className="skill-icon"><Icon size={18} /></span>
      <span className="skill-label">{label}</span>
    </div>
  );
  const SkillGroup = ({ title, items }) => (
    <div className="skill-card">
      <div className="skill-title">{title}</div>
      <div className="skill-items-wrap">
        {items.map((it, idx) => <SkillItem key={idx} Icon={it.Icon} label={it.label} />)}
      </div>
    </div>
  );
  const skillsData = {
    ENG: [
      { title: "AI & Machine Learning", items: [
        { Icon: SiPytorch, label: "PyTorch" },
        { Icon: SiTensorflow, label: "TensorFlow" },
        { Icon: SiKeras, label: "Keras" },
        { Icon: SiNumpy, label: "NumPy" },
        { Icon: SiPandas, label: "Pandas" },
        { Icon: SiOpenai, label: "Large Language Models (LLM)" },
        { Icon: FaSearch, label: "RAG" },
        { Icon: FaLink, label: "LangChain" },
        { Icon: FaServer, label: "vLLM" },
        { Icon: SiOpencv, label: "OpenCV" },
      ]},
      { title: "Programming Language", items: [
        { Icon: SiPython, label: "Python" },
        { Icon: FaJava, label: "Java" },
        { Icon: SiJavascript, label: "JavaScript" },
        { Icon: SiTypescript, label: "TypeScript" },
        { Icon: SiKotlin, label: "Kotlin" },
        { Icon: SiDart, label: "Dart" },
      ]},
      { title: "App / Web Framework", items: [
        { Icon: SiReact, label: "React" },
        { Icon: SiNextdotjs, label: "Next.js" },
        { Icon: SiFastapi, label: "FastAPI" },
        { Icon: SiFlutter, label: "Flutter" },
      ]},
      { title: "Database", items: [
        { Icon: SiMysql, label: "MySQL" },
        { Icon: SiMongodb, label: "MongoDB" },
        { Icon: SiPostgresql, label: "PostgreSQL" },
      ]},
      { title: "Workflow & Tools", items: [
        { Icon: SiGit, label: "Git" },
        { Icon: SiJira, label: "Jira" },
        { Icon: SiSlack, label: "Slack" },
        { Icon: SiFigma, label: "Figma" },
        { Icon: SiDocker, label: "Docker" },
        { Icon: SiAmazonaws, label: "AWS" },
      ]},
      { title: "Languages", items: [
        { Icon: SiJavascript, label: "English (Native)" },
        { Icon: SiReact, label: "Korean (Native)" },
      ]},
    ],
    KOR: [
      { title: "AI & 머신러닝", items: [
        { Icon: SiPytorch, label: "PyTorch" },
        { Icon: SiTensorflow, label: "TensorFlow" },
        { Icon: SiKeras, label: "Keras" },
        { Icon: SiNumpy, label: "NumPy" },
        { Icon: SiPandas, label: "Pandas" },
        { Icon: SiOpenai, label: "대형 언어모델 (LLM)" },
        { Icon: FaSearch, label: "RAG" },
        { Icon: FaLink, label: "LangChain" },
        { Icon: FaServer, label: "vLLM" },
        { Icon: SiOpencv, label: "OpenCV" },
      ]},
      { title: "프로그래밍 언어", items: [
        { Icon: SiPython, label: "Python" },
        { Icon: FaJava, label: "Java" },
        { Icon: SiJavascript, label: "JavaScript" },
        { Icon: SiTypescript, label: "TypeScript" },
        { Icon: SiKotlin, label: "Kotlin" },
        { Icon: SiDart, label: "Dart" },
      ]},
      { title: "앱 / 웹 프레임워크", items: [
        { Icon: SiReact, label: "React" },
        { Icon: SiNextdotjs, label: "Next.js" },
        { Icon: SiFastapi, label: "FastAPI" },
        { Icon: SiFlutter, label: "Flutter" },
      ]},
      { title: "데이터베이스", items: [
        { Icon: SiMysql, label: "MySQL" },
        { Icon: SiMongodb, label: "MongoDB" },
        { Icon: SiPostgresql, label: "PostgreSQL" },
      ]},
      { title: "워크플로 & 도구", items: [
        { Icon: SiGit, label: "Git" },
        { Icon: SiJira, label: "Jira" },
        { Icon: SiSlack, label: "Slack" },
        { Icon: SiFigma, label: "Figma" },
        { Icon: SiDocker, label: "Docker" },
        { Icon: SiAmazonaws, label: "AWS" },
      ]},
      { title: "언어", items: [
        { Icon: SiJavascript, label: "영어 (원어민)" },
        { Icon: SiReact, label: "한국어 (원어민)" },
      ]},
    ],
  };

  // ===== UI =====
  // ===== 개발·프로젝트 주요 성과: 번호 · (고객사) 제목 · 태그 · 기존 vs 변경 흐름도 =====
  const orgLabel = {
    company: { ENG: 'Company', KOR: '회사' },
    program: { ENG: 'Program', KOR: '교육과정' },
  };
  const projectTags = (pj) => [
    { label: orgLabel[pj.org][lang], kind: 'org' },
    ...pj.fields.map((f) => ({ label: f, kind: f.toLowerCase() })),
  ];
  const mainProjects = [
    {
      id: 'proj-shinhan', key: 'shinhanVietnam', org: 'company', fields: ['VLM', 'OCR'],
      title: { ENG: '(Shinhan Vietnam Finance) Shinhan Open Innovation Vietnam – Loan Document Extraction & Validation PoC', KOR: '(신한베트남파이낸스) 신한 오픈이노베이션 베트남 – 대출 서류 자동 추출·검수 PoC' },
      location: { ENG: 'Korea Deep Learning · PM & sole developer · first overseas revenue', KOR: '한국딥러닝 · PM 겸 단독 개발 · 회사 첫 해외 매출' },
      dates: { ENG: 'June 2026 ~ September 2026 (kickoff 06.09, final assessment 08.24, Demo Day 09)', KOR: '2026.06 ~ 2026.09 (킥오프 06.09, 최종 평가 08.24, 데모데이 09)' },
      details: getDetails(shinhanPj_ENG, shinhanPj_KOR, shinhan_media),
      compare: {
        ENG: {
          title: "Underwriters' loan-document check: before vs after",
          before: { label: 'Before (manual)', steps: ['Compare ID card and bank statement by eye', 'Re-type values by hand', 'Judge validity'] },
          after: { label: 'After (DEEP Agent)', steps: ['Upload statement + CCCD', 'Page classification', 'VLM field extraction', '7 deterministic checks', 'pass / warn / fail + reason'], result: 'The underwriter makes only the final decision' },
        },
        KOR: {
          title: '심사역 대출 서류 확인: 기존 vs 변경',
          before: { label: '기존 (수작업)', steps: ['신분증·명세서 눈으로 대조', '값을 손으로 옮겨 적기', '유효성 판단'] },
          after: { label: '변경 (DEEP Agent)', steps: ['명세서 + CCCD 업로드', '페이지 분류', 'VLM 필드 추출', '결정론적 검증 7종', 'pass / warn / fail + 사유'], result: '심사역은 최종 판단만' },
        },
      },
    },
    {
      id: 'proj-1', key: 'kdlProductPlanning', org: 'company', fields: ['LLM', 'VLM'],
      title: { ENG: '(LG Electronics) Product-Planning Document Automation', KOR: '(LG전자) 상품기획 문서 자동화' },
      location: { ENG: 'Korea Deep Learning · AX project', KOR: '한국딥러닝 · AX 프로젝트' },
      dates: { ENG: 'July 2026 ~ Present', KOR: '2026.07 ~ 진행중' },
      details: getDetails(kdl_planning_ENG, kdl_planning_KOR, lgax_media),
      compare: {
        ENG: {
          title: "Planners' workflow: before vs after",
          before: { label: 'Before (manual)', steps: ['Read the review deck (PPT)', 'Re-type specs into the master spec sheet', 'Redraw the product roadmap by hand'] },
          after: { label: 'After (automated)', steps: ['PPT → LLM/VLM extraction', 'Priority merge · rule mapping', 'Human-in-the-loop review', 'Patch sheet XML', 'Generate the roadmap'], result: '1,225 of 1,232 cells auto-filled (8-model deck)' },
        },
        KOR: {
          title: '상품기획 업무 흐름: 기존 vs 변경',
          before: { label: '기존 (수작업)', steps: ['검토의뢰서(PPT) 확인', '마스터 스펙시트에 손으로 입력', '제품 로드맵 수작업 작성'] },
          after: { label: '변경 (자동화)', steps: ['PPT → LLM·VLM 추출', '우선순위 병합 · 규칙 매핑', '사람 검수(HITL)', '시트 XML 패치', '로드맵 자동 생성'], result: '8개 모델 문서 1,232칸 중 1,225칸 자동 채움' },
        },
      },
    },
    {
      id: 'proj-4', key: 'kdlOcrResearch', org: 'company', fields: ['CV', 'OCR'],
      title: { ENG: '(Hyundai Capital) Korean Handwriting OCR Recognizer R&D', KOR: '(현대캐피탈) 한국어 필기체 OCR Recognizer 연구' },
      location: { ENG: 'Korea Deep Learning · R&D, weights deployed to the client project', KOR: '한국딥러닝 · R&D, 고객 프로젝트에 가중치 배포' },
      dates: { ENG: 'January 2026 ~ April 2026', KOR: '2026.01 ~ 2026.04' },
      details: lang === 'ENG' ? kdl_ocr_ENG : kdl_ocr_KOR,
    },
    {
      id: 'proj-2', key: 'kdlDocExtraction', org: 'company', fields: ['LLM', 'VLM'],
      title: { ENG: '(Seoyon E-Hwa) Quality & Process Document Extraction API', KOR: '(서연이화) 품질·공정 문서 DB화 추출 API' },
      location: { ENG: 'Korea Deep Learning · delivered to an air-gapped server', KOR: '한국딥러닝 · 폐쇄망 서버 납품' },
      dates: { ENG: 'August 2026 ~ October 2026', KOR: '2026.08 ~ 2026.10' },
      details: lang === 'ENG' ? kdl_extract_ENG : kdl_extract_KOR,
      compare: {
        ENG: {
          title: 'Source highlighting in the review UI: before vs after',
          before: { label: 'Before', steps: ['Ask the model where each value came from'], result: '15–41% accurate' },
          after: { label: 'After', steps: ['Word coordinates from the parser', 'Rule-based matching to table cells'], result: '97.1% of table cells matched' },
        },
        KOR: {
          title: '검수 UI 원문 위치 표시: 기존 vs 변경',
          before: { label: '기존', steps: ['모델에 값의 원문 위치를 질의'], result: '정확도 15~41%' },
          after: { label: '변경', steps: ['파서의 낱말 좌표 추출', '표 칸과 규칙 기반 매칭'], result: '표 칸 97.1% 매칭' },
        },
      },
    },
    {
      id: 'proj-3', key: 'kdlGaugeReading', org: 'company', fields: ['CV'],
      title: { ENG: '(Government-Funded Manufacturing Innovation) Real-Time Analog Gauge Reading from CCTV', KOR: '(정부과제·제조혁신) CCTV 기반 아날로그 계기판 실시간 판독' },
      location: { ENG: 'Korea Deep Learning · deployed to production', KOR: '한국딥러닝 · 실서비스 배포' },
      dates: { ENG: 'January 2026 ~ March 2026', KOR: '2026.01 ~ 2026.03' },
      details: getDetails(kdl_gauge_ENG, kdl_gauge_KOR, gauge_media),
      compare: {
        ENG: {
          title: 'Needle detection: standard box vs oriented box (same settings)',
          before: { label: 'Standard box (HBB)', steps: ['FHD frame → gauge crop (Stage 1)', 'Needle as an axis-aligned box'], result: 'mAP50-95 0.930 · no angle information' },
          after: { label: 'Oriented box (OBB, adopted)', steps: ['FHD frame → gauge crop (Stage 1)', 'Needle as an oriented box (±180° rotation aug.)'], result: 'mAP50-95 0.949 · outputs the needle angle directly' },
        },
        KOR: {
          title: '바늘 검출: 일반 박스 vs 회전 박스 (같은 조건 비교)',
          before: { label: '일반 박스 (HBB)', steps: ['FHD 프레임 → 계기판 크롭 (Stage 1)', '바늘을 일반 박스로 검출'], result: 'mAP50-95 0.930 · 각도 정보 없음' },
          after: { label: '회전 박스 (OBB, 채택)', steps: ['FHD 프레임 → 계기판 크롭 (Stage 1)', '바늘을 회전 박스로 검출 (±180° 회전 증강)'], result: 'mAP50-95 0.949 · 바늘 각도 직접 출력' },
        },
      },
    },
    {
      id: 'proj-5', key: 'kdlDisasterVideo', org: 'company', fields: ['GenAI', 'VLM'],
      title: { ENG: 'Disaster CCTV Video Augmentation (Wildfire · Flood)', KOR: '재난 CCTV 영상 증강 (산불·침수)' },
      location: { ENG: 'Korea Deep Learning · generative AI pipeline', KOR: '한국딥러닝 · 생성형 AI 파이프라인' },
      dates: { ENG: 'October 2026 (9 days)', KOR: '2026.10 (9일)' },
      details: lang === 'ENG' ? kdl_video_ENG : kdl_video_KOR,
    },
    {
      id: 'proj-6', key: 'sense1Vet', org: 'company', fields: ['DL', 'Signal'],
      title: { ENG: '(CareSix) Sense1 Vet Heart-Rate Algorithm', KOR: '(케어식스) Sense1 Vet 심박 알고리즘' },
      location: { ENG: 'CareSix Co., LTD · wearable for dogs', KOR: '케어식스 · 반려견 웨어러블' },
      dates: { ENG: 'September 2024 ~ February 2025', KOR: '2024.09 ~ 2025.02' },
      details: getDetails(pj_sense1_ENG, pj_sense1_KOR, sense1_media),
    },
  ];
  const sideProjects = [
    {
      id: 'side-law', key: 'lawIntelligence', org: 'program', fields: ['LLM', 'RAG'],
      title: { ENG: '[IBM x RedHat] Law-AI', KOR: '[IBM x RedHat] Law-AI' },
      location: { ENG: 'IBM final group project', KOR: 'IBM 파이널 그룹 프로젝트' },
      dates: { ENG: '2025 ~ October 2025', KOR: '2025 ~ 2025.10' },
      details: getDetails(law_ENG, law_KOR, lawai_media),
    },
  ];
  mainProjects.forEach((pj, i) => { pj.num = i + 1; });
  const allProjects = [...mainProjects, ...sideProjects];
  const projectGroups = [
    { label: { ENG: 'LLM · VLM', KOR: 'LLM · VLM' }, ids: ['proj-shinhan', 'proj-1', 'proj-2', 'side-law'] },
    { label: { ENG: 'CV · OCR', KOR: 'CV · OCR' }, ids: ['proj-4', 'proj-3'] },
    { label: { ENG: 'Generative AI', KOR: '생성형 AI' }, ids: ['proj-5'] },
    { label: { ENG: 'Signal · DL', KOR: '신호처리 · DL' }, ids: ['proj-6'] },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t[lang].headerTitle}</h1>

        {/* Language Toggle */}
        <div className="lang-toggle" aria-label="Language toggle" style={{ margin:'6px 0 10px' }}>
          <div
            className="lang-indicator"
            style={{ transform: `translateX(${lang === 'ENG' ? '0' : '100%'})` }}
          />
          <button
            className={`lang-btn ${lang === 'ENG' ? 'active' : ''}`}
            onClick={() => setLang('ENG')}
          >
            ENG
          </button>
          <button
            className={`lang-btn ${lang === 'KOR' ? 'active' : ''}`}
            onClick={() => setLang('KOR')}
          >
            KOR
          </button>
        </div>

        <div className="contact-icons">
          <a href="mailto:peter.jaewoochang@gmail.com" aria-label="Email">
            <FaEnvelope size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
          <a href="https://github.com/jwc5388" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
          <a href="https://www.linkedin.com/in/jwcbillion33" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
        </div>

        {profile.tagline[lang] && <p className="profile-tagline">{profile.tagline[lang]}</p>}
        {profile.glance.length > 0 && (
          <div className="profile-glance">
            {profile.glance.map((g) => (
              <div className="glance-col" key={g.title.ENG}>
                <h4>{g.title[lang]}</h4>
                <ul>
                  {g.items[lang].map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
        {profile.summary[lang] && <p className="profile-summary">{profile.summary[lang]}</p>}
        {profile.skills.length > 0 && (
          <ul className="profile-skills">
            {profile.skills.map((sk) => <li key={sk}>{sk}</li>)}
          </ul>
        )}
        {profile.highlights[lang].length > 0 && (
          <ul className="profile-highlights">
            {profile.highlights[lang].map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        {profile.resumeUrl && (
          <a className="resume-btn" href={profile.resumeUrl} download>{t[lang].resume}</a>
        )}
      </header>


      {/* ===== Work Experience ===== */}
      <section className="Experience-section">
        <h2 className={`section-title ${expandedSections.experience.expanded ? 'open' : ''}`} onClick={() => toggleSection('experience')}>{t[lang].work}</h2>
        {expandedSections.experience.expanded && (
          <div className="section-content">
            <Entry
              title={work_kdl_title}
              location={lang==='ENG' ? "Gangnam, Seoul, South Korea" : "대한민국 서울 강남"}
              dates={lang==='ENG' ? "November 2025 ~ Present" : "2025.11 ~ 현재"}
              details={lang==='ENG' ? work_kdl_details_ENG : work_kdl_details_KOR}
              isExpanded={expandedSections.experience.entries.koreaDeepLearning}
              onClick={() => toggleEntry('experience', 'koreaDeepLearning')}
            />
            <Entry
              title={work_ai_title}
              location={lang==='ENG' ? "Seoul, South Korea" : "대한민국 서울"}
              dates={lang==='ENG' ? "September 2024 ~ April 2025" : "2024.09 ~ 2025.04"}
              details={lang==='ENG' ? work_ai_details_ENG : work_ai_details_KOR}
              isExpanded={expandedSections.experience.entries.aiAlgorithm}
              onClick={() => toggleEntry('experience', 'aiAlgorithm')}
            />
            <Entry
              title={work_app_title}
              location={lang==='ENG' ? "Jeju Island, South Korea" : "대한민국 제주"}
              dates={lang==='ENG' ? "June 2023 ~ August 2023" : "2023.06 ~ 2023.08"}
              details={lang==='ENG' ? work_app_details_ENG : work_app_details_KOR}
              isExpanded={expandedSections.experience.entries.appdeveloper}
              onClick={() => toggleEntry('experience', 'appdeveloper')}
            />
            <Entry
              title={work_math_title}
              location={lang==='ENG' ? "Jeju Island, South Korea" : "대한민국 제주"}
              dates={lang==='ENG' ? "May 2022 ~ August 2022" : "2022.05 ~ 2022.08"}
              details={lang==='ENG' ? work_math_details_ENG : work_math_details_KOR}
              isExpanded={expandedSections.experience.entries.mathematician}
              onClick={() => toggleEntry('experience', 'mathematician')}
            />

            {/* Company about — 비중이 낮아 숨김 (다시 쓰려면 주석 해제)
            <Entry
              title={t[lang].companyAbout}
              location={lang==='ENG' ? "Jeju Island, South Korea" : "대한민국 제주"}
              dates={t[lang].futureOfVet}
              details={[
                {
                  title: lang==='ENG' ? 'AI collar for future veterinary care' : '미래 수의학을 위한 AI 목걸이',
                  content: (
                    <div style={{ paddingBottom: '20px' }}>
                      <p>
                        {lang==='ENG'
                          ? "The AI collar developed by CareSix monitors pets' health in real time."
                          : "CareSix의 AI 목걸이는 반려동물의 건강을 실시간으로 모니터링합니다."}
                      </p>
                      <img src={cotonsImage1} alt="CareSix AI Collar" style={{ height: '400px', borderRadius: '8px' }} />
                    </div>
                  ),
                },
                {
                  title: lang==='ENG' ? 'Awards' : '수상',
                  content: (
                    <div>
                      {company_awards_media}
                      <ul>
                        {(lang==='ENG' ? company_awards_list_ENG : company_awards_list_KOR)
                          .map((x, i)=><li key={i}>{x}</li>)}
                      </ul>
                    </div>
                  ),
                },
                {
                  title: t[lang].companyMore,
                  content: (
                    <div>
                      <p>
                        {lang==='ENG'
                          ? "CareSix is a pet healthcare technology company. Learn more on their "
                          : "CareSix는 반려동물 헬스케어 테크 기업입니다. 더 보려면 "}
                        <a href="https://cotons.ai" target="_blank" rel="noopener noreferrer">
                          {t[lang].officialSite}
                        </a>.
                      </p>
                    </div>
                  ),
                },
              ]}
              isExpanded={expandedSections.experience.entries.caresix}
              onClick={() => toggleEntry('experience', 'caresix')}
            />
            */}
          </div>
        )}
      </section>

      {/* ===== Education ===== */}
      <section className="Education-section">
        <h2 className={`section-title ${expandedSections.education.expanded ? 'open' : ''}`} onClick={() => toggleSection('education')}>{t[lang].education}</h2>
        {expandedSections.education.expanded && (
          <div className="section-content">
            <Entry
              title={lang==='ENG' ? "University of St Andrews, St Andrews, Scotland" : "세인트앤드루스 대학교, 스코틀랜드"}
              location={lang==='ENG' ? "Bachelor of Science in Mathematics and Computer Science" : "수학·컴퓨터과학 학사"}
              dates={lang==='ENG' ? "September 2019 ~ June 2024" : "2019.09 ~ 2024.06"}
              details={[
                <div key="dissertation1" className="download-link">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); window.open(dissertation1, '_blank', 'noopener'); }}
                    style={{ background:'transparent', border:0, padding:0, cursor:'pointer' }}
                  >
                    <img src={dissImage} alt="Open Dissertation 1" className="download-icon" />
                  </button>
                  <span>{lang==='ENG' ? "Computer Science Dissertation" : "컴퓨터과학 학위논문"}</span>
                </div>,
                <div key="dissertation2" className="download-link">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); window.open(dissertation2, '_blank', 'noopener'); }}
                    style={{ background:'transparent', border:0, padding:0, cursor:'pointer' }}
                  >
                    <img src={dissImage} alt="Open Dissertation 2" className="download-icon" />
                  </button>
                  <span>{lang==='ENG' ? "Mathematics Dissertation" : "수학 학위논문"}</span>
                </div>,
                <div key="graduation-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
                  <img src={dissertationImage1} alt="dissertation1" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={dissertationImage2} alt="dissertation2" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={degreeImage} alt="Graduation" style={{ height: '400px', borderRadius: '8px' }} />
                </div>
              ]}
              isExpanded={expandedSections.education.entries.degree}
              onClick={() => toggleEntry('education', 'degree')}
            />

            <Entry
              title="[IBM x RedHat] AI Transformation - AX Academy"
              location="IBM x RedHat"
              dates={lang==='ENG' ? "April 2025 ~ October 2025" : "2025.04 ~ 2025.10"}
              details={[
                ...(lang==='ENG'
                  ? [
                      "Participated in the AI Transformation program hosted by IBM and RedHat.",
                      "Hands-on learning with TensorFlow, Keras, and PyTorch; built and experimented with DNN, CNN, RNN, and NLP models.",
                      "Studied and applied key AI research papers, including Attention Is All You Need, GPT-1/2/3 and BERT.",
                      "Learned advanced LLM applications directly from IBM developers, focusing on RAG and prompt engineering.",
                      "Actively participated in multiple AI-related competitions: Dacon challenges, hackathons, and collaborative projects.",
                      "Led the team for the final IBM project: a legal AI assistant powered by an LLM and RAG."
                    ]
                  : [
                      "IBM/RedHat 주관 AI Transformation 프로그램 참여.",
                      "TensorFlow, Keras, PyTorch를 활용해 DNN, CNN, RNN, NLP 모델 학습 및 실습.",
                      "Attention Is All You Need, Semantic Structure in Large Language Model Embeddings, YOLO, BERT 등 주요 논문을 학습하고 적용.",
                      "현직 IBM 개발자에게 LLM(RAG, Prompt Engineering) 심화 강의 수강.",
                      "Dacon 대회, 해커톤 등 다수의 AI 관련 대회에 적극적으로 참가.",
                      "과정 최종 IBM 발표 프로젝트를 팀장으로 이끌어 LLM·RAG 기반 법률 AI Assistant 개발."
                    ]),
                // 이미지 블록
                <div key="ibm-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
                  <img src={ibmImage1} alt="IBM x RedHat 1" style={{ height: '400px', borderRadius: '8px' }} />
                </div>
              ]}
              isExpanded={expandedSections.education.entries.ibmAxAcademy}
              onClick={() => toggleEntry('education', 'ibmAxAcademy')}
            />
            <Entry
              title={lang==='ENG' ? "St Andrews Judo Club / Registered as member of Judo Scotland" : "세인트앤드루스 유도부 / Judo Scotland 등록 회원"}
              location=""
              dates=""
              details={[
                <div key="judo-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
                  <img src={judoImage1} alt="Judo 1" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={judoImage2} alt="Judo 2" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={judoImage3} alt="Judo 3" style={{ height: '400px', borderRadius: '8px' }} />
                </div>
              ]}
              isExpanded={expandedSections.education.entries.judo}
              onClick={() => toggleEntry('education', 'judo')}
            />
            <Entry
              title={lang==='ENG' ? "Committee member of St Andrews Korean Society" : "세인트앤드루스 한인회 운영진"}
              location={lang==='ENG' ? "Treasurer for St Andrews Korean Society" : "한인회 회계 담당"}
              details={[]}
              isExpanded={expandedSections.education.entries.society}
              onClick={() => toggleEntry('education', 'society')}
            />
          </div>
        )}
      </section>

      {/* ===== Projects ===== */}
      <section className="Project-section">
        <h2 className={`section-title ${expandedSections.projects.expanded ? 'open' : ''}`} onClick={() => toggleSection('projects')}>{t[lang].projects}</h2>
        {expandedSections.projects.expanded && (
          <div className="section-content">

            {/* 분야별 프로젝트 참여내역 (목차) */}
            <div className="project-index">
              <p className="project-index-title">{t[lang].projectIndex}</p>
              {projectGroups.map((g) => (
                <div className="project-index-group" key={g.label.ENG}>
                  <span className="project-index-field">{g.label[lang]}</span>
                  <ul>
                    {g.ids.map((pid) => {
                      const pj = allProjects.find((x) => x.id === pid);
                      return (
                        <li key={pid}>
                          <a href={`#${pid}`}>{pj.num ? `${pj.num}. ` : ''}{pj.title[lang]}</a>
                          <span className={`tag tag-org`}>{orgLabel[pj.org][lang]}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {mainProjects.map((pj) => (
              <Entry
                key={pj.id}
                id={pj.id}
                title={`${pj.num}. ${pj.title[lang]}`}
                location={pj.location[lang]}
                dates={pj.dates[lang]}
                details={pj.details}
                tags={projectTags(pj)}
                compare={pj.compare?.[lang]}
                {...getMeta(pj.key)}
                isExpanded={expandedSections.projects.entries[pj.key]}
                onClick={() => toggleEntry('projects', pj.key)}
              />
            ))}

            <h3 style={{ marginTop: 24 }}>{t[lang].sideProjects}</h3>
            {sideProjects.map((pj) => (
              <Entry
                key={pj.id}
                id={pj.id}
                title={pj.title[lang]}
                location={pj.location[lang]}
                dates={pj.dates[lang]}
                details={pj.details}
                tags={projectTags(pj)}
                {...getMeta(pj.key)}
                isExpanded={expandedSections.projects.entries[pj.key]}
                onClick={() => toggleEntry('projects', pj.key)}
              />
            ))}


            {/* Other Projects – 클릭으로 펼침 */}
            <h3
              style={{ marginTop: 24, cursor:'pointer', userSelect:'none', display:'flex', alignItems:'center', justifyContent:'space-between' }}
              onClick={() => toggleEntry('projects', 'otherProjects')}
            >
              {t[lang].otherProjects}
              <span style={{ fontSize: 18 }}>
                {expandedSections.projects.entries.otherProjects ? t[lang].collapseUp : t[lang].collapseDown}
              </span>
            </h3>

            {expandedSections.projects.entries.otherProjects && (
              <div>
                <Entry
                  title="Eliza AI Basic Project"
                  location={lang==='ENG' ? "University Project" : "대학 프로젝트"}
                  dates={lang==='ENG' ? "September 2020 ~ December 2020" : "2020.09 ~ 2020.12"}
                  details={getDetails(eliza_ENG, eliza_KOR, eliza_media)}
                  {...getMeta('eliza')}
                  isExpanded={expandedSections.projects.entries.eliza}
                  onClick={() => toggleEntry('projects', 'eliza')}
                />

                <Entry
                  title="Royal Game of Ur"
                  location={lang==='ENG' ? "University Project" : "대학 프로젝트"}
                  dates={lang==='ENG' ? "January 2021 ~ March 2021" : "2021.01 ~ 2021.03"}
                  details={getDetails(royal_ENG, royal_KOR, royal_media)}
                  {...getMeta('royalGame')}
                  isExpanded={expandedSections.projects.entries.royalGame}
                  onClick={() => toggleEntry('projects', 'royalGame')}
                />

                <Entry
                  title="Sudoku Game"
                  location={lang==='ENG' ? "University of St Andrews Computer Science Junior Honours Project" : "세인트앤드루스대 컴퓨터과학 3학년 프로젝트"}
                  dates={lang==='ENG' ? "September 2022 ~ March 2023" : "2022.09 ~ 2023.03"}
                  details={getDetails(sudoku_ENG, sudoku_KOR, sudoku_media)}
                  {...getMeta('sudokuGame')}
                  isExpanded={expandedSections.projects.entries.sudokuGame}
                  onClick={() => toggleEntry('projects', 'sudokuGame')}
                />

                <Entry
                  title="AURA ID Website"
                  location={lang==='ENG' ? "CareSix Co., LTD" : "케어식스"}
                  dates={lang==='ENG' ? "February 2025 ~ April 2025" : "2025.02 ~ 2025.04"}
                  details={getDetails(aura_ENG, aura_KOR, aura_media)}
                  {...getMeta('auraid')}
                  isExpanded={expandedSections.projects.entries.auraid}
                  onClick={() => toggleEntry('projects', 'auraid')}
                />
              </div>
            )}
          </div>
        )}
      </section>

      {/* ===== Engagements ===== */}
      <section className="Engagement-section">
        <h2 className={`section-title ${expandedSections.engagements.expanded ? 'open' : ''}`} onClick={() => toggleSection('engagements')}>{t[lang].engagements}</h2>
        {expandedSections.engagements.expanded && (
          <div className="section-content">
            <Entry
              title="J-AGRI Exhibition, Tokyo"
              location={lang==='ENG' ? "Tokyo, Japan" : "일본 도쿄"}
              dates={lang==='ENG' ? "October 9-11, 2024" : "2024.10.09 ~ 10.11"}
              details={getDetails(jAgri_ENG, jAgri_KOR, jAgri_media)}
              isExpanded={expandedSections.engagements.entries.jAgri}
              onClick={() => toggleEntry('engagements', 'jAgri')}
            />
            <Entry
              title="FAVA 2024 - 23rd Federation of Asian Veterinary Associations Congress"
              location={lang==='ENG' ? "Daejeon, South Korea" : "대한민국 대전"}
              dates={lang==='ENG' ? "October 25-27, 2024" : "2024.10.25 ~ 10.27"}
              details={getDetails(fava_ENG, fava_KOR, fava_media)}
              isExpanded={expandedSections.engagements.entries.fava2024}
              onClick={() => toggleEntry('engagements', 'fava2024')}
            />
            <Entry
              title="CES 2025 Exhibition"
              location={lang==='ENG' ? "Las Vegas, USA" : "미국 라스베이거스"}
              dates={lang==='ENG' ? "January 2025" : "2025.01"}
              details={getDetails(ces_ENG, ces_KOR, ces_media)}
              isExpanded={expandedSections.engagements.entries.ces2025}
              onClick={() => toggleEntry('engagements', 'ces2025')}
            />
          </div>
        )}
      </section>


      {/* ===== Achievements ===== */}
      <section className="Achievements-section">
        <h2 className={`section-title ${expandedSections.achievements.expanded ? 'open' : ''}`} onClick={() => toggleSection('achievements')}>{t[lang].achievements}</h2>
        {expandedSections.achievements.expanded && (
          <div className="section-content">

            <Entry
              title={lang==='ENG' ? "Global Shinhan InnoBoost 2026 – Top 8 · Open Innovation Reward" : "글로벌 신한 이노부스트 2026 – 상위 8개사 · 오픈이노베이션 리워드"}
              location={lang==='ENG' ? "Shinhan Financial Group · Vietnam (Korea Deep Learning)" : "신한금융그룹 · 베트남 (한국딥러닝)"}
              dates={lang==='ENG' ? "September 2026 (Demo Day)" : "2026.09 (데모데이)"}
              details={getDetails(shinhan_ENG, shinhan_KOR, shinhan_award_media)}
              isExpanded={expandedSections.achievements.entries.shinhanInnoboost}
              onClick={() => toggleEntry('achievements', 'shinhanInnoboost')}
            />

            <Entry
              title={lang==='ENG' ? "2025 Quantum AI Hackathon" : "2025 퀀텀 AI 해커톤"}
              location={lang==='ENG' ? "Jeonju University, South Korea" : "대한민국 전주대"}
              dates={lang==='ENG' ? "August 18-19, 2025" : "2025.08.18 ~ 08.19"}
              details={getDetails(quantum_ENG, quantum_KOR, quantum_media)}
              {...getMeta('quantumAIHackathon')}
              isExpanded={expandedSections.achievements.entries.quantumAIHackathon}
              onClick={() => toggleEntry('achievements', 'quantumAIHackathon')}
            />


            <Entry
              title={lang==='ENG' ? "2025 K-Digital Training AI Hackathon – Road Guardian" : "2025 K-디지털 트레이닝 AI 해커톤 – Road Guardian"}
              location={lang==='ENG' ? "South Korea" : "대한민국"}
              dates={lang==='ENG' ? "August 2025" : "2025.08"}
              details={getDetails(hackathon_ENG, hackathon_KOR, hackathon_media)}
              {...getMeta('kdigitalHackathon')}
              isExpanded={expandedSections.achievements.entries.kdigitalHackathon}
              onClick={() => toggleEntry('achievements', 'kdigitalHackathon')}
            />


            <Entry
              title={lang==='ENG' ? "Dacon AI Competitions" : "Dacon AI 대회"}
              location={lang==='ENG' ? "Korea (Online)" : "대한민국 (온라인)"}
              dates={lang==='ENG' ? "May 2025-Present" : "2025.05 ~ 현재"}
              details={getDetails(ach_dacon_ENG, ach_dacon_KOR, dacon)}
              {...getMeta('daconCompetitions')}
              isExpanded={expandedSections.achievements.entries.daconCompetitions}
              onClick={() => toggleEntry('achievements', 'daconCompetitions')}
            />

          </div>
        )}
      </section>


      {/* ===== Skills (아이콘 카드) ===== */}
      <section className="Skills-section">
        <h2 className={`section-title ${expandedSections.skills.expanded ? 'open' : ''}`} onClick={() => toggleSection('skills')}>{t[lang].skills}</h2>
        {expandedSections.skills.expanded && (
          <div className="section-content">
            <div className="skills-grid">
              {skillsData[lang].map((g, i) => (
                <SkillGroup key={i} title={g.title} items={g.items} />
              ))}
            </div>
          </div>
        )}
      </section>



      

    </div>
  );
}

export default App;