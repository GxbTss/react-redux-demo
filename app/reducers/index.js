import { combineReducers } from 'redux'

import userinfo from './userinfo'

const city = function city(state = 0, action){
  return state
}

export  const rootReucer = combineReducers({
  userinfo,
  city
})