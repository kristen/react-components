import React, {DragEvent} from 'react';
import './index.css'
import {connect} from "react-redux";
import {RootState} from "../reducers";
import {getGroupedTasks, getTasks} from "./selectors";
import {Task, Type} from "./reducers";
import {ToDoDragActions} from "./actions";
import {Dispatch} from "redux";
import * as actions from './actions';

interface OwnProps {
    groupedTasks: {[key in keyof typeof Type]: Task[]};
}

type Props = OwnProps & ReturnType<typeof mapDispatchToProps>;

class ToDoDragDropDemo extends React.Component<Props> {
    handleOnDragStart(event: DragEvent<HTMLDivElement>, taskId: string) {
        console.log('dragstart on div: ', taskId);
        event.dataTransfer.setData("taskId", taskId);
    }
    handleOnDragOver(event: DragEvent<HTMLDivElement>) {
        event.preventDefault();
    }
    handleOnDrop(event: DragEvent<HTMLDivElement>, type: Type) {
        const taskId = event.dataTransfer.getData("taskId");
        this.props.changeType(taskId, type);
    }
    renderTask(task: Task) {
        return (
            <div key={task.id}
                 draggable
                 onDragStart={event => this.handleOnDragStart(event, task.id)}
                 className="draggable"
                 style={
                     { backgroundColor: task.backgroundColor }
                 }>
                {task.taskName}
            </div>
        )
    }
    render() {
        const {groupedTasks} = this.props;
        const inProgressTasks = (groupedTasks.InProgress || []).map((task) => this.renderTask(task));
        const DoneTasks = (groupedTasks.Done || []).map((task) => this.renderTask(task));
        return (
            <div className="drag-container">
                <h2 className="head">To Do List Drag & Drop</h2>
                <div className="inProgress"
                    onDragOver={this.handleOnDragOver}
                    onDrop={event => this.handleOnDrop(event, Type.InProgress)}>
                    <span className="group-header">In Progress</span>
                    {inProgressTasks}
                </div>
                <div className="droppable"
                     onDragOver={this.handleOnDragOver}
                     onDrop={event => this.handleOnDrop(event, Type.Done)}>
                    <span className="group-header">Done</span>
                    {DoneTasks}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    groupedTasks: getGroupedTasks(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ToDoDragActions>) => ({
    changeType: (taskId: string, type: Type) => dispatch(actions.changeType(taskId, type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoDragDropDemo);
