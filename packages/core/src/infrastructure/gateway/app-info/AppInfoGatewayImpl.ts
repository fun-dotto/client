import type { AppInfoGateway } from "../../../application/gateway/AppInfoGateway";
import type { AppInfoDataSource } from "../../../datasource/app-info";
import type { AppVersion } from "../../../domain/entity/AppVersion";

export class AppInfoGatewayImpl implements AppInfoGateway {
  constructor(private readonly dataSource: AppInfoDataSource) {}

  getAppVersion(): AppVersion {
    const { version, buildNumber } = this.dataSource.getAppInfo();
    return { version, buildNumber };
  }
}
