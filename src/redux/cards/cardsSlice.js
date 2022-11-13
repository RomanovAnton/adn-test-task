import { createSlice } from "@reduxjs/toolkit";
import fetchCards from "./asyncActions";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    status: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.status = "resolved";
      state.error = "";
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.error = "ServerError";
      state.status = "rejected";
    });
  },
});

export const {} = cardsSlice.actions;
export default cardsSlice.reducer;
