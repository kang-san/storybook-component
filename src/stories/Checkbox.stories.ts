import type { Meta, StoryObj } from "@storybook/react";

import CheckBox from "../components/checkbox/Checkbox";

const meta = {
  title: "check/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {
    size: ["sm", "lg"],
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checked: false,
    disable: false,
    size: "sm",
  },
};
