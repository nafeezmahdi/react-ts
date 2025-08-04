import type { TaskType } from "../data/tasks";

export const getNextId = (data: TaskType[]): number => {
  const maxTask = data.reduce((prev, current) =>
    prev.id > current.id ? prev : current
  );

  return maxTask.id + 1;
};

// const getNextId = (data: Task[]) => {
//   const maxId = data.reduce((prev, current) =>
//     prev && prev.id > current.id ? prev.id : current.id
//   );

//   return maxId + 1;
// };
