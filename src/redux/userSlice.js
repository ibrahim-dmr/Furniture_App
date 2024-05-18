import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const initialState ={
    email: null,
    password: null,
    isLoading: false,
    isAuth: false,
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsLoading: (state, action ) => {
            state.isLoading = action.payload
        }, 
 
    }
})


export const { setEmail, setPassword, setIsLoading } = userSlice.actions
export default userSlice.reducer;