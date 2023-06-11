import { createSlice } from "@reduxjs/toolkit";
import booksFile from "../../mock-data/mock_books.json";
import genres from "../../mock-data/genres.json";
import bookToGenre from "../../mock-data/BookToGenre.json";
// console.log(booksFile);
// console.log(genres);
// console.log(bookToGenre);

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

const initialState = {
  booksList: newBooksList,
  genresList: genres,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export default bookSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
