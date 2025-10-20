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
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
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
      name: 'copy-svelte-sources',
      writeBundle() {
        const copyFile = (src: string, dest: string) => {
          const destDir = path.dirname(dest)
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true })
          }

          let content = fs.readFileSync(src, 'utf-8')

          // For .svelte.ts files, copy as .svelte.js (already transpiled by TypeScript)
          if (src.endsWith('.svelte.ts')) {
            // Replace .ts extensions in imports with .js
            content = content.replace(/from ['"](.*)\.ts['"]/g, "from '$1.js'")
          }

          fs.writeFileSync(dest, content, 'utf-8')
        }

        copyFile(
          'src/router/GenericRouter.svelte',
          'dist/router/GenericRouter.svelte',
        )
      },
    },
  ],
})
