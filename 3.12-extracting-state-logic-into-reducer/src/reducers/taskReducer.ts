import type { TaskType } from "../data/tasks";

type Action =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: TaskType }
  | { type: "deleted"; id: number };

export default function taskReducer(
  tasks: TaskType[],
  action: Action
): TaskType[] {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    //
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    //
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      // The 'never' type will trigger an error if action.type doesn't match
      return tasks;
    }
  }
}
