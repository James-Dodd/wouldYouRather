import * as actionTypes from "../constants/actionTypes";

const userAuth=(state = null, action) =>{
  if (action.type === actionTypes.SET_USER_AUTH) {
    return action.payload;
  }
  return state;
};

export default userAuth;
