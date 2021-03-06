import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Routes from 'core/routes'
import { ConnectedRouter } from 'react-router-redux'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
