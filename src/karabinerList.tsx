import { List } from "@raycast/api";
import { homedir } from "node:os";
import { Config } from "./types/types";

import fs from "node:fs";

const home = homedir();
const configPath = `${home}/.config/karabiner/karabiner.json`;

const getConfig = (path: string = configPath): Config => {
  const file = fs.readFileSync(path, "utf8");
  const json: Config = JSON.parse(file);
  return json;
};

export default function Command() {
  const config = getConfig();
  const rules = config.profiles[0].complex_modifications.rules;
  return (
    <List>
      {rules.map((rule) => (
        <List.Item key={rules.indexOf(rule)} title={rule.description as string} />
      ))}
      )
    </List>
  );
}
