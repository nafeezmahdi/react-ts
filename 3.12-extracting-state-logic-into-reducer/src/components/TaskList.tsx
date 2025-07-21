import type { TaskType } from "../data/tasks";
import Task from "./Task";

interface TaskListProps {
  tasks: TaskType[];
  onChangeTask: (task: TaskType) => void;
  onDeleteTask: (taskId: number) => void;
}

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
