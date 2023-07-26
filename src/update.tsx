import { updateCommandMetadata } from "@raycast/api";
import axios from "axios";

axios.create;

async function fetchUnreadNotificationCount() {
  const update = await axios.get("https://nbbaier-increment.express.val.run");
  return update.data.count;
}

export default async function Command() {
  const count = await fetchUnreadNotificationCount();
  await updateCommandMetadata({ subtitle: `Count: ${count}` });
}
