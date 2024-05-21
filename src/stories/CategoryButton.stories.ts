import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "public/icons 이미지 경로" },
    alt: { control: "text", description: "이미지의 alt 속성" },
    text: { control: "text", description: "버튼 text" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "/icons/category.svg",
    alt: "취소 버튼",
    text: "카테고리",
  },
};
