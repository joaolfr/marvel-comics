import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/comic/comicSlice";
import userReducer from "../redux/user/userSlice";

export const store = configureStore({
  reducer: {
    comic: counterReducer,
    user: userReducer,
  },
});
