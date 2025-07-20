import { useState } from "react";
import Counter from "./Counter";

export default function AllCounter() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
      {/*  */}
      {isPlayerA && <Counter person="Taylor" />}
      {!isPlayerA && <Counter person="Sarah" />}
      {/*  */}
      {isPlayerA ? (
        <Counter key="T" person="Taylor" />
      ) : (
        <Counter key="S" person="Sarah" />
      )}
      {/*  */}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}
