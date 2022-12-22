import { configureStore } from "@reduxjs/toolkit";
import { blogsReducer } from "./feature/blogs/blogs.slice";
import { productsReducer } from "./feature/games/games.slice";
import { genresReducer } from "./feature/genres/genres.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    genres: genresReducer,
    blogs: blogsReducer,
  },
});

export default store;
