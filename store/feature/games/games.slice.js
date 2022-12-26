import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getFirestore, getDocs, query } from "firebase/firestore";
import { app } from "../../../lib/firebase";

const initialState = {
  data: [],
  currentPage: 0,
  filter: [],
  loading: true,
  sort: "",
  default: [],
  dataSearch: [],
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
    searchByName: (state, action) => {
      const filteredgames = state.data.filter((game) =>
        game.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        currentPage: 0,
        data: action.payload.length > 0 ? filteredgames : [...state.default],
      };
    },
    filterByPrice: (state, action) => {
      const filteredPrice = state.data.filter(
        (game) =>
          game.price >= action.payload[0] && game.price <= action.payload[1]
      );
      const array = [...state.default];
      array.sort((a, b) => a.price - b.price);
      return {
        ...state,
        currentPage: 0,
        data:
          action.payload[0] <= array[0].price &&
          action.payload[1] >= array[array.length - 1].price
            ? [...state.default]
            : filteredPrice,
      };
    },
    sortAscName: (state, action) => {
      const ascName = state.data.sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );

      return void {
        ...state,
        currentPage: 0,
        data: ascName,
      };
    },
    sortDesName: (state, action) => {
      const desName = state.data.sort((a, b) =>
        a.name !== b.name ? (a.name > b.name ? -1 : 1) : 0
      );

      return void {
        ...state,
        currentPage: 0,
        data: desName,
      };
    },
    sortAscNumber: (state, action) => {
      const ascNumber = state.data.sort((a, b) => a.price - b.price);

      return void {
        ...state,
        currentPage: 0,
        data: ascNumber,
      };
    },
    sortDesNumber: (state, action) => {
      const desNumber = state.data.sort((a, b) => b.price - a.price);

      return void {
        ...state,
        currentPage: 0,
        data: desNumber,
      };
    },
    clearFilter: (state, action) => {
      return {
        ...state,
        currentPage: 0,
        filter: [],
        data: [...state.default],
      };
    },
    searchPrHeader: (state, action) => {
      const filteredgames = state.dataSearch.filter((game) =>
        game.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        dataSearch:
          action.payload.length > 0
            ? filteredgames.slice(0, 4)
            : [...state.default],
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        default: action.payload,
        dataSearch: action.payload,
        loading: false,
      };
    });
  },
});

export const productsReducer = productsSlice.reducer;

export const {
  pageChanged,
  filterChanged,
  filterByPrice,
  searchByName,
  sortAscName,
  sortDesName,
  sortAscNumber,
  sortDesNumber,
  clearFilter,
  //
  searchPrHeader,
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.default;

export const selectProductById = (productId) => (state) =>
  state.products.default.find((product) => product.id == productId);

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
    searchByName,
    sortAscName,
    sortDesName,
    sortAscNumber,
    sortDesNumber,
    clearFilter,
    //
    loading: state.loading,
  };
};

//
export const selectPrSearch = (state) => {
  return {
    pr: state.products.dataSearch,
    searchPrHeader,
  };
};
