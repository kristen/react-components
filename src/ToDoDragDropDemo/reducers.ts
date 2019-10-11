import {combineReducers} from "redux";
import {ToDoDragActions} from "./actions";
import {getType} from "typesafe-actions";
import * as actions from './actions';

export interface ToDoDragDrop {
    tasks: Task[];
}

export enum Type {
    InProgress = "InProgress",
    Done = "Done",
}

export interface Task {
    id: string;
    taskName: string;
    type: Type;
    backgroundColor: string;
}

const initialTasks = [
    {id: "1", taskName: "Read book", type: Type.InProgress, backgroundColor: "red"},
    {id: "2", taskName: "Pay bills", type: Type.InProgress, backgroundColor: "green"},
    {id: "3", taskName: "Go to the gym", type: Type.Done, backgroundColor: "blue"},
    {id: "4", taskName: "Play baseball", type: Type.Done, backgroundColor: "green"}
];

export const tasks = (state: Task[] = initialTasks, action: ToDoDragActions): Task[] => {
    switch (action.type) {
        case getType(actions.changeType):
            const {taskId, type} = action.payload;
            return state.map(task => {
                if (task.id === taskId) {
                    return {...task, type}
                }
                return task;
            });
        default:
            return state;
    }
};

export default combineReducers({
    tasks,
});
