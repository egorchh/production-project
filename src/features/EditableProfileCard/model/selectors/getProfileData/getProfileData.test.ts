import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

const initialData = {
    first: '',
    lastname: '',
    age: 0,
    currency: Currency.EUR,
    country: Country.RUSSIA,
    city: '',
    username: '',
    avatar: '',
};

const initialState: DeepPartial<StateSchema> = {
    profile: {
        data: initialData,
    },
};

describe('getProfileData', () => {
    test('initial state', () => {
        expect(getProfileData(initialState as StateSchema)).toEqual(initialData);
    });

    test('with empty state', () => {
        expect(getProfileData({} as StateSchema)).toEqual(undefined);
    });
});
