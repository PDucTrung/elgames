import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    "Action",
    "Adventure",
    "Horror",
    "Open World",
    "Rogue Lite",
    "Survival",
  ],
  //   loading: true,
};

export const loadGenres = createAsyncThunk("genres", async () => {
//   const response = await fetch("https://tfruitapi.vercel.app/categories");
//   const data = await response.json();

  return data;
});

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadGenres.fulfilled, (state, action) => {
      return {
        data: action.payload,
        // loading: false,
      };
    });
  },
});

export const genresReducer = genresSlice.reducer;
export const genresSelector = (state) => state.genres.data;
