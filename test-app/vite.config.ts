import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import alias from '@rollup/plugin-alias'
import { svelte, type Options } from '@sveltejs/vite-plugin-svelte'
import svelteConfig from './svelte.config.js'
import {
  initBuildConfig,
  updateRouterIndex,
  spaHtmlOptimizations,
} from '../src/vite/index.js'

const outDir = 'app'

export default defineConfig(async () => {
  const { aliases } = await initBuildConfig()

  return {
    base: '',
    server: { port: 3000, origin: '', open: true },
    build: {
      outDir: '../app',
      emptyOutDir: true,
    },
    plugins: [
      FullReload(['src/**/*']),
      updateRouterIndex('src/page'),
      alias({ entries: aliases }),
      svelte(svelteConfig as Options),
      spaHtmlOptimizations(),
    ],
  }
})
