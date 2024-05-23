import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    isLoading: false,
    isAuth: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
    }
});

export const { setEmail, setPassword, setIsLoading, setIsAuth } = userSlice.actions;
export default userSlice.reducer;
