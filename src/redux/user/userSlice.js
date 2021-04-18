import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  userEmail: "",
  userName: "",
  avatarUrl: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogged = true;
    },
    logOut: (state) => {
      state.isLogged = false;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setAvatarUrl: (state, action) => {
      state.avatarUrl = action.payload;
    },
  },
});

export const {
  logIn,
  logOut,
  setUserEmail,
  setUserName,
  setAvatarUrl,
} = userSlice.actions;

export const logged = (state) => state.user.isLogged;
export const email = (state) => state.user.userEmail;
export const name = (state) => state.user.userName;
export const avatar = (state) => state.user.avatarUrl;

export default userSlice.reducer;
