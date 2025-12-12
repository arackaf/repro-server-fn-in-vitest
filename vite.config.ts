import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const isVitest = process.env.VITEST === 'true'

const config = defineConfig({
  plugins: [
    devtools(),
    // Nitro creates background processes that don't clean up properly in Vitest
    !isVitest && nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  test: {
    server: {
      deps: {
        // Inline @tanstack packages so that our virtual module plugin can intercept
        // the #tanstack-start-server-fn-manifest import
        inline: [
          '@tanstack/start-server-core',
          '@tanstack/react-start',
        ]
      }
    }
  }
})

export default config
