import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileEditedData } from '../../selectors/getProfileEditedData/getProfileEditedData';
import { Profile } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = getProfileEditedData(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
