import { FC, JSX } from "react";
import { CounterReducer } from "@/reducers/counter-reducer/CounterReducer";

const CounterReducerPage: FC = (): JSX.Element => {
  return <CounterReducer />;
};

export { CounterReducerPage };
