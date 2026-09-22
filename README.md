<div align="center">

# Jinwoong Kim

**Computer Science @ Yonsei University**<br>
Building AI agents, blockchain infrastructure, and products that run in the real world.

[Portfolio](https://real-woong-portfolio-web.jinung344.workers.dev/) · [Repositories](https://github.com/Real-Woong?tab=repositories)

</div>

## Currently building

| Project | Current focus |
|---|---|
| [Il-Que](https://github.com/Real-Woong/il-que) | RPG-style macOS quest widget built with Tauri and React |
| [TAPIoca](https://github.com/Real-Woong/TAPIoca) | Live ETF trading agent operating under fixed risk limits |
| [THE ZONE AGORA](https://github.com/TheZoneAgora/contract) | Sui Vault and DeepBook execution engine |
| [BuildTrace](https://github.com/Real-Woong/BuildTrace) | Verifiable provenance for multi-organization BIM workflows |

## Selected engineering work

### [THE ZONE AGORA](https://github.com/TheZoneAgora/contract)

Non-custodial automated trading infrastructure on Sui. I own the contract, Vault, execution-agent, and blockchain-integration work.

- generic `UserVault<Base, Quote>` keeps withdrawal authority with the user
- routes guarded orders through DeepBook v3 and charges a 10 bps protocol fee
- validates signal identity, pair, freshness, replay, and risk limits before touching the chain
- verified on Sui testnet with 70 Move tests and 80 Node.js tests

`Sui Move` `DeepBook v3` `Node.js` `TypeScript` `GraphQL` `gRPC` `x402`

---

### [BuildTrace](https://github.com/Real-Woong/BuildTrace)

Evidence infrastructure for disputes in BIM workflows. The system records what changed, who approved it, and whether the supporting evidence still verifies.

- dependency-free IFC4 parser and canonical object manifest
- Ed25519-signed multi-organization events and Merkle inclusion proofs
- citation-first answers that abstain when evidence is missing
- Walrus-anchored evidence bundle with 26 automated attack-path tests

[Live demo](https://buildtrace-demo.pages.dev) · `Node.js` `IFC4` `Ed25519` `Merkle Tree` `Walrus` `Sui`

---

### [TAPIoca](https://github.com/Real-Woong/TAPIoca)

ETF trading agent connected to the Toss Securities API, running live since September 2026 with a fixed capital and risk envelope.

- combines trend, MACD, sentiment, and macro signals into target weights
- validates policy changes through a PAPER ledger and historical backtests
- reconciles the internal ledger against the real brokerage account
- sends daily execution, position, and performance reports through Telegram

`Node.js` `Toss Securities API` `FRED API` `Telegram Bot API` `systemd`

---

### [Marvis](https://github.com/Real-Woong/marvis)

Personal AI secretary that turns Telegram and Siri input into durable tasks, ideas, and morning briefings.

- one shared core path for Telegram and Siri webhooks
- SQLite storage with tool calling and an LLM router running in shadow mode
- reads project status from local source documents and writes edits back to them
- runs continuously on a Mac mini under launchd

`Python 3.12` `SQLite` `Gemini API` `Telegram` `launchd`

---

### [Il-Que](https://github.com/Real-Woong/il-que)

An RPG-style daily quest widget for macOS, designed in Figma and implemented as a native desktop HUD.

- frameless, always-on-top Tauri window with native drag and dynamic resizing
- single and count quests with explicit completion and progress controls
- shared quest model designed for independent theme-specific visual layers
- non-commercial release direction using original, license-safe assets

`Tauri 2` `React 19` `TypeScript` `Rust` `Figma`

---

### [BlockTroll](https://github.com/Real-Woong/block-troll)

Local AI comment-filtering system that lets the reader decide whether to reveal abusive, spam, or mocking content.

- TOXIC, SPAM, and TAUNT classification instead of a single harmful-content label
- Chrome MV3 extension backed by a local FastAPI inference service
- comments remain inside the private Tailscale network rather than going to cloud inference

`Python` `FastAPI` `KoELECTRA` `Transformers` `Chrome Extension MV3` `Tailscale`

## More projects

<details>
<summary><strong>Blockchain</strong></summary>

### [CryptoFunding](https://github.com/Real-Woong/crypto-funding)

End-to-end crowdfunding system: Move contracts, Node.js API, PostgreSQL, and React client.

### [BlockThon 2026](https://github.com/Real-Woong/BlockThon2026-RandingPage)

Sui and Walrus hacker house where I worked on the Move curriculum, demo, and event experience.

### [BlockThon 2026 Landing Page](https://github.com/Real-Woong/BlockThon2026-RandingPage)

Interactive event site designed and shipped through Amazon S3 and CloudFront.

</details>

<details>
<summary><strong>AI / Computer Vision</strong></summary>

### [AI-SPOC](https://github.com/Real-Woong/ai-spoc)

NLP-based routing for public-sector civil complaints.

### [Textro](https://github.com/Real-Woong/textro)

Fully local OCR pipeline for scanned administrative PDFs.

### [Hand Gesture Recognition](https://github.com/Real-Woong/hand-gesture-recognition)

Real-time webcam gesture recognition with MediaPipe.

### [Realtime Emotion Recognition](https://github.com/Real-Woong/realtime-emotion-recognition)

Facial emotion recognition with interactive visual overlays.

### [Hand Music Controller](https://github.com/Real-Woong/hand-music-controller)

Gesture-controlled media playback.

</details>

<details>
<summary><strong>Web & App</strong></summary>

### [Portfolio Web](https://github.com/Real-Woong/real-woong-portfolio-web)

Source-driven bilingual portfolio with content drift and translation checks.

### [Sogon.Zip](https://github.com/Real-Woong/sogon.zip)

Relationship archive built with React, Cloudflare Workers, and D1.

### [BubbleBreak](https://github.com/Real-Woong/bubblebreak)

Multiplayer interest-bubble icebreaker built on Workers and D1.

### [HealEat](https://github.com/Real-Woong/healeat-ios)

Disease-aware restaurant recommendations for iOS.

### [UniMade](https://github.com/Real-Woong/unimade-web)

Student marketplace web application.

</details>

## Core stack

`Python` `TypeScript` `Node.js` `React` `Next.js` `Tauri` `Rust`<br>
`Sui Move` `DeepBook` `Cloudflare Workers` `D1` `SQLite` `PostgreSQL`

## What I care about

- systems that expose their assumptions and failure states
- evidence, reproducibility, and tests around important decisions
- moving prototypes into real operation without hiding the tradeoffs
- product interfaces that make complex systems understandable

For screenshots, design process, and longer case studies, visit my [portfolio](https://real-woong-portfolio-web.jinung344.workers.dev/).
