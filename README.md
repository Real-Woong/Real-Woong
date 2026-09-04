<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=0:0F2027,50:203A43,100:2C5364&height=230&section=header&text=Jinwoong%20Kim&fontSize=45&fontColor=ffffff&animation=fadeIn)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=58A6FF&center=true&width=650&lines=CS+Student+at+Yonsei+University;AI+%2B+Blockchain+System+Builder;Trading+Agents+%C2%B7+Sui+Move+%C2%B7+NLP+Systems)](https://git.io/typing-svg)

</div>

---

# 👋 About Me

Computer Science student at **Yonsei University**

Interested in building **AI systems, blockchain infrastructure, and real-world automation software.**

[MyPortfolio](https://real-woong-portfolio-web.jinung344.workers.dev/)

Currently focusing on:

- autonomous trading agents (AI signals → on-chain execution)
- Sui Move smart contracts & DeFi infrastructure
- provenance and verifiable audit systems
- NLP systems and workflow automation
- desktop product design and interaction prototyping

Goal: **become a strong system builder who designs and ships real products.**

---

# 🔭 Currently Building

| Project | What's happening now |
|--------|----------------------|
| [Il-Que](https://github.com/Real-Woong/il-que) | RPG-style macOS quest widget — learning product and interaction design through Figma, React, and Tauri |
| [TAPIoca](https://github.com/Real-Woong/TAPIoca) | Running **live execution since 2026-09-01** under fixed risk limits |
| [THE ZONE AGORA](https://github.com/TheZoneAgora/contract) | Sui Vault + DeepBook v3 execution engine — BlockBlock 2026 Summer |
| [BuildTrace](https://github.com/Real-Woong/BuildTrace) | Runnable proof demo shipped — dispute resolution over signed BIM events, 11 tests green; next is the Fabric adapter |
| [BlockThon 2026](https://github.com/Real-Woong/BlockThon2026-RandingPage) | Sui·Walrus hacker house — landing page, curriculum, demo film |
| [Sogon.Zip](https://github.com/Real-Woong/sogon.zip) | Relationship archive service — beta hardening |

---

# ⛓ Blockchain Projects

### 🏛 [THE ZONE AGORA](https://github.com/TheZoneAgora/contract)

**Sui-based automated trading platform** where users keep withdrawal authority

Team Project — *Sui Contract / Vault / Execution Agent*

- non-custodial `UserVault<Base, Quote>` — the agent trades, the user withdraws
- DeepBook v3 order routing behind an adapter boundary with a 10bps protocol fee
- execution agent that verifies signals before they ever touch the chain
- x402 payment-gated signal endpoint (GraphQL / gRPC after the JSON-RPC sunset)
- HMAC-SHA256 on the executor's inbound endpoint — a missing or wrong signature gets a 401, closing an entry point that could otherwise trigger a real trade
- Move 70/70 and npm 54/54 tests green, deployed on Sui testnet

Tech: Sui Move, DeepBook v3, TypeScript SDK, Node.js, x402, GraphQL, gRPC

---

### 🏗 [BuildTrace](https://github.com/Real-Woong/BuildTrace)

**Provenance infrastructure for multi-organization BIM workflows**

Team Project

- links change, release, review, and approval history with hashes and signatures
- **runnable dependency-free Node.js proof demo** for the dispute "who received V11?" — streaming SHA-256 over V10/V11, a canonical manifest, and Ed25519-signed events from three organizations
- Merkle inclusion proofs over the event log, tamper detection on both files and leaves, and citation-first answers that **abstain when the evidence is not there**
- **11 automated tests green, covering the attack paths too** — unauthorized approval, duplicate events, a tampered file, a tampered Merkle leaf, abstention on a question of legal liability
- Hyperledger Fabric permissioned consortium network as the base ledger, with Merkle roots selectively anchored to a public chain (hybrid design)
- BIM originals stay off-chain in CDE / S3 — only identifiers, hashes, and events on-ledger
- separate experimental track comparing `BIM Object ↔ Sui Object` mapping

Tech: Node.js, Ed25519, Hyperledger Fabric, Sui Move, IFC / BIM, Merkle Tree

---

### 🧱 [BlockThon 2026](https://github.com/Real-Woong/BlockThon2026-RandingPage)

**Sui · Walrus hacker house** for 36–41 participants, half of them writing Move for the first time

Team Project — *curriculum, demo film, landing page*

- landing page driven by a single content source — write a value and it ships, leave it empty and the section disappears ([build write-up](#-blockthon-2026-landing-page))
- 74-slide Move curriculum built for first-time Move developers
- 40-second demo concept: two identical meme cards, one swapped — the record picks the real one

Tech: Next.js, TypeScript, Sui, Walrus, Move

---

### 💰 [CryptoFunding](https://github.com/Real-Woong/crypto-funding)

Blockchain crowdfunding platform

Team Project

- decentralized funding system with smart-contract-based donations
- **first end-to-end build where I wrote every layer myself** — the Move contracts, the backend API, and the frontend
- Sui Move on chain, a Node.js API over PostgreSQL through Prisma, and a React client

Tech: Sui Move, Node.js, PostgreSQL, Prisma, React, Vite, TypeScript

---

# 🧠 AI Projects

### 🧋 [TAPIoca](https://github.com/Real-Woong/TAPIoca)

Personal **ETF trading agent powered by the Toss Securities API**

- combines trend, MACD, news sentiment, and macro signals into target weights
- FRED macroeconomic data classifies the market regime
- validated against a PAPER ledger and historical backtests before any live order
- **running live execution since 2026-09-01**, under fixed per-order, daily, and total-loss limits
- daily portfolio, trade, and performance reports over Telegram
- runs automatically during U.S. market hours on an Oracle Cloud Ubuntu server

Tech: Node.js, Toss Securities API, FRED API, Telegram Bot API, Oracle Cloud, systemd

---

### 🤖 [Marvis](https://github.com/Real-Woong/marvis)

Personal **AI secretary for idea capture and schedule memory**

- Built to prevent forgotten ideas, tasks, and daily schedules
- Telegram-based interface with Gemini-powered responses
- Sends both text and Korean TTS audio replies for AirPods/mobile use
- Runs 24/7 on an Oracle Cloud Always Free Ubuntu server
- Includes JSON-based memory and date-aware schedule organization

Tech: Python, Telegram Bot API, Gemini API, gTTS, Oracle Cloud, systemd

---

### 🛡 [BlockTroll](https://github.com/Real-Woong/block-troll)

AI-based **comment filtering Chrome extension** for social feeds

- KoELECTRA classification across **three classes, not one** — TOXIC (abuse), SPAM (ads and link bait), TAUNT (mockery and sarcasm)
- matched comments are blurred or hidden in place rather than removed, so the reader decides whether to look
- FastAPI inference host served over Tailscale from a local machine — **no cloud inference**, the comments never leave the network
- Manifest V3 extension, dataset-driven model training

Tech: Python, FastAPI, KoELECTRA, Transformers, Chrome Extension MV3, Tailscale

---

### 📨 [AI-SPOC](https://github.com/Real-Woong/ai-spoc)

AI-based civil complaint routing system
for the **2026 Ministry of the Interior and Safety AI Competition**

- NLP classification for administrative complaints
- softmax-based routing model
- dataset preprocessing pipeline

Tech: Python, NLP, Machine Learning

---

### 📄 [Textro](https://github.com/Real-Woong/textro)

Local **Tesseract OCR-based PDF text extraction tool**

- Extract text from scanned administrative documents
- Designed for public-sector workflows
- Fully local execution (no cloud OCR)

Tech: Python, PyMuPDF, Tesseract OCR

---

# 👁 Computer Vision

### ✋ [Hand Gesture Recognition](https://github.com/Real-Woong/hand-gesture-recognition)

Real-time hand gesture recognition from a webcam — a detected gesture (V sign / middle finger / open palm) puts a different image on screen

Tech: Python, OpenCV, CVZone, MediaPipe

---

### 😀 [Realtime Emotion Recognition](https://github.com/Real-Woong/realtime-emotion-recognition)

Real-time facial emotion recognition — DeepFace reads the emotion, and a shape you pick (circle / square / triangle) is overlaid on the face

Tech: Python, OpenCV, DeepFace, TensorFlow

---

### 🎵 [Hand Music Controller](https://github.com/Real-Woong/hand-music-controller)

Controls music playback through real-time hand gesture recognition

Tech: Python, OpenCV, MediaPipe

---

# 🌐 Web & App Projects

### 🎮 [Il-Que](https://github.com/Real-Woong/il-que)

**RPG-style daily quest widget for macOS**

Personal toy project for learning visual and interaction design through Figma while turning the designs into a native desktop product.

- reframes everyday tasks as a game Quest Helper / Quest Tracker instead of a conventional to-do list
- frameless, always-on-top desktop HUD with dynamic window sizing and native drag, minimize, and close behavior
- functional Maple-inspired MVP with single/count quests, explicit completion, progress controls, and theme selection
- separate Lost Ark and Genshin visual directions planned on top of shared quest logic
- non-commercial public release planned with original, license-safe assets and fonts

Tech: Tauri 2, React 19, TypeScript, Vite, Rust, Figma

---

### 🟪 [BlockThon 2026 Landing Page](https://github.com/Real-Woong/BlockThon2026-RandingPage)

**Interactive landing page for BlockThon 2026 — designed, built, and shipped end to end**

[blockthon.com](https://blockthon.com)

Team Project — *product planning, UI/UX design, frontend architecture, deployment, troubleshooting*

- owned the information architecture, layout, typography, color, and interaction direction — a web experience that carries the event's tone, not a static info page
- programmatic pixel-art system: shapes converted into pixel data and reusable constants, then generated in code for visual consistency, reuse, and interaction headroom
- Next.js + TypeScript structure separating content, brand assets, UI components, and interaction logic — a single content source decides what ships
- used AI as an implementation accelerator while keeping product direction, component boundaries, behavior conditions, and review criteria mine; every generated change verified against the real screen and build
- static export to Amazon S3 (`blockthon-landing`), delivered worldwide through CloudFront with a custom domain on HTTPS; wrote the bucket policy by hand — a single `s3:GetObject` allow scoped to `blockthon-landing/*` in place of the default deny-all
- diagnosed a production 403 by comparing CloudFront's Origin Path against the real S3 object key structure: the distribution was asking `blockthon-landing/blockthon-out/` for `index.html`, but the export actually lived one level deeper at `blockthon-landing/blockthon-out/blockthon/` — pointed Origin Path at the real prefix and invalidated the cache
- moved the distribution off its legacy TLS security policy to `TLSv1.2_2021`, dropping support for outdated protocols and cipher suites

Tech: Next.js, React, TypeScript, CSS Modules, Amazon S3, Amazon CloudFront

---

### 👩‍❤️‍👨 [Sogon.Zip](https://github.com/Real-Woong/sogon.zip)

Relationship-based private archive app

Personal Project

- private archive service for couples and close friends
- scheduled message and preference-sharing system
- account code-based partner connection
- web-based beta service

Tech: React, TypeScript, Vite, Cloudflare Pages, Cloudflare Workers, Cloudflare D1

---

### 🫧 [BubbleBreak](https://github.com/Real-Woong/bubblebreak)

Conversation ice-breaking web that finds what two people actually share

Personal Project

- people join the same room and build **interest bubbles**, then pop each other's to surface a real thing to talk about — the output is a conversation topic, not a score
- developed a full-stack interactive game using React with Cloudflare Workers and D1 in a unified deployment architecture
- implemented room-based multiplayer logic, cookie session handling, and event-driven user interaction flows
- engineered for efficient serverless operation by reducing unnecessary client polling and optimizing request-heavy behaviors

Tech: React, Cloudflare Workers, D1

---

### 🍽 [HealEat](https://github.com/Real-Woong/healeat-ios)

Restaurant recommendation app for **patients with chronic diseases**

Team Project

- disease-based food recommendation
- personalized restaurant filtering
- iOS application

Tech: Swift, iOS

---

### 🛒 [UniMade](https://github.com/Real-Woong/unimade-web)

Student marketplace platform

Team Project

- second-hand marketplace for university students
- user product listing system
- web-based service

Tech: React

---

### 💼 [Portfolio Web](https://github.com/Real-Woong/real-woong-portfolio-web)

Personal portfolio deployed on Cloudflare Workers

[real-woong-portfolio-web.jinung344.workers.dev](https://real-woong-portfolio-web.jinung344.workers.dev/)

Personal Project

- every project write-up has **one source** — `content/projects/*.json` — and a build step generates the page from it; a `--check` mode exits non-zero when the generated page and the source disagree
- fix counts are **counted from the defect log**, never typed, so a badge cannot claim more than the log records
- a status checker cross-references each project's `_STATUS.md` against the site's own labels and reports only the combinations that actually contradict — the two vocabularies are different axes, so it does not overwrite either
- bilingual KO/EN, with a test that fails on any Korean string shipped without a translation

Tech: Next.js, React, TypeScript, Tailwind, Cloudflare Workers

---

# 🛠 Tech Stack

## Languages

<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Move-6FBCF0?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Swift-F05138?style=for-the-badge&logo=swift&logoColor=white"/>
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white"/>
<img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black"/>
<img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white"/>
<img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white"/>

---

## Blockchain

<img src="https://img.shields.io/badge/Sui-4DA2FF?style=for-the-badge&logo=sui&logoColor=white"/>
<img src="https://img.shields.io/badge/DeepBook_v3-0B0B0B?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Walrus-24CDA6?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Hyperledger_Fabric-2F3134?style=for-the-badge&logo=hyperledger&logoColor=white"/>

---

## AI / ML

<img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"/>
<img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white"/>
<img src="https://img.shields.io/badge/MediaPipe-0097A7?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white"/>

---

## Backend / Frameworks

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Tauri-24C8DB?style=for-the-badge&logo=tauri&logoColor=white"/>

---

## Infra / Tools

<img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"/>
<img src="https://img.shields.io/badge/Oracle_Cloud-F80000?style=for-the-badge&logo=oracle&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"/>
<img src="https://img.shields.io/badge/CloudFront-8C4FFF?style=for-the-badge&logo=amazoncloudfront&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>

---

# ⭐ Highlight Projects

| Project | Description |
|--------|-------------|
| [Il-Que](https://github.com/Real-Woong/il-que) | RPG-style macOS quest widget designed in Figma and built with Tauri + React |
| [THE ZONE AGORA](https://github.com/TheZoneAgora/contract) | Non-custodial Sui trading vault with DeepBook v3 execution |
| [TAPIoca](https://github.com/Real-Woong/TAPIoca) | ETF trading agent running live under strict risk limits |
| [BuildTrace](https://github.com/Real-Woong/BuildTrace) | BIM provenance ledger on Hyperledger Fabric |
| [BlockTroll](https://github.com/Real-Woong/block-troll) | KoELECTRA toxic comment filtering extension |
| [AI-SPOC](https://github.com/Real-Woong/ai-spoc) | NLP-based civil complaint routing system |
| [Sogon.Zip](https://github.com/Real-Woong/sogon.zip) | Relationship-based private archive service |
| [BlockThon 2026 Landing Page](https://blockthon.com) | Interactive event landing page on S3 + CloudFront, shipped end to end |
| [BubbleBreak](https://github.com/Real-Woong/bubblebreak) | Conversation ice-breaking web |

---

# 📊 GitHub Stats

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=Real-Woong&show_icons=true&theme=tokyonight&hide_border=true"/>

<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Real-Woong&layout=compact&theme=tokyonight&hide_border=true"/>

</div>

---

# 📈 GitHub Activity

[![Jinwoong's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=Real-Woong&theme=tokyo-night)](https://github.com/Real-Woong)

---

# 🧠 Areas of Interest

- Blockchain Infrastructure & DeFi
- Autonomous Agents / Trading Systems
- Artificial Intelligence & NLP
- Verifiable Provenance & Audit Systems
- System Design
- Workflow Automation
- Product & Interaction Design

---

# 🐍 Contribution Snake

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Real-Woong/Real-Woong/blob/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/Real-Woong/Real-Woong/blob/output/github-contribution-grid-snake.svg">
  <img alt="github contribution grid snake animation" src="https://github.com/Real-Woong/Real-Woong/blob/output/github-contribution-grid-snake.svg">
</picture>

---

<div align="center">

<img src="https://komarev.com/ghpvc/?username=Real-Woong&style=for-the-badge&color=blue"/>

</div>
