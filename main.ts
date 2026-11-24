const ENTRY = "My agent's wrong answers ship with confidence; its apologies ship on repeat.";

const assertSingleLine = (s: string): string => {
  if (s.includes("\n") || s.includes("\r")) {
    throw new Error("ENTRY must be a single line");
  }
  if (s.length < 1 || s.length > 200) {
    throw new Error(`ENTRY length ${s.length} not in 1..200`);
  }
  return s;
};

const validated = assertSingleLine(ENTRY);

import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, validated, "utf8");

console.log(validated);