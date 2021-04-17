import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/comic/comicSlice";

export const store = configureStore({
  reducer: {
    comic: counterReducer,
  },
});
