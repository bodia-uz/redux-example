import { createActions } from "redux-actions";

const {
  increment,
  decrement
} = createActions({
  INCREMENT: () => ({}),
  DECREMENT: () => ({})
})

export {
  increment,
  decrement
};