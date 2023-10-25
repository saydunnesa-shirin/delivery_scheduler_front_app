import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import schedularReducer from "./services/reducers/schedularReducer";

export const store = createStore(schedularReducer, applyMiddleware(thunk));