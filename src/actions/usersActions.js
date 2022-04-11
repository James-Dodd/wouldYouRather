import * as actionTypes from "../constants/actionTypes";

const getUsers = (users) => {
  return {
    type: actionTypes.GET_USERS,
    payload: users,
  };
};

const addQuestionToUser = (id, author) => {
  console.log("here is id from user question --->", id, author);
  return {
    type: actionTypes.ADD_QUESTION_TO_USER,
    payload: {
      id,
      author,
    },
  };
};

const addAnswerToUser = (authUser, answer, qid) => {
  return {
    type: actionTypes.ADD_ANSWER_TO_USER,
    payload: {
      authUser,
      qid,
      answer,
    },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers,
  addQuestionToUser,
  addAnswerToUser,
};
