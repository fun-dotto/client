import { formatAppVersion } from "@dotto/core/domain";
import { Form, Host, LabeledContent, Section, Text } from "@expo/ui/swift-ui";
import type { SettingsViewProps } from "./SettingsView";

export function SettingsView({ appVersion }: SettingsViewProps) {
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section title="アプリについて">
          <LabeledContent label="バージョン">
            <Text>{appVersion ? formatAppVersion(appVersion) : ""}</Text>
          </LabeledContent>
        </Section>
      </Form>
    </Host>
  );
}
