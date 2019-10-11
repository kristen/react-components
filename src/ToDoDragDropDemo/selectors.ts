import {RootState} from "../reducers";
import {createSelector} from "reselect";
import {Task, ToDoDragDrop, Type} from "./reducers";

const getToDoDragDrop = (state: RootState) => state.toDoDragDrop;
export const getTasks = createSelector(getToDoDragDrop, (toDoDragDrop: ToDoDragDrop) => toDoDragDrop.tasks);
export const getGroupedTasks = createSelector(getTasks, (tasks: Task[]) => {
    return tasks.reduce((acc, task) => {
        // @ts-ignore
        if (!acc[task.type]) acc[task.type] = [];
        acc[task.type].push(task);
        return acc;
    }, {} as {[key in keyof typeof Type]: Task[]});
});
