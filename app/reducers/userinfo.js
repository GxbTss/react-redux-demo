import * as types from '../constants/userinfo'

const initialState = {}

export default function userinfo(state = initialState, action) {
  switch (action.type) {
    case types.USERINFO_LOGIN:
      return action.data;
      break;
    case types.UPDATE_CITYNAME:
      return action.data;
      break;
    default:
      return state;
  }
}