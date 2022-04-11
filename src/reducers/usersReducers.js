import * as actionTypes from "../constants/actionTypes";

const users = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: state[action.payload.author].questions.concat(
            action.payload.id
          ),
        },
      };
    case actionTypes.ADD_ANSWER_TO_USER:
      return {
        ...state,
        [action.payload.authUser]: {
          ...state[action.payload.authUser],
          answers: {
            ...state[action.payload.authUser].answers,
            [action.payload.qid]: action.payload.answer
          }
        }
      };
    default:
      return state;
  }
};

export default users;
