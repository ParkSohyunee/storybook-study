interface TagButtonProps {
  children: string;
  onClick: () => void;
  isChecked: boolean;
}

export default function TagButton({
  children,
  onClick,
  isChecked,
}: TagButtonProps) {
  const buttonStyle = isChecked
    ? "text-primary bg-white"
    : "text-white bg-dark-opacity";

  return (
    <button
      onClick={onClick}
      className={`
      rounded-tag-button 
      px-[10px] border 
      border-white 
      h-[33px]
      text-sm
      font-medium
      ${buttonStyle}`}
    >
      {children}
    </button>
  );
}
