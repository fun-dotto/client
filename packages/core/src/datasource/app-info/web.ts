import type { AppInfoDataSource, BuildTimeAppInfo } from "./index";

export function createAppInfoDataSource(buildTime: BuildTimeAppInfo): AppInfoDataSource {
  return {
    getAppInfo: () => ({ version: buildTime.version, buildNumber: null }),
  };
}
