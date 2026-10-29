// Compatibility exports while callers migrate to the server repository.
// Publishing rules now have a single server-side implementation.
export {
  getApprovedRoutes,
  getPage,
  getRenderablePage,
  getIndexablePages,
} from "./server/page-repository";
