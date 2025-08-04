import Task from "./Task";
import { useTasks } from "../contexts/TaskContext";

// interface TaskListProps {
//   tasks: TaskType[];
//   onChangeTask: (task: TaskType) => void;
//   onDeleteTask: (taskId: number) => void;
// }

export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
