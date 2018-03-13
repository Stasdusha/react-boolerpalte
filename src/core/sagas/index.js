import { fork, all } from 'redux-saga/effects'
import login from 'containers/Login/sagas'

export default function* rootSaga() {
  yield all([
    fork(login)
  ])
}
