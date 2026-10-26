import { GetAppVersionUseCase } from "@dotto/core/application";
import { createAppInfoDataSource } from "@dotto/core/datasource/app-info";
import { AppInfoGatewayImpl } from "@dotto/core/infrastructure";
import type { Dependencies } from "@dotto/queries";
import Constants from "expo-constants";

export function createDependencies(): Dependencies {
  return {
    getAppVersionUseCase: new GetAppVersionUseCase(
      new AppInfoGatewayImpl(
        createAppInfoDataSource({ version: Constants.expoConfig?.version ?? "" }),
      ),
    ),
  };
}
