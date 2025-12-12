import { runWithStartContext } from "@tanstack/start-storage-context";
import { expect, test } from "vitest";
import { x } from "@/lib/serverFn";

test("vitest works", async () => {
  expect(2).toBe(2);
});

test("test server fn", async () => {
  // Server functions require a Start context to be available in AsyncLocalStorage
  // This mimics what TanStack Start does during request handling
  const serverFnResult = await runWithStartContext(
    {
      getRouter: () => ({} as any),
      request: new Request("http://localhost/test"),
      startOptions: {},
      contextAfterGlobalMiddlewares: {},
    },
    () => x()
  );

  expect(serverFnResult.value).toBe(0);
});
