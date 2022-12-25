import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./feature/auth/auth.slice";
import { blogsReducer } from "./feature/blogs/blogs.slice";
import { cartReducer } from "./feature/cart/cart.slice";
import { productsReducer } from "./feature/games/games.slice";
import { genresReducer } from "./feature/genres/genres.slice";
import { wishlistReducer } from "./feature/wishlist/wishlist.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    genres: genresReducer,
    blogs: blogsReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;
