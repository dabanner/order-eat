import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    profileImage: 'https://avatars.githubusercontent.com/u/77581509?v=4',
    userId: 1,
    name: 'John Doe',
};

export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        resetToInitialState: () => {
            return initialState;
        },
    }
});

export const {resetToInitialState} = User.actions;
export default User.reducer;