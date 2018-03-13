import { combineReducers } from 'redux'
import login from 'containers/Login/reducers'


export default function createContainerReducers() {
  return combineReducers({
    login
  })
}
