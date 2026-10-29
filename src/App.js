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
import productionapk from './assets/files/cotons-production-gateway.apk';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

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
      projects: "Projects",
      otherProjects: "Other Projects",
      achievements: "Achievements / Awards",
      education: "Education & Training",
      skills: "Skills",
      companyAbout: "What Company is CareSix?",
      futureOfVet: "Future of Veterinary Care",
      companyMore: "More about the company",
      officialSite: "official website",
      downloadApk: "Download app APK",
      mainProjects: "Main Projects",
      resume: "Download Resume (PDF)",
      metaProblem: "Problem",
      metaTeam: "Team",
      metaRole: "Role",
      metaContribution: "My Contribution",
      metaModel: "Model / Stack",
      metaLessons: "Takeaways & Limitations",
      metaResults: "Results",
      collapseUp: "▴",
      collapseDown: "▾",
    },
    KOR: {
      headerTitle: "장재우 포트폴리오",
      work: "경력",
      engagements: "전시·행사",
      projects: "프로젝트",
      otherProjects: "기타 프로젝트",
      achievements: "수상 / 성과",
      education: "학력·교육",
      skills: "보유기술",
      companyAbout: "CareSix는 어떤 회사?",
      futureOfVet: "수의학의 미래",
      companyMore: "회사 더보기",
      officialSite: "공식 웹사이트",
      downloadApk: "앱 APK 다운로드",
      mainProjects: "주요 프로젝트",
      resume: "이력서 다운로드 (PDF)",
      metaProblem: "문제",
      metaTeam: "팀 구성",
      metaRole: "역할",
      metaContribution: "내 기여",
      metaModel: "모델 / 기술",
      metaLessons: "배운 점 · 한계",
      metaResults: "성과",
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
      ENG: "AI Engineer who scopes, builds and deploys LLM/VLM systems in client environments",
      KOR: "고객 현장에서 LLM·VLM 시스템을 정의하고, 만들고, 배포하는 AI 엔지니어",
    },
    summary: {
      ENG: "AI Engineer who defines client problems on site, then builds and deploys the LLM/VLM systems that solve them. My joint degree in Mathematics and Computer Science at the University of St Andrews, with a dissertation in each field, shapes how I work: I build a trustworthy evaluation and trace where errors actually come from, rather than stopping at a model that runs. Over roughly 1.5 years at Korea Deep Learning and CareSix, I have built document-automation (LLM/VLM), OCR, generative-video and biosignal systems and deployed them with Docker on client servers, including air-gapped ones. I also generalized a KIE pipeline built for one client (document-template classification and automatic extraction-schema definition) into PPASS, a shared base module that was then customized for each client.",
      KOR: "고객 현장의 문제를 정의하고, 이를 푸는 LLM·VLM 시스템을 만들어 배포까지 책임지는 AI 엔지니어입니다. 세인트앤드루스 대학교에서 수학과 컴퓨터과학을 함께 전공하며 두 분야에서 각각 학위논문을 썼고, 그 덕분에 모델이 돌아가는 데서 멈추지 않고 믿을 수 있는 평가 기준을 먼저 세우고 오류의 원인을 끝까지 검증합니다. 한국딥러닝과 케어식스에서 약 1년 반 동안 LLM·VLM 문서 자동화·OCR·생성형 영상·생체신호 시스템을 만들어 Docker로 고객 서버와 폐쇄망에 배포해 왔고, 한 고객사를 위해 만든 KIE 파이프라인(문서 틀 분류, 추출 스키마 자동 정의)을 사내 공통 기본 모듈 PPASS로 일반화해 고객사마다 맞춤 적용했습니다.",
    },
    skills: ["LLM / VLM", "KIE · OCR", "RAG · LangChain", "Docker", "FastAPI", "vLLM", "PyTorch", "Python"],
    highlights: {
      ENG: [
        "Delivered an LLM/VLM document-extraction API to an automotive parts maker's air-gapped server, reaching 93.49% accuracy on the client's 3,920-cell audit ledger",
        "Generalized a single-client KIE pipeline into PPASS, a reusable base module customized for each new client",
        "Tracked 30+ client requirements by ID and priority, and resolved an IP-restriction security request the same day",
        "Raised handwriting OCR exact-match accuracy by 4.26 pp (85.23% → 89.49%) through R&D; the trained weights were deployed in a ** Capital project",
        "Independently researched and built an LSTM-based BCG heart-rate algorithm for dogs, reaching 96% accuracy (CareSix)",
        "Toss NEXT ML Challenge: 30th of 2,206 participants, earning a résumé-screening pass · Excellence Prize, Quantum AI Hackathon",
      ],
      KOR: [
        "자동차 부품 제조사 폐쇄망 서버에 LLM·VLM 문서 추출 API 납품: 고객 검수 대장 3,920칸 기준 정확도 93.49%",
        "한 고객사용 KIE 파이프라인을 공통 기본 모듈 PPASS로 일반화해 고객사마다 맞춤 적용",
        "고객 요구사항 30여 건을 ID·우선순위로 관리해 반영, IP 제한 보안 요청은 당일 처리",
        "필기체 OCR R&D로 정확도 4.26%p 향상(85.23% → 89.49%), 학습한 가중치를 **캐피탈 프로젝트에 배포",
        "LSTM 기반 반려견 BCG 심박 알고리즘을 단독으로 연구·개발해 정확도 96% 달성 (케어식스)",
        "토스 NEXT ML Challenge 2,206명 중 30위(서류 면제) · 퀀텀 AI 해커톤 우수상",
      ],
    },
    // 이력서 PDF를 public/ 폴더에 넣고 경로 지정 (예: `${process.env.PUBLIC_URL}/resume.pdf`)
    resumeUrl: '',
  };

  // ===== 프로젝트 메타 (팀 / 역할 / 기여 / 성과 / 링크) =====
  // 빈 값('')인 항목은 화면에 표시되지 않음. links 예: { label: 'GitHub', href: 'https://...' }
  const projectMeta = {
    kdlProductPlanning: {
      problem: {
        ENG: "Planners re-typed specs by hand from review decks in mixed formats (slide text, tables, embedded Excel; up to 8 models per deck) into large region-specific master spec sheets, then redrew product roadmaps manually.",
        KOR: "상품기획 실무자가 형식이 제각각인 검토의뢰서(슬라이드 글·표·첨부 엑셀, 한 문서에 모델 최대 8개)의 스펙을 지역별 대형 마스터 스펙시트에 손으로 옮기고, 제품 로드맵도 수작업으로 그리고 있었음.",
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
        ENG: "Qwen3.5-9B on vLLM (FP8) · FastAPI · React/TypeScript · direct OOXML patching · Docker Compose",
        KOR: "Qwen3.5-9B (vLLM, FP8) · FastAPI · React/TypeScript · OOXML 직접 패치 · Docker Compose",
      },
      results: {
        ENG: "8-model document: 1,225 of 1,232 cells auto-filled · FP8: 40% less memory, 19% faster, no accuracy loss (85.2% → 85.5%)",
        KOR: "8개 모델 문서 1,232칸 중 1,225칸 자동 채움 · FP8 전환으로 메모리 40% 절감, 응답 19% 단축, 정확도 유지(85.2% → 85.5%)",
      },
      links: [],
    },
    kdlDocExtraction: {
      problem: {
        ENG: "20 years of quality and process knowledge sat in thousands of free-form Excel/PPT/PDF files (Korean, English, Chinese, some scanned) that could not be searched; the client needed DB-ready data on an offline server, at accuracy verified against its own audit ledger.",
        KOR: "20년 치 품질·공정 지식이 양식이 제각각인 엑셀·PPT·PDF 수천 건(국·영·중, 스캔 포함)에 묶여 검색이 불가능했음. 고객은 폐쇄망 서버에서, 자체 검수 대장으로 검증된 정확도의 DB 적재용 데이터를 요구.",
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
    kdlOcrResearch: {
      problem: {
        ENG: "The deployed recognizer read only 68.63% of real handwritten form fields exactly, often confusing look-alike characters (0/ㅇ/O, ㄷ/ㄹ, l/ㅣ/1), and there was no trustworthy benchmark for real handwriting to measure improvements against.",
        KOR: "배포 중이던 Recognizer는 실제 고객 서식의 필기체를 정확히 읽는 비율이 68.63%에 그쳤고, 0/ㅇ/O, ㄷ/ㄹ, l/ㅣ/1 같은 닮은 글자를 자주 혼동. 개선을 측정할 믿을 만한 실제 필기체 평가셋도 없었음.",
      },
      team: { ENG: "", KOR: "" },
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
        ENG: "Exact match 85.23% → 89.49% (+4.26 pp) and CER 7.52% → 5.09% on 158,898 test samples · handwriting +5.49 pp · handwriting goldenset 68.63% → 77.33% · trained the weights deployed to a ** Capital project",
        KOR: "테스트 158,898개 기준 정확도 85.23% → 89.49% (+4.26%p), CER 7.52% → 5.09% · 필기체 +5.49%p · 필기체 골든셋 68.63% → 77.33% · **캐피탈 프로젝트 배포 가중치 학습",
      },
      lessons: {
        ENG: "Ablation showed the synthetic handwriting data added only ~0.2 pp — the gain came from data curation and the training recipe, so further generation was stopped before scaling it up",
        KOR: "ablation 결과 합성 필기체 데이터의 기여는 약 0.2%p — 향상은 데이터 큐레이션과 학습 레시피에서 나왔음을 확인하고, 합성 데이터 추가 생성을 확대 전에 중단",
      },
      links: [],
    },
    kdlDisasterVideo: {
      problem: {
        ENG: "Detection models need footage of wildfires and floods at the moment they start, but real CCTV rarely captures the onset; the client needed natural, progressing disaster videos generated from real CCTV stills, at volume, within 9 days.",
        KOR: "탐지 모델에는 산불·침수가 '시작되는 순간'의 영상이 필요하지만 실제 CCTV에는 거의 없음. 고객은 실제 CCTV 사진을 기반으로 자연스럽게 진행되는 재난 영상을 9일 안에 대량으로 요구.",
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
        ENG: "FLUX.2-dev (image edit) → Wan2.2-I2V-A14B (image-to-video, 720p) → RIFE 4.7 (interpolation) · Qwen3-VL-8B + OpenCV (QA) · FastAPI",
        KOR: "FLUX.2-dev (이미지 편집) → Wan2.2-I2V-A14B (이미지→영상, 720p) → RIFE 4.7 (프레임 보간) · Qwen3-VL-8B + OpenCV (검수) · FastAPI",
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
        ENG: "Heart-rate readings from the wearable's BCG sensor became unreliable whenever the dog trembled or moved, and an ECG reference is not available in everyday use.",
        KOR: "웨어러블 BCG 센서의 심박 측정이 강아지가 떨거나 움직이면 불안정해졌고, 일상 사용 환경에서는 기준이 될 ECG 신호도 없었음.",
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
        ENG: "General-purpose LLMs answer Korean legal questions without grounding in actual statutes and precedents, so their citations cannot be verified.",
        KOR: "범용 LLM은 실제 법령·판례에 근거하지 않고 한국 법률 질문에 답해, 인용의 출처를 검증할 수 없었음.",
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
        ENG: "Reporting reckless driving meant finding the right dashcam clip yourself and typing the plate, location and violation by hand.",
        KOR: "난폭운전을 신고하려면 블랙박스 영상을 직접 찾아 차량번호·위치·위반 유형을 손으로 입력해야 했음.",
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

  // projectMeta[key] → Entry의 meta/links props (빈 값 제외)
  const getMeta = (key) => {
    const m = projectMeta[key];
    if (!m) return {};
    const rows = [
      [t[lang].metaProblem, m.problem],
      [t[lang].metaTeam, m.team],
      [t[lang].metaRole, m.role],
      [t[lang].metaContribution, m.contribution],
      [t[lang].metaModel, m.model],
      [t[lang].metaResults, m.results],
      [t[lang].metaLessons, m.lessons],
    ]
      .map(([label, v]) => ({ label, value: v?.[lang] }))
      .filter((r) => r.value);
    return { meta: rows, links: m.links };
  };

  const [expandedSections, setExpandedSections] = useState({
    experience: {expanded: false, entries: {}},
    education: {expanded: false, entries: {}},
    skills: {expanded:false},
    engagements: {expanded: false, entries: {}},
    projects: {expanded: true, entries: {}},
    achievements: {expanded: false, entries: {}},
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
  const work_kdl_title = lang === 'ENG' ? "AI Engineer, Korea Deep Learning" : "AI 엔지니어, 한국딥러닝";
  const work_kdl_details_ENG = [
    "Build LLM/VLM document-automation systems for enterprise clients and deliver them with Docker to offline, on-prem GPU servers.",
    "Generalized a KIE pipeline (document-template classification, automatic extraction-schema definition) built for one client into PPASS, a shared base module customized for each client.",
    "Product-planning document automation for ** Electronics: PPT → master spec sheet → product roadmap, with human-in-the-loop review.",
    "Quality and process document extraction API for an automotive parts manufacturer: 7 document types, 93.49% accuracy on the client's audit ledger.",
    "Generative video augmentation (wildfire, flood) from real CCTV stills to train disaster-detection models.",
    "R&D on the recognizer of the company's two-stage OCR (detector → recognizer) for Korean handwriting: +4.26 pp exact match, weights deployed to a ** Capital project.",
  ];
  const work_kdl_details_KOR = [
    "기업 고객용 LLM·VLM 문서 자동화 시스템을 개발하고 Docker로 폐쇄망 GPU 서버에 납품.",
    "한 고객사용 KIE 파이프라인(문서 틀 분류, 추출 스키마 자동 정의)을 사내 공통 기본 모듈 PPASS로 일반화해 고객사마다 맞춤 적용.",
    "**전자 상품기획 문서 자동화: PPT → 마스터 스펙시트 → 제품 로드맵, 사람 검수(HITL) 포함.",
    "자동차 부품 제조사 품질·공정 문서 추출 API: 문서 7종, 고객 검수 대장 기준 정확도 93.49%.",
    "실제 CCTV 사진 기반 재난(산불·침수) 영상 생성 증강으로 재난 탐지 모델 학습 데이터 구축.",
    "사내 2-stage OCR(Detector → Recognizer)의 한국어 필기체 Recognizer 연구: 정확도 +4.26%p, **캐피탈 프로젝트에 가중치 배포.",
  ];

  // ===== Projects – Korea Deep Learning =====
  const kdl_planning_ENG = [
    "Automated ** Electronics' manual flow — product-planning review decks (PPT) → master spec sheet (Excel) → product roadmap — with LLM/VLM extraction, rule-based mapping and a human-in-the-loop review console used by the client's planners.",
    "Merged values from several sources by priority (deck body > in-deck spec table > embedded Excel), flagging conflicts with per-source evidence; fixed multi-model documents so 1,225 of 1,232 cells fill automatically.",
    "Wrote into large Excel files by patching sheet XML directly, keeping original formatting and avoiding the bloat openpyxl caused (a 1.5MB file growing past 1GB).",
    "Generated product roadmaps by fixing lanes from PPT coordinates and reading only quarters with a VLM, with rule-based date normalization and carry-over of schedules from the previous roadmap.",
    "Evaluated FP8 vs bf16 on a 28-document set with a re-written, unbiased answer key: same accuracy, 40% less memory, 19% faster.",
    "Shipped an offline installer (install / update / rollback / backup) for an air-gapped server without sudo, ran the demo server, and delivered 30+ client requirements tracked by ID and priority — including a same-day IP-restriction security request.",
  ];
  const kdl_planning_KOR = [
    "**전자 상품기획팀이 수작업으로 하던 '검토의뢰서(PPT) → 마스터 스펙시트(Excel) → 제품 로드맵' 과정을 LLM·VLM 추출 + 규칙 매핑 + 사람 검수(HITL) 콘솔로 자동화, 고객 실무자가 실제 사용.",
    "여러 원천(본문 > 본문 스펙표 > 첨부 엑셀)을 우선순위로 병합하고 충돌은 근거와 함께 검수로 올림, 다중 모델 문서 1,232칸 중 1,225칸 자동 채움.",
    "시트 XML을 직접 패치해 대형 엑셀의 서식을 유지하고, openpyxl 저장 시 1.5MB 파일이 1GB 넘게 부풀던 문제 제거.",
    "로드맵 생성: 레인은 PPT 좌표로 확정하고 분기만 VLM으로 판독, 날짜는 규칙으로 정규화하고 이전 로드맵의 일정·상태를 이어받음.",
    "편향을 제거한 정답셋(28건)으로 FP8 vs bf16 평가: 정확도 동일, 메모리 40% 절감, 응답 19% 단축.",
    "sudo 없는 폐쇄망 서버용 설치 번들(install/update/rollback/backup) 제작, 데모 서버 운영, 고객 요구사항 30여 건을 ID·우선순위로 관리해 반영(IP 제한 보안 요청 당일 처리).",
  ];

  const kdl_extract_ENG = [
    "Built an extraction API that turns 20 years of an automotive parts manufacturer's quality and process documents (thousands of Excel/PPT/PDF files in Korean, English and Chinese) into DB-ready data across 7 document types; delivered to the client's offline GPU server.",
    "Deterministic first: 5 Excel types are parsed from cell borders, merges and styles without an LLM, so results are identical every run; LLMs only for free-form reports and images.",
    "Built a grader that exactly reproduces the client's audit-ledger accuracy, plus an LLM/parser response cache to separate code effects from model noise; no change shipped if any correct cell regressed.",
    "Recovered attachment names by parsing OLE binaries and reading text inside icon images: 244 → 1,182.",
    "Accepted OCR from small images only when two models agree (≥50% trigram overlap), cleanly separating hallucinated tables (0–0.16) from real ones (0.57–1.0).",
    "Replaced model-based source highlighting (15–41% accurate) in the review UI with rule-based word-coordinate matching: 97.1% of table cells matched.",
  ];
  const kdl_extract_KOR = [
    "자동차 부품 제조사의 20년 치 품질·공정 문서(엑셀·PPT·PDF 수천 건, 국·영·중 혼재)를 DB 적재용 데이터로 뽑는 추출 API 개발, 문서 7종 지원, 고객 폐쇄망 GPU 서버에 납품.",
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
    "Fine-tuned PARSeq on a curated 11.6M-sample mix (6.15M handwriting / 5.45M printed): best on 13 of 14 test datasets, and trained the weights deployed to a ** Capital project.",
    "Built a handwriting/printed classifier on the frozen PARSeq encoder with attention pooling (85% accuracy).",
  ];
  const kdl_ocr_KOR = [
    "사내 2-stage OCR(텍스트 Detector → Recognizer) 중 Recognizer의 한국어 필기체 성능 개선 연구, 아키텍처를 바꿔 가며 비교: PARSeq, PP-OCRv5, SVTRv2(필터링한 4,086만 장 학습).",
    "고객 ROI 박스와 정답(GT)으로 오토라벨링 파이프라인 구축(bbox 중심이 ROI 안 → 정확 일치 → 띄어쓰기 제거 부분 일치): 검수 없이 필기체 라벨 약 8만 장.",
    "실제 고객 서식에서 필기체 골든셋 15,808개 구축, 모든 라벨을 직접 재검수: 정답이 없는 샘플(인쇄된 서식 문구)과 전체를 두 줄로 지운 텍스트는 제외, 난이도(boundary: 이/01/OI처럼 애매한 글자, hard: 실제 악필)·노이즈·취소선·문자 유형·길이로 태깅해 오류를 구간별로 분석 가능하게 설계.",
    "헷갈리는 글자 쌍(0/ㅇ/O, ㄷ/ㄹ, l/ㅣ/1)과 초성·중성·종성 단위로 오류 분석, 종성 정확도를 낮게 계산하던 지표 버그 발견·수정.",
    "합성 필기체 생성: MX-Font(필기체 38종, ascender/descender 정렬 단어 합성) → Gemini 이미지 생성(이름·주소·어려운 케이스), ablation과 gain/drop 케이스 분석으로 실제 효과 검증.",
    "필기체 615만 / 인쇄체 545만, 총 1,160만 장으로 데이터를 구성해 PARSeq fine-tuning: 테스트 14종 중 13종 1위, **캐피탈 프로젝트 배포 가중치 학습.",
    "PARSeq 인코더를 고정하고 attention pooling을 붙인 필기체/인쇄체 분류기 개발(정확도 85%).",
  ];

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
    "Sole developer of the LSTM-based canine heart-rate algorithm for the Sense1 Vet wearable, reaching 96% accuracy.",
    "Built BCG signal processing (FFT, wavelet denoising) and unsupervised IJK peak detection to reduce dependence on ECG.",
    "Worked with hardware and production teams to improve data acquisition and signal quality.",
  ];
  const work_ai_details_KOR = [
    "Sense1 Vet 웨어러블의 LSTM 기반 반려견 심박 알고리즘 단독 개발, 정확도 96% 달성.",
    "BCG 신호처리(FFT·웨이블릿 노이즈 제거)와 비지도 IJK 피크 검출로 ECG 의존도 감소.",
    "하드웨어·생산팀과 협업해 데이터 수집과 신호 품질 개선.",
  ];


  const work_app_title = lang === 'ENG' ? "App Developer, CareSix Co., LTD" : "앱 개발자, 케어식스";
  const work_app_details_ENG = [
    <div key="detail-1">
      Developed a production-grade application in Kotlin for the Sense1 Vet model, actively used in the device manufacturing and deployment process. 
      The app automated mapping of NFC tags, QR codes, and barcodes into a structured CSV format, ensuring traceability and quality control. -
      <a href={productionapk} download style={{ marginLeft: '8px', textDecoration: 'underline', color: '#007BFF' }}>
        {t[lang].downloadApk}
      </a>
    </div>,
    'Built a Bluetooth-enabled app (Cotons AI) in Flutter for capturing BCG signals, 6-axis sensor data, and temperature readings.',
  ];
  const work_app_details_KOR = [
    <div key="detail-1">
      Kotlin으로 Sense1 Vet 양산/배포 공정에 실제 사용되는 프로덕션급 앱을 개발. 
      NFC/QR/바코드 매핑을 자동화하여 CSV로 내보내고, 추적 가능성과 품질 관리를 보장. -
      <a href={productionapk} download style={{ marginLeft: '8px', textDecoration: 'underline', color: '#007BFF' }}>
        {t[lang].downloadApk}
      </a>
    </div>,
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
          <a href="tel:+821074465388" aria-label="Phone">
            <FaPhone size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
          <a href="https://github.com/jwc5388" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
          <a href="https://www.linkedin.com/in/jwcbillion33" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
        </div>

        {profile.tagline[lang] && <p className="profile-tagline">{profile.tagline[lang]}</p>}
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
        <h2 onClick={() => toggleSection('experience')}>{t[lang].work}</h2>
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

            {/* Company about */}
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
          </div>
        )}
      </section>

      {/* ===== Education ===== */}
      <section className="Education-section">
        <h2 onClick={() => toggleSection('education')}>{t[lang].education}</h2>
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
        <h2 onClick={() => toggleSection('projects')}>{t[lang].projects}</h2>
        {expandedSections.projects.expanded && (
          <div className="section-content">

            {/* Main Projects – 항상 표시 */}
            <h3 style={{ marginTop: 0 }}>{t[lang].mainProjects}</h3>

            <Entry
              title={lang==='ENG' ? "Product-Planning Document Automation (AX)" : "상품기획 문서 자동화 (AX)"}
              location={lang==='ENG' ? "Korea Deep Learning · ** Electronics" : "한국딥러닝 · **전자"}
              dates={lang==='ENG' ? "July 2026 ~ Present" : "2026.07 ~ 진행중"}
              details={lang==='ENG' ? kdl_planning_ENG : kdl_planning_KOR}
              {...getMeta('kdlProductPlanning')}
              isExpanded={expandedSections.projects.entries.kdlProductPlanning}
              onClick={() => toggleEntry('projects', 'kdlProductPlanning')}
            />

            <Entry
              title={lang==='ENG' ? "Manufacturing Document Extraction API" : "제조 품질·공정 문서 DB화 추출 API"}
              location={lang==='ENG' ? "Korea Deep Learning · Automotive parts manufacturer" : "한국딥러닝 · 자동차 부품 제조사"}
              dates={lang==='ENG' ? "August 2026 ~ October 2026" : "2026.08 ~ 2026.10"}
              details={lang==='ENG' ? kdl_extract_ENG : kdl_extract_KOR}
              {...getMeta('kdlDocExtraction')}
              isExpanded={expandedSections.projects.entries.kdlDocExtraction}
              onClick={() => toggleEntry('projects', 'kdlDocExtraction')}
            />

            <Entry
              title={lang==='ENG' ? "Disaster CCTV Video Augmentation (Wildfire · Flood)" : "재난 CCTV 영상 증강 (산불·침수)"}
              location={lang==='ENG' ? "Korea Deep Learning · Generative AI pipeline" : "한국딥러닝 · 생성형 AI 파이프라인"}
              dates={lang==='ENG' ? "October 2026 (9 days)" : "2026.10 (9일)"}
              details={lang==='ENG' ? kdl_video_ENG : kdl_video_KOR}
              {...getMeta('kdlDisasterVideo')}
              isExpanded={expandedSections.projects.entries.kdlDisasterVideo}
              onClick={() => toggleEntry('projects', 'kdlDisasterVideo')}
            />

            <Entry
              title={lang==='ENG' ? "Korean Handwriting OCR Recognizer (R&D)" : "한국어 필기체 OCR Recognizer 연구 (R&D)"}
              location={lang==='ENG' ? "Korea Deep Learning · R&D, shipped to a ** Capital project" : "한국딥러닝 · R&D, **캐피탈 프로젝트 배포"}
              dates={lang==='ENG' ? "January 2026 ~ April 2026" : "2026.01 ~ 2026.04"}
              details={lang==='ENG' ? kdl_ocr_ENG : kdl_ocr_KOR}
              {...getMeta('kdlOcrResearch')}
              isExpanded={expandedSections.projects.entries.kdlOcrResearch}
              onClick={() => toggleEntry('projects', 'kdlOcrResearch')}
            />

            <Entry
              title={lang==='ENG' ? "Sense1 Vet AI Algorithm" : "Sense1 Vet AI 알고리즘"}
              location={lang==='ENG' ? "CareSix Co., LTD" : "케어식스"}
              dates={lang==='ENG' ? "September 2024 ~ February 2025" : "2024.09 ~ 2025.02"}
              details={getDetails(pj_sense1_ENG, pj_sense1_KOR, sense1_media)}
              {...getMeta('sense1Vet')}
              isExpanded={expandedSections.projects.entries.sense1Vet}
              onClick={() => toggleEntry('projects', 'sense1Vet')}
            />

            <Entry
              title="[IBM x RedHat] Law-AI"
              location={lang==='ENG' ? "IBM Final Group Project" : "IBM 파이널 그룹 프로젝트"}
              dates={lang==='ENG' ? "2025 ~ October 2025" : "2025 ~ 2025.10"}
              // details={lang==='ENG' ? law_ENG : law_KOR}
              details={getDetails(law_ENG, law_KOR, lawai_media)}
              {...getMeta('lawIntelligence')}
              isExpanded={expandedSections.projects.entries.lawIntelligence}
              onClick={() => toggleEntry('projects', 'lawIntelligence')}
            />


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
        <h2 onClick={() => toggleSection('engagements')}>{t[lang].engagements}</h2>
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
        <h2 onClick={() => toggleSection('achievements')}>{t[lang].achievements}</h2>
        {expandedSections.achievements.expanded && (
          <div className="section-content">

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
        <h2 onClick={() => toggleSection('skills')}>{t[lang].skills}</h2>
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