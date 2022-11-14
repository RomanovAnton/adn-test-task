import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sort: "По популярности",
    genre: [],
    page: 1,
    hiddenMenuIsActive: false,
  },
  reducers: {
    setSort: (state, actions) => {
      state.sort = actions.payload;
    },
    setPage: (state, actions) => {
      state.page = actions.payload;
    },
    toggleHiddenMenu: (state) => {
      state.hiddenMenuIsActive = !state.hiddenMenuIsActive;
    },
  },
});

export const { setSort, setPage, toggleHiddenMenu } = filterSlice.actions;
export default filterSlice.reducer;
