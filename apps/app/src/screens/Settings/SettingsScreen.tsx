import { useAppVersion } from "@dotto/queries";
import { SettingsView } from "./SettingsView";

export function SettingsScreen() {
  const { data } = useAppVersion();
  return <SettingsView appVersion={data} />;
}
