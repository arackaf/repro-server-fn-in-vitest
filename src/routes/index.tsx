import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { createMiddleware, createServerFn } from "@tanstack/react-start";
import { Zap, Server, Route as RouteIcon, Shield, Waves, Sparkles } from "lucide-react";

export const mid = createMiddleware({ type: "request" }).server(async ({ next, context, pathname, request }) => {
  console.log("\npathname", pathname, "\n");
  console.log("\nrequest", request.url, "\n");

  return next({ context: { test: "test" } });
});

export const x = createServerFn()
  .middleware([mid])
  .handler(async ({ context }) => {
    return {
      value: 0,
    };
  });

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <button className="border p-2 rounded-md" onClick={() => x()}>
        Server fn
      </button>
    </div>
  );
}
