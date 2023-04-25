import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/button/Button";

const meta = {
  title: "button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    usage: [
      "primary",
      "cancel",
      "excel",
      "upload",
      "confirm",
      "update",
      "exit",
    ],
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "일괄 등록",
    usage: "primary",
  },
};

export const Cancel: Story = {
  args: {
    text: "처리취소",
    usage: "cancel",
  },
};

export const Excel: Story = {
  args: {
    text: "Excel 양식 다운로드",
    usage: "excel",
  },
};

export const Upload: Story = {
  args: {
    text: "사진 업로드",
    usage: "upload",
  },
};

export const Confirm: Story = {
  args: {
    text: "확인",
    usage: "confirm",
  },
};

export const Update: Story = {
  args: {
    text: "수정 및 저장",
    usage: "update",
  },
};

export const Exit: Story = {
  args: {
    text: "취소",
    usage: "exit",
  },
};
