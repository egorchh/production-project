import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Egor',
    lastname: 'Podolskij',
    age: 21,
    currency: Currency.EUR,
    country: Country.RUSSIA,
    city: '',
    username: 'username',
    avatar: '',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: 0 });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE,
        ]);
    });

    test('incorrect username', async () => {
        const result = validateProfileData({ ...data, username: '12' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });

    test('empty data', async () => {
        const result = validateProfileData({
            first: '',
            lastname: '',
            age: 0,
            currency: Currency.EUR,
            country: Country.RUSSIA,
            city: '',
            username: '',
            avatar: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_USER_AGE,
        ]);
    });
});
