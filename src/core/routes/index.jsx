import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from 'containers/Login'

import App from 'containers/App'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Routes = () => (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </App>
  </Router>
)

export default Routes
