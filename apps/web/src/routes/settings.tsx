import { createFileRoute } from "@tanstack/react-router";
import { SettingsScreen } from "#/screens/Settings/SettingsScreen";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "設定 | Dotto" }] }),
  component: SettingsScreen,
});
