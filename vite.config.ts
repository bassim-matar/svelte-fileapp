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
      entry: 'src/index.ts',
      name: 'svelte-fileapp',
      fileName: 'index',
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
    }),
    dts({
      include: ['src/**/*'],
      exclude: ['test/**/*'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
})
