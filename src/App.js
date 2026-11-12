import './App.css';
import React, { useState } from 'react';
import Entry from './Entry';
import Lightbox from './Lightbox';
import TopNav from './TopNav';
import emphasize from './emphasize';
import degreeImage from './assets/images/graduation.jpg';
import judoImage1 from './assets/images/judo1.jpg';
import judoImage2 from './assets/images/judo2.jpg';
import judoImage3 from './assets/images/judo3.jpg';
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
import elizaImage1 from './assets/images/eliza1.png';
import elizaImage2 from './assets/images/eliza2.png';
import elizaImage3 from './assets/images/eliza3.png';
import gaugeImage1 from './assets/images/gauge1.jpg';
import seoyonImage1 from './assets/images/seoyon1.jpg';
import hcOcrErrors from './assets/images/hcOcrErrors.jpg';
import hcOcrForm1 from './assets/images/hcOcrForm1.jpg';
import hcOcrForm2 from './assets/images/hcOcrForm2.jpg';
import disasterFlowFlood from './assets/images/disasterFlowFlood.jpg';
import disasterFlowFire from './assets/images/disasterFlowFire.jpg';
import disasterGridFlood from './assets/images/disasterGridFlood.jpg';
import disasterGridFire from './assets/images/disasterGridFire.jpg';
import seoyonImage2 from './assets/images/seoyon2.jpg';
import lgaxImage1 from './assets/images/lgax1.jpg';
import lgaxImage2 from './assets/images/lgax2.jpg';
import shinhanApp1 from './assets/images/shinhanApp1.jpg';
import ppassClassify from './assets/images/ppass_classify.jpg';
import ppassResult from './assets/images/ppass_result.jpg';
import ppassUpload from './assets/images/ppass_upload.jpg';
import shinhanApp2 from './assets/images/shinhanApp2.jpg';
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
import dissertationImage1 from './assets/images/dissertation1.png';
import dissertationImage2 from './assets/images/dissertation2.png';
import { FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap, FaTrophy, FaFlag } from 'react-icons/fa';

// ===== 스킬 아이콘 =====
import {
  SiPython, SiJavascript, SiTypescript, SiKotlin, SiDart,
  SiReact, SiFlutter,
  SiPytorch, SiTensorflow, SiKeras, SiNumpy, SiPandas,
  SiMysql, SiMongodb, SiPostgresql,
  SiGit, SiJira, SiSlack,
  SiFigma, SiOpenai, SiDocker, SiFastapi, SiOpencv, SiNextdotjs, SiAmazonaws
} from 'react-icons/si';

import { FaJava, FaServer, FaLink, FaSearch, FaGlobe } from 'react-icons/fa';

function App() {

  // ===== 언어 상태 & 라벨 i18n =====
  const [lang, setLang] = useState('ENG'); // 'ENG' | 'KOR'
  const t = {
    ENG: {
      headerTitle: "Jae Woo Chang's Portfolio",
      name: "Jae Woo Chang",
      role: "AI Engineer",
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
      metaRoleTeam: "Role & Team",
      showDetails: "Show details",
      hideDetails: "Hide details",
      metaLessons: "Takeaways & Limitations",
      metaResults: "Key Results",
      collapseUp: "▴",
      collapseDown: "▾",
    },
    KOR: {
      headerTitle: "장재우 포트폴리오",
      name: "장재우",
      role: "AI 엔지니어",
      work: "경력",
      engagements: "전시·행사",
      projects: "주요 프로젝트 · 성과",
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
      metaRoleTeam: "역할 · 팀",
      showDetails: "상세 보기",
      hideDetails: "상세 접기",
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
    // 한 덩어리 대신 짧은 줄로: 1) 하는 일  2) 일하는 방식  3) 한 일  4) 대표 성과
    summary: {
      ENG: [
        "AI Engineer who stays with a problem until it is solved and turns real-world requirements into **systems** that run on clients' own servers.",
        "I follow new models and techniques as soon as they come out, test them hands-on, and bring what works into client projects.",
        "With a background in Mathematics and Computer Science, I define and solve problems based on data and metrics.",
        "At Korea Deep Learning I have shipped **document-AI, OCR, vision and generative-video** solutions to clients; at CareSix I built the heart-rate algorithm for a dog wearable.",
        "I led **Shinhan Finance Vietnam's loan-document project** as PM and sole developer, and built the classification, schema and extraction modules of **DeepHub**, the in-house IDP platform behind 10+ client projects.",
      ],
      KOR: [
        "현장의 문제를 끝까지 파고들어, 실제로 돌아가는 **시스템**으로 풀어내는 AI 엔지니어입니다.",
        "새로운 모델과 기법이 나오면 직접 돌려보고 검증해 프로젝트에 적용하며, 빠르게 바뀌는 AI 기술을 꾸준히 따라갑니다.",
        "수학·컴퓨터과학 전공을 바탕으로, 데이터와 지표를 근거로 문제를 정의하고 해결합니다.",
        "한국딥러닝에서 **문서 AI·OCR·비전·생성형 영상** 솔루션을 고객사에 배포했고, 케어식스에서는 반려견 웨어러블의 심박 알고리즘을 개발했습니다.",
        "**신한파이낸스 베트남 대출 서류 프로젝트**를 PM 겸 단독 개발로 이끌었고, 사내 IDP 플랫폼 **DeepHub**의 분류·스키마·추출 모듈을 개발했습니다. 이 플랫폼으로 10개 이상의 프로젝트가 납품됐습니다.",
      ],
    },
    skills: ["LLM / VLM", "KIE · OCR", "RAG · LangChain", "LLM Evaluation", "Docker", "On-prem Deployment", "FastAPI", "vLLM", "PyTorch", "Python"],
    highlights: {
      ENG: [
        "Led Shinhan Finance Vietnam's loan-document project as PM and sole developer: top 8 at Global Shinhan InnoBoost 2026, Open Innovation Reward, and Korea Deep Learning's first overseas revenue",
        "Built a document-extraction API for Seoyon E-Hwa, deployed on an air-gapped server: 97.64% accuracy on the client's 3,920-cell audit ledger",
        "Built the classification, automatic schema definition and extraction-result modules and the UI of DeepHub, the in-house IDP platform that turned one-off KIE projects into reusable modules; 10+ client projects have shipped on it",
        "Raised handwriting OCR exact-match accuracy by 4.26 pp (85.23% → 89.49%); the weights were deployed in a Hyundai Capital project",
        "Built a real-time CCTV gauge-reading system solo for a government manufacturing project, from labeling to a production Docker API (mAP50-95 0.992 / 0.949)",
      ],
      KOR: [
        "신한파이낸스 베트남 대출 서류 프로젝트를 PM 겸 단독 개발로 수행: 글로벌 신한 이노부스트 2026 상위 8개사, 오픈이노베이션 리워드, 한국딥러닝 첫 해외 매출",
        "서연이화 문서 추출 API 개발, 폐쇄망 서버에 배포: 고객 검수 대장 3,920칸 기준 정확도 97.64%",
        "고객사마다 따로 만들던 KIE 프로젝트를 모듈로 묶은 사내 IDP 플랫폼 DeepHub의 분류·자동 스키마 정의·추출 결과 모듈과 UI 개발: 이 플랫폼으로 10개 이상 프로젝트 납품",
        "필기체 OCR 정확도 4.26%p 향상(85.23% → 89.49%), 학습한 가중치를 현대캐피탈 프로젝트에 배포",
        "정부과제(제조혁신) CCTV 계기판 실시간 판독 시스템을 라벨링부터 Docker API 실서비스 배포까지 단독 구축 (mAP50-95 0.992 / 0.949)",
      ],
    },
    // 대표 성과 숫자 타일 (누르면 해당 프로젝트로 이동)
    stats: [
      { id: 'proj-shinhan', value: { ENG: "Top 8", KOR: "상위 8개사" }, who: { ENG: "Shinhan Finance Vietnam", KOR: "신한파이낸스 베트남" }, label: { ENG: "InnoBoost 2026, PM & sole dev", KOR: "이노부스트 2026 · PM 겸 단독 개발" } },
      { id: 'proj-2', value: { ENG: "97.64%", KOR: "97.64%" }, who: { ENG: "Seoyon E-Hwa", KOR: "서연이화" }, label: { ENG: "extraction accuracy (audit ledger)", KOR: "문서 추출 정확도 (검수 대장)" } },
      { id: 'proj-4', value: { ENG: "+4.26 pp", KOR: "+4.26%p" }, who: { ENG: "Hyundai Capital", KOR: "현대캐피탈" }, label: { ENG: "handwriting OCR exact match", KOR: "필기체 OCR 정확도 향상" } },
      { id: 'proj-3', value: { ENG: "0.992", KOR: "0.992" }, who: { ENG: "Gauge reading", KOR: "계기판 판독" }, label: { ENG: "detection mAP50-95, in production", KOR: "검출 mAP50-95, 실서비스" } },
      { id: 'proj-1', value: { ENG: "1,225 / 1,232", KOR: "1,225 / 1,232" }, who: { ENG: "LG Electronics", KOR: "LG전자" }, label: { ENG: "spec cells filled automatically", KOR: "스펙시트 칸 자동 채움" } },
    ],
    // 주요 이력 한눈에 보기 (직함 바로 아래 표시)
    glance: [
      {
        icon: FaGraduationCap,
        title: { ENG: 'Education & Experience', KOR: '학력 및 경력' },
        items: {
          ENG: [
            '2019.09 ~ 2024.06 : University of St Andrews, BSc Mathematics and Computer Science',
            '2024.09 ~ 2025.04 : CareSix, AI/ML Engineer',
            '2025.04 ~ 2025.10 : IBM x RedHat AI Transformation – AX Academy',
            '2025.11 ~ : **Korea Deep Learning**, ML Engineer (current)',
          ],
          KOR: [
            '2019.09 ~ 2024.06 : 세인트 앤드류스 대학교 수학·컴퓨터과학 학사',
            '2024.09 ~ 2025.04 : 케어식스 AI/ML 엔지니어',
            '2025.04 ~ 2025.10 : IBM x RedHat AI Transformation – AX Academy',
            '2025.11 ~ : **한국딥러닝** ML 엔지니어 재직 중',
          ],
        },
      },
      {
        icon: FaTrophy,
        title: { ENG: 'Awards', KOR: '수상내역' },
        items: {
          ENG: [
            'Global Shinhan InnoBoost 2026 (**Top 8** · Open Innovation Reward)',
            '2025 Quantum AI Hackathon (**Excellence Prize**, 1st in qualifier)',
            'Toss NEXT ML Challenge (**30th of 2,206**, résumé-screening pass)',
          ],
          KOR: [
            '글로벌 신한 이노부스트 2026 (**상위 8개사** · 오픈이노베이션 리워드)',
            '2025 퀀텀 AI 해커톤 (**우수상**, 예선 1위)',
            '토스 NEXT ML Challenge (**2,206명 중 30위**, 서류 면제)',
          ],
        },
      },
      {
        icon: FaFlag,
        title: { ENG: 'Activities', KOR: '대내외 활동' },
        items: {
          ENG: [
            'Booth at **Global Shinhan InnoBoost 2026** Demo Day (Korea Deep Learning)',
            'Exhibited at **CES 2025** (CareSix)',
            'Exhibited at FAVA 2024 (CareSix)',
            'Exhibited at J-AGRI Tokyo 2024 (CareSix)',
          ],
          KOR: [
            '**글로벌 신한 이노부스트 2026** 데모데이 부스 참가 (한국딥러닝)',
            '**CES 2025** 전시 참가 (케어식스)',
            'FAVA 2024 전시 참가 (케어식스)',
            'J-AGRI 도쿄 2024 전시 참가 (케어식스)',
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
        ENG: "Planners copied specs from review decks (up to 8 models each) into spec sheets and roadmaps by hand.",
        KOR: "상품기획팀이 검토의뢰서(모델 최대 8개)의 스펙을 스펙시트와 로드맵에 손으로 옮겨 적었습니다.",
      },
      team: { ENG: "Small team: teammates on frontend, all AI development by me", KOR: "소규모 팀: 프론트엔드는 팀원, AI 개발은 전부 본인" },
      role: {
        ENG: "Sole AI developer (teammates on frontend)",
        KOR: "AI 개발 단독 (프론트엔드는 팀원)",
      },
      contribution: {
        ENG: "100% of the AI development: LLM/VLM extraction and mapping pipeline, roadmap generation, FP8 evaluation and model serving, offline installer, demo-server operations and 30+ client requirements",
        KOR: "AI 개발 100%: LLM·VLM 추출·매핑 파이프라인, 로드맵 생성, FP8 평가·모델 서빙, 폐쇄망 설치 번들, 데모 서버 운영, 고객 요구사항 30여 건 대응",
      },
      model: {
        ENG: "VLM on vLLM (FP8) · FastAPI · LangGraph · React/TypeScript · direct OOXML patching · Docker Compose",
        KOR: "VLM (vLLM, FP8) · FastAPI · LangGraph · React/TypeScript · OOXML 직접 패치 · Docker Compose",
      },
      chips: {
        ENG: "VLM on vLLM (FP8) · FastAPI · React / TypeScript · Docker Compose · LangGraph · OOXML patching",
        KOR: "VLM (vLLM, FP8) · FastAPI · React / TypeScript · Docker Compose · LangGraph · OOXML 패치",
      },
      results: {
        ENG: "1,225 of 1,232 cells auto-filled on an 8-model document · FP8: 40% less memory, 19% faster, same accuracy · Agent evaluation 64/64, answering 8 concurrent questions during extraction · Found the cause of runaway LLM output (up to 16,000 tokens) and brought it back to 1,300–1,900",
        KOR: "8개 모델 문서 1,232칸 중 1,225칸 자동 채움 · FP8 전환: 메모리 40% 절감, 응답 19% 단축, 정확도 유지 · 에이전트 평가 64/64 통과, 추출 중에도 동시 질문 8건 응답 · LLM 출력 폭주(최대 16,000토큰) 원인을 찾아 1,300~1,900토큰으로 정상화",
      },
      links: [],
    },
    kdlDocExtraction: {
      problem: {
        ENG: "20 years of quality and process know-how sat in thousands of Excel, PPT and PDF files that nobody could search.",
        KOR: "20년 치 품질·공정 노하우가 검색할 수 없는 엑셀·PPT·PDF 수천 건에 흩어져 있었습니다.",
      },
      team: { ENG: "Solo", KOR: "단독" },
      role: {
        ENG: "Solo: extraction pipeline, general OCR/parser APIs, accuracy grader and on-prem deployment",
        KOR: "단독: 추출 파이프라인, 범용 OCR·Parser API, 정확도 채점기, 폐쇄망 배포",
      },
      contribution: {
        ENG: "100%: sole developer of all 7 extraction types, the accuracy-verification harness, the general OCR/parser APIs, the review UI matching and on-prem deployment",
        KOR: "100%: 문서 7종 추출, 정확도 검수 체계, 범용 OCR·Parser API, 검수 UI 위치 매칭, 폐쇄망 배포까지 단독 수행",
      },
      model: {
        ENG: "Python · FastAPI · LLM on vLLM (KIE) · openpyxl · python-pptx · LibreOffice · MinerU-based document parser · vision LLM (figure-table cross-check) · Docker · Next.js (review UI)",
        KOR: "Python · FastAPI · LLM (vLLM, KIE) · openpyxl · python-pptx · LibreOffice · MinerU 기반 문서 파서 · 비전 LLM (그림 속 표 교차 검증) · Docker · Next.js (검수 UI)",
      },
      chips: {
        ENG: "Python · FastAPI · LLM on vLLM · openpyxl · python-pptx · Docker",
        KOR: "Python · FastAPI · LLM (vLLM) · openpyxl · python-pptx · Docker",
      },
      results: {
        ENG: "97.64% accuracy on the client's 3,920-cell audit ledger (from 90.84%) · process-design mismatches 389 → 3 · review UI source matching 15–41% → 97.1%",
        KOR: "고객 검수 대장 3,920칸 기준 정확도 90.84% → 97.64% · 공정설계 검수 불일치 389 → 3건 · 검수 UI 원문 위치 표시 15~41% → 97.1%",
      },
      lessons: {
        ENG: "Most of the ~210 remaining wrong cells come down to the LLM deciding how much text to copy, which more rules would not fix",
        KOR: "남은 오답 약 210칸은 대부분 LLM이 글을 어디까지 옮길지 판단하는 문제라, 규칙을 더 늘려서는 풀리지 않는 부분",
      },
      links: [],
    },
    kdlGaugeReading: {
      problem: {
        ENG: "Analog gauges had to be read in person, so nobody could watch them around the clock.",
        KOR: "아날로그 계기판은 사람이 직접 가서 읽어야 해서 24시간 지켜볼 수 없었습니다.",
      },
      team: {
        ENG: "Solo",
        KOR: "단독",
      },
      role: {
        ENG: "Solo: data and labeling, model training, deployment",
        KOR: "단독: 데이터·라벨링, 모델 학습, 배포",
      },
      contribution: {
        ENG: "100%: data collection and labeling, model training and the Docker API deployment",
        KOR: "100%: 데이터 수집·라벨링부터 모델 학습, Docker 기반 API 배포까지 전 과정 단독 수행",
      },
      model: {
        ENG: "Two-stage: YOLO26x detection (gauge, 960 px) → YOLO26x-OBB (needle, 128 px) · Python · PyTorch · Ultralytics · X-AnyLabeling · Docker Compose on NVIDIA GPU",
        KOR: "2단계: YOLO26x Detection (계기판, 960px) → YOLO26x-OBB (바늘, 128px) · Python · PyTorch · Ultralytics · X-AnyLabeling · Docker Compose (NVIDIA GPU)",
      },
      chips: {
        ENG: "YOLO26x + YOLO26x-OBB · PyTorch · Ultralytics · Docker Compose",
        KOR: "YOLO26x + YOLO26x-OBB · PyTorch · Ultralytics · Docker Compose",
      },
      results: {
        ENG: "Gauge detection mAP50-95 0.992 · needle mAP50-95 0.949 with oriented boxes (0.930 with standard boxes) · deployed to production",
        KOR: "계기판 검출 mAP50-95 0.992 · 바늘 mAP50-95 0.949 (회전 박스, 일반 박스 0.930) · 실서비스 배포",
      },
      lessons: {
        ENG: "Splitting a tiny-object problem into two stages let each model do one job, and the OBB label carries the needle angle the reading needs, which helped both accuracy and post-processing",
        KOR: "작은 객체 검출을 2단계로 나눠 단계마다 입력 크기를 맞추고, 판독에 필요한 각도를 담는 OBB 라벨을 골라 성능과 후처리 모두 개선",
      },
      links: [],
    },
    kdlOcrResearch: {
      problem: {
        ENG: "Hyundai Capital's document pipeline feeds OCR text into a VLM for key information extraction (KIE), but most documents were handwritten and the OCR read only 68.63% of real handwritten fields correctly (confusing look-alikes such as 0/ㅇ/O), which capped KIE accuracy.",
        KOR: "VLM 기반 서류 처리 파이프라인은 OCR 결과를 프롬프트에 넣어 KIE를 수행하는데, 서류 대부분이 필기체였고 OCR은 실제 손글씨 항목을 68.63%만 맞혀(0/ㅇ/O 등 혼동) KIE 정확도의 병목이 됐습니다.",
      },
      team: { ENG: "2 people", KOR: "2명" },
      role: {
        ENG: "Brought into the VLM-based project to raise handwriting recognition: owned the OCR recognizer (data, training, evaluation) in a team of 2",
        KOR: "VLM 기반 프로젝트에 필기체 인식률 향상 담당으로 투입, 2인 팀에서 OCR Recognizer 전담: 데이터, 학습, 평가",
      },
      contribution: {
        ENG: "85% of the recognizer research",
        KOR: "Recognizer 연구 기여도 85%",
      },
      model: {
        ENG: "Two-stage OCR (text detector → recognizer) · recognizers compared: PARSeq, PP-OCRv5, SVTRv2 · PyTorch · PaddleOCR · MX-Font and Gemini image generation (synthetic data)",
        KOR: "2-stage OCR (텍스트 Detector → Recognizer) · Recognizer 비교: PARSeq, PP-OCRv5, SVTRv2 · PyTorch · PaddleOCR · MX-Font, Gemini 이미지 생성 (합성 데이터)",
      },
      chips: {
        ENG: "PARSeq · PP-OCRv5 · SVTRv2 · PyTorch · PaddleOCR",
        KOR: "PARSeq · PP-OCRv5 · SVTRv2 · PyTorch · PaddleOCR",
      },
      results: {
        ENG: "Exact match 85.23% → 89.49% (+4.26 pp) on 158,898 test samples · handwriting golden set 68.63% → 77.33% · weights deployed to a Hyundai Capital project",
        KOR: "테스트 158,898개 기준 정확도 85.23% → 89.49% (+4.26%p) · 필기체 골든셋 68.63% → 77.33% · 현대캐피탈 프로젝트에 가중치 배포",
      },
      lessons: {
        ENG: "An ablation showed synthetic handwriting added only ~0.2 pp. The gain came from data curation and the training recipe, so I stopped generating more before scaling it up",
        KOR: "ablation 결과 합성 필기체 데이터의 기여는 약 0.2%p. 향상은 데이터 큐레이션과 학습 레시피에서 나왔기 때문에 합성 데이터 추가 생성은 확대 전에 중단",
      },
      links: [],
    },
    kdlDisasterVideo: {
      problem: {
        ENG: "Real CCTV rarely captures the moment a wildfire or flood starts, which detection models need for training.",
        KOR: "탐지 모델 학습에 필요한 산불·침수 발생 순간이 실제 CCTV에는 거의 남아 있지 않습니다.",
      },
      team: { ENG: "Solo", KOR: "단독" },
      role: {
        ENG: "Solo: pipeline, prompts and quality criteria, client feedback",
        KOR: "단독: 파이프라인, 프롬프트·품질 기준, 고객 피드백 대응",
      },
      contribution: {
        ENG: "100%: sole developer of the generation pipeline, automated QA, multi-GPU operation and authoring tool",
        KOR: "100%: 생성 파이프라인, 자동 검수, 다중 GPU 운영, 저작툴까지 단독 수행",
      },
      model: {
        ENG: "FLUX.2-dev (image edit) → Wan2.2-I2V (image-to-video, 720p) → RIFE 4.7 (interpolation) · VLM + OpenCV (QA) · FastAPI",
        KOR: "FLUX.2-dev (이미지 편집) → Wan2.2-I2V (이미지→영상, 720p) → RIFE 4.7 (프레임 보간) · VLM + OpenCV (검수) · FastAPI",
      },
      chips: {
        ENG: "FLUX.2-dev · Wan2.2-I2V · RIFE 4.7 · VLM + OpenCV · FastAPI",
        KOR: "FLUX.2-dev · Wan2.2-I2V · RIFE 4.7 · VLM + OpenCV · FastAPI",
      },
      results: {
        ENG: "~190 wildfire and ~150 flood videos passed QA · 572 of 1,768 staged videos auto-selected · ~30 attempts/hour on 4 GPUs",
        KOR: "산불 190여 건·침수 150여 건 검수 통과 · 단계별 영상 1,768건 중 572건 자동 선별 · GPU 4장 기준 시간당 약 30건",
      },
      lessons: {
        ENG: "Generative models follow a described state well but not the speed of change, so I put the start state in the image and only the change in the prompt",
        KOR: "생성 모델은 묘사한 상태는 잘 따르지만 변화 속도는 잘 못 따라서, 시작 상태는 이미지로 주고 프롬프트에는 변화만 기술",
      },
      links: [],
    },
    sense1Vet: {
      problem: {
        ENG: "The collar's heart-rate reading broke down whenever the dog shivered or moved, and at home there is no ECG to check it against.",
        KOR: "강아지가 떨거나 움직이면 목걸이의 심박 측정값이 크게 흔들렸고, 집에서는 비교할 ECG도 없었습니다.",
      },
      team: { ENG: 'Solo on the algorithm, working with the hardware and production teams', KOR: '알고리즘 단독, 하드웨어·생산팀과 협업' },
      role: {
        ENG: "Sole developer of the heart-rate algorithm, with the hardware and production teams",
        KOR: "심박 알고리즘 단독 개발, 하드웨어·생산팀과 협업",
      },
      contribution: {
        ENG: '100%: BCG signal processing, model design and training, and validation',
        KOR: '100%: BCG 신호처리, 모델 설계·학습, 검증까지 전 과정 단독 수행',
      },
      model: {
        ENG: 'LSTM (TensorFlow / Keras) · FFT · wavelet denoising · IJK peak detection · SHAP · Python / NumPy',
        KOR: 'LSTM (TensorFlow / Keras) · FFT · 웨이블릿 노이즈 제거 · IJK 피크 검출 · SHAP · Python / NumPy',
      },
      chips: {
        ENG: "LSTM (TensorFlow / Keras) · FFT · wavelet denoising · SHAP · Python",
        KOR: "LSTM (TensorFlow / Keras) · FFT · 웨이블릿 노이즈 제거 · SHAP · Python",
      },
      results: {
        ENG: '96% accuracy on readings that trembling and motion had made unreliable',
        KOR: '떨림·움직임으로 불안정하던 심박 측정을 정확도 96%까지 개선',
      },
      lessons: {
        ENG: "I fed 15 engineered cycle features to the LSTM as a 15-step sequence, but the order of those features means nothing, so an LSTM was the wrong fit. Next time: an MLP or GBM on the features, and an LSTM only over sequences of consecutive cycles",
        KOR: "피처 15개를 길이 15짜리 순서 데이터처럼 LSTM에 넣었지만, 피처 나열 순서에는 의미가 없어 LSTM에 맞지 않는 구조. 다음에는 피처는 MLP·GBM으로, LSTM은 연속된 심박 주기 시퀀스에 사용",
      },
      links: [],
    },
    lawIntelligence: {
      problem: {
        ENG: "General chatbots answer Korean legal questions without pointing to real laws or court cases, so there is no way to check where an answer came from.",
        KOR: "일반 챗봇은 실제 법령·판례 없이 법률 질문에 답해서, 답의 근거를 확인할 수 없었습니다.",
      },
      team: { ENG: '5 members', KOR: '5명' },
      role: {
        ENG: "Team lead of 5; built the core AI",
        KOR: "5명 팀장, 핵심 AI 직접 구현",
      },
      contribution: {
        ENG: 'Led the team and built the core AI: developed the RAG system and designed the LangChain pipeline',
        KOR: '팀을 이끌며 핵심 AI를 직접 구현: RAG 개발 및 LangChain 파이프라인 설계·구성',
      },
      model: {
        ENG: 'Llama-3 · RAG (bge-m3 embeddings, FAISS / ChromaDB) · LangChain agents · FastAPI · AWS EC2 · Docker',
        KOR: 'Llama-3 · RAG (bge-m3 임베딩, FAISS·ChromaDB) · LangChain 에이전트 · FastAPI · AWS EC2 · Docker',
      },
      chips: {
        ENG: "Llama-3 · RAG (bge-m3, FAISS) · LangChain · FastAPI · AWS EC2",
        KOR: "Llama-3 · RAG (bge-m3, FAISS) · LangChain · FastAPI · AWS EC2",
      },
      results: {
        ENG: 'Finished a working system and demoed it at the final presentation of the IBM x RedHat program',
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
    ppassPlatform: {
      problem: {
        ENG: "Each new KIE client meant rebuilding classification, extraction and the review screen from scratch.",
        KOR: "KIE 고객사가 생길 때마다 분류·추출·검수 화면을 처음부터 다시 만들어야 했습니다.",
      },
      role: {
        ENG: "Owned classification, automatic schema, extraction results and the UI; teammates designed the other modules",
        KOR: "분류·자동 스키마·추출 결과·UI 담당, 나머지 모듈은 팀원이 설계",
      },
      contribution: {
        ENG: "50%: classification, automatic schema definition, extraction results and the UI",
        KOR: "50%: 분류, 자동 스키마 정의, 추출 결과, UI",
      },
      model: {
        ENG: "VLM on vLLM · OCR · FastAPI · Next.js / React / TypeScript · MongoDB · SeaweedFS · Docker Compose",
        KOR: "VLM (vLLM) · OCR · FastAPI · Next.js / React / TypeScript · MongoDB · SeaweedFS · Docker Compose",
      },
      chips: {
        ENG: "VLM on vLLM · OCR · FastAPI · Next.js / React · MongoDB",
        KOR: "VLM (vLLM) · OCR · FastAPI · Next.js / React · MongoDB",
      },
      results: {
        ENG: "10+ client projects delivered on the platform · still in use · Shinhan Finance Vietnam project built on top of it",
        KOR: "이 플랫폼으로 10개 이상 프로젝트 납품 · 지금도 사용 중 · 신한파이낸스 베트남 프로젝트도 이 플랫폼 위에서 개발",
      },
      links: [],
    },
    shinhanVietnam: {
      problem: {
        ENG: "Underwriters compared ID cards and bank statements by eye and re-typed the numbers, which was slow and error-prone.",
        KOR: "심사역이 신분증과 은행거래명세서를 눈으로 대조하고 숫자를 손으로 옮겨 적어 느리고 실수가 잦았습니다.",
      },
      team: {
        ENG: "Korea Deep Learning: ran the project as PM and sole developer on top of the in-house IDP platform (DeepHub)",
        KOR: "한국딥러닝: 사내 IDP 플랫폼(DeepHub) 위에서 PM 겸 단독 개발로 수행",
      },
      role: {
        ENG: "PM and sole developer on the in-house DeepHub platform: client communication, design, all code and client documents",
        KOR: "사내 DeepHub 플랫폼 위에서 PM 겸 단독 개발: 고객사 소통, 설계, 코드 전부, 고객 제출 문서",
      },
      contribution: {
        ENG: "100%: from client communication and design to all Vietnam project code (backend 25 commits / +3,556 lines, frontend 43 commits / +2,890 lines) and every client deliverable",
        KOR: "100%: 고객사 소통·설계부터 베트남 프로젝트 코드 전부(백엔드 25커밋·+3,556줄, 프론트엔드 43커밋·+2,890줄)와 고객 제출 문서 전부",
      },
      model: {
        ENG: "VLM on vLLM · FastAPI · Next.js 16 / React 19 / TypeScript · MongoDB · SeaweedFS · NCP",
        KOR: "VLM (vLLM) · FastAPI · Next.js 16 / React 19 / TypeScript · MongoDB · SeaweedFS · NCP",
      },
      chips: {
        ENG: "VLM on vLLM · FastAPI · Next.js / React · MongoDB · NCP",
        KOR: "VLM (vLLM) · FastAPI · Next.js / React · MongoDB · NCP",
      },
      results: {
        ENG: "Top 8 of the participating companies · Open Innovation Reward (VND 200,000,000) · the project became Korea Deep Learning's first overseas revenue",
        KOR: "참가 기업 중 상위 8개사 · 오픈이노베이션 리워드(VND 200,000,000) · 실제 사업으로 이어져 한국딥러닝 첫 해외 매출",
      },
      lessons: {
        ENG: "The VLM only reads and code makes every decision, because a prompt alone is a weak guarantee. Limits: image-forgery forensics was scoped out in favor of logical-consistency checks, and no automated accuracy report against the 92% target was built (UAT was evaluated manually)",
        KOR: "VLM은 읽기만 하고 판단은 전부 코드가 하도록 설계. 프롬프트만으로는 보장이 약하기 때문. 한계: 이미지 위변조 포렌식은 범위에서 빼고 논리 일관성 검증으로 대체했고, 92% 목표 대비 자동 정확도 리포트는 없음(UAT는 수동 평가)",
      },
      links: [],
    },
    quantumAIHackathon: {
      team: { ENG: '4 members', KOR: '4명' },
      role: { ENG: '', KOR: '' },
      contribution: { ENG: '', KOR: '' },
      results: {
        ENG: '1st in the preliminaries; Excellence Prize (₩750,000) in the finals, the 3rd-highest award, given to 2 teams',
        KOR: '예선 1위, 본선 우수상(상금 75만 원, 대상·최우수상 다음 등급, 2팀 수상)',
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
        ENG: 'Trained the custom YOLOv8 model and built the data preprocessing for the team\'s reckless-driving dataset',
        KOR: '커스텀 YOLOv8 모델 학습 및 팀 수집 난폭운전 데이터 전처리 담당',
      },
      model: {
        ENG: 'Custom YOLOv8 (vehicle detection) + custom ViT (driving-behavior classification) + OCR (license plates) + LLM-based report summarization',
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
        ENG: 'Toss: feature preprocessing, model training and inference',
        KOR: '토스: 피처 전처리 → 모델 학습 → 추론 전 과정 담당',
      },
      contribution: { ENG: '', KOR: '' },
      model: {
        ENG: 'Toss CTR: an XGBoost + LightGBM + CatBoost ensemble',
        KOR: '토스 CTR: 부스팅 모델 3종(XGBoost, LightGBM, CatBoost) 앙상블',
      },
      results: {
        ENG: 'Toss NEXT ML Challenge: finished 30th of 2,206 participants, earning a résumé-screening pass for Toss hiring',
        KOR: '토스 NEXT ML Challenge 참가자 2,206명 중 최종 30위, 토스 채용 서류전형 면제',
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
    const stack = (m.chips || m.model)?.[lang];
    const fullStack = m.chips ? m.model?.[lang] : '';
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
      card: {
        overview: m.problem?.[lang], results: m.results?.[lang], team: m.team?.[lang], role: m.role?.[lang],
        contribution: m.contribution?.[lang], stack, fullStack, lessons: m.lessons?.[lang],
      },
      labels: {
        overview: t[lang].metaProblem, work: t[lang].metaWork, results: t[lang].metaResults,
        role: t[lang].metaRoleTeam, team: t[lang].metaTeam, stack: t[lang].metaModel, contribution: t[lang].metaContribution,
        lessons: t[lang].metaLessons, showDetails: t[lang].showDetails, hideDetails: t[lang].hideDetails,
      },
    };
  };

  const [expandedSections, setExpandedSections] = useState({
    // 핵심(경력·주요 프로젝트)은 펼쳐 두고, 부가 정보(기타 프로젝트·전시·사진)는 접어 둠
    experience: {expanded: true, entries: {koreaDeepLearning: true, aiAlgorithm: true, appdeveloper: true, mathematician: true}},
    education: {expanded: true, entries: {}},
    skills: {expanded: true},
    engagements: {expanded: true, entries: {}},
    projects: {expanded: true, entries: {
      shinhanVietnam: true, ppassPlatform: true, kdlProductPlanning: true, kdlDocExtraction: true, kdlDisasterVideo: true,
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
    "**VLM document extraction & validation:** Shinhan Finance Vietnam loan-document project as PM and sole developer (top 8 at InnoBoost 2026, the company's first overseas revenue)",
    "**IDP platform (KIE):** classification, automatic schema and extraction modules of DeepHub; 10+ client projects shipped on it",
    "**LLM/VLM document automation:** Seoyon E-Hwa quality documents (97.64% on the client's audit ledger) and LG Electronics spec sheets (1,225 / 1,232 cells)",
    "**Handwriting OCR:** recognizer fine-tuning, +4.26 pp exact match, weights deployed in a Hyundai Capital project",
    "**Computer vision:** CCTV gauge reading with YOLO and oriented boxes (mAP50-95 0.992), in production",
    "**Generative video:** wildfire and flood CCTV videos with FLUX.2 and Wan2.2, checked by an automated VLM QA",
    "**Serving & deployment:** vLLM (FP8), FastAPI and Docker on clients' on-prem and air-gapped GPU servers",
  ];
  const work_kdl_details_KOR = [
    "**VLM 문서 추출·검증:** 신한파이낸스 베트남 대출 서류 프로젝트, PM 겸 단독 개발 (이노부스트 2026 상위 8개사, 회사 첫 해외 매출)",
    "**IDP 플랫폼 (KIE):** DeepHub의 분류·자동 스키마·추출 모듈 개발, 10개 이상 프로젝트 납품",
    "**LLM·VLM 문서 자동화:** 서연이화 품질 문서(고객 검수 대장 기준 97.64%), LG전자 스펙시트(1,232칸 중 1,225칸)",
    "**필기체 OCR:** Recognizer fine-tuning으로 정확도 +4.26%p, 현대캐피탈 프로젝트에 가중치 배포",
    "**컴퓨터 비전:** YOLO와 회전 박스로 CCTV 계기판 판독 (mAP50-95 0.992), 실서비스 배포",
    "**생성형 영상:** FLUX.2·Wan2.2로 산불·침수 CCTV 영상 생성, VLM 자동 검수",
    "**서빙·배포:** vLLM(FP8), FastAPI, Docker로 고객 서버·폐쇄망 GPU에 납품",
  ];

  // ===== Projects – Korea Deep Learning =====
  const kdl_planning_ENG = [
    "Automated LG Electronics' manual flow from product-planning review decks (PPT) to the master spec sheet (Excel) and product roadmap, with LLM/VLM extraction, rule-based mapping and a human-in-the-loop review console used by the client's planners.",
    "Conflicts between sources go to human review with per-source evidence; fixed multi-model documents so 1,225 of 1,232 cells fill automatically.",
    "Wrote into large Excel files by patching sheet XML directly, keeping original formatting and avoiding the bloat openpyxl caused (a 1.5MB file growing past 1GB).",
    "Generated product roadmaps by fixing lanes from PPT coordinates and reading only quarters with a VLM, with rule-based date normalization and carry-over of schedules from the previous roadmap.",
    "Evaluated FP8 vs bf16 on a 28-document set with a corrected answer key: same accuracy, 40% less memory, 19% faster.",
    "Shipped an offline installer (install / update / rollback / backup) for an air-gapped server without sudo, ran the demo server, and delivered 30+ client requirements tracked by ID and priority, including a same-day IP-restriction security request.",
  ];
  const kdl_planning_KOR = [
    "LG전자 상품기획팀이 수작업으로 하던 '검토의뢰서(PPT) → 마스터 스펙시트(Excel) → 제품 로드맵' 과정을 LLM·VLM 추출 + 규칙 매핑 + 사람 검수(HITL) 콘솔로 자동화, 고객 실무자가 실제 사용.",
    "원천 간 값이 충돌하면 근거와 함께 사람 검수로 올리고, 다중 모델 문서 처리를 고쳐 1,232칸 중 1,225칸 자동 채움.",
    "시트 XML을 직접 패치해 대형 엑셀의 서식을 유지하고, openpyxl 저장 시 1.5MB 파일이 1GB 넘게 부풀던 문제 제거.",
    "로드맵 생성: 레인은 PPT 좌표로 확정하고 분기만 VLM으로 판독, 날짜는 규칙으로 정규화하고 이전 로드맵의 일정·상태를 이어받음.",
    "편향을 제거한 정답셋(28건)으로 FP8 vs bf16 평가: 정확도 동일, 메모리 40% 절감, 응답 19% 단축.",
    "sudo 없는 폐쇄망 서버용 설치 번들(install/update/rollback/backup) 제작, 데모 서버 운영, 고객 요구사항 30여 건을 ID·우선순위로 관리해 반영(IP 제한 보안 요청 당일 처리).",
  ];


  const kdl_extract_ENG = [
    "Built an extraction API that turns 20 years of automotive parts maker Seoyon E-Hwa's quality and process documents (thousands of Excel/PPT/PDF files in Korean, English and Chinese) into DB-ready data across 7 document types; delivered to the client's offline GPU server.",
    "Instead of the team's usual image-based VLM extraction, used the native structure of PPTX, XLSX and searchable PDF (original text, coordinates, tables, merged cells) and ran KIE with a text LLM, avoiding OCR errors and keeping every value traceable to the source.",
    "Also built general-purpose OCR and document-parser APIs for the web UI that return text with bounding-box coordinates, with a priority gate so UI jobs never block the main extraction.",
    "Deterministic first: 5 Excel types are parsed from cell borders, merges and styles without an LLM, so results are identical every run; LLMs only for free-form reports and images.",
    "Built a grader that exactly reproduces the client's audit-ledger accuracy, plus an LLM/parser response cache to separate code effects from model noise; no change shipped if any correct cell regressed.",
    "Recovered attachment names by parsing OLE binaries and reading text inside icon images: 244 → 1,182.",
    "Accepted OCR from small images only when two models agree (≥50% trigram overlap), which separates hallucinated tables (0–0.16) from real ones (0.57–1.0).",
    "Replaced model-based source highlighting (15–41% accurate) in the review UI with rule-based word-coordinate matching: 97.1% of table cells matched.",
  ];
  const kdl_extract_KOR = [
    "자동차 부품 제조사 서연이화의 20년 치 품질·공정 문서(엑셀·PPT·PDF 수천 건, 국·영·중 혼재)를 DB 적재용 데이터로 뽑는 추출 API 개발, 문서 7종 지원, 고객 폐쇄망 GPU 서버에 납품.",
    "기존에 쓰던 이미지 기반 VLM 추출 대신, PPTX·XLSX·searchable PDF의 문서 특성(원문 텍스트·좌표·표·병합 구조)을 직접 활용해 LLM으로 KIE 수행: OCR 오류 없이 원문 그대로 추출하고 모든 값을 원문 위치로 추적 가능.",
    "웹 화면용 범용 OCR·문서 Parser API 개발(텍스트와 bbox 좌표 반환), 우선순위 게이트로 화면 작업이 본 추출을 막지 않게 설계.",
    "결정론 우선: 엑셀 계열 5종은 LLM 없이 셀 테두리·병합·서식으로 구조를 복원해 실행마다 같은 결과, LLM은 자유 양식 대책서와 그림에만 사용.",
    "고객 검수 대장 정확도를 그대로 재현하는 채점기와 LLM·파서 응답 캐시로 '코드 효과'와 '모델 잡음'을 분리, 정답 칸이 하나라도 깨지면 반영하지 않음.",
    "OLE 바이너리를 직접 해석하고 아이콘 그림 속 글자를 판독해 첨부 파일명 244 → 1,182개 복원.",
    "작은 그림 OCR은 두 모델의 판독 일치도(3글자 묶음 50% 이상)로만 채택해 지어낸 표(0~0.16)와 진짜 표(0.57~1.0)를 분리.",
    "검수 UI의 원문 위치 표시를 모델 질의(15~41%)에서 낱말 좌표 규칙 매칭으로 바꿔 표 칸 97.1% 매칭.",
  ];

  const kdl_ocr_ENG = [
    "Project pipeline: OCR (text + page rotation angle) → rotation correction → VLM document classification on the deskewed page → OCR text added to the prompt → VLM key information extraction. With a high share of handwritten documents, OCR accuracy limited extraction quality, so I was brought in to train the OCR recognizer for handwriting.",
    "Researched the recognizer stage of the company's two-stage OCR (text detector → recognizer) for Korean handwriting, switching and comparing architectures: PARSeq, PP-OCRv5 and SVTRv2 (trained on 40.86M filtered images).",
    "Built an auto-labeling pipeline from client ROI boxes and ground truth (box-center-in-ROI, then exact → space-free substring matching): about 80k handwriting labels without manual review.",
    "Built a 15,808-sample handwriting golden set from real client forms with every label re-checked by hand: samples without valid ground truth (printed form labels) excluded, fully struck-out text excluded, and each sample tagged by difficulty (boundary: ambiguous like 이/01/OI; hard: genuinely bad handwriting), noise, strike-through and text type/length so errors can be sliced.",
    "Analyzed errors by confusion pair (0/ㅇ/O, ㄷ/ㄹ, l/ㅣ/1) and jamo level; found and fixed a metric bug that undercounted final-consonant accuracy.",
    "Generated synthetic handwriting with MX-Font (38 styles, ascender/descender-aware word composition) and Gemini image generation for names, addresses and hard cases, then measured its real effect with ablations and gain/drop case analysis.",
    "Fine-tuned PARSeq on a curated 11.6M-sample mix (6.15M handwriting / 5.45M printed): best on 13 of 14 test datasets, and trained the weights deployed to a Hyundai Capital project.",
    "Built a handwriting/printed classifier on the frozen PARSeq encoder with attention pooling (85% accuracy).",
    "Other metrics on the 158,898-sample test set: CER 7.52% → 5.09%, handwriting +5.49 pp.",
  ];
  const kdl_ocr_KOR = [
    "프로젝트 파이프라인: OCR(텍스트 추출·회전각 도출) → 회전 보정 → 0°로 정렬한 문서로 VLM 문서 분류 → OCR 결과를 프롬프트에 포함 → VLM으로 KIE 추출. 필기체 서류 비중이 높아 OCR 인식률이 추출 품질을 좌우했고, 필기체 인식률 향상을 위해 OCR Recognizer 학습 담당으로 투입.",
    "사내 2-stage OCR(텍스트 Detector → Recognizer) 중 Recognizer의 한국어 필기체 성능 개선 연구, 아키텍처를 바꿔 가며 비교: PARSeq, PP-OCRv5, SVTRv2(필터링한 4,086만 장 학습).",
    "고객 ROI 박스와 정답(GT)으로 오토라벨링 파이프라인 구축(bbox 중심이 ROI 안 → 정확 일치 → 띄어쓰기 제거 부분 일치): 검수 없이 필기체 라벨 약 8만 장.",
    "실제 고객 서식에서 필기체 골든셋 15,808개 구축, 모든 라벨을 직접 재검수: 정답이 없는 샘플(인쇄된 서식 문구)과 전체를 두 줄로 지운 텍스트는 제외, 난이도(boundary: 이/01/OI처럼 애매한 글자, hard: 실제 악필)·노이즈·취소선·문자 유형·길이로 태깅해 오류를 구간별로 분석 가능하게 설계.",
    "헷갈리는 글자 쌍(0/ㅇ/O, ㄷ/ㄹ, l/ㅣ/1)과 초성·중성·종성 단위로 오류 분석, 종성 정확도를 낮게 계산하던 지표 버그 발견·수정.",
    "합성 필기체 생성: MX-Font(필기체 38종, ascender/descender 정렬 단어 합성) → Gemini 이미지 생성(이름·주소·어려운 케이스), ablation과 gain/drop 케이스 분석으로 실제 효과 검증.",
    "필기체 615만 / 인쇄체 545만, 총 1,160만 장으로 데이터를 구성해 PARSeq fine-tuning: 테스트 14종 중 13종 1위, 현대캐피탈 프로젝트 배포 가중치 학습.",
    "PARSeq 인코더를 고정하고 attention pooling을 붙인 필기체/인쇄체 분류기 개발(정확도 85%).",
    "테스트 158,898개 기준 기타 지표: CER 7.52% → 5.09%, 필기체 +5.49%p.",
  ];

  const kdl_gauge_ENG = [
    "Built a real-time two-stage pipeline that reads analog gauges from factory CCTV (1920×1080): YOLO26x detects the gauge (960 px), the gauge is cropped to about 60×60 px, and YOLO26x-OBB detects the needle's position and rotation (128 px).",
    "Instead of searching the full FHD frame for a thin needle, cropped the gauge first and found the needle on a small input, which improved both accuracy and inference speed.",
    "Designed and ran a semi-automatic labeling loop (a small hand-labeled set in X-AnyLabeling → first YOLO model → auto-labeling and review → final training) to build 10,834 gauge and 9,594 needle images solo.",
    "Mixed about 7,000 on-site CCTV frames with a public gauge dataset for variety in gauge types, and built the needle set from Stage 1 crops so training matched the real inference input.",
    "Gauge detection reached mAP50-95 0.992 (precision and recall 0.987), trained with cosine LR, AMP, early stopping and resumable checkpoints.",
    "Compared standard boxes and oriented boxes (OBB) for the needle under identical settings with ±180° rotation augmentation: OBB raised mAP50-95 from 0.930 to 0.949 and outputs the needle angle directly, so it was adopted.",
    "Deployed the API server with Docker Compose on an allocated NVIDIA GPU, with a /health check, restart: unless-stopped for automatic recovery, and ports and container names in env files for per-environment deployment.",
  ];
  const kdl_gauge_KOR = [
    "제조 현장 CCTV(1920×1080)에서 아날로그 계기판을 실시간으로 판독하는 2단계 파이프라인 구축: YOLO26x로 계기판 검출(960px) → 약 60×60px로 잘라 YOLO26x-OBB로 바늘의 위치·회전 방향 검출(128px).",
    "FHD 프레임 전체에서 가는 바늘을 바로 찾는 대신, 계기판만 잘라 작은 입력에서 바늘을 찾게 해 정확도와 추론 속도를 모두 개선.",
    "반자동 라벨링 루프 설계·운영: X-AnyLabeling 소량 수동 라벨 → 1차 YOLO 학습 → 오토라벨링·검수 → 최종 학습으로 계기판 10,834장·바늘 9,594장 데이터셋을 단독 구축.",
    "현장 CCTV 프레임 약 7,000장에 공개 계기판 데이터셋을 섞어 계기판 형태를 다양하게 늘리고, 바늘 데이터는 Stage 1 결과로 잘라낸 이미지로 만들어 실제 추론과 같은 입력 분포로 학습.",
    "계기판 검출 mAP50-95 0.992 (Precision·Recall 0.987), cosine LR·AMP·early stopping·체크포인트 재개 학습 적용.",
    "바늘 검출을 같은 조건에서 일반 박스와 회전 박스(OBB)로 비교(회전 ±180° 증강): OBB가 mAP50-95 0.930 → 0.949로 높고 판독에 쓸 각도를 직접 출력해 최종 채택.",
    "Docker Compose로 GPU를 할당한 API 서버 배포: /health 헬스체크, restart: unless-stopped 자동 복구, 포트·컨테이너명 env 분리로 환경별 배포.",
  ];


  const kdl_video_ENG = [
    "Built a generative pipeline that turns real wildfire-watch and urban-flood CCTV stills into 'disaster starting and spreading' training videos: FLUX.2 draws the start state, Wan2.2 animates it, RIFE interpolates to 10 s.",
    "Removed sudden first-frame jumps by design: FLUX draws each stage's start state and Wan only grows it, instead of prompting for gradual change.",
    "Blended composites with tone-matching on unchanged pixels, masks on changed regions only and LAB hue correction for smoke.",
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
    "**Deep learning (LSTM):** sole developer of the heart-rate model for the Sense1 Vet dog wearable (TensorFlow / Keras), 96% accuracy on readings that trembling and motion had made unreliable",
    "**Signal processing (BCG):** FFT and wavelet denoising, IJK-peak periodicity as features, and unsupervised peak detection to reduce dependence on ECG",
    "**Validation:** statistical checks of every change (Python, NumPy) and SHAP feature importance",
    "**Exhibitions:** exhibited with CareSix at J-AGRI Tokyo, FAVA 2024 and CES 2025",
  ];
  const work_ai_details_KOR = [
    "**딥러닝 (LSTM):** Sense1 Vet 반려견 웨어러블 심박 모델 단독 개발(TensorFlow / Keras), 떨림·움직임으로 불안정하던 측정을 정확도 96%까지 개선",
    "**신호처리 (BCG):** FFT·웨이블릿 노이즈 제거, IJK 피크 주기성 피처화, 비지도 피크 검출로 ECG 의존도 감소",
    "**검증:** 개선마다 Python·NumPy 통계 검증, SHAP으로 피처 중요도 분석",
    "**전시:** 케어식스로 J-AGRI 도쿄, FAVA 2024, CES 2025 참가",
  ];


  const work_app_title = lang === 'ENG' ? "App Developer, CareSix Co., LTD" : "앱 개발자, 케어식스";
  const work_app_details_ENG = [
    "**Android (Kotlin):** Sense1 Vet production-line app that maps each device's NFC tag, QR code and barcode into a CSV so every unit can be traced",
    "**Flutter · Bluetooth:** Cotons AI app that records BCG, 6-axis motion and temperature data over Bluetooth",
  ];
  const work_app_details_KOR = [
    "**Android (Kotlin):** Sense1 Vet 생산 라인용 앱, 기기별 NFC 태그·QR·바코드를 CSV로 매핑해 제품마다 이력 추적",
    "**Flutter · 블루투스:** BCG·6축 센서·체온 데이터를 블루투스로 수집하는 Cotons AI 앱",
  ];

  const work_math_title = lang === 'ENG' ? "Mathematician, CareSix Co., LTD" : "수학 리서처, 케어식스";
  const work_math_details_ENG = [
    "**Signal analysis (FFT):** filtered noise from BCG measurements with a Fourier transform in Python",
    "**Statistical testing:** checked whether each algorithm change actually helped (Python, NumPy)",
  ];
  const work_math_details_KOR = [
    "**신호 분석 (FFT):** Python 푸리에 변환으로 BCG 측정 노이즈 제거",
    "**통계 검증:** 알고리즘을 바꿀 때마다 실제 개선인지 Python·NumPy로 검증",
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
    'Attended for HRG as Lead Manager and demonstrated a wearable cattle health monitor, a CES 2025 Innovation Awards winner, to visitors.',
  ];
  const jAgri_KOR = [
    'HRG 리드 매니저로 참가해 CES 2025 혁신상 수상작인 착용형 소 건강 모니터를 방문객에게 시연.',
  ];

  const fava_media = (
    <div key="fava-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={favaImage1} alt="Fava Exhibition 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={favaImage2} alt="Fava Exhibition 2" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const fava_ENG = [
    'Ran the CareSix booth and demonstrated the Sense1 Pro dog wearable and the Sense1 Guardian to vets from across Asia.',
  ];
  const fava_KOR = [
    '케어식스 부스에서 Sense1 Pro(반려견 웨어러블)와 Sense1 Guardian을 아시아 각국 수의사에게 시연.',
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
    'Demonstrated CareSix\'s wearable animal-health monitors to visitors.',
  ];
  const ces_KOR = [
    'CES 2025 초청 전시 (Venetian Suite 29-225).',
    '케어식스의 동물 헬스 웨어러블을 방문객에게 시연.',
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
    "Team project: a system that turns dashcam video into a ready-to-file reckless-driving report.",
    "My part: trained the vehicle detector (custom YOLOv8, Ultralytics) and preprocessed the team's dataset.",
    "The system also used a ViT to classify driving behavior from consecutive frames (cut-ins, hard braking, speeding) and OCR to read plates.",
    "The app fills in the plate number, location and violation type; the user adds details and files the report.",
  ];

  const hackathon_KOR = [
    "팀 프로젝트: 블랙박스 영상으로 난폭운전 신고서를 자동으로 채워 주는 시스템.",
    "담당: 차량 검출 모델(커스텀 YOLOv8, Ultralytics) 학습과 팀 데이터셋 전처리.",
    "시스템은 ViT로 연속 프레임의 운전 행동(끼어들기, 급제동, 과속)을 분류하고, OCR로 번호판을 인식.",
    "앱이 차량번호·위치·위반 유형을 채워 주면 사용자가 내용을 보태 신고.",
  ];

  // ===== Projects – Main =====

  const pj_sense1_ENG = [
    "Built canine heart-rate estimation from ballistocardiogram (BCG) signals with an LSTM (TensorFlow / Keras), as sole developer.",
    "Denoised raw BCG with FFT and wavelet decomposition, and modeled the periodicity of IJK peaks as domain features.",
    "Applied unsupervised IJK peak detection to reduce dependence on ECG reference signals, and validated each improvement statistically with Python and NumPy.",
    "Raised accuracy to 96% on readings that trembling and motion had made unreliable; worked with hardware and production teams on signal quality.",
  ];

  
  const pj_sense1_KOR = [
    "TensorFlow/Keras LSTM으로 BCG 신호 기반 반려견 심박 추정 알고리즘을 개발, 전 과정 단독 수행.",
    "FFT·웨이블릿 분해로 원시 BCG 노이즈를 제거하고, IJK 피크의 주기성을 수학적으로 모델링해 도메인 피처로 반영.",
    "비지도 IJK 피크 검출로 ECG 기준 신호 의존도를 줄이고, Python·NumPy 통계 분석으로 개선 효과 검증.",
    "떨림·움직임으로 불안정하던 측정을 정확도 96%까지 개선, 하드웨어·생산팀과 신호 품질 개선.",
  ];




  const law_ENG = [
    "Built a Korean legal AI assistant combining Llama-3 with RAG over statutes and precedents from the National Law Information System.",
    "Designed the retrieval pipeline: legal-text cleaning and chunking, bge-m3 embeddings (1024-d), FAISS / ChromaDB search; served with FastAPI on AWS EC2 and Docker.",
    "Coordinated retrieval, reasoning and drafting with LangChain agents, using tool routing and session memory that reuses verified citations.",
    "Iterative RAG with CoT, role-based (plaintiff / defendant / bench) and ReAct prompting, ending in conclusions with explicit citations.",
    "Evaluated responses qualitatively for factual consistency and legal validity.",
  ];
  
  const law_KOR = [
    "국가법령정보시스템의 법령·판례를 기반으로 Llama-3와 RAG를 결합한 한국어 법률 AI 어시스턴트 개발.",
    "검색 파이프라인 설계: 법률 텍스트 정제·청킹, bge-m3 임베딩(1024차원), FAISS·ChromaDB 검색, FastAPI 서빙 및 AWS EC2·Docker 배포.",
    "LangChain 에이전트로 검색·추론·문서 작성을 조율하고, 툴 라우팅과 검증된 인용을 재사용하는 세션 메모리 구현.",
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
    'Built an ELIZA-style chatbot in Java driven by scripts of keywords, decomposition rules and reassembly rules, with three personas (psychologist, politician, five-year-old) and regex pre- and post-substitutions for synonyms.',
    'Split the engine into separate classes: Eliza Engine (input and response), Decomposition Engine (regex pattern matching) and Reassembly Engine (rule-based responses).',
    'Matched keywords by priority and used regex patterns to take sentences apart and put them back together.',
    'Used Mercurial for version control and resolved merge conflicts (hg resolve, hg merge) by hand.',
    'Tuned keyword priorities through repeated testing; post-substitution still produced some off answers.',
  ];
  const eliza_KOR = [
    'Java로 키워드·분해 규칙·재조립 규칙 기반 스크립팅 시스템을 구현, 심리학자/정치인/5세 어린이 3개 페르소나를 시뮬레이션. 정규식을 활용한 전/후 치환으로 문장 변환·동의어 처리.',
    'Eliza Engine(입력 처리/응답 생성), Decomposition Engine(정규식 패턴 매칭), Reassembly Engine(규칙 기반 응답 구성) 등 모듈형 아키텍처.',
    '우선순위 기반 키워드 매칭과 정규식 패턴으로 문장을 분해·재조립.',
    'Mercurial 기반 협업/버전관리, 충돌 해결(hg resolve/merge) 및 수동 편집.',
    '반복 테스트로 키워드 우선순위를 조정해 응답 정확도 개선. 후치환에서 답이 어긋나는 문제는 남음.',
  ];

  const royal_media = (
    <div key="RoyalUr-images" style={{ display:'flex', overflowX:'auto', whiteSpace:'nowrap', gap:'10px', padding:'10px 0' }}>
      <img src={royalUrImage1} alt="RoyalUr Project 1" style={{ height: '400px', borderRadius: '8px' }} />
      <img src={royalUrImage2} alt="RoyalUr Project 2" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  const royal_ENG = [
    'Built a digital version of the ancient board game "Royal Game of Ur" for a university project.',
    'Implemented the game rules, an AI opponent and an interactive UI.',
  ];
  const royal_KOR = [
    '고대 보드게임 “Royal Game of Ur”의 디지털 버전 개발 (대학 전공 프로젝트).',
    '게임 규칙, AI 상대, 인터랙티브 UI 구현.',
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
    'Built a collaborative Sudoku platform where users create, share and play puzzles.',
    'Built the React front end and fixed rendering issues with lifecycle methods.',
    'Built the Node.js / Express backend, keeping authentication and database settings in environment variables.',
    'Modeled the data in MariaDB with primary and foreign keys.',
    'Worked in Scrum sprints.',
    'Wrote Sudoku generation and validation algorithms with several difficulty levels.',
  ];
  const sudoku_KOR = [
    '사용자가 스도쿠 퍼즐을 만들고 공유하고 풀 수 있는 협업 플랫폼 개발.',
    'React 프론트엔드 구현, 라이프사이클 메서드로 렌더링 문제 해결.',
    'Node.js·Express 백엔드 구현, 인증·DB 설정은 환경변수로 관리.',
    'MariaDB에 PK·FK로 데이터 모델링.',
    'Scrum 스프린트 단위로 개발.',
    '난이도별 스도쿠 생성·검증 알고리즘 구현.',
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
    "Toss NEXT ML Challenge – ad click-through-rate (CTR) prediction on tabular Parquet data (2,206 participants): in a team of 4, built the whole pipeline myself (feature preprocessing, an XGBoost + LightGBM + CatBoost ensemble and inference), finishing 30th and earning a résumé-screening pass for Toss hiring.",
    "Boost up AI 2025 – drug discovery (1,289 participants): 37th, solo.",
    "2025 Power Consumption Forecasting (1,592 participants): 63rd, team of 3.",
    "Jump AI 2025 – drug discovery (1,126 participants): 65th, team of 4.",
    "2025 Dongwon x KAIST AI Competition – sales & demographics forecasting with LLM personas (670 participants): 61st on the public leaderboard, team of 4.",
  ];

  const ach_dacon_KOR = [
    "토스 NEXT ML Challenge – Parquet 형식 정형 데이터로 광고 클릭 예측(CTR) 모델 개발(참가자 2,206명): 4인 팀에서 피처 전처리, XGBoost·LightGBM·CatBoost 앙상블 학습, 추론까지 전 과정을 직접 맡아 최종 30위, 토스 채용 서류전형 면제.",
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
    "Top 8 of the participating companies and Open Innovation Reward (VND 200,000,000) for the Shinhan Finance Vietnam loan-document project I developed, which led to Korea Deep Learning's first overseas revenue.",
  ];
  const shinhan_KOR = [
    "직접 개발한 신한파이낸스 베트남 대출 서류 프로젝트로 참가 기업 중 상위 8개사 선정, 오픈이노베이션 리워드(VND 200,000,000) 수상. 한국딥러닝 첫 해외 매출로 이어짐.",
  ];
  const shinhan_award_media = (
    <div key="shinhan-award-image" style={{ padding:'10px 0' }}>
      <img src={shinhanImage0} alt="Global Shinhan InnoBoost 2026 award" style={{ height: '400px', borderRadius: '8px' }} />
    </div>
  );
  // 프로젝트 섹션용 (상세)
  const ppass_ENG = [
    "Built a KIE pipeline reused across client projects: image normalization → rotation correction → VLM page classification → document grouping by code rules → multi-page KIE in one VLM call (JSON Schema guided decoding) → regex validation → per-field confidence (token logprob + OCR agreement) and BBox from a separate call.",
    "Designed for stability: truncated outputs treated as failures with capped retries, a global semaphore on VLM calls and page-proportional timeouts.",
    "Classification: each page is matched against the saved document types, and consecutive pages of the same type are grouped into one section and extracted together.",
    "Automatic schema definition: the fields to extract are defined automatically for a document type, and can then be edited in the schema editor.",
    "Extraction results: a field table per page, JSON output, AI correction and download, with paging across multi-page documents.",
    "Per-request settings in the UI: OCR on or off, field-location boxes drawn on the original (BBox), and a 0-100 confidence score per field.",
    "Upload accepts 9 formats: PDF, images, HWP, HWPX, DOCX, XLSX, PPT, PPTX and TIF.",
  ];
  const ppass_KOR = [
    "고객 프로젝트마다 재사용하는 KIE 파이프라인 구축: 이미지 정규화 → 회전 보정 → VLM 페이지 분류 → 코드 규칙으로 문서 묶기 → 여러 페이지를 VLM 1회 호출로 KIE(JSON Schema guided decoding) → regex 검증 → 필드별 신뢰도(토큰 logprob + OCR 일치도)와 별도 호출로 BBox 산출.",
    "안정성 설계: 잘린 출력은 실패로 처리하고 재시도 상한, VLM 동시 호출 전역 세마포어, 페이지 수 비례 타임아웃.",
    "분류: 페이지마다 저장된 문서 유형과 대조해 유형을 정하고, 같은 유형이 이어지는 페이지는 한 구간으로 묶어 함께 추출.",
    "자동 스키마 정의: 문서 유형별로 추출할 항목을 자동으로 정의하고, 스키마 에디터에서 수정.",
    "추출 결과: 페이지별 필드 표, JSON, AI 보정, 다운로드, 여러 페이지 문서 페이지 이동.",
    "요청별 설정 UI: OCR 켜고 끄기, 원본 위 필드 위치 박스(BBox), 항목별 0~100 신뢰도 점수.",
    "업로드 9개 형식 지원: PDF, 이미지, HWP, HWPX, DOCX, XLSX, PPT, PPTX, TIF.",
  ];
  const shinhanPj_ENG = [
    "Ran the project as PM and sole developer: led client communication with SVFC from kickoff (06.09) through the SoW (06.30), integration testing, UAT with the client's underwriters and the final assessment (08.24), and owned the system design.",
    "Built SVFC's loan-document screening system: upload bank statements and CCCD ID cards (multiple files merged into one page sequence) → page classification → schema-based field extraction → 7 automated checks, returning pass / warn / fail with the reason and the exact fields to the underwriter.",
    "Turned the SoW and client Q&A into checks that could actually be built. When the client asked for image-forgery forensics (font, color, compositing traces), I scoped it out, replaced it with logical-consistency checks (front-back MRZ match, ID-number scheme) and stated the limit in the user guide.",
    "Bank statements: balance reconciliation (opening + credits − debits = closing, ±1, sums recomputed from transaction rows), reference-number ↔ date logic (YYMMDD, Julian YYDDD, monotonic increase) to catch inserted rows, and monthly salary / bonus income with the matching evidence.",
    "ID cards: CCCD front ↔ back MRZ cross-check with ICAO 9303 check digits, Vietnamese ID-number scheme (birth year, century-gender code) and legal renewal ages (14/25/40/60), plus name match between statement holder and ID, ignoring Vietnamese tones.",
    "Kept every decision in code, not the VLM: each prompt rule has a deterministic backstop (totals recomputed, closing balance from the last row, FT/SAL/IB reference numbers by regex, forward-filled dates), and corrected values are written back so the UI, JSON export and validation cards always match.",
    "Handled Vietnamese locale details: VND thousands separators vs decimals, tone-insensitive matching, OCR-broken 'lương', and telling the bonus word 'thưởng' from the common name 'Thưởng'.",
    "Built the result UI (Next.js 16 / React 19): 7 validation cards, detailed extraction table, JSON download, server-paginated history that reopens past runs with the original file, 300 dpi preview, and a Korean / English / Vietnamese UI (180 keys).",
    "Set up a split deployment for the client demo: frontend on NCP (Naver Cloud Platform) and backend on Korea Deep Learning's in-house servers, integrated via API.",
    "Secured quality with 24 unit tests and a 200-case synthetic test set across 14 Vietnamese bank templates, and shipped fixes from the client's UAT feedback.",
    "Placed in the top 8 at Global Shinhan InnoBoost 2026, demonstrated DEEP Agent live at the Demo Day booth and won the Open Innovation Reward (VND 200,000,000); the project turned into an actual business deal and Korea Deep Learning's first overseas revenue.",
    "Covered all 5 SoW scenarios with 7 automated checks, and supported the client's underwriters through UAT.",
  ];
  const shinhanPj_KOR = [
    "PM 겸 단독 개발로 프로젝트 수행: 킥오프(06.09) → SoW 확정(06.30) → 통합 테스트 → 고객 심사역 UAT → 최종 평가(08.24)까지 SVFC(신한파이낸스 베트남)와의 소통을 직접 맡고 시스템 설계 전부 담당.",
    "SVFC 대출 서류 스크리닝 시스템 구축: 은행거래명세서·시민증(CCCD) 업로드(여러 파일을 하나의 페이지 시퀀스로 통합) → 페이지 분류 → 스키마 기반 필드 추출 → 자동 검증 7종 → 심사역에게 pass/warn/fail과 사유·문제 필드 제공.",
    "SoW와 고객 Q&A를 구현 가능한 검증 항목으로 정리. 고객이 요구한 이미지 위변조 포렌식(폰트·색·합성 흔적)은 범위에서 제외하고 논리 일관성 검증(앞뒷면 MRZ 대조, ID 번호 체계)으로 대체, 한계는 사용자 가이드에 명시.",
    "은행명세서: 잔액 정합성(기초 + 입금 − 출금 = 기말, 허용 오차 ±1, 합계는 거래행에서 재계산), 참조번호 ↔ 거래일 논리 검증(YYMMDD·Julian YYDDD·단조 증가)으로 끼워 넣은 행 탐지, 급여·상여 성격 입금만 월별 합산하고 매칭 근거 반환.",
    "신분증: CCCD 앞면 ↔ 뒷면 MRZ 대조와 ICAO 9303 체크디지트, 베트남 ID 번호 체계(출생연도·세기·성별 코드)와 법정 갱신 연령(14/25/40/60세) 검증, 명세서 예금주와 신분증 이름을 성조 무시로 대조.",
    "판단은 VLM이 아닌 코드가 하도록 모든 프롬프트 규칙에 결정론적 백스톱(합계 재계산, 마지막 거래행 기말잔액, FT/SAL/IB 참조번호 정규식 추출, 거래일 forward-fill)을 두고, 보정값을 원본 필드에 다시 써 UI·JSON·검증 카드가 항상 같은 값을 보이게 함.",
    "베트남 로케일 처리: VND 천단위 구분자와 소수점 구분, 성조 무시 비교, OCR로 깨진 'lương', 상여 'thưởng'과 흔한 이름 'Thưởng' 구분.",
    "결과 화면 개발(Next.js 16 / React 19): 검증 카드 7종, 상세 추출 표, JSON 다운로드, 서버 페이지네이션 히스토리(원본과 함께 과거 결과 재오픈), 300dpi 프리뷰, 한·영·베 3개 국어 UI(180키).",
    "프론트엔드는 NCP(네이버 클라우드 플랫폼), 백엔드는 사내 서버에 분리 배포하고 API로 연동해 고객 데모 환경 구성.",
    "단위 테스트 24건과 베트남 은행 템플릿 14종 × 합성 CCCD 200건 테스트셋으로 품질 검증, 고객 UAT 피드백을 반영해 수정.",
    "글로벌 신한 이노부스트 2026 상위 8개사 선정, 데모데이 부스에서 DEEP Agent 실시간 시연, 오픈이노베이션 리워드(VND 200,000,000) 수상. 실제 사업으로 이어져 한국딥러닝 첫 해외 매출 달성.",
    "SoW 시나리오 5개를 자동 검증 7종으로 모두 구현하고, 고객 심사역 UAT를 지원.",
  ];

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
        { Icon: FaGlobe, label: "English (Native)" },
        { Icon: FaGlobe, label: "Korean (Native)" },
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
        { Icon: FaGlobe, label: "영어 (원어민)" },
        { Icon: FaGlobe, label: "한국어 (원어민)" },
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
      badge: { ENG: 'Contribution 100%', KOR: '기여도 100%' },
      summary: {
        ENG: ["Upload → page classification → VLM extraction → 7 deterministic checks with reasons", "Statement balance, reference-number and income checks; CCCD MRZ and ID-number checks", "Split deployment: frontend on NCP, backend on in-house servers, integrated via API"],
        KOR: ["업로드 → 페이지 분류 → VLM 추출 → 결정론적 검증 7종(사유 포함)", "명세서 잔액·참조번호·소득 검증, 신분증 MRZ·ID 번호 체계 검증", "프론트엔드(NCP)·백엔드(사내 서버) 분리 배포 및 API 연동"],
      },
      media: [{ src: shinhanApp2, caption: { ENG: "Validation results", KOR: "검증 결과 화면" } }, { src: shinhanApp1, caption: { ENG: "Extraction review", KOR: "추출 결과 검수 화면" } }, { src: shinhanImage0, caption: { ENG: "Award", KOR: "수상" } }, { src: shinhanImage1, caption: { ENG: "Top startups", KOR: "상위 기업 시상" } }, { src: shinhanImage2, caption: { ENG: "Demo Day booth", KOR: "데모데이 부스" } }, { src: shinhanImage3, caption: { ENG: "Demo Day 2026", KOR: "데모데이 2026" } }],
      id: 'proj-shinhan', key: 'shinhanVietnam', org: 'company', fields: ['VLM', 'OCR'],
      title: { ENG: 'Shinhan Finance Vietnam · Loan Document Check', KOR: '신한파이낸스 베트남 · 대출 서류 자동 검수' },
      location: { ENG: 'Korea Deep Learning · PM & sole developer', KOR: '한국딥러닝 · PM 겸 단독 개발' },
      dates: { ENG: 'June 2026 ~ September 2026', KOR: '2026.06 ~ 2026.09' },
      details: lang === 'ENG' ? shinhanPj_ENG : shinhanPj_KOR,
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
      badge: { ENG: 'Contribution 50%', KOR: '기여도 50%' },
      summary: {
        ENG: ["Reusable KIE pipeline for every project: image normalization → rotation fix → VLM classification → document grouping → KIE extraction → post-processing → confidence and BBox", "Automatic schema definition per document type, editable in the schema editor", "Result table and JSON, plus toggles for OCR, field boxes (BBox) and confidence"],
        KOR: ["프로젝트마다 재사용하는 KIE 파이프라인: 이미지 정규화 → 회전 보정 → VLM 분류 → 문서 묶기 → KIE 추출 → 후처리 → 신뢰도·BBox", "문서 유형별 스키마 자동 정의, 스키마 에디터로 수정", "결과 표·JSON, OCR·필드 위치(BBox)·신뢰도 설정 UI"],
      },
      media: [{ src: ppassClassify, caption: { ENG: "Classification and extraction settings", KOR: "문서 분류·추출 설정" } }, { src: ppassResult, caption: { ENG: "Extraction results", KOR: "추출 결과" } }, { src: ppassUpload, caption: { ENG: "Upload: 9 formats", KOR: "업로드: 9개 형식" } }],
      id: 'proj-ppass', key: 'ppassPlatform', org: 'company', fields: ['VLM', 'OCR'],
      title: { ENG: 'DeepHub · In-House IDP Platform', KOR: 'DeepHub · 사내 IDP 플랫폼' },
      location: { ENG: 'Korea Deep Learning · classification, schema, extraction & UI', KOR: '한국딥러닝 · 분류·스키마·추출·UI 담당' },
      dates: { ENG: 'April 2026 ~ August 2026', KOR: '2026.04 ~ 2026.08' },
      details: lang === 'ENG' ? ppass_ENG : ppass_KOR,
      compare: {
        ENG: {
          title: 'Delivering KIE to a new client: before vs after',
          before: { label: 'Before (per client)', steps: ['New project per client', 'Rebuild classification and extraction', 'Rebuild the review screen'] },
          after: { label: 'After (DeepHub)', steps: ['Register document types', 'Auto-define schema', 'Set OCR / BBox / confidence', 'Deliver'], result: '10+ client projects delivered on it' },
        },
        KOR: {
          title: '새 고객사 KIE 납품: 기존 vs 변경',
          before: { label: '기존 (고객사별 개발)', steps: ['고객사마다 새 프로젝트', '분류·추출 다시 개발', '검수 화면 다시 개발'] },
          after: { label: '변경 (DeepHub)', steps: ['문서 유형 등록', '스키마 자동 정의', 'OCR·BBox·신뢰도 설정', '납품'], result: '이 플랫폼으로 10개 이상 납품' },
        },
      },
    },
    {
      badge: { ENG: 'Contribution 100%', KOR: '기여도 100%' },
      summary: {
        ENG: ["Extracts each model's specs from the review deck (PPT) with LLM/VLM and fills the master spec sheet (Excel) and product roadmap automatically", "The same spec can appear in several places, so values are taken from the deck body, then the spec table, then attached Excel, and finally carried over from the base model", "Values are placed by spec item name, not row number, so they land in the right cell even when the sheet layout differs", "LLM failures retried, then backfilled by rule-based extraction, so no field is left empty", "Work-assistant agent (LangGraph): 9 functions including spec lookup, comparison, history and review support", "Offline installer for the client's air-gapped server"],
        KOR: ["검토의뢰서(PPT)에서 모델별 스펙을 LLM·VLM으로 뽑아 마스터 스펙시트(Excel)와 제품 로드맵을 자동 작성", "같은 스펙이 여러 곳에 있어 본문 → 스펙 표 → 첨부 엑셀 순으로 값을 찾고, 끝까지 없으면 기준 모델(Base) 값을 이어받음", "값은 행 번호가 아닌 스펙 항목 이름으로 찾아 넣어, 시트 구성이 달라도 정확한 칸에 입력", "LLM 실패 시 재요청 후 규칙 추출로 보완해 빈 필드 없음", "업무 도우미 에이전트(LangGraph): 스펙 조회·비교·이력·검수 보조 등 9가지 기능", "고객 폐쇄망 서버용 설치 번들 제작"],
      },
      media: [{ src: lgaxImage1, caption: { ENG: "Deployed service: master spec sheet", KOR: "실제 배포 화면: 마스터 스펙시트" } }, { src: lgaxImage2, caption: { ENG: "Generated product roadmap", KOR: "로드맵 자동 생성 화면" } }],
      id: 'proj-1', key: 'kdlProductPlanning', org: 'company', fields: ['LLM', 'VLM'],
      title: { ENG: 'LG Electronics · Product-Planning Document Automation', KOR: 'LG전자 · 상품기획 문서 자동화' },
      location: { ENG: 'Korea Deep Learning · AX project', KOR: '한국딥러닝 · AX 프로젝트' },
      dates: { ENG: 'July 2026 ~ Present', KOR: '2026.07 ~ 현재' },
      details: lang === 'ENG' ? kdl_planning_ENG : kdl_planning_KOR,
      compare: {
        ENG: {
          title: "Planners' workflow: before vs after",
          before: { label: 'Before (manual)', steps: ['Read the review deck (PPT)', 'Re-type specs into the master spec sheet', 'Redraw the product roadmap by hand'] },
          after: { label: 'After (automated)', steps: ['PPT → LLM/VLM extraction', 'Priority merge · rule mapping', 'Human-in-the-loop review', 'Patch sheet XML', 'Generate the roadmap', 'Ask the work assistant (agent)'], result: '1,225 of 1,232 cells auto-filled (8-model deck)' },
        },
        KOR: {
          title: '상품기획 업무 흐름: 기존 vs 변경',
          before: { label: '기존 (수작업)', steps: ['검토의뢰서(PPT) 확인', '마스터 스펙시트에 손으로 입력', '제품 로드맵 수작업 작성'] },
          after: { label: '변경 (자동화)', steps: ['PPT → LLM·VLM 추출', '우선순위 병합 · 규칙 매핑', '사람 검수(HITL)', '시트 XML 패치', '로드맵 자동 생성', '업무 도우미(에이전트) 질의'], result: '8개 모델 문서 1,232칸 중 1,225칸 자동 채움' },
        },
      },
    },
    {
      badge: { ENG: 'Contribution 85%', KOR: '기여도 85%' },
      summary: {
        ENG: ["Owned the OCR stage of a VLM-based KIE pipeline, brought in to raise handwriting recognition", "Built a 15,808-sample handwriting golden set tagged by difficulty", "Auto-labeled ~80k handwriting samples from client ROI boxes", "Compared PARSeq, PP-OCRv5 and SVTRv2, then fine-tuned PARSeq on 11.6M samples"],
        KOR: ["VLM 기반 KIE 파이프라인의 OCR 단계 담당, 필기체 인식률 향상을 위해 투입", "실제 서식 기반 필기체 골든셋 15,808개 구축, 난이도별 태깅", "고객 ROI 박스로 필기체 약 8만 장 오토라벨링", "PARSeq·PP-OCRv5·SVTRv2 비교 후 1,160만 장으로 PARSeq fine-tuning"],
      },
      media: [
        { src: hcOcrErrors, caption: { ENG: "Error analysis: GT vs prediction", KOR: "오답 분석: 정답 vs 예측" } },
        { src: hcOcrForm1, caption: { ENG: "Lease form: field results", KOR: "신차리스 양식 인식" } },
        { src: hcOcrForm2, caption: { ENG: "Installment form: full page", KOR: "신차할부 양식 전체 인식" } },
      ],
      id: 'proj-4', key: 'kdlOcrResearch', org: 'company', fields: ['CV', 'OCR'],
      title: { ENG: 'Hyundai Capital · Handwriting OCR Recognition', KOR: '현대캐피탈 · 필기체 OCR 인식률 향상' },
      location: { ENG: 'Korea Deep Learning · OCR for a VLM-based document pipeline, weights deployed', KOR: '한국딥러닝 · VLM 기반 서류 처리 프로젝트 OCR 담당, 가중치 배포' },
      dates: { ENG: 'January 2026 ~ April 2026', KOR: '2026.01 ~ 2026.04' },
      details: lang === 'ENG' ? kdl_ocr_ENG : kdl_ocr_KOR,
    },
    {
      badge: { ENG: 'Contribution 100%', KOR: '기여도 100%' },
      summary: {
        ENG: ["Extraction API for 7 document types (Excel / PPT / PDF; Korean, English, Chinese)", "LLM KIE on native PPTX / XLSX / searchable-PDF structure instead of image-based VLM", "Grader that reproduces the client's audit ledger; no change ships if a correct cell breaks"],
        KOR: ["문서 7종 추출 API (엑셀·PPT·PDF, 국·영·중)", "이미지 VLM 대신 PPTX·XLSX·searchable PDF 원문 구조 기반 LLM KIE", "고객 검수 대장을 재현하는 채점기, 정답 칸이 깨지면 반영 안 함"],
      },
      media: [{ src: seoyonImage2, caption: { ENG: "Deployed: Excel field extraction", KOR: "실제 배포 화면: 엑셀 필드 추출" } }, { src: seoyonImage1, caption: { ENG: "FMEA PDF parsing", KOR: "FMEA PDF 표 파싱" } }],
      id: 'proj-2', key: 'kdlDocExtraction', org: 'company', fields: ['LLM', 'VLM'],
      title: { ENG: 'Seoyon E-Hwa · Quality Document Extraction API', KOR: '서연이화 · 품질·공정 문서 추출 API' },
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
      badge: { ENG: 'Contribution 100%', KOR: '기여도 100%' },
      summary: {
        ENG: ["Two-stage detection: gauge → crop → needle as an oriented box", "Semi-automatic labeling loop: ~20k images labeled solo", "Docker GPU API with health checks and auto-restart"],
        KOR: ["2단계 검출: 계기판 → 크롭 → 바늘 회전 박스", "반자동 라벨링 루프로 약 2만 장 단독 구축", "헬스체크·자동 복구를 갖춘 Docker GPU API"],
      },
      media: [{ src: gaugeImage1, caption: { ENG: "Real CCTV reading result", KOR: "실제 CCTV 판독 결과" } }],
      id: 'proj-3', key: 'kdlGaugeReading', org: 'company', fields: ['CV'],
      title: { ENG: 'Government R&D · CCTV Analog Gauge Reading', KOR: '정부과제 · CCTV 아날로그 계기판 판독' },
      location: { ENG: 'Korea Deep Learning · deployed to production', KOR: '한국딥러닝 · 실서비스 배포' },
      dates: { ENG: 'January 2026 ~ March 2026', KOR: '2026.01 ~ 2026.03' },
      details: lang === 'ENG' ? kdl_gauge_ENG : kdl_gauge_KOR,
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
      badge: { ENG: 'Contribution 100%', KOR: '기여도 100%' },
      summary: {
        ENG: ["Image edit → image-to-video → frame interpolation (FLUX.2, Wan2.2, RIFE)", "Automated QA: OpenCV measurements plus a calibrated VLM", "4-GPU queue with resident models (model load ~9 min → 0)"],
        KOR: ["이미지 편집 → 영상 생성 → 프레임 보간 (FLUX.2, Wan2.2, RIFE)", "OpenCV 측정 + 정답셋으로 보정한 VLM 자동 검수", "GPU 4장 큐, 모델 상주로 요청당 로딩 약 9분 → 0"],
      },
      media: [
        { src: disasterGridFlood, caption: { ENG: "Flood · 10 conditions from one CCTV still", KOR: "침수 · CCTV 사진 1장 × 10가지 조건" } },
        { src: disasterGridFire, caption: { ENG: "Wildfire · 11 conditions", KOR: "산불 · 11가지 조건" } },
        { src: disasterFlowFlood, wide: true, caption: { ENG: "Flood rising over 10 s (night): dry road → water pools in low spots → level rises → whole road flooded", KOR: "침수 차오름 10초 (야간): 마른 도로 → 낮은 곳부터 물이 고임 → 수위 상승 → 도로 전체 침수" } },
        { src: disasterFlowFire, wide: true, more: true, caption: { ENG: "Wildfire spreading over 10 s: faint smoke → drifts with the wind → embers at the base → small flame (fixed camera)", KOR: "산불 확산 10초: 옅은 연기 → 바람 방향으로 확산 → 기저부 불씨 → 작은 불 (카메라 고정)" } },
      ],
      id: 'proj-5', key: 'kdlDisasterVideo', org: 'company', fields: ['GenAI', 'VLM'],
      title: { ENG: 'Disaster CCTV Augmentation · Wildfire & Flood', KOR: '재난 CCTV 영상 증강 · 산불·침수' },
      location: { ENG: 'Korea Deep Learning · generative AI pipeline', KOR: '한국딥러닝 · 생성형 AI 파이프라인' },
      dates: { ENG: 'June 2026 ~ Present', KOR: '2026.06 ~ 현재' },
      details: lang === 'ENG' ? kdl_video_ENG : kdl_video_KOR,
    },
    {
      badge: { ENG: 'Contribution 100%', KOR: '기여도 100%' },
      summary: {
        ENG: ["LSTM heart-rate model on BCG signals (TensorFlow / Keras)", "FFT and wavelet denoising; IJK peak periodicity as features", "Unsupervised peak detection to reduce dependence on ECG"],
        KOR: ["BCG 신호 기반 LSTM 심박 모델 (TensorFlow / Keras)", "FFT·웨이블릿 노이즈 제거, IJK 피크 주기성을 피처로", "비지도 피크 검출로 ECG 의존도 감소"],
      },
      media: [
        { src: senseoneImage1, caption: { ENG: "Pipeline: BCG → cycle detection → LSTM → heart rate", KOR: "파이프라인: BCG → 주기 검출 → LSTM → 심박" } },
        { src: senseoneImage4, caption: { ENG: "Raw → filtered → cycles → peaks", KOR: "원신호 → 전처리 → 주기 → 피크" } },
        { src: senseoneImage2, caption: { ENG: "Wavelet denoising (6-level DWT)", KOR: "웨이블릿 노이즈 제거 (6단계)" } },
        { src: senseoneImage5, caption: { ENG: "SHAP feature importance", KOR: "SHAP 피처 중요도" } },
        { src: senseoneImage3, caption: { ENG: "BiLSTM model summary", KOR: "BiLSTM 모델 구조" } },
      ],
      id: 'proj-6', key: 'sense1Vet', org: 'company', fields: ['DL', 'Signal'],
      title: { ENG: 'CareSix · Sense1 Vet Heart-Rate Algorithm', KOR: '케어식스 · Sense1 Vet 심박 알고리즘' },
      location: { ENG: 'CareSix Co., LTD · wearable for dogs', KOR: '케어식스 · 반려견 웨어러블' },
      dates: { ENG: 'September 2024 ~ February 2025', KOR: '2024.09 ~ 2025.02' },
      details: lang === 'ENG' ? pj_sense1_ENG : pj_sense1_KOR,
    },
  ];
  const sideProjects = [
    {
      summary: {
        ENG: ["RAG over Korean statutes and precedents (bge-m3, FAISS / ChromaDB)", "LangChain agent pipeline served with FastAPI on AWS EC2"],
        KOR: ["한국 법령·판례 기반 RAG (bge-m3, FAISS·ChromaDB)", "LangChain 에이전트 파이프라인, FastAPI·AWS EC2 서빙"],
      },
      media: [{ src: lawAIImage1, caption: { ENG: "Law-AI", KOR: "Law-AI" } }, { src: lawAIImage4, caption: { ENG: "", KOR: "" } }, { src: lawAIImage2, caption: { ENG: "", KOR: "" } }, { src: lawAIImage3, caption: { ENG: "", KOR: "" } }, { src: lawAIImage5, caption: { ENG: "", KOR: "" } }],
      id: 'side-law', key: 'lawIntelligence', org: 'program', fields: ['LLM', 'RAG'],
      title: { ENG: 'IBM x Red Hat · Law-AI', KOR: 'IBM x Red Hat · Law-AI' },
      location: { ENG: 'IBM final group project', KOR: 'IBM 파이널 그룹 프로젝트' },
      dates: { ENG: '2025 ~ October 2025', KOR: '2025 ~ 2025.10' },
      details: lang === 'ENG' ? law_ENG : law_KOR,
    },
  ];
  mainProjects.forEach((pj, i) => { pj.num = i + 1; });
  const allProjects = [...mainProjects, ...sideProjects];
  // 경력 항목 아래에 붙는 관련 프로젝트 바로가기
  const projectShort = {
    'proj-shinhan': { ENG: 'Shinhan Finance Vietnam', KOR: '신한파이낸스 베트남' },
    'proj-ppass': { ENG: 'DeepHub platform', KOR: 'DeepHub 플랫폼' },
    'proj-1': { ENG: 'LG Electronics planning', KOR: 'LG전자 상품기획' },
    'proj-4': { ENG: 'Hyundai Capital OCR', KOR: '현대캐피탈 OCR' },
    'proj-2': { ENG: 'Seoyon E-Hwa extraction', KOR: '서연이화 문서 추출' },
    'proj-3': { ENG: 'Gauge reading', KOR: '계기판 판독' },
    'proj-5': { ENG: 'Disaster video', KOR: '재난 영상 생성' },
    'proj-6': { ENG: 'Sense1 heart rate', KOR: 'Sense1 심박' },
  };
  const projectLinks = (ids) => (
    <span className="proj-links" key="proj-links">
      <span className="proj-links-label">{lang === 'ENG' ? 'Projects' : '관련 프로젝트'}</span>
      {ids.map((pid) => {
        const pj = allProjects.find((x) => x.id === pid);
        return <a key={pid} href={`#${pid}`}>{pj.num}. {projectShort[pid][lang]}</a>;
      })}
    </span>
  );
  const projectGroups = [
    { label: { ENG: 'LLM · VLM', KOR: 'LLM · VLM' }, ids: ['proj-shinhan', 'proj-ppass', 'proj-1', 'proj-2', 'side-law'] },
    { label: { ENG: 'CV · OCR', KOR: 'CV · OCR' }, ids: ['proj-4', 'proj-3'] },
    { label: { ENG: 'Generative AI', KOR: '생성형 AI' }, ids: ['proj-5'] },
    { label: { ENG: 'Signal · DL', KOR: '신호처리 · DL' }, ids: ['proj-6'] },
  ];

  // 한눈에 보기 문구의 **...** 부분을 굵게
  const boldMarks = (text) => text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

  // 상단 고정 메뉴 항목
  const navItems = [
    { id: 'sec-experience', label: lang === 'ENG' ? 'Experience' : '경력' },
    { id: 'sec-education', label: lang === 'ENG' ? 'Education' : '학력' },
    { id: 'sec-projects', label: lang === 'ENG' ? 'Projects' : '프로젝트' },
    { id: 'sec-exhibitions', label: lang === 'ENG' ? 'Exhibitions' : '전시' },
    { id: 'sec-awards', label: lang === 'ENG' ? 'Awards' : '수상' },
    { id: 'sec-skills', label: lang === 'ENG' ? 'Skills' : '기술' },
  ];

  return (
    <div className="App">
      <Lightbox />
      <TopNav items={navItems} name={t[lang].name} lang={lang} setLang={setLang} />
      <header className="App-header">
        {/* Language Toggle */}
        <div className="lang-toggle" aria-label="Language toggle">
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

        <h1 className="hero-name">{t[lang].name}</h1>
        <p className="hero-role">{t[lang].role}</p>

        <div className="contact-icons">
          <a className="contact-email" href="mailto:peter.jaewoochang@gmail.com" aria-label="Email"><FaEnvelope size={15} /><span>peter.jaewoochang@gmail.com</span></a>
          <a href="https://github.com/jwc5388" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={17} /></a>
          <a href="https://www.linkedin.com/in/jwcbillion33" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={17} /></a>
        </div>

        {profile.tagline[lang] && <p className="profile-tagline">{profile.tagline[lang]}</p>}
        {profile.glance.length > 0 && (
          <div className="profile-glance">
            {profile.glance.map((g) => (
              <div className="glance-col" key={g.title.ENG}>
                <h4>{g.icon && <span className="glance-icon"><g.icon size={12} /></span>}{g.title[lang]}</h4>
                <ul>
                  {g.items[lang].map((it, i) => {
                    const [date, text] = it.includes(' : ') ? it.split(' : ') : ['', it];
                    return (
                      <li key={i}>
                        {date && <span className="glance-date">{date}</span>}
                        <span>{boldMarks(text)}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
        {profile.summary[lang] && (
          <div className="profile-summary">
            {profile.summary[lang].map((line, i) => <p key={i}>{emphasize(line)}</p>)}
          </div>
        )}
        {profile.skills.length > 0 && (
          <ul className="profile-skills">
            {profile.skills.map((sk) => <li key={sk}>{sk}</li>)}
          </ul>
        )}
        {profile.stats.length > 0 && (
          <div className="profile-stats">
            {profile.stats.map((st) => (
              <a className="stat-tile" key={st.id} href={`#${st.id}`}>
                <span className="stat-value">{st.value[lang]}</span>
                {st.who && <span className="stat-who">{st.who[lang]}</span>}
                <span className="stat-label">{st.label[lang]}</span>
                <span className="stat-go" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        )}
        {profile.resumeUrl && (
          <a className="resume-btn" href={profile.resumeUrl} download>{t[lang].resume}</a>
        )}
      </header>


      {/* ===== Work Experience ===== */}
      <section className="Experience-section" id="sec-experience">
        <h2 className={`section-title ${expandedSections.experience.expanded ? 'open' : ''}`} onClick={() => toggleSection('experience')}>{t[lang].work}</h2>
        {expandedSections.experience.expanded && (
          <div className="section-content">
            <Entry
              title={work_kdl_title}
              location={lang==='ENG' ? "Gangnam, Seoul, South Korea" : "대한민국 서울 강남"}
              dates={lang==='ENG' ? "November 2025 ~ Present" : "2025.11 ~ 현재"}
              details={[...(lang==='ENG' ? work_kdl_details_ENG : work_kdl_details_KOR), projectLinks(['proj-shinhan', 'proj-ppass', 'proj-1', 'proj-4', 'proj-2', 'proj-3', 'proj-5'])]}
              isExpanded={expandedSections.experience.entries.koreaDeepLearning}
              onClick={() => toggleEntry('experience', 'koreaDeepLearning')}
              timeline
            />
            <Entry
              title={work_ai_title}
              location={lang==='ENG' ? "Seoul, South Korea" : "대한민국 서울"}
              dates={lang==='ENG' ? "September 2024 ~ April 2025" : "2024.09 ~ 2025.04"}
              details={[...(lang==='ENG' ? work_ai_details_ENG : work_ai_details_KOR), projectLinks(['proj-6'])]}
              isExpanded={expandedSections.experience.entries.aiAlgorithm}
              onClick={() => toggleEntry('experience', 'aiAlgorithm')}
              timeline
            />
            <Entry
              title={work_app_title}
              location={lang==='ENG' ? "Jeju Island, South Korea" : "대한민국 제주"}
              dates={lang==='ENG' ? "June 2023 ~ August 2023" : "2023.06 ~ 2023.08"}
              details={lang==='ENG' ? work_app_details_ENG : work_app_details_KOR}
              isExpanded={expandedSections.experience.entries.appdeveloper}
              onClick={() => toggleEntry('experience', 'appdeveloper')}
              timeline
            />
            <Entry
              title={work_math_title}
              location={lang==='ENG' ? "Jeju Island, South Korea" : "대한민국 제주"}
              dates={lang==='ENG' ? "May 2022 ~ August 2022" : "2022.05 ~ 2022.08"}
              details={lang==='ENG' ? work_math_details_ENG : work_math_details_KOR}
              isExpanded={expandedSections.experience.entries.mathematician}
              onClick={() => toggleEntry('experience', 'mathematician')}
              timeline
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
      <section className="Education-section" id="sec-education">
        <h2 className={`section-title ${expandedSections.education.expanded ? 'open' : ''}`} onClick={() => toggleSection('education')}>{t[lang].education}</h2>
        {expandedSections.education.expanded && (
          <div className="section-content">
            <Entry
              title={lang==='ENG' ? "University of St Andrews, St Andrews, Scotland" : "세인트 앤드류스 대학교, 스코틀랜드"}
              location={lang==='ENG' ? "Bachelor of Science in Mathematics and Computer Science" : "수학·컴퓨터과학 학사"}
              dates={lang==='ENG' ? "September 2019 ~ June 2024" : "2019.09 ~ 2024.06"}
              details={[
                <div key="graduation-images" className="edu-gallery">
                  {[
                    { src: dissertationImage1, caption: lang==='ENG' ? 'CS dissertation: What is the Colour?' : '컴퓨터과학 학위논문: What is the Colour?' },
                    { src: dissertationImage2, caption: lang==='ENG' ? 'Maths dissertation: Particle Orbit Theory' : '수학 학위논문: Particle Orbit Theory' },
                    { src: degreeImage, caption: lang==='ENG' ? 'Graduation' : '졸업' },
                  ].map((m) => (
                    <figure className="pcard-figure" key={m.src}>
                      <img src={m.src} alt={m.caption} />
                      <span className="pcard-caption">{m.caption}</span>
                    </figure>
                  ))}
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
                      "Six-month AI Transformation program run by IBM and RedHat.",
                      "Built DNN, CNN, RNN and NLP models in TensorFlow, Keras and PyTorch.",
                      "Studied and applied key papers such as Attention Is All You Need and BERT.",
                      "Learned LLM application work (RAG, prompt engineering) from IBM developers.",
                      "Entered Dacon competitions and hackathons during the program.",
                      "Led the final project team: Law-AI, a legal assistant built on an LLM with RAG."
                    ]
                  : [
                      "IBM·RedHat 주관 6개월 AI Transformation 과정.",
                      "TensorFlow·Keras·PyTorch로 DNN·CNN·RNN·NLP 모델 구현.",
                      "Attention Is All You Need, BERT 등 주요 논문 학습 및 적용.",
                      "IBM 현직 개발자에게 LLM 활용(RAG·프롬프트 엔지니어링) 심화 강의 수강.",
                      "과정 중 Dacon 대회·해커톤 참가.",
                      "최종 프로젝트 팀장: LLM·RAG 기반 법률 AI(Law-AI) 개발."
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
              title={lang==='ENG' ? "St Andrews Judo Club / Registered as member of Judo Scotland" : "세인트 앤드류스 유도부 / Judo Scotland 등록 회원"}
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
          </div>
        )}
      </section>

      {/* ===== Projects ===== */}
      <section className="Project-section" id="sec-projects">
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
                summary={pj.summary?.[lang]}
                badge={pj.badge?.[lang]}
                media={(pj.media || []).map((m) => ({ src: m.src, caption: m.caption[lang], wide: m.wide, more: m.more }))}
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
                summary={pj.summary?.[lang]}
                badge={pj.badge?.[lang]}
                media={(pj.media || []).map((m) => ({ src: m.src, caption: m.caption[lang], wide: m.wide, more: m.more }))}
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
                  location={lang==='ENG' ? "University of St Andrews Computer Science Junior Honours Project" : "세인트 앤드류스대 컴퓨터과학 3학년 프로젝트"}
                  dates={lang==='ENG' ? "September 2022 ~ March 2023" : "2022.09 ~ 2023.03"}
                  details={getDetails(sudoku_ENG, sudoku_KOR, sudoku_media)}
                  {...getMeta('sudokuGame')}
                  isExpanded={expandedSections.projects.entries.sudokuGame}
                  onClick={() => toggleEntry('projects', 'sudokuGame')}
                />
              </div>
            )}
          </div>
        )}
      </section>

      {/* ===== Engagements ===== */}
      <section className="Engagement-section" id="sec-exhibitions">
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
      <section className="Achievements-section" id="sec-awards">
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
              dates={lang==='ENG' ? "May 2025 ~ Present" : "2025.05 ~ 현재"}
              details={getDetails(ach_dacon_ENG, ach_dacon_KOR, dacon)}
              {...getMeta('daconCompetitions')}
              isExpanded={expandedSections.achievements.entries.daconCompetitions}
              onClick={() => toggleEntry('achievements', 'daconCompetitions')}
            />

          </div>
        )}
      </section>


      {/* ===== Skills (아이콘 카드) ===== */}
      <section className="Skills-section" id="sec-skills">
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