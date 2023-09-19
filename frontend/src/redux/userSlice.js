import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        isFetchingReg: false,
        error: false,
        error2: false,
    },

    reducers: {
        loginFetch:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFail:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        loginRegisterFail:(state)=>{
            state.isFetchingReg = false;
            state.error2 = true;
        },
        },
    },
);

export const {loginFetch, loginSuccess, loginFail, loginRegisterFail} = userSlice.actions;
export default userSlice.reducer;