import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dts from 'vite-plugin-dts'
import { builtinModules } from 'module'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
  },
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        'vite/index': 'src/vite/index.ts',
        'ssg/index': 'src/ssg/index.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...builtinModules,
        'svelte',
        'svelte/store',
        'navigo',
        'sitemap',
        'serve-handler',
        'playwright',
      ],
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        runes: true,
      },
      emitCss: false,
    }),
    dts({
      include: ['src/**/*'],
      exclude: ['test/**/*'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
    {
      name: 'copy-svelte-files',
      writeBundle() {
        const copySvelteFile = (src: string, dest: string) => {
          const destDir = path.dirname(dest)
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true })
          }
          fs.copyFileSync(src, dest)
        }

        copySvelteFile(
          'src/router/GenericRouter.svelte',
          'dist/router/GenericRouter.svelte',
        )
      },
    },
  ],
})
