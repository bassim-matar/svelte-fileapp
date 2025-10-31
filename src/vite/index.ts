// Vite Plugins
export { updateRouterIndex } from './vite-plugin-router'
export { htmlReplace, spaHtmlOptimizations } from './vite-plugin-html'
export { bundleSchemas } from './bundle-schemas'
export {
  getAliases,
  getAppVersion,
  copyFilesToOutDir,
  copyPaths,
  initBuildConfig,
  afterBuild,
} from './vite-utils'
