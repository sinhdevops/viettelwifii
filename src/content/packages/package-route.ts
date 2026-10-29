import {
  PACKAGE_PAGES,
  type PackageRoute,
} from "@/constants/packages/package-data";
import { packageDetailsByRoute } from "@/content/packages";

/** Match the complete, case-sensitive route, including the postpaid namespace. */
export function getPackageRouteContent(path: string) {
  if (
    !Object.hasOwn(packageDetailsByRoute, path) ||
    !Object.hasOwn(PACKAGE_PAGES, path)
  ) {
    return undefined;
  }

  const route = path as PackageRoute;
  return {
    record: PACKAGE_PAGES[route],
    Details: packageDetailsByRoute[route],
  };
}
