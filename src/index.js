import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import counterReducer from "./reducers";

import Counter from "./components/Counter";

const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    document.getElementById("root"),
  );
};
render();
store.subscribe(render);
