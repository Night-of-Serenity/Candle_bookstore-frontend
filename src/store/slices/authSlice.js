import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/auth-api";
import { removeAccessToken, setAccessToken } from "../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  error: null,
  user: null,
  // actionSucceed: false,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    try {
      const res = await AuthApi.register(input);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await AuthApi.fetchMe();
      // console.log(resFetchMe);
      return resFetchMe.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (input, thunkApi) => {
    try {
      const res = await AuthApi.login(input);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await AuthApi.fetchMe();
      // console.log(resFetchMe);
      return resFetchMe.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchMeAsync = createAsyncThunk(
  "auth/fetchMeAsync",
  async (_, thunkApi) => {
    try {
      const resFetchMe = await AuthApi.fetchMe();
      return resFetchMe.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      removeAccessToken();
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
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        if (action.payload.isAdmin) {
          state.isAdmin = action.payload.isAdmin;
        }
        state.user = action.payload;
        // console.log(action.payload);
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        if (action.payload.isAdmin) {
          state.isAdmin = action.payload.isAdmin;
        }
        state.user = action.payload;
        // console.log(action.payload);
      })
      .addCase(fetchMeAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        if (action.payload.isAdmin) {
          state.isAdmin = action.payload.isAdmin;
        }
        state.user = action.payload;
        // console.log(action.payload);
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.isAdmin = false;
        state.user = null;
        // console.log(action.payload);
      }),
});

export default authSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
