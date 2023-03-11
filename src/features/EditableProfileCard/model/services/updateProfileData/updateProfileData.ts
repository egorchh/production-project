import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileEditedData } from '../../selectors/getProfileEditedData/getProfileEditedData';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>>(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue, getState } = thunkAPI;

            const editedData = getProfileEditedData(getState());

            try {
                const response = await extra.api.post<Profile>('/profile', editedData);

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
