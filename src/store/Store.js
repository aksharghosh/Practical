import { createSlice, configureStore } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "apiSlice",
  initialState: { data: [] },
  reducers: {
    setApiData(state, action) {
      state.data = action.payload;
    },
  },
});

const Store = configureStore({
  reducer: {
    apiSliceReducer: apiSlice.reducer,
  },
});

export default Store;
export const apiSliceActions = apiSlice.actions;
