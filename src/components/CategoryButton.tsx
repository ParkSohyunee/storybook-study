interface CategoryButton {
  iconPath: string;
  onClick: () => void;
  alt: string;
  text: string;
}

export default function CategoryButton({
  iconPath,
  onClick,
  alt,
  text,
}: CategoryButton) {
  return (
    <button
      onClick={onClick}
      className={`
      rounded-primary-button 
      border border-primary 
      text-primary text-base 
      font-bold
      pl-[26px] pr-[25px] py-4
      flex flex-col items-center`}
    >
      <img src={iconPath} alt={alt} />
      <p>{text}</p>
    </button>
  );
}
