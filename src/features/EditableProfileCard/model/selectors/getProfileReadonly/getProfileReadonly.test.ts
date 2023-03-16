import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

const initialState: DeepPartial<StateSchema> = {
    profile: {
        readonly: true,
    },
};

describe('getProfileReadonly', () => {
    test('get readonly prop', () => {
        expect(getProfileReadonly(initialState as StateSchema)).toEqual(true);
    });

    test('with empty state', () => {
        expect(getProfileReadonly({} as StateSchema)).toEqual(false);
    });
});
