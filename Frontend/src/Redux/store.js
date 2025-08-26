import { configureStore } from "@reduxjs/toolkit";
import signupReducer from './states/signupSlice';
import { ApiState } from './apiState/signuapi';
export const store=configureStore({
    reducer:{
        signupState:signupReducer,
        [ApiState.reducerPath]:ApiState.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiState.middleware),
})
