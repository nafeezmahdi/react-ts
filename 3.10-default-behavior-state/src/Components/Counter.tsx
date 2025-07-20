import { useState } from "react";

type CounterProps = {
  isFancy?: boolean; // Optional, defaults to false
};

export default function Counter({ isFancy }: CounterProps) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className = className + " hover";
  }
  if (isFancy) {
    className += " fancy";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add One</button>
    </div>
  );
}
