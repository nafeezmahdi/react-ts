import { createContext, useContext, type ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import taskReducer from "../reducers/taskReducer";
import { initialTasks } from "../data/tasks";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export function useTasks() {
  return useContext(TaskContext);
}
export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}

interface TaskContextProviderProps {
  children: ReactNode;
}

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
