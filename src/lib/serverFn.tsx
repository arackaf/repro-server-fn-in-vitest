import { createMiddleware, createServerFn } from "@tanstack/react-start";

export const serverFn = createServerFn().handler(async () => {
  return {
    value: 0,
  };
});

export const mid = createMiddleware({ type: "request" }).server(async ({}) => {
  return new Response("Hello, world!", { status: 429 });
});

export const serverFnWithMiddleware = createServerFn()
  .middleware([mid])
  .handler(async () => {
    return {
      value: 0,
    };
  });
