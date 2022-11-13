import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export default fetchCards;
