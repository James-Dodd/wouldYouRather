import * as actionTypes from "../constants/actionTypes";

const setUserAuth=(id) =>{
  return {
    type: actionTypes.SET_USER_AUTH,
    payload: id,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default{
  setUserAuth
}
