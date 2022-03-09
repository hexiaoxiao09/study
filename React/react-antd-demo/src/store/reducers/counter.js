
import * as actions from '../contants/index'


const counters = ( state = 1, action ) => {
  console.log(action.num)
  switch( action.type ) {
    case actions.INCREMENT: 
      return state + action.num;
    case actions.DECREMENT: 
      return state - action.num;
    default: 
      return state
  }
}

export default counters