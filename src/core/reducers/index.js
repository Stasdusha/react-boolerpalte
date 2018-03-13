import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import createContainersReducers from 'containers/reducers'

import modal from './modal'

const containers = createContainersReducers()

export default function createRootReducer() {
  return combineReducers({
    routing: routerReducer,
    form: formReducer,
    containers,
    modal
  })
}
