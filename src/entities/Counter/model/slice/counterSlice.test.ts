import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('increment state', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });

    test('decrement state', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('empty state, should work with initial state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
