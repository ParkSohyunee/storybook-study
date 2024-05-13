import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextField/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text", description: "input value" },
    placeholder: { control: "text", description: "input placeholder" },
    onChange: { action: "input", description: "input 입력 이벤트" },
    iconPath: { control: "text", description: "public/icons 이미지 경로" },
    iconAlt: { control: "text", description: "이미지의 alt 속성" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    errorMessage: { control: "text", description: "ErrorMessage의 내용" },
    isError: { control: "boolean", description: "에러메세지 여부" },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn(), onChange: fn() },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "이메일을 입력해 주세요.",
    iconPath: "/icons/delete_dark.svg",
    iconAlt: "취소 버튼",
    errorMessage: "이메일을 확인해주세요.",
    isError: false,
  },
};
