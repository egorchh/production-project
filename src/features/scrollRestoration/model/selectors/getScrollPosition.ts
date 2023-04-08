import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollPosition = (state: StateSchema) => state.scroll.scroll;
export const getScrollByPath = createSelector(
    getScrollPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
