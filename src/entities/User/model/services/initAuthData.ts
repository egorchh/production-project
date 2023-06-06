import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../..';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<
    User,
    void,
    ThunkConfig<string>>(
        'user/initAuthData',
        async (newJsonSettings, thunkAPI) => {
            const {
                extra, rejectWithValue, getState, dispatch,
            } = thunkAPI;

            const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (!userId) {
                return rejectWithValue('Нет данных о пользователе');
            }

            try {
                const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

                return response;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
