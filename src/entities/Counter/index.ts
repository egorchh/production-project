import { counterActions, counterReducer } from './model/slice/counterSlice';
import type { CounterSchema } from './model/types/counterSchema';
import { Counter } from './ui/Counter';

export {
    CounterSchema,
    counterReducer,
    counterActions,
    Counter,
};
