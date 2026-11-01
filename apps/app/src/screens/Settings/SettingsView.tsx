import { type AppVersion, formatAppVersion } from "@dotto/core/domain";
import { Host, LazyColumn, ListItem, Text } from "@expo/ui/jetpack-compose";

export type SettingsViewProps = {
  appVersion: AppVersion | undefined;
};

export function SettingsView({ appVersion }: SettingsViewProps) {
  return (
    <Host style={{ flex: 1 }}>
      <LazyColumn>
        <ListItem>
          <ListItem.HeadlineContent>
            <Text>バージョン</Text>
          </ListItem.HeadlineContent>
          <ListItem.SupportingContent>
            <Text>{appVersion ? formatAppVersion(appVersion) : ""}</Text>
          </ListItem.SupportingContent>
        </ListItem>
      </LazyColumn>
    </Host>
  );
}
