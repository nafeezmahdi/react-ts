import { useState, type ChangeEvent } from "react";
import type { TaskType } from "../data/tasks";
import { useTasksDispatch } from "../contexts/TaskContext";

type TaskProps = {
  task: TaskType;
};

export default function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(evnt) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: evnt.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  const handleChecked = (evnt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "changed",
      task: {
        ...task,
        done: evnt.target.checked,
      },
    });
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={task.done} onChange={handleChecked} />
        {taskContent}
        <button
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </label>
    </li>
  );
}
