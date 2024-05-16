import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "Navigation/DefaultTextField",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showBackButton: { control: "boolean", description: "뒤로가기 버튼 여부" },
    showCloseButton: { control: "boolean", description: "닫기 버튼 여부" },
    showTitle: { control: "boolean", description: "타이틀 여부" },
    isDark: { control: "boolean", description: "네비게이션 아이콘, 폰트 색상" },
    title: { control: "text", description: "네비게이션 제목" },
    onBackButtonClick: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onBackButtonClick: fn(), onCloseButtonClick: fn() },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    isDark: false,
    title: "네비게이션바",
  },
};
