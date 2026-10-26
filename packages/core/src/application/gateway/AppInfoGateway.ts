import type { AppVersion } from "../entity/AppVersion";

/** 実行中のアプリ自身の情報。 */
export interface AppInfoGateway {
  getAppVersion(): AppVersion;
}
