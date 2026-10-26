import { expect, test } from "bun:test";
import { createAppInfoDataSource } from "./web";

test("ビルド時に注入したバージョンを返し、ビルド番号は持たない", () => {
  const dataSource = createAppInfoDataSource({ version: "3.0.0" });
  expect(dataSource.getAppInfo()).toEqual({ version: "3.0.0", buildNumber: null });
});
