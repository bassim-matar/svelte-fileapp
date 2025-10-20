// App Bootstrap
export { bootstrapApp, removeStaticOnlyHeadElements } from './app-bootstrap'

// Browser Utilities
export {
  isFirefox,
  documentWidth,
  getIsMobile,
  isMobile,
  getIsSmallMenu,
  isSmallMenu,
  hasTouchScreen,
} from './browser-utils'

// URL Management
export {
  UrlParam,
  UrlHash,
  appMode,
  isHttp,
  isSsgRendering,
  isStaticMode,
  urlPrefix,
  getBaseLinkUrl,
  link,
  isSpaHomepage,
} from './url'

// Router
export { router } from './router/router.svelte'
export {
  page,
  onPageHomepage,
  onPageSearch,
  pageHash,
  pageLoadedRoute,
  pageContentLoaded,
} from './router/router-store'
export {
  getInitialPage,
  getInitialComponent,
  updateRouteComponent,
} from './router/router-helpers'
export { registerRoutes } from './router/router-registration'
export type {
  RouteHandler,
  RouteProps,
  RouterIndex,
} from './router/router-registration'

// Router Components
export { default as GenericRouter } from './router/GenericRouter.svelte'

// SSG
export {
  generateStaticSite,
  capturePage,
  generateSitemap,
  createIndexFile,
  startServer,
  stopServer,
  initPage,
  waitUntilReady,
} from './ssg/ssg'
export type { SsgConfig } from './ssg/ssg'

export {
  generateJsonjsdbStaticSite,
  arrayToObject,
  getDbPathFromContent,
  getDbMetaPath,
  getEntitiesRoutes,
  createEntityDirs,
  loadSsgConfig,
} from './ssg/ssg-jsonjsdb'
export type { JsonjsdbSsgConfig } from './ssg/ssg-jsonjsdb'

// Vite Plugins
export { updateRouterIndex } from './vite/vite-plugin-router'
export { htmlReplace, spaHtmlOptimizations } from './vite/vite-plugin-html'
export {
  getAliases,
  getAppVersion,
  copyFilesToOutDir,
  copyPaths,
  copySpaCoreSsg,
  initBuildConfig,
  afterBuild,
} from './vite/vite-utils'
