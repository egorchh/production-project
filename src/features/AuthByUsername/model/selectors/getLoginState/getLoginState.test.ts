import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

const initialState: DeepPartial<StateSchema> = {
    loginForm: {
        username: '',
        password: '',
        error: '',
        isLoading: false,
    },
};

describe('getLoginState', () => {
    test('initial state', () => {
        expect(getLoginState(initialState as StateSchema)).toEqual({
            username: '',
            password: '',
            error: '',
            isLoading: false,
        });
    });

    test('with empty state', () => {
        expect(getLoginState(undefined)).toEqual({
            username: '',
            password: '',
            error: '',
            isLoading: false,
        });
    });
});
