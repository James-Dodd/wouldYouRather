import { combineReducers } from "redux";
import userAuth from "./userAuthReducer";
import questions from "./questionReducer";
import users from "./usersReducers";

export const rootReducer = () => {
  return combineReducers({
    userAuth,
    questions,
    users,
  });
};
