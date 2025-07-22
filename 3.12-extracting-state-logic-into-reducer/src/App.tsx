import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks, type TaskType } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

// type Task = {
//   id: number;
//   text: string;
//   done: boolean;
// };

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

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
    dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
    });
  };

  // for changed task
  const handleChangeTask = (task: TaskType) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  // for delete task
  const handleDeleteTask = (taskId: number) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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
