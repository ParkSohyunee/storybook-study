import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Form/LoginForm",
  parameters: {
    layout: "centered",
  },
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // canvas를 이용해야 함
    const canvas = within(canvasElement);

    // email 검증
    const emailInput = canvas.getByTestId("email");
    await userEvent.type(emailInput, "test@gmail.com");

    // password 검증
    const passwordInput = canvas.getByTestId("password");
    await userEvent.type(passwordInput, "a-random-password");

    // login button 검증
    const loginButton = canvas.getByRole("button", { name: "로그인" }); // button이 여러개일 경우 에러남으로, name을 지정해 줌
    await expect(loginButton).toBeEnabled(); // 검증

    // 👇 Simulate interactions with the component - 아래처럼 원라인으로 작성할 경우에는 변경사항 많을 수 있음
    // await userEvent.type(canvas.getByTestId("email"), "email@provider.com");
    // await userEvent.type(canvas.getByTestId("password"), "a-random-password");
    // await userEvent.click(canvas.getByRole("button"));

    // 👇 Assert DOM structure
    //     await expect(
    //       canvas.getByText(
    //         "Everything is perfect. Your account is ready and we should probably get you started!"
    //       )
    //     ).toBeInTheDocument();
  },
};
