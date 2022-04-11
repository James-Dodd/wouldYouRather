import * as actionTypes from "../constants/actionTypes";

const questions = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_QUESTION:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.ADD_VOTE:
      const { payload } = action;
      return {
        ...state,
        [payload.questId]: {
          ...state[payload.questId],
          [payload.option]: {
            ...state[payload.questId][payload.option],
            votes: state[payload.questId][payload.option].votes.concat(
              payload.authUser
            ),
          },
        },
      };
    case actionTypes.ADD_QUESTION:
      return {
        ...state,
        [action.payload.question.id]: action.payload.question,
      };
    default:
      return state;
  }
};

export default questions;
