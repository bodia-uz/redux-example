import { connect } from "react-redux";
import Counter from "./Counter";

const CounterContaner = connect(
  // map state to props
  state => ({
    value: state
  }),
  // map dispatch to props
  dispatch => ({
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" })
  })
)(Counter);

export default CounterContaner;