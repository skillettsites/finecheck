// Module customisation hooks for the node:test suite.
//
// 1. "@/x" resolves to src/x(.ts|.tsx), mirroring tsconfig paths.
// 2. "next/server" has no ESM export map entry for Node, so it maps to
//    next/server.js (the same CommonJS module Next itself loads).
// 3. src/lib/types.ts only exports types. Node's type stripping does not
//    elide `import { Product } from "@/lib/types"` (a value-style import of
//    a type, used by products.ts and operators.ts), so that file is served as
//    a stub that exports each declared type name as undefined. Nothing reads
//    those values at runtime.
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "src");

function isFile(p) {
  return existsSync(p) && statSync(p).isFile();
}

export async function resolve(specifier, context, nextResolve) {
  if (specifier === "next/server") {
    return nextResolve("next/server.js", context);
  }
  if (specifier.startsWith("@/")) {
    const base = path.join(SRC, specifier.slice(2));
    for (const candidate of [base, `${base}.ts`, `${base}.tsx`, path.join(base, "index.ts")]) {
      if (isFile(candidate)) {
        return { url: pathToFileURL(candidate).href, shortCircuit: true };
      }
    }
    throw new Error(`Cannot resolve alias ${specifier} under ${SRC}`);
  }
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (url.endsWith("/src/lib/types.ts")) {
    const source = readFileSync(fileURLToPath(url), "utf8");
    const names = [...source.matchAll(/export\s+(?:type|interface)\s+(\w+)/g)].map((m) => m[1]);
    return {
      format: "module",
      source: names.map((n) => `export const ${n} = undefined;`).join("\n"),
      shortCircuit: true,
    };
  }
  return nextLoad(url, context);
}
