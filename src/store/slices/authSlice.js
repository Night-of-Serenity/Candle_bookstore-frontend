import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/auth-api";

const initialState = {
  isAuthenUser: false,
  isAdmin: false,
  error: null,
  user: null,
};

export const registerAsync = createAsyncThunk(
  "auth/register",
  async (input, thunkApi) => {
    try {
      const res = await AuthApi.register(input);
      console.log(res.data);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(registerAsync.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    }),
});

export default authSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
