// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to /output/entry.txt. The text is a single
// sentence with no trailing newline: the gate counts characters 1-320 and
// the judge reads the text exactly as written, so nothing extra rides along.
// Deterministic and self-contained: no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "He sponsored the Crypto Consumer Protection Act, then filed his own financial disclosure the only way he knew how: as a Word document named FINAL_final_v7_REAL.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
