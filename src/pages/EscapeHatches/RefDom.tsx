import { useRef } from "react";

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current!.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  );
}
