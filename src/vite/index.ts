// Vite Plugins
export { updateRouterIndex } from './vite-plugin-router'
export { htmlReplace, spaHtmlOptimizations } from './vite-plugin-html'
export {
  getAliases,
  getAppVersion,
  copyFilesToOutDir,
  copyPaths,
  copySpaCoreSsg,
  initBuildConfig,
  afterBuild,
} from './vite-utils'
