import {ActionType, createStandardAction} from "typesafe-actions";
import {Type} from "./reducers";

export const changeType = createStandardAction('todo-drag-drop/CHANGE_TYPE').map((taskId: string, type: Type) => ({
   payload: {
       taskId,
       type,
   }
}));

export type ToDoDragActions = ActionType<typeof changeType>;
