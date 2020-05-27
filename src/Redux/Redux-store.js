import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import AppReduser from "./AppReduser";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
        form: formReducer,
        App: AppReduser
    }
);

const store = createStore(redusers,applyMiddleware(thunkMiddleware))

window.store = store;

export default store;