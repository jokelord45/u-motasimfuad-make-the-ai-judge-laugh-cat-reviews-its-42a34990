// Cat Reviews Its Human — make.fun entry
// u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
//
// Writes one funny single-line one-star review, in the voice of a house
// cat about its human, to /output/entry.txt. The review must stay under
// 200 characters, keep the deadpan shape of a real one-star review, name
// a specific, recognisable complaint, and land its twist in the last few
// words. No network, no secrets, Node 22 stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. A specific complaint (the doorstop, the table), a human
// measured by cat standards, and a sting at the end: the cat knocked the
// doorstop off too, because that is what a cat does.
const ENTRY =
  "One star. He bought a doorstop to stop me knocking things off the table, " +
  "then looked betrayed when I knocked the doorstop off the table. " +
  "It was in my way.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly here rather than shipping an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

console.log(`wrote /output/entry.txt (${chars} chars)`);
console.log(ENTRY);
