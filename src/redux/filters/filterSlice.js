import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sort: "По популярности",
    genre: [],
  },
  reducers: {
    setSort: (state, actions) => {
      state.sort = actions.payload;
    },
  },
});

export const { setSort } = filterSlice.actions;
export default filterSlice.reducer;
