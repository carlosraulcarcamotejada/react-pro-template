type CounterAction =
  | {
      action: "reset";
    }
  | {
      action: "increaseBy";
      payload: { value: number };
    };

const doReset = (): CounterAction => ({
  action: "reset",
});

const doIncreaseBy = (value: number): CounterAction => ({
  action: "increaseBy",
  payload: { value },
});

export { doReset };
export { doIncreaseBy };
export type { CounterAction };
