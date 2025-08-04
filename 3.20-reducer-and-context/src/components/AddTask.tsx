import { useState, type ChangeEvent } from "react";
import { getNextId } from "../utils/getNextId";
import { useTasks, useTasksDispatch } from "../contexts/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const handleChangeText = (evnt: ChangeEvent<HTMLInputElement>) => {
    setText(evnt.target.value);
  };

  return (
    <>
      <input placeholder="Add Task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
