import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileEditedData } from './getProfileEditedData';

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
        editedData: initialData,
    },
};

describe('getProfileEditedData', () => {
    test('initial state', () => {
        expect(getProfileEditedData(initialState as StateSchema)).toEqual(initialData);
    });

    test('with empty state', () => {
        expect(getProfileEditedData({} as StateSchema)).toEqual(undefined);
    });
});
