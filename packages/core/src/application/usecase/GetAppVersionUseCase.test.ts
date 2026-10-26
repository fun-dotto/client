import { expect, test } from "bun:test";
import type { AppInfoGateway } from "../gateway/AppInfoGateway";
import { GetAppVersionUseCase } from "./GetAppVersionUseCase";

test("Gateway から取得したバージョンを返す", () => {
  const gateway: AppInfoGateway = {
    getAppVersion: () => ({ version: "3.0.0", buildNumber: "123" }),
  };
  expect(new GetAppVersionUseCase(gateway).execute()).toEqual({
    version: "3.0.0",
    buildNumber: "123",
  });
});
