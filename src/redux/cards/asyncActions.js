import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async ({ pageValue, searchValue }) => {

    console.log(searchValue)
    const search = searchValue ? `search=${searchValue}` : "";
    const page = pageValue ? `page=${pageValue}&limit=8` : "";
    const response = await axios.get(`${BASE_URL}?${page}&${search}`);
    return response.data;
  }
);

export default fetchCards;
