import { useState, type ChangeEvent } from "react";

function MyTextField() {
  const [text, setText] = useState("");

  const handleText = (evnt: ChangeEvent<HTMLInputElement>) => {
    setText(evnt.target.value);
  };

  return <input value={text} onChange={handleText} />;
}

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}
