import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import IconButton from "../components/IconButton";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "public/icons 이미지 경로" },
    alt: { control: "text", description: "이미지의 alt 속성" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() }, // () => {}와 동일, *스토리북 8.X 버전부터 fn패키지에서 import해와서 사용
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "/icons/delete_dark.svg",
    alt: "취소 버튼",
  },
};
