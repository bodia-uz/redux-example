import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import Counter from "./Counter";

const CounterContaner = connect(
  // map state to props
  state => ({
    value: state
  }),
  // map dispatch to props
  dispatch => bindActionCreators({
    onIncrement: increment,
    onDecrement: decrement
  }, dispatch)
)(Counter);

export default CounterContaner;
