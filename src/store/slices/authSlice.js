import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/auth-api";

const initialState = {
  isAuthUser: false,
  isAdmin: false,
  error: null,
  user: null,
  actionSucceed: false,
};

export const registerAsync = createAsyncThunk(
  "auth/register",
  async (input, thunkApi) => {
    try {
      const res = await AuthApi.register(input);

      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (input, thunkApi) => {
    try {
      const res = await AuthApi.login(input);
      return res;
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
    builder
      .addCase(registerAsync.fulfilled, (state) => {
        state.actionSucceed = true;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        console.log(action.payload);
        state.err = { registerError: true };
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        if (action.payload.isAdmin) {
          state.isAdmin = true;
        }
        state.user = null;
      }),
});

export default authSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
