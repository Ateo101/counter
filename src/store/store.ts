import {CounterReducer} from "../reducers/Reducers";
import {combineReducers, createStore} from "redux";

let rootReducer=combineReducers({
    counter:CounterReducer,
    //maxValue:maxValueReducer,
    //startValue:startValueReducer
})

export type rootReducerType=ReturnType<typeof rootReducer>
export let store=createStore(rootReducer)