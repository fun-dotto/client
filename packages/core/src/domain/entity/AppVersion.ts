/** 実行中のアプリのバージョン。 */
export type AppVersion = {
  version: string;
  /** ストア配信のビルド番号。Web では持たない。 */
  buildNumber: string | null;
};

/** 表示用の文字列。例: "3.0.0 (123)"、ビルド番号がなければ "3.0.0" */
export function formatAppVersion({ version, buildNumber }: AppVersion): string {
  return buildNumber === null ? version : `${version} (${buildNumber})`;
}
