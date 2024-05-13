import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
  value: string;
  placeholder: string;
  iconPath: string;
  iconAlt: string;
  errorMessage: string;
  isError: boolean;
  onChange: () => void;
  onClick: () => void;
}

export default function DefaultTextField({
  value,
  placeholder,
  iconPath,
  iconAlt,
  errorMessage,
  isError,
  onChange,
  onClick,
}: DefaultTextFieldProps) {
  const [isFocus, setIsFocus] = useState(false);
  const borderColor = isFocus
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div
      className="flex flex-col gap-1"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      <div
        className={`flex items-center text-sm text-primary border-b ${borderColor} p-1`}
      >
        <input
          className="outline-none"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {!!value && (
          <IconButton iconPath={iconPath} onClick={onClick} alt={iconAlt} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
