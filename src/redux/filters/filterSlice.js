import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sort: "По популярности",
    genre: [],
    pageValue: 1,
    searchValue: "",
    hiddenMenuIsActive: false,
  },
  reducers: {
    setSort: (state, actions) => {
      state.sort = actions.payload;
    },
    setPage: (state, actions) => {
      state.pageValue = actions.payload;
    },
    setSearchValue: (state, actions) => {
      state.searchValue = actions.payload;
    },
    toggleHiddenMenu: (state) => {
      state.hiddenMenuIsActive = !state.hiddenMenuIsActive;
    },
  },
});

export const { setSort, setPage, toggleHiddenMenu, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;
