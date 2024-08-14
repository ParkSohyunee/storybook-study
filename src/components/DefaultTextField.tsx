import { ChangeEvent, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
  id?: string;
  value: string;
  placeholder: string;
  iconPath: string;
  iconAlt: string;
  errorMessage: string;
  isError: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function DefaultTextField({
  id,
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
      className="relative text-field"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      <div
        className={`flex items-center text-sm text-primary border-b ${borderColor} p-1`}
      >
        <input
          id={id}
          data-testid={id} // getByTestId로 가져오는 id
          className="outline-none"
          type={id === "password" ? "password" : "text"}
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
