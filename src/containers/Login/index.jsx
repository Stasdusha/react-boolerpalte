import React from 'react'
import { connect } from 'react-redux'
import types from 'utils/actionTypes'

const Login = ({ dispatch }) => (
  <div
    onClick={() => dispatch({ type: types.SHOW_MODAL, payload: {} })}
    onKeyDown={() => dispatch({ type: types.USER_LOGIN_REQUEST })}
  >
    Login
  </div>
)

export default connect()(Login)
