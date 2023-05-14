import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

const initialState: DeepPartial<StateSchema> = {
    profile: {
        isLoading: true,
    },
};

describe('getProfileLoading', () => {
    test('loading', () => {
        expect(getProfileLoading(initialState as StateSchema)).toEqual(true);
    });

    test('with empty state', () => {
        expect(getProfileLoading({} as StateSchema)).toEqual(false);
    });
});
