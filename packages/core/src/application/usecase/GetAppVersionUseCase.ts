import type { AppVersion } from "../../domain/entity/AppVersion";
import type { AppInfoGateway } from "../gateway/AppInfoGateway";

/** 実行中のアプリのバージョンを取得する。 */
export class GetAppVersionUseCase {
  constructor(private readonly appInfoGateway: AppInfoGateway) {}

  execute(): AppVersion {
    return this.appInfoGateway.getAppVersion();
  }
}
