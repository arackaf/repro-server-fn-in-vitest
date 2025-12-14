import { runWithStartContext } from "@tanstack/start-storage-context";
import { expect, test } from "vitest";
import { serverFn, serverFnWithMiddleware } from "@/lib/serverFn";

test("test server fn", async () => {
  // Server functions require a Start context to be available in AsyncLocalStorage
  // This mimics what TanStack Start does during request handling
  const serverFnResult = await runWithStartContext(
    {
      getRouter: () => ({}) as any,
      request: new Request("http://localhost/test"),
      startOptions: {},
      contextAfterGlobalMiddlewares: {},
    },
    () => serverFn()
  );

  expect(serverFnResult.value).toBe(0);
});

test("test server fn with middleware", async () => {
  // Server functions require a Start context to be available in AsyncLocalStorage
  // This mimics what TanStack Start does during request handling
  const serverFnResult = await runWithStartContext(
    {
      getRouter: () => ({}) as any,
      request: new Request("http://localhost/test"),
      startOptions: {},
      contextAfterGlobalMiddlewares: {},
    },
    () => serverFnWithMiddleware()
  );

  console.log({ serverFnResult });
  // @ts-expect-error - serverFnResult is not typed correctly
  expect(serverFnResult.status).toBe(429);
});
