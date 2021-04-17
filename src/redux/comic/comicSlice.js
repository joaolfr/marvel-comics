// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

// const initialState = {
//   value: 0,
//   status: "idle",
// };

// export const comicSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = comicSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export default comicSlice.reducer;

//
//
//
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comicsList: [],
  value: 2,
  selectedComic: {},
};

export const comicSlice = createSlice({
  name: "comic",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setList: (state, action) => {
      state.comicsList = action.payload;
    },
    setSelectedComic: (state, action) => {
      state.selectedComic = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setList,
  setSelectedComic,
} = comicSlice.actions;

export const selectCount = (state) => state.comic.comicsList;
export const selectedComic = (state) => state.comic.selectedComic;

export default comicSlice.reducer;
