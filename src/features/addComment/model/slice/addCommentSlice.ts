import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentSchema } from '../types/addComment';

const initialState: AddCommentSchema = {
    text: undefined,
    error: undefined,
};

export const addCommentSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => builder
    //
    // // fetchProfileData
    //
    //     .addCase(fetchProfileData.pending, (state) => {
    //         state.error = undefined;
    //         state.isLoading = true;
    //     })
    //     .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
    //         state.isLoading = false;
    //         state.data = action.payload;
    //         state.editedData = action.payload;
    //     })
    //     .addCase(fetchProfileData.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     })
    //
    // // updateProfileData
    //
    //     .addCase(updateProfileData.pending, (state) => {
    //         state.validateErrors = undefined;
    //         state.isLoading = true;
    //     })
    //     .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
    //         state.isLoading = false;
    //         state.data = action.payload;
    //         state.editedData = action.payload;
    //         state.readonly = true;
    //         state.validateErrors = undefined;
    //     })
    //     .addCase(updateProfileData.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.validateErrors = action.payload;
    //     }),
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
