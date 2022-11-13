import { configureStore } from "@reduxjs/toolkit";
import filter from "./filters/filterSlice";
import cards from "./cards/cardsSlice";

const store = configureStore({
  reducer: {
    filter,
    cards,
  },
});

export default store;
