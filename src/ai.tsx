import { Detail } from "@raycast/api";
import { useAI } from "@raycast/utils";

export default function Command() {
  const { data, isLoading } = useAI("Suggest 5 jazz songs");
  console.log(data);

  return <Detail isLoading={isLoading} markdown={data} />;
}
