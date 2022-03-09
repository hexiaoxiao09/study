

import * as actions from '../contants/index'

export const increment = (num) => {
  return {
    type: actions.INCREMENT,
    num
  }
}

export const decrement = (num) => {
  return {
    type: actions.DECREMENT,
    num
  }
}