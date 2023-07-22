import { ActionPanel, Form, Action } from "@raycast/api";
import { useState } from "react";

const arr = ["a", "b", "c"];

export default function Command() {
  const [inputFields, setInputFields] = useState([{ name: "", salary: "" }]);

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Submit Name" onSubmit={(values) => console.log(values)} />
        </ActionPanel>
      }
    >
      <Form.Checkbox id="checkbox" label="new" />
    </Form>
  );
}
