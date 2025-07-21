import { useState, type ChangeEvent } from "react";
import type { TaskType } from "../data/tasks";

type TaskProps = {
  task: TaskType;
  onChangeTask: (task: TaskType) => void;
  onDeleteTask: (taskId: number) => void;
};

export default function Task({ task, onChangeTask, onDeleteTask }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(evnt) => {
            onChangeTask({ ...task, text: evnt.target.value });
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
    onChangeTask({
      ...task,
      done: evnt.target.checked,
    });
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={task.done} onChange={handleChecked} />
        {taskContent}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </label>
    </li>
  );
}
