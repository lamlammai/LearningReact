import { combineReducers } from 'redux';
import {todoReducer} from './reducers/todo-reducers';
 const rootReducer = combineReducers({
     todo: todoReducer
 })
 export default rootReducer;