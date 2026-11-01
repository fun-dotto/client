import { NativeTabs } from "expo-router/native-tabs";
import { AppProviders } from "@/di/AppProviders";

export default function RootLayout() {
  return (
    <AppProviders>
      <NativeTabs>
        {/* グループにして "/" を設定タブの index に解決させる */}
        <NativeTabs.Trigger name="(settings)">
          <NativeTabs.Trigger.Label>設定</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="gearshape" md="settings" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </AppProviders>
  );
}
