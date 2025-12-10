import { createMiddleware, createServerFn } from "@tanstack/react-start";
import { expect, test } from "vitest";

export const mid = createMiddleware({ type: "request" }).server(async ({ next }) => {
  return next();
});

const x = createServerFn().handler(async () => {
  return {
    value: 0,
  };
});

test("vitest works", async () => {
  expect(2).toBe(2);
});

test("test server fn", async () => {
  const serverFnResult = await x();

  expect(serverFnResult.value).toBe(0);
});
