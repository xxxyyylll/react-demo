import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
      <br />
      <h1>{number2}</h1>
      <button
        onClick={() => {
          setNumber2(number2 + 5);
          setNumber2((n) => n + 1);
        }}
      >
        增加数字
      </button>
      <br />
      <h1>{number3}</h1>
      <button
        onClick={() => {
          setNumber3(number3 + 5);
          setNumber3((n) => n + 1);
          setNumber3(42);
        }}
      >
        增加数字
      </button>
    </>
  );
}
