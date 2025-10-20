import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dts from 'vite-plugin-dts'
import { builtinModules } from 'module'

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
  ],
})
