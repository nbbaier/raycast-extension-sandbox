import { LocalStorage, showHUD } from "@raycast/api";

interface Values {
  todo: string;
  priority: number;
}

export default async function Command() {
  await LocalStorage.setItem("favorite-fruit", "apple");
  const items = await LocalStorage.allItems<Values>();
  console.log(`Local storage item count: ${JSON.stringify(items)}`);
  const todo = await LocalStorage.setItem("todo", "hello");
  const item = await LocalStorage.getItem<string>("favorite-fruit");
  await showHUD(item as string);
}
