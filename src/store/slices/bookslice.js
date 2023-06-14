import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import booksFile from "../../mock-data/mock_books.json";
import genres from "../../mock-data/genres.json";
import bookToGenre from "../../mock-data/BookToGenre.json";
import * as BookApi from "../../api/book-api";

const newBooksList = booksFile.map((book) => {
  const newGenres = [];
  for (let booktogenre of bookToGenre) {
    // console.log(book);
    // console.log(booktogenre);
    if (+booktogenre.book_id === +book.id) {
      const genre = genres.find((genre) => +genre.id === +booktogenre.genre_id);
      if (genre) newGenres.push(genre);
    }
  }
  return { ...book, Genres: newGenres };
});

export const fetchGenresAsync = createAsyncThunk(
  "auth/fetchGenresAsync",
  async (_, thunkApi) => {
    try {
      const resFetchGenres = await BookApi.getGenres();
      return resFetchGenres.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const initialState = {
  booksList: newBooksList,
  genresList: genres,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchGenresAsync.fulfilled, (state, action) => {
      state.genresList = action.payload;
    }),
});

export default bookSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
