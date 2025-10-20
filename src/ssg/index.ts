// Core SSG functionality
export {
  generateStaticSite,
  capturePage,
  generateSitemap,
  createIndexFile,
  startServer,
  stopServer,
  initPage,
  waitUntilReady,
} from './ssg'
export type { SsgConfig } from './ssg'

// Jsonjsdb-specific SSG
export {
  generateJsonjsdbStaticSite,
  arrayToObject,
  getDbPathFromContent,
  getDbMetaPath,
  getEntitiesRoutes,
  createEntityDirs,
  loadSsgConfig,
} from './ssg-jsonjsdb'
export type { JsonjsdbSsgConfig } from './ssg-jsonjsdb'
