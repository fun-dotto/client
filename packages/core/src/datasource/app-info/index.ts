export type AppInfo = {
  version: string;
  buildNumber: string | null;
};

export interface AppInfoDataSource {
  getAppInfo(): AppInfo;
}

/**
 * ビルド時に決まる値。
 * native ではインストール済みバイナリの値を優先し、取得できない場合のみ使う。
 */
export type BuildTimeAppInfo = {
  version: string;
};

export declare function createAppInfoDataSource(buildTime: BuildTimeAppInfo): AppInfoDataSource;
