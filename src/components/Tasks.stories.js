import React from "react";
import Task from "./Tasks";

export default {
  component: Task,
  title: "Task",
  decorators: [
    (story) => (
      <div style={{ padding: 10, backgroundColor: "red" }}>{story()}</div>
    ),
  ],
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const disabled = Template.bind({});
disabled.args = {
  task: {
    ...Default.args.task,
  },
  disabled: true,
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
