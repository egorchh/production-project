import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

const initialState: DeepPartial<StateSchema> = {
    profile: {
        validateErrors: [
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USERNAME,
        ],
    },
};

describe('getProfileReadonly', () => {
    test('get readonly prop', () => {
        expect(getProfileValidateErrors(initialState as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });

    test('with empty state', () => {
        expect(getProfileValidateErrors({} as StateSchema)).toEqual(undefined);
    });
});
