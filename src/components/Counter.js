import React, { Component, PropTypes } from "react";

class Counter extends Component {
  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000);
  };

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times
        <br />
        <button onClick={onIncrement}>
          +
        </button>
        <button onClick={onDecrement}>
          -
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
