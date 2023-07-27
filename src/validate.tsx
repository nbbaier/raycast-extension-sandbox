import { Detail, LaunchProps } from "@raycast/api";
import z from "zod";

const parser = z.string().min(3);

export default function Command(props: LaunchProps) {
  const input = props.arguments.input;

  const result = parser.safeParse(input);
  if (!result.success) {
    return <Detail markdown="invalid input" />;
  } else {
    return <Detail markdown={input} />;
  }
}
