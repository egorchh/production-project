import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

const initialState: DeepPartial<StateSchema> = {
    profile: {
        error: 'error',
    },
};

describe('getProfileError', () => {
    test('error', () => {
        expect(getProfileError(initialState as StateSchema)).toEqual('error');
    });

    test('with empty state', () => {
        expect(getProfileError({} as StateSchema)).toEqual(undefined);
    });
});
