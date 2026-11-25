import { nativeApplicationVersion, nativeBuildVersion } from "expo-application";
import type { AppInfoDataSource, BuildTimeAppInfo } from "./index";

export function createAppInfoDataSource(buildTime: BuildTimeAppInfo): AppInfoDataSource {
  return {
    getAppInfo: () => ({
      version: nativeApplicationVersion ?? buildTime.version,
      buildNumber: nativeBuildVersion,
    }),
  };
}
