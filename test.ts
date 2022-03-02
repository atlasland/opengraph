import { assertThrows } from "https://deno.land/std@0.127.0/testing/asserts.ts";

import { parse } from "./mod.ts";

Deno.test("parse", () => {
  assertThrows(
    () => {
      parse();
    },
    Error,
    "Method not implemented.",
  );
});
