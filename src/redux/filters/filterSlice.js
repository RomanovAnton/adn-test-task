import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sort: "По популярности",
    genre: [],
    page: 1,
  },
  reducers: {
    setSort: (state, actions) => {
      state.sort = actions.payload;
    },
    setPage: (state, actions) => {
      state.page = actions.payload;
    },
  },
});

export const { setSort, setPage } = filterSlice.actions;
export default filterSlice.reducer;
