import fs from "fs";
import path from "path";

export function loadServiceAccount(): any {
  const raw = process.env.SERVICE_ACCOUNT_KEY;

  if (raw && raw.trim().length > 0) {
    const s = raw.trim();

    // JSON 본문
    if (s.startsWith("{") || s.startsWith("[")) {
      return JSON.parse(s);
    }

    // base64 본문
    try {
      const decoded = Buffer.from(s, "base64").toString("utf8");
      return JSON.parse(decoded);
    } catch {}

    // 파일 경로
    if (fs.existsSync(s)) {
      return JSON.parse(fs.readFileSync(s, "utf8"));
    }

    throw new Error("SERVICE_ACCOUNT_KEY is not valid JSON/base64/path");
  }

  // 로컬 fallback
  const fallback = path.resolve("scripts/sheets-json/keys/serviceAccount.json");
  return JSON.parse(fs.readFileSync(fallback, "utf8"));
}
