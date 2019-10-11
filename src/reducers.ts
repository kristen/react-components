import {combineReducers} from "redux";
import toDoDragDrop, {ToDoDragDrop} from './ToDoDragDropDemo/reducers';

export interface RootState {
    toDoDragDrop: ToDoDragDrop;
}

export default combineReducers<RootState>({
    toDoDragDrop,
});
