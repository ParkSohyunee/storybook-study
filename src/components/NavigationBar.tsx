import { MouseEvent } from "react";
import IconButton from "./IconButton";

interface NavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onCloseButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isDark: boolean;
}

export default function NavigationBar({
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick,
  onCloseButtonClick,
  isDark,
}: NavigationBarProps) {
  return (
    <div className="w-full flex justify-between py-2">
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton
            alt="뒤로가기 버튼"
            iconPath={`${isDark ? "/icons/delete_dark.svg" : "/icons/delete_dark.svg"}`}
            onClick={() => onBackButtonClick}
          />
        )}
        {showTitle && <h1 className="text-xl">{title}</h1>}
      </div>
      {showCloseButton && (
        <IconButton
          alt="닫기 버튼"
          iconPath={`${isDark ? "/icons/delete_dark.svg" : "/icons/delete_dark.svg"}`}
          onClick={() => onCloseButtonClick}
        />
      )}
    </div>
  );
}
