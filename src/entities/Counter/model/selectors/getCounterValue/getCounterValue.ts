import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';

// eslint-disable-next-line max-len
export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);
