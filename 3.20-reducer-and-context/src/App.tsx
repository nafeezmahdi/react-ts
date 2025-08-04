import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./contexts/TaskContext";

// type Task = {
//   id: number;
//   text: string;
//   done: boolean;
// };

function App() {
  return (
    <TaskContextProvider>
      <h1>Prague Itinerary</h1>
      <AddTask />
      <TaskList />
    </TaskContextProvider>
  );
}

export default App;
