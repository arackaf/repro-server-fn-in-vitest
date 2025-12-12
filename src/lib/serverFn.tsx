import { createMiddleware, createServerFn } from "@tanstack/react-start";

export const mid = createMiddleware({ type: "request" }).server(async ({ next }) => {
    return next();
});

export const x = createServerFn().handler(async () => {
    return {
        value: 0,
    };
});