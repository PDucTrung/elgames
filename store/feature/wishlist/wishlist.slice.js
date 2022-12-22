import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, { payload: { productId } }) => {
      const itemIndex = state.findIndex((item) => item.productId == productId);
      if (itemIndex !== -1) {
        toast.warning("This game is already on wishlist", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const newItem = [...state, { productId }];

      
        const Msg = () => (
          <span
            style={{
              color: "var(--bg)",
            }}
          >
            {"Add game " + productId + " to wishlist successful!"}
          </span>
        );
        toast(<Msg></Msg>);
        return newItem;
      }
    },

    removeItem: (state, action) => {
      const newState = state.filter(
        (item) => item.productId !== action.payload
      );
      return newState;
    },
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export const { addItem, removeItem } = wishlistSlice.actions;

export const selectTotalwishlistItem = (state) => state.wishlist.length;

export const selectWishlist = (state) => {
  const products = state.products.data;
  const wishlist = state.wishlist;

  const items = wishlist.map((item) => ({
    id: item.productId,
    game: products.find((product) => product.id == item.productId),
  }));

  return {
    items,
    removeItem,
  };
};
