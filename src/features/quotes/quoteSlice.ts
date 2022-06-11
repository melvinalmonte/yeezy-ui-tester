import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../services";

export const quoteGenerator = createAsyncThunk("kanye/quote", async () => {
  const { data } = await Api.quoteGenerator();
  return data?.ye_quote;
});

const initialState = {
  quote: "",
  status: "idle",
  error: {},
};

const quoteSlice = createSlice({
  name: "kanye-says",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(quoteGenerator.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(quoteGenerator.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.quote = action.payload;
    });
    builder.addCase(quoteGenerator.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error;
    });
  },
});

export default quoteSlice.reducer;
