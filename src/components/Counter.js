import React, { Component, PropTypes } from "react";

class Counter extends Component {
  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000);
  };

  render() {
    const { value, onIncrement, onDecrement } = this.props;

    // NOTE: onIncrement/onDecrement parameter is `delta`. Prevent click `e` param
    return (
      <p>
        Clicked: {value} times
        <br />
        <button onClick={() => onIncrement()}>
          +1
        </button>
        <button onClick={() => onIncrement(2)}>
          +2
        </button>
        <button onClick={() => onDecrement()}>
          -1
        </button>
        <button onClick={() => onDecrement(2)}>
          -2
        </button>
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
