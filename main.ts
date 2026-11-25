// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to /output/entry.txt. The text is a single
// sentence with no trailing newline: the gate counts characters 1-320 and
// the judge reads the text exactly as written, so nothing extra rides along.
// Deterministic and self-contained: no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The senator who wrote the bill criminalizing AI deepfakes still cannot turn a document into a PDF, so he emails his staff a photo of his monitor instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
