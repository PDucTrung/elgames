import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./feature/auth/auth.slice";
import { blogsReducer } from "./feature/blogs/blogs.slice";
import { productsReducer } from "./feature/games/games.slice";
import { genresReducer } from "./feature/genres/genres.slice";
import { usersReducer } from "./feature/users/users.slice";
import { wishlistReducer } from "./feature/wishlist/wishlist.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    genres: genresReducer,
    blogs: blogsReducer,
    auth: authReducer,
    users: usersReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
