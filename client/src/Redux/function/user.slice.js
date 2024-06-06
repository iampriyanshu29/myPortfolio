import { createSlice } from "@reduxjs/toolkit";


const  initialState = {
    currentUser: null,
    error : null,
    loading : false,
};

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        signInStart : (state)=>{
            state.loading = true;
        },
        signInSucess : (state, action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFail: (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        signOutSucess : (state)=>{
            state.currentUser = null;
        }
    }
})

export const { signInFail,signInStart,signOutSucess,signInSucess } = userSlice.actions;
export default userSlice.reducer;