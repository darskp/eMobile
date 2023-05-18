import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null,
    userID: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            const { userName, userID, email } = action.payload;
            state.isLoggedIn = true;
            state.email = email;
            state.userName = userName;
            state.userID = userID
        },
        SET_REMOVE_USER:(state,action)=>{
            state.isLoggedIn = false;
            state.email = null;
            state.userName = null;
            state.userID = null;
        }
    }
});

export const { SET_ACTIVE_USER,SET_REMOVE_USER } = authSlice.actions
export const selectIsLoggedIN = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserID = (state) => state.auth.userID;
export const selectUsername = (state) => state.auth.userName;
export default authSlice.reducer;