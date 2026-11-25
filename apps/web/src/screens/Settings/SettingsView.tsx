import { type AppVersion, formatAppVersion } from "@dotto/core/domain";

export type SettingsViewProps = {
  appVersion: AppVersion | undefined;
};

export function SettingsView({ appVersion }: SettingsViewProps) {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold">設定</h1>
      <section className="mt-6">
        <h2 className="px-4 text-sm text-gray-500">アプリについて</h2>
        <dl className="mt-2 flex justify-between rounded-lg border border-gray-200 px-4 py-3">
          <dt>バージョン</dt>
          <dd className="text-gray-500">{appVersion ? formatAppVersion(appVersion) : ""}</dd>
        </dl>
      </section>
    </main>
  );
}
