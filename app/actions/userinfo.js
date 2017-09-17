import * as types from '../constants/userinfo'

export function login(data) {
  return {
    type: types.USERINFO_LOGIN,
    data
  }
}

export function updateCityName(data) {
  return {
    type: types.UPDATE_CITYNAME,
    data
  }
}