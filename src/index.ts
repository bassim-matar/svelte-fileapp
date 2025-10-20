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
