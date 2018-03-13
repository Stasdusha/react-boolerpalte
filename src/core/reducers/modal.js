import types from 'utils/actionTypes'

const initialState = {}

export default function (state = initialState, action = {}) {
  const { type, payload } = action

  switch (type) {
    case types.SHOW_MODAL:
      return payload

    case types.HIDE_MODAL:
      return {}
    default:
      return state
  }
}
