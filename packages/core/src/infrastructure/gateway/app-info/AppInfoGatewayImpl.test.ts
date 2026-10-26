import { expect, test } from "bun:test";
import { createAppInfoDataSource } from "../../../datasource/app-info/web";
import { AppInfoGatewayImpl } from "./AppInfoGatewayImpl";

test("datasource の値を AppVersion として返す", () => {
  const gateway = new AppInfoGatewayImpl(createAppInfoDataSource({ version: "3.0.0" }));
  expect(gateway.getAppVersion()).toEqual({ version: "3.0.0", buildNumber: null });
});
