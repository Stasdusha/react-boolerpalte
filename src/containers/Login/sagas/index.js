import { takeLatest, all, call, put } from 'redux-saga/effects'
import types from 'utils/actionTypes'


function* loginUser(action) {
  yield call(console.log, 'login saga')
}

export default function* login() {
  yield all([
    takeLatest(types.USER_LOGIN_REQUEST, loginUser)
  ])
}
