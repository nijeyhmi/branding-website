// scripts/sync-drive-images.ts
import "dotenv/config";
import { google } from "googleapis";
import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import pLimit from "p-limit";

type SAJson = {
  client_email: string;
  private_key: string;
  // 나머지 필드는 사용 안 함
};

const DRIVE_FOLDER_ID = process.env.DRIVE_FOLDER_ID;
const GOOGLE_SERVICE_ACCOUNT =
  process.env.SERVICE_ACCOUNT_KEY ??
  "scripts/sheets-json/keys/serviceAccount.json";
const DRIVE_IMAGE_DIR = process.env.DRIVE_IMAGE_DIR || "public/drive-images";

// 이미지 MIME prefix
const IMAGE_PREFIX = "image/";

// 동시 다운로드 개수
const CONCURRENCY = 5;

// 재시도
async function withRetry<T>(
  fn: () => Promise<T>,
  times = 3,
  delayMs = 800
): Promise<T> {
  let lastErr: any;
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i < times - 1) await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}

async function ensureDir(dir: string) {
  await fsp.mkdir(dir, { recursive: true });
}

function getLocalMetaPath(dir: string) {
  return path.join(dir, ".drive-sync.json");
}

type LocalMeta = {
  // fileId -> { name, md5 }
  files: Record<string, { name: string; md5: string }>;
};

async function loadLocalMeta(dir: string): Promise<LocalMeta> {
  const p = getLocalMetaPath(dir);
  try {
    const raw = await fsp.readFile(p, "utf8");
    return JSON.parse(raw);
  } catch {
    return { files: {} };
  }
}

async function saveLocalMeta(dir: string, meta: LocalMeta) {
  const p = getLocalMetaPath(dir);
  await fsp.writeFile(p, JSON.stringify(meta, null, 2), "utf8");
}

async function main() {
  if (!DRIVE_FOLDER_ID || !GOOGLE_SERVICE_ACCOUNT) {
    throw new Error("Missing env: DRIVE_FOLDER_ID or GOOGLE_SERVICE_ACCOUNT");
  }

  const sa: SAJson = JSON.parse(
    fs.readFileSync(GOOGLE_SERVICE_ACCOUNT, "utf8")
  );

  const auth = new google.auth.JWT({
    email: sa.client_email,
    key: sa.private_key,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({ version: "v3", auth });

  await ensureDir(DRIVE_IMAGE_DIR);
  const meta = await loadLocalMeta(DRIVE_IMAGE_DIR);

  // 1) 전체 파일 목록 수집 (페이지네이션)
  const files: { id: string; name: string; md5Checksum?: string }[] = [];
  let pageToken: string | undefined = undefined;

  do {
    const res = await withRetry(() =>
      drive.files.list({
        q: `'${DRIVE_FOLDER_ID}' in parents and mimeType contains '${IMAGE_PREFIX}' and trashed = false`,
        fields: "nextPageToken, files(id, name, md5Checksum, mimeType)",
        pageSize: 1000,
        includeItemsFromAllDrives: true,
        supportsAllDrives: true,
        pageToken,
      })
    );
    files.push(
      ...(res.data.files || []).map((f) => ({
        id: f.id!,
        name: f.name!,
        md5Checksum: f.md5Checksum || undefined,
      }))
    );
    pageToken = res.data.nextPageToken || undefined;
  } while (pageToken);

  // 2) 동기화 대상 판별
  const remoteIndex = new Map(files.map((f) => [f.id, f]));
  const toDownload = files.filter((f) => {
    const cur = meta.files[f.id];
    return !cur || cur.md5 !== f.md5Checksum || cur.name !== f.name; // 새 파일 or 변경 or 이름 변경
  });

  // 3) 다운로드
  const limit = pLimit(CONCURRENCY);
  await Promise.all(
    toDownload.map((file) =>
      limit(async () => {
        const destPath = path.join(DRIVE_IMAGE_DIR, file.name);
        // 스트림 다운로드
        await withRetry(
          () =>
            new Promise<void>((resolve, reject) => {
              drive.files
                .get(
                  { fileId: file.id, alt: "media" },
                  { responseType: "stream" }
                )
                .then((res) => {
                  const ws = fs.createWriteStream(destPath);
                  res.data.pipe(ws);
                  ws.on("finish", resolve);
                  ws.on("error", reject);
                })
                .catch(reject);
            }),
          3,
          1000
        );

        // 메타 갱신
        meta.files[file.id] = { name: file.name, md5: file.md5Checksum || "" };
        console.log(`⬇️  downloaded: ${file.name}`);
      })
    )
  );

  // 4) 로컬에서 삭제 대상 정리 (드라이브에 더 이상 없음)
  const keepIds = new Set(files.map((f) => f.id));
  const toRemoveIds = Object.keys(meta.files).filter((id) => !keepIds.has(id));
  for (const removeId of toRemoveIds) {
    const fname = meta.files[removeId].name;
    const fpath = path.join(DRIVE_IMAGE_DIR, fname);
    try {
      await fsp.unlink(fpath);
      console.log(`🗑️  removed: ${fname}`);
    } catch {}
    delete meta.files[removeId];
  }

  await saveLocalMeta(DRIVE_IMAGE_DIR, meta);

  console.log(
    `✅ sync done. remote: ${files.length}, changed: ${toDownload.length}, removed: ${toRemoveIds.length}`
  );
}

main().catch((err) => {
  console.error("Sync failed:", err?.response?.data || err);
  process.exit(1);
});
