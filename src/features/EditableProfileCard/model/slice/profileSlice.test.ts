import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Egor',
    lastname: 'Podolskij',
    age: 21,
    currency: Currency.EUR,
    country: Country.RUSSIA,
    city: 'SPb',
    username: 'egorch_',
    avatar: '',
};

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, editedData: { username: '' } };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                editedData: data,
            });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { editedData: { username: '' } };

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
            username: 'egorch51coolMan',
        }))).toEqual({
            editedData: { ...state.data, username: 'egorch51coolMan' },
        });
    });

    test('update profile server pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('update profile server fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            editedData: data,
            error: undefined,
            readonly: false,
            isLoading: false,
            validateErrors: undefined,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '', ''),
        ))
            .toEqual({
                ...state,
                readonly: true,
            });
    });
});
