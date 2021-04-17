import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  userEmail: "",
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
  },
});

export const { logIn, logOut, setUserEmail } = userSlice.actions;

export const logged = (state) => state.user.isLogged;
export const email = (state) => state.user.userEmail;

export default userSlice.reducer;
