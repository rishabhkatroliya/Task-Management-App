import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import taskReducer from './reducers/taskReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  user: userReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export {store};