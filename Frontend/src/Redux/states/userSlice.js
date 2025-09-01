// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo= action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = '';
    },
    userData(state,action){
     state.userInfo=action.payload;
    }
  },
});

export const { login, logout,userData } = userSlice.actions;
export default userSlice.reducer;