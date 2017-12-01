import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import Counter from "./Counter";

const CounterContaner = connect(
  // map state to props
  state => ({
    value: state
  }),
  // map dispatch to props
  dispatch => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  })
)(Counter);

export default CounterContaner;
