import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";

import { createStore } from "redux";
import counterReducer from "./reducers";

import Counter from "./components/Counter.container";

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
