import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [
    devtools(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    viteReact(),
  ],
  test: {
    server: {
      deps: {
        // Inline @tanstack packages so that our virtual module plugin can intercept
        // the #tanstack-start-server-fn-manifest import
        inline: ["@tanstack/start-server-core", "@tanstack/react-start"],
      },
    },
  },
});

export default config;
