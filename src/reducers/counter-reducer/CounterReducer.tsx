import { FC, JSX, useReducer } from "react";
import { Button } from "../../components/ui/button";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previus: 0,
};

const CounterReducer: FC = (): JSX.Element => {
  const [counterState, dispach] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispach(doReset());
  };

  const increaseBy = (value: number) => {
    dispach(doIncreaseBy(value));
  };

  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 px-4">
      <div className="col-span-4 lg:col-start-4 text-center">
        <div>Counter Reducer</div>
      </div>

      <div className="col-span-4 lg:col-start-4 flex flex-col gap-y-10">
        <pre>{JSON.stringify(counterState, null, 2)}</pre>
        <Button onClick={() => increaseBy(1)}>+1</Button>
        <Button onClick={() => increaseBy(5)}>+5</Button>
        <Button onClick={() => increaseBy(10)}>+10</Button>
        <Button variant="destructive" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export { CounterReducer };
