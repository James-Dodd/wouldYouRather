import { createStore } from "redux";
import { rootReducer } from "../reducers";
import configureMiddleWare from "./middleWare/configureMiddleWare";

const store = createStore(rootReducer(), configureMiddleWare);

export default store;