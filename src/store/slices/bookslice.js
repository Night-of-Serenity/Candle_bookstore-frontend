import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import booksFile from "../../mock-data/mock_books.json";
// import genres from "../../mock-data/genres.json";
// import bookToGenre from "../../mock-data/BookToGenre.json";
import * as BookApi from "../../api/book-api";

// const newBooksList = booksFile.map((book) => {
//   const newGenres = [];
//   for (let booktogenre of bookToGenre) {
//     // console.log(book);
//     // console.log(booktogenre);
//     if (+booktogenre.book_id === +book.id) {
//       const genre = genres.find((genre) => +genre.id === +booktogenre.genre_id);
//       if (genre) newGenres.push(genre);
//     }
//   }
//   return { ...book, Genres: newGenres };
// });

export const fetchGenresAsync = createAsyncThunk(
  "book/fetchGenresAsync",
  async (_, thunkApi) => {
    try {
      const resFetchGenres = await BookApi.getGenres();
      // console.log("res axios genres", resFetchGenres);
      return resFetchGenres.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchAllBookAsync = createAsyncThunk(
  "book/fetchAllBookAsync",
  async (_, thunkApi) => {
    try {
      const res = await BookApi.getAllBooks();
      // console.log("res axios allbooks", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchBestsellerAsync = createAsyncThunk(
  "book/fetchBestsellerAsync",
  async (_, thunkApi) => {
    try {
      const res = await BookApi.getBestseller();
      // console.log("res axios bestseller", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchPromotionsAsync = createAsyncThunk(
  "book/fetchPromotionsAsync",
  async (_, thunkApi) => {
    try {
      const res = await BookApi.getDiscountBooks();
      // console.log("res axios discount", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchBooksByGenreIdAsync = createAsyncThunk(
  "book/fetchBooksByGenreIdAsync",
  async (genreId, thunkApi) => {
    try {
      const res = await BookApi.fetchBooksByGenre(genreId);
      // console.log("res axios get books by genre id", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const initialState = {
  booksList: [],
  genresList: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchGenresAsync.fulfilled, (state, action) => {
        // console.log("add case genre", action.payload);
        state.genresList = action.payload;
      })
      .addCase(fetchAllBookAsync.fulfilled, (state, action) => {
        // console.log("add case allbook", action.payload);
        state.booksList = action.payload;
      })
      .addCase(fetchBestsellerAsync.fulfilled, (state, action) => {
        // console.log("add case bestseller", action.payload);
        state.booksList = action.payload;
      })
      .addCase(fetchPromotionsAsync.fulfilled, (state, action) => {
        // console.log("add case promotions", action.payload);
        state.booksList = action.payload;
      })
      .addCase(fetchBooksByGenreIdAsync.fulfilled, (state, action) => {
        // console.log("add case book gerne id", action.payload);
        state.booksList = action.payload;
      }),
});

export default bookSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
