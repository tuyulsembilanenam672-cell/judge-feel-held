import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "There is a smooth stone in your pocket, warm from being carried all day. It has no errand, and it keeps no score. Your hand closes around it. For a moment there is nothing to solve, nothing to carry but this small warm weight, and the quiet of being held.";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

const bytes = Buffer.byteLength(ENTRY, "utf8");
console.log(`code points: ${codePoints}`);
console.log(`bytes: ${bytes}`);
console.log("wrote /output/entry.txt");
