import { handleActions } from 'redux-actions'
import { increment, decrement } from "../actions";

function inrementState(state) {
  return state + 1;
}

function decrementtState(state) {
  return state - 1;
}

const DEFAULR_STATE = 0;

export default handleActions({
  [increment]: inrementState,
  [decrement]: decrementtState
}, DEFAULR_STATE)

