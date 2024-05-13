/**
 * Label 컴포넌트와 스토리 만들기
 * Button.stories를 그대로 복사해서 사용
 * 컴포넌트는 components 폴더에 따로 관리하는 것이 추후 패키지 배포에 용이
 * Label.stories의 argTypes을 변경
 */

import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/Label";

const meta = {
  title: "Example/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", description: "label의 for 속성" },
    children: { control: "text", description: "label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: "email",
  },
};
