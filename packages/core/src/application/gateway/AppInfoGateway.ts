import type { AppVersion } from "../../domain/entity/AppVersion";

/** 実行中のアプリ自身の情報。 */
export interface AppInfoGateway {
  getAppVersion(): AppVersion;
}
