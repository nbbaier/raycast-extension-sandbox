import { Action, ActionPanel, List, LocalStorage } from "@raycast/api";
import { useEffect, useState } from "react";

export default function Command() {
  const [items, setItems] = useState<{ key: string; value: string | boolean | number }[]>([]);

  async function getItems() {
    const items = await LocalStorage.allItems<Record<string, string | number | boolean>>();
    const result = Object.entries(items).map(([key, value]) => ({ key, value }));

    setItems(result);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <List>
      {items.map((item, index) => (
        <List.Item
          key={index}
          title={String(item.value)}
          actions={
            <ActionPanel>
              <Action title="Select" onAction={() => console.log(`${item} selected`)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
