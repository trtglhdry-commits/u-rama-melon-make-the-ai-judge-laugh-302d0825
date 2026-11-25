// Make the AI Judge Laugh — u-rama-melon-make-the-ai-judge-laugh-302d0825
// One original joke about office life, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only. Deterministic: no randomness, no network, no clock.
// Gate (competition.yaml / RULES.txt): entry.txt must be UTF-8 text of 1-200
// characters, not only white space, a single line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The coffee machine broke, so now we hold meetings just to stand near something warm and bitter that understands us.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: the written file must be exactly the chosen line,
// a single line of 1-200 characters, so the sealed gate passes.
const written = readFileSync(outPath, "utf8");
if (written !== LINE || written.length < 1 || written.length > 200) {
  throw new Error("entry.txt failed the gate check");
}
