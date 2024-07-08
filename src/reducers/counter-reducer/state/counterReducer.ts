import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.action) {
    case "reset":
      return {
        changes: 0,
        counter: 0,
        previus: 0,
      };
    case "increaseBy":
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previus: state.counter,
      };
    default:
      return state;
  }
};

export { counterReducer };
