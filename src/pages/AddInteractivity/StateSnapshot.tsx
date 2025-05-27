import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          sendMessage(message);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <br />
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
      <br />
      <h1>{number2}</h1>
      <button
        onClick={() => {
          setNumber2(number2 + 5);
          alert(number2);
        }}
      >
        +5
      </button>
      <br />
      <h1>{number3}</h1>
      <button
        onClick={() => {
          setNumber3(number3 + 5);
          setTimeout(() => {
            alert(number3);
          }, 3000);
        }}
      >
        +5
      </button>
    </>
  );
}

function sendMessage(message: string) {
  // ...
}
