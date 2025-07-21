import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks, type TaskType } from "./data/tasks";

// type Task = {
//   id: number;
//   text: string;
//   done: boolean;
// };

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

  // const getNextId = (data: Task[]) => {
  //   const maxId = data.reduce((prev, current) =>
  //     prev && prev.id > current.id ? prev.id : current.id
  //   );

  //   return maxId + 1;
  // };
  const getNextId = (data: TaskType[]): number => {
    const maxTask = data.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    );

    return maxTask.id + 1;
  };

  // for adding task
  const handleAddTask = (text: string) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  // for changed task
  const handleChangeTask = (task: TaskType) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(nextTasks);
  };

  // for delete task
  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <h1>Prague Itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
