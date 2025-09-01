import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from './states/signupSlice';
import signinReducer from './states/signinSlice';
import userReducer from './states/userSlice';
import settingReducer from './states/settingSlice';
import { ApiState } from './apiState/signuapi';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage

// Combine all reducers
const rootReducer = combineReducers({
  signupState: signupReducer,
  signinState: signinReducer,
  userState: userReducer,
  settingState: settingReducer,
  [ApiState.reducerPath]: ApiState.reducer,
});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'userState'], // only persist these
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ApiState.middleware),
});

export const persistor = persistStore(store);