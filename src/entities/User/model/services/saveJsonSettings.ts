import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>>(
        'user/saveJsonSettings',
        async (newJsonSettings, thunkAPI) => {
            const {
                extra, rejectWithValue, getState, dispatch,
            } = thunkAPI;

            const userData = getUserAuthData(getState());
            const currentSettings = getJsonSettings(getState());

            if (!userData) {
                return rejectWithValue('Нет данных о пользователе');
            }

            try {
                const response = await dispatch(setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: {
                        ...currentSettings,
                        ...newJsonSettings,
                    },
                })).unwrap();

                if (!response.jsonSettings) {
                    return rejectWithValue('');
                }

                return response.jsonSettings;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
