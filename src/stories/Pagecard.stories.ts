import type { Meta, StoryObj } from "@storybook/react";
import Pagecard from "../components/pagecard/Pagecard";

const meta = {
  title: "pagecard/Pagecard",
  component: Pagecard,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagecard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cardCount: 3,
    labelList: ["공지사항"],
  },
};
