import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getFirestore, getDocs, query } from "firebase/firestore";
import { app } from "../../../lib/firebase";

const initialState = {
  data: [],
  loading: true,
};

export const loadUsers = createAsyncThunk("users", async (args, thunkApi) => {
  const q = query(collection(getFirestore(app), "users"));

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
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsers.fulfilled, (state, action) => {
      return {
        data: action.payload,
        loading: false,
      };
    });
  },
});

export const usersReducer = usersSlice.reducer;
export const selectAllUser = (state) => state.users.data;
export const selectUserById = (id) => (state) =>
  state.users.data.find((user) => user.id == id);
