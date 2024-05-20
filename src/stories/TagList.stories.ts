import type { Meta, StoryObj } from "@storybook/react";
import TagList from "../components/TagList";
import { fn } from "@storybook/test";

const meta = {
  title: "Tag/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: { control: "object", description: "tag의 내용" },
    onClickTag: { action: "clicked", description: "태그 클릭 이벤트" },
  },
  args: { onClickTag: fn() },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["button1", "button2", "button3"],
  },
};
