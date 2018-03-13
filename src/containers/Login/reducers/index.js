import types from 'utils/actionTypes'

const initialState = {
  login: false
}

export default function (state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, login: !state.login }

    default:
      return state
  }
}
