import type { TaskType } from "../data/tasks";

type Action =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: TaskType }
  | { type: "deleted"; id: number };

export default function taskReducer(
  draft: TaskType[],
  action: Action
): TaskType[] {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    //
    case "changed": {
      const index = draft.findIndex((t) => t.id === action.task.id);

      draft[index] = action.task;

      break;
    }
    //
    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      // The 'never' type will trigger an error if action.type doesn't match

      return draft;
    }
  }
}
