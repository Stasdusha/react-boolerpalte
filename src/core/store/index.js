import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from 'core/reducers'
import rootSaga from 'core/sagas'

export function configureStore({ history }, initialState) {
  const loggerMiddleware = createLogger({ duration: true })
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [
    loggerMiddleware,
    routerMiddleware(history),
    sagaMiddleware
  ]

  const enhancer = compose(applyMiddleware(...middlewares))

  const result = createStore(createRootReducer(), initialState, enhancer)
  sagaMiddleware.run(rootSaga)

  return result
}
