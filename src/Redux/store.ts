
import {combineReducers, compose, createStore} from "redux";
import {tasks} from "./reducers/tasks";

const rootReducer = combineReducers({
    tasks
})
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers())


export default store