/**
 * 프로필 README  <->  SECRETARY 의 _STATUS.md 대조
 *
 * 왜 필요한가: 2026-09-04 에 손으로 훑었더니 세 군데가 어긋나 있었다.
 * BuildTrace 는 9/1 에 돌아가는 proof demo 와 테스트 11건이 들어왔는데 README 는
 * "Fabric 을 기본 원장으로 정했다" 는 설계 단계 서술에 멈춰 있었고, Portfolio Web 은
 * `Tech: HTML, Cloudflare Workers` 한 줄이 전부였으며, Agora 는 8/28 실행기 인증이
 * 빠져 있었다. **셋 다 사본이 원본보다 아래쪽으로 어긋난 경우다.** 포트폴리오
 * 저장소에는 sync-status.mjs 가 있어 이런 것이 자동으로 걸리는데 여기엔 없었다.
 *
 *   node .github/scripts/check-drift.mjs           # 대조 결과 보고
 *   node .github/scripts/check-drift.mjs --check   # 걸리는 게 있으면 exit 1
 *   node .github/scripts/check-drift.mjs --links   # GitHub 링크 HTTP 확인까지 (네트워크)
 *   GITHUB_TOKEN=$(gh auth token) node .github/scripts/check-drift.mjs --links   # 한도 60 → 5000
 *
 * 문장을 대조하지 않는 이유: README 는 영어 산문이고 _STATUS.md 는 한국어 메모다.
 * 같은 사실을 다르게 쓰는 것이 정상이라 기계가 옳고 그름을 못 가른다. 그래서
 * **날짜 하나만 본다 — 원본이 사본보다 나중에 움직였는가.** 움직였으면 사람이
 * 읽어 보라고 부를 뿐, 무엇이 틀렸는지는 말하지 않는다.
 *
 * 한계 둘. ① README 전체를 건드리는 커밋(대규모 정리 등) 하나면 모든 섹션이
 * 방금 고친 것처럼 보인다. ② _STATUS.md 의 `updated:` 는 날짜뿐이라 **같은 날
 * 움직인 둘은 순서를 못 가린다.** 실제로 위 세 건 중 Agora 가 그랬다 —
 * _STATUS.md 도 README 도 8/28 이라 날짜만으로는 조용하다. 그래서 같은 날인
 * 것은 침묵시키지 않고 📎 로 띄운다(걸린 것으로 세지는 않는다).
 * 이 도구는 후보를 좁혀 줄 뿐 판정하지 않는다.
 *
 * GitHub Actions 에 걸지 마라. SECRETARY 는 이 기기에만 있는 비공개 저장소라
 * CI 에서는 색인 파일 자체가 없다. 로컬에서 사람이 돌리는 도구다.
 */
import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "../..");
const README = resolve(REPO, "README.md");
const MAP = JSON.parse(readFileSync(resolve(REPO, ".github/profile-map.json"), "utf8"));

const check = process.argv.includes("--check");
const wantLinks = process.argv.includes("--links");

const findings = [];
const notes = [];
const sameDay = [];

// ── README 파싱 ────────────────────────────────────────────────────────────
const lines = readFileSync(README, "utf8").split("\n");

/** `### 🏗 [BuildTrace](url)` 한 줄에서 제목과 URL 을, 그리고 섹션의 줄 범위를. */
function readSections() {
  const out = [];
  lines.forEach((line, i) => {
    const m = line.match(/^###\s+.*?\[(.+?)\]\((https?:\/\/[^)]+)\)/);
    if (!m) return;
    let end = i + 1;
    while (end < lines.length && !/^(#{1,3}\s|---\s*$)/.test(lines[end])) end++;
    // 줄 번호는 1-based (git log -L 이 그렇게 센다)
    out.push({ title: m[1], url: m[2], start: i + 1, end });
  });
  return out;
}

/** `# 🔭 Currently Building` 표의 각 행에 걸린 제목들. */
function currentlyBuilding() {
  const head = lines.findIndex((l) => /^#\s.*Currently Building/.test(l));
  if (head === -1) return [];
  const out = [];
  for (let i = head + 1; i < lines.length && !/^#\s/.test(lines[i]); i++) {
    const m = lines[i].match(/^\|\s*\[(.+?)\]\(/);
    if (m) out.push(m[1]);
  }
  return out;
}

/** 그 줄 범위를 마지막으로 건드린 커밋 날짜 (YYYY-MM-DD). */
function lastTouched(start, end) {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "-L", `${start},${end}:README.md`],
      { cwd: REPO, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    );
    const first = out.split("\n").find((l) => /^\d{4}-\d{2}-\d{2}T/.test(l));
    return first ? first.slice(0, 10) : null;
  } catch {
    return null;
  }
}

const sections = readSections();
const building = currentlyBuilding();

// ── SECRETARY 색인 ────────────────────────────────────────────────────────
const indexPath = resolve(REPO, MAP.secretaryIndex);
if (!existsSync(indexPath)) {
  console.log(`?  SECRETARY 색인이 없다 (${MAP.secretaryIndex}) — 이 기기가 아닌 듯하다.`);
  console.log("   `python3 SECRETARY/render.py` 를 먼저 돌려라. 대조는 건너뛴다.");
  process.exit(0);
}
const byPath = new Map(
  JSON.parse(readFileSync(indexPath, "utf8")).projects.map((p) => [p.path, p]),
);

// ── 1. 지도 자체가 맞는가 ──────────────────────────────────────────────────
for (const [title, path] of Object.entries(MAP.sections)) {
  if (!byPath.has(path)) {
    findings.push({ kind: "지도", what: title, why: `SECRETARY 에 \`${path}\` 가 없다 — 폴더가 옮겨졌나?` });
  }
  if (!sections.some((s) => s.title === title)) {
    findings.push({ kind: "지도", what: title, why: "README 에 그 제목의 섹션이 없다 — 제목이 바뀌었나?" });
  }
}
for (const s of sections) {
  if (!(s.title in MAP.sections)) {
    notes.push(`?  ${s.title} — 지도에 없다. profile-map.json 의 sections 에 넣어라`);
  }
}

// ── 2. 원본이 사본보다 나중에 움직였는가 ──────────────────────────────────
let compared = 0;
for (const s of sections) {
  const path = MAP.sections[s.title];
  if (!path) continue;
  const src = byPath.get(path);
  if (!src?.updated) continue;
  const touched = lastTouched(s.start, s.end);
  if (!touched) continue;
  compared += 1;
  if (src.updated > touched) {
    findings.push({
      kind: "묵음",
      what: s.title,
      why: `_STATUS.md 는 ${src.updated} 에 움직였는데 이 섹션은 ${touched} 이후로 그대로다`,
      hint: `${path}/_STATUS.md 의 "## 최근 진행" 을 읽고 올릴 것이 있는지 봐라`,
    });
  } else if (src.updated === touched) {
    // 같은 날이면 순서를 못 가린다. 조용히 넘기면 Agora(8/28) 같은 건을 놓친다.
    sameDay.push(`📎 ${s.title} — 원본과 섹션이 같은 날(${touched}) 움직였다. 날짜로는 순서를 못 가린다`);
  }
}

// ── 3. 끝난 것이 아직 "Currently Building" 에 있는가 ──────────────────────
for (const title of building) {
  const path = MAP.sections[title];
  if (!path) continue;
  const src = byPath.get(path);
  if (src?.status === "종료") {
    findings.push({
      kind: "모순",
      what: title,
      why: `Currently Building 에 있는데 _STATUS.md 는 "종료" 다`,
    });
  }
}

// ── 4. 진행중·관찰중인데 프로필에 없는 것 ─────────────────────────────────
const listed = new Set(Object.values(MAP.sections));
for (const [path, p] of byPath) {
  if (p.status !== "진행중" && p.status !== "관찰중") continue;
  if (listed.has(path)) continue;
  if (path in MAP.unlisted) {
    notes.push(`📌 ${path} — 안 올림: ${MAP.unlisted[path]}`);
    continue;
  }
  findings.push({
    kind: "누락",
    what: path,
    why: `SECRETARY 는 "${p.status}" 로 아는데 README 에 섹션이 없다`,
    hint: "올리든지, profile-map.json 의 unlisted 에 이유를 적든지 하나를 골라라",
  });
}

// ── 5. 링크 (--links) ─────────────────────────────────────────────────────
if (wantLinks) {
  const urls = [...new Set(
    readFileSync(README, "utf8")
      .match(/https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+/g) ?? [],
  )].filter((u) => u.split("/").length > 4);
  // 인증 없는 GitHub API 는 시간당 60건이다. 링크가 19개라 하루에 세 번만
  // 돌려도 한도에 닿고, 그때 오는 403 은 "저장소가 없다" 가 아니라 "지금
  // 못 세겠다" 는 뜻이다. **둘을 같은 것으로 보고하면 멀쩡한 링크를 죽었다고
  // 말하게 된다** — 이 도구가 고치려는 실수를 이 도구가 저지르는 셈이다.
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN ?? "";
  const headers = {
    accept: "application/vnd.github+json",
    ...(token ? { authorization: `Bearer ${token}` } : {}),
  };
  const results = [];
  for (const u of urls) {
    const slug = u.replace("https://github.com/", "");
    try {
      const r = await fetch(`https://api.github.com/repos/${slug}`, { headers });
      const limited =
        (r.status === 403 || r.status === 429) &&
        r.headers.get("x-ratelimit-remaining") === "0";
      results.push({ slug, status: r.status, limited, reset: r.headers.get("x-ratelimit-reset") });
    } catch (e) {
      results.push({ slug, status: `요청 실패 (${e.message})` });
    }
  }
  const ok = results.filter((r) => r.status === 200);
  const limited = results.filter((r) => r.limited);
  for (const r of results.sort((a, b) => a.slug.localeCompare(b.slug))) {
    if (r.status === 200 || r.limited) continue;
    findings.push({ kind: "링크", what: r.slug, why: `HTTP ${r.status}` });
  }
  notes.push(`🔗 GitHub 링크 ${results.length}개 중 ${ok.length}개 200`);
  if (limited.length) {
    const reset = Number(limited[0].reset);
    notes.push(
      `⏳ ${limited.length}개는 API 한도에 걸려 못 쟀다 (죽은 링크가 아니다). ` +
        `인증 없이 시간당 60건이다 — \`GITHUB_TOKEN=$(gh auth token)\` 를 앞에 붙이면 5000건이 된다`,
    );
  }
}

// ── 보고 ──────────────────────────────────────────────────────────────────
if (notes.length) console.log(notes.map((n) => "  " + n).join("\n") + "\n");
if (sameDay.length) console.log(sameDay.map((n) => "  " + n).join("\n") + "\n");

if (!findings.length) {
  console.log(`✅ 섹션 ${sections.length}개 중 ${compared}개 대조 완료, 걸리는 것 없음.`);
  process.exit(0);
}

console.log("걸린 것:");
for (const f of findings) {
  console.log(`  ✗ [${f.kind}] ${f.what}`);
  console.log(`      ${f.why}`);
  if (f.hint) console.log(`      → ${f.hint}`);
}
console.log(
  `\n${findings.length}건. 무엇이 틀렸는지는 이 도구가 모른다 — ` +
    `_STATUS.md 를 읽고 사람이 판단해라.`,
);
if (check) process.exit(1);
