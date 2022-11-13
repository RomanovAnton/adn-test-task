import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

const fetchCards = createAsyncThunk("cards/fetchCards", async ({ page }) => {
  const pagination = page ? `page=${page}&limit=8` : "";
  const response = await axios.get(`${BASE_URL}?${pagination}`);
  return response.data;
});

export default fetchCards;
