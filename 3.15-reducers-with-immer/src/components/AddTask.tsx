import { useState, type ChangeEvent } from "react";

interface AddTaskProps {
  onAdd: (text: string) => void;
}

export default function AddTask({ onAdd }: AddTaskProps) {
  const [text, setText] = useState("");

  const handleChangeText = (evnt: ChangeEvent<HTMLInputElement>) => {
    setText(evnt.target.value);
  };

  return (
    <>
      <input placeholder="Add Task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
