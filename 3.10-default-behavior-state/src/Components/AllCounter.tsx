import { useState, type ChangeEvent } from "react";
import Counter from "./Counter";

export default function AllCounter() {
  const [showB, setShowB] = useState(true);
  const [isFancy, setIsFancy] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleShow = (evnt: ChangeEvent<HTMLInputElement>) => {
    setShowB(evnt.target.checked);
  };

  const handleFancy = (evnt: ChangeEvent<HTMLInputElement>) => {
    setIsFancy(evnt.target.checked);
  };
  const handlePaused = (evnt: ChangeEvent<HTMLInputElement>) => {
    setIsPaused(evnt.target.checked);
  };

  return (
    <div>
      <Counter />
      {showB && <Counter />}
      <label>
        <input type="checkbox" checked={showB} onChange={handleShow} />
        Render the second counter
      </label>
      {/*  */}
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      <label>
        <input type="checkbox" checked={isFancy} onChange={handleFancy} />
        Use fancy styling
      </label>
      {/*  */}
      {isPaused ? <p>See you later!</p> : <Counter />}
      <label>
        <input type="checkbox" checked={isPaused} onChange={handlePaused} />
        Take a break
      </label>
      {/*  */}
      {isFancy ? (
        <div>
          <Counter isFancy={true} />
        </div>
      ) : (
        <section>
          <Counter isFancy={false} />
        </section>
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}
