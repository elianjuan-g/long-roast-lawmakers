// Local self-check: run main.ts, then assert /output/entry.txt is exactly
// the roast, 1-320 characters, one sentence (a single terminal period and
// no other sentence-ending period), not only whitespace, UTF-8.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const ENTRY =
  "He sponsored the Crypto Consumer Protection Act, then filed his own financial disclosure the only way he knew how: as a Word document named FINAL_final_v7_REAL.";

execFileSync("node", ["main.ts"], { cwd: import.meta.dirname, stdio: "inherit" });
const out = readFileSync("/output/entry.txt", "utf8");
if (out !== ENTRY) throw new Error("output differs from the roast");
const chars = [...out].length;
if (chars < 1 || chars > 320) throw new Error(`length ${chars} out of gate (1-320)`);
if (out.trim().length === 0) throw new Error("only whitespace");
// One sentence: exactly one period, and it must be the final character.
const periods = (out.match(/\./g) || []).length;
if (periods !== 1) throw new Error(`expected exactly 1 period, found ${periods}`);
if (!out.endsWith(".")) throw new Error("sentence does not end with a period");
// UTF-8 round-trip check.
if (Buffer.from(out, "utf8").toString("utf8") !== out) throw new Error("not valid UTF-8");
console.log(`OK: ${chars} chars, ${Buffer.byteLength(out, "utf8")} bytes, exact match, one sentence`);
