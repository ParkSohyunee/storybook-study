import { ChangeEvent, useState } from "react";
import "./App.css";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";

function App() {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setValue("");
  };

  return (
    <>
      <div>
        <Label htmlFor="email">이메일</Label>
        <DefaultTextField
          placeholder="이메일을 입력해주세요."
          value={value}
          errorMessage="이메일을 확인해주세요"
          isError={isError}
          iconPath=""
          iconAlt="delete"
          onChange={changeValue}
          onClick={handleClick}
        />
      </div>
      <button onClick={() => setIsError((prev) => !prev)}>에러 토글</button>
    </>
  );
}

export default App;
