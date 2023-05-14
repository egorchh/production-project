import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string | undefined,
    ThunkConfig<string>>(
        'profile/fetchProfileData',
        async (profileId, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;

            try {
                if (!profileId) {
                    throw new Error('Не указан id профиля');
                }

                const response = await extra.api.get<Profile>(`/profile/${profileId}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
