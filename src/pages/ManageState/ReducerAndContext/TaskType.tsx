import { AnyActionArg } from "react";

export default interface TaskType {
  id: number;
  text: string;
  done: boolean;
}

export type ActionType =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: TaskType }
  | { type: "deleted"; id: number }
  | { type: "string" };
