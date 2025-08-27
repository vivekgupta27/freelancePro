import { configureStore } from "@reduxjs/toolkit";
import signupReducer from './states/signupSlice';
import { ApiState } from './apiState/signuapi';
import signinReuducer from './states/signinSlice'
export const store=configureStore({
    reducer:{
        signupState:signupReducer,
        signinState:signinReuducer,
        [ApiState.reducerPath]:ApiState.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiState.middleware),
})

