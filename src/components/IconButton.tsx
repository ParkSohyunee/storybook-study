interface IconButtonProps {
  iconPath: string;
  onClick: () => void;
  alt: string;
}

export default function IconButton({
  iconPath,
  onClick,
  alt,
}: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
