import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { app } from "../../../lib/firebase";

const gamesRef = collection(getFirestore(app), "games");

const initialState = {
  data: [],
  currentPage: 0,
  filter: [],
  loading: true,
  sort: "",
};

const PAGE_SIZE = 9;

export const loadProduct = createAsyncThunk(
  "products/loadProduct",
  async () => {
    const games = await getDocs(gamesRef);
    const data = games.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    pageChanged: (state, action) => {
      return { ...state, currentPage: action.payload };
    },
    filterChanged: (state, action) => {
      return {
        ...state,
        currentPage: 0,
        filter: action.payload,
      };
    },
    //
    filterByPrice: (state, { payload: { a, b } }) => {
      // console.log(a);
      // console.log(b);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    });
  },
});

export const productsReducer = productsSlice.reducer;

export const { pageChanged, filterChanged, filterByPrice } =
  productsSlice.actions;

export const selectAllProducts = (state) => state.products.data;

export const selectProductById = (productId) => (state) =>
  state.products.data.find((product) => product.id == productId);

export const selectProductStatus = (state) =>
  state.products.loading || state.blogs.loading;

export const selectProductsList = (state) => {
  const filteredProducts = state.products.data.filter((product) => {
    if (state.products.filter.length === 0) {
      return true;
    } else {
      return state.products.filter.includes(product.genres);
    }
  });

  const total = filteredProducts.length;
  const totalPage = Math.ceil(total / PAGE_SIZE);

  const productsByPage = filteredProducts.slice(
    state.products.currentPage * PAGE_SIZE,
    (state.products.currentPage + 1) * PAGE_SIZE
  );

  return {
    genres: state.genres.data,
    products: productsByPage,
    currentPage: state.products.currentPage,
    totalPage,
    pageChanged,
    filterChanged,
    //
    filterByPrice,
    //
    loading: state.loading,
  };
};
