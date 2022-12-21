import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getFirestore, getDocs, query } from "firebase/firestore";
import { app } from "../../../lib/firebase";

const initialState = {
  data: [],
  currentPage: 0,
  filter: [],
  loading: true,
};

const PAGE_SIZE = 9;

export const loadProduct = createAsyncThunk(
  "products/loadProduct",
  async () => {
    const q = query(collection(getFirestore(app), "games"));

    const promise = getDocs(q)
      .then((snapshot) => {
        const data = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        return data;
      })
      .catch((err) => {
        console.error(err);
      });

    const data = await promise;

    return data;
  }
);

export const loadProductById = createAsyncThunk("products/byId", async (id) => {
  const response = await fetch("https://tfruitapi.vercel.app/games" + id);
  const data = await response.json();

  return data;
});

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

export const { pageChanged, filterChanged } = productsSlice.actions;

export const selectAllProducts = (state) => state.products.data;

export const selectProductById = (productId) => (state) =>
  state.products.data.find((product) => product.id == productId);

export const selectProductStatus = (state) => state.products.loading;

// export const selectProductStatus = (state) =>
//   state.products.loading || state.categories.loading;

export const selectProductsList = (state) => {
  const filteredProducts = state.products.data.filter((product) => {
    if (state.products.filter.length === 0) return true;
    else return state.products.filter.includes(product.genres);
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
    loading: state.loading,
  };
};
