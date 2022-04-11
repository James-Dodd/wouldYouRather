import { getInitData } from "../utils/dataHandler";
import questionActions from "./questionActions";
import usersActions from "./usersActions";
import userAuthActions from "./userAuthActions";

const allActions = {
  userAuthActions,
  questionActions,
  usersActions,
};
const questionSubmit = (e) => {
  return questionActions.questionSubmit(e);
};
const getUsers = (e) => {
  return usersActions.getUsers(e);
};
const handleInitialData = () => {
  return (dispatch) => {
    return getInitData().then(({ users, questions }) => {
      dispatch(questionSubmit(questions));
      dispatch(getUsers(users));
    });
  };
};

export { allActions, handleInitialData };
