import * as actionTypes from "../constants/actionTypes";

const questionSubmit = (questions) => {
  return {
    type: actionTypes.GET_QUESTION,
    payload: questions,
  };
};

const voteAdder = (authUser, option, questId) => {
  return {
    type: actionTypes.ADD_VOTE,
    payload: {
      authUser,
      option,
      questId,
    },
  };
};

const questionAdd = (question) => {
  return {
    type: actionTypes.ADD_QUESTION,
    payload: { question },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  questionSubmit,
  voteAdder,
  questionAdd
};
