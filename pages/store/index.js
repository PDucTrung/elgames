import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./feature/games/games.slice";
import { genresReducer } from "./feature/genres/genres.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    genres: genresReducer,
  },
});

export default store;
