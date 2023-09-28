import { Action, ActionPanel, Detail, LaunchProps, List } from "@raycast/api";

type LaunchContext = {
  name: string;
};

function deeplink(context: LaunchContext): string {
  const contextParam = encodeURIComponent(JSON.stringify(context));
  return `raycast://extensions/nbbaier/extension-sandbox/dynamic-action?context=${contextParam}`;
}

export default function Command(props: LaunchProps<{ launchContext: LaunchContext }>) {
  const items = {
    "item 1": "description 1",
    "item 2": "description 2",
    "item 3": "description 3",
  } as Record<string, string>;
  if (props.launchContext?.name) {
    const item = items[props.launchContext.name];
    return <Detail markdown={item} />;
  }
  return (
    <List>
      {Object.entries(items).map(([name, text]) => (
        <List.Item
          key={name}
          title={name}
          actions={
            <ActionPanel>
              <Action.Push title="Push" target={<Subcommand text={text} />} />
              <Action.CreateQuicklink
                quicklink={{
                  name,
                  link: deeplink({ name }),
                }}
                title="Create Quick Link"
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}

function Subcommand(props: { text: string }) {
  return <Detail markdown={props.text} />;
}
