import { handleActions } from 'redux-actions'
import { increment, decrement } from "../actions";

function inrementState(state, action) {
  return state + action.payload;
}

function decrementtState(state, action) {
  return state - action.payload;
}

const DEFAULR_STATE = 0;

export default handleActions({
  [increment]: inrementState,
  [decrement]: decrementtState
}, DEFAULR_STATE)

