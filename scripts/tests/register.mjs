// Entry for `npm test`: registers the resolve/load hooks so node:test can
// import the TypeScript sources directly (Node 24 strips types natively).
//
//   node --import ./scripts/tests/register.mjs --test "scripts/tests/*.test.mjs"
//
// No test runner or transpiler is installed in this repo; the hooks in
// hooks.mjs are the only glue.
import { register } from "node:module";

register("./hooks.mjs", import.meta.url);
