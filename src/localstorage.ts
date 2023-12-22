import { LocalStorage } from "@raycast/api";

export default async function Command() {
  await LocalStorage.setItem("favorite-fruit", "apple");
  await LocalStorage.setItem("favorite-number", 1);
  const items = await LocalStorage.allItems<Record<string, string | number | boolean>>();
  const result = Object.entries(items).map(([key, value]) => ({ key, value }));
  console.log(result);
}
