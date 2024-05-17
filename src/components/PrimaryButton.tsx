import { MouseEventHandler } from "react";

type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface PrimaryButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  children: string;
  theme: PrimaryButtonTheme;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledStyle = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  onClick,
  children,
  isDisabled,
  theme,
}: PrimaryButtonProps) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`
        w-full h-[59px] rounded-primary-button ${disabledStyle} ${color[theme]}
        `}
    >
      {children}
    </button>
  );
}
