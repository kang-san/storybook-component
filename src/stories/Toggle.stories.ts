import type { Meta, StoryObj } from "@storybook/react";

import Togglebar from "../components/toggle/Togglebar";

const meta = {
  title: "check/Togglebar",
  component: Togglebar,
  tags: ["autodocs"],
} satisfies Meta<typeof Togglebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checked: false,
  },
};
