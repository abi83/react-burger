import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from '../actions/modal'

const initialState = {
  content: null,
}

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return { content: action.content }
    }
    case CLOSE_MODAL: {
      return { content: null }
    }
    default: {
      return state
    }
  }
}
