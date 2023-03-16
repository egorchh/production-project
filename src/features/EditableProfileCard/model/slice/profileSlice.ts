import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (state, action:PayloadAction<Profile>) => {
            state.editedData = {
                ...state.editedData,
                ...action.payload,
            };
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.editedData = state.data;
        },
    },
    extraReducers: (builder) => builder

    // fetchProfileData

        .addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.editedData = action.payload;
        })
        .addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

    // updateProfileData

        .addCase(updateProfileData.pending, (state) => {
            state.validateErrors = undefined;
            state.isLoading = true;
        })
        .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.editedData = action.payload;
            state.readonly = true;
            state.validateErrors = undefined;
        })
        .addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        }),
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
