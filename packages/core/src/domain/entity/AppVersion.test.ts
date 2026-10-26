import { expect, test } from "bun:test";
import { formatAppVersion } from "./AppVersion";

test("ビルド番号があれば括弧で併記する", () => {
  expect(formatAppVersion({ version: "3.0.0", buildNumber: "123" })).toBe("3.0.0 (123)");
});

test("ビルド番号がなければバージョンのみ", () => {
  expect(formatAppVersion({ version: "3.0.0", buildNumber: null })).toBe("3.0.0");
});
