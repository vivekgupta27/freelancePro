import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  oldPassword: "",
  newPassword: "",

};

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setOldPassword: (state, action) => {
      state.oldPassword = action.payload;
    },
    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
  }
});

export const {
  setName,
  setEmail,
  setOldPassword,
  setNewPassword,
  
} = settingSlice.actions;

export default settingSlice.reducer;
