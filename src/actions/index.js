import { createActions } from "redux-actions";

const {
  increment,
  decrement
} = createActions({
  INCREMENT: (delta = 1) => delta,
  DECREMENT: (delta = 1) => delta
})

export {
  increment,
  decrement
};