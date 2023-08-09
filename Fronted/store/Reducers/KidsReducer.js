import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    kids: null,
    error: null,
};

export const studentSlice = createSlice({
    name: "kids",
    initialState,
    reducers: {
        IsLoading: (state, action) => {
            state.isLoading = true;
        },
        SetKids: (state, action) => {
            state.isLoading = false;
            state.kids = action.payload;
            state.error = null;
        },
        RemoveUser: (state, action) => {
            state = {
                isLoading: false,
                student: null,
                error: null,
            };
        },
    },
});

export const { IsLoading, SetUser, RemoveUser } = studentSlice.actions;

export default studentSlice.reducer;
