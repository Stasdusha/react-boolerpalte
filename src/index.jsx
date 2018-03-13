import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router'
import Root from 'core/Root'
import { configureStore } from 'core/store'
import createHistory from 'history/createBrowserHistory'

import 'normalize.css'
import './styles/global.css'

const store = configureStore({
  history: browserHistory
})

const history = createHistory()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component history={history} store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('core/reducers', () => {
    const nextRootReducer = require('core/reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}
