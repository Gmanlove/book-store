import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const urlEndPoint = 'WkoqMH5x5VNi9YJ88qoE/books/';
const url = baseUrl + urlEndPoint;

const initialState = {
  books: [],
  isLoading: false,
  error: false,
  ifSuccess: false,
};

const changeToObjectData = (data) => {
  const newDataArray = data.map((element) => ({
    id: element[0],
    title: element[1][0].title,
    author: element[1][0].author,
    category: element[1][0].category,
  }));
  return newDataArray;
};

export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  try {
    const { data } = await axios(url);
    const newData = changeToObjectData(Object.entries(data));
    return newData;
  } catch (error) {
    return error;
  }
});

export const postBookToApi = createAsyncThunk(
  'books/postBookToApi',
  async ({ id, title, author }) => {
    try {
      const { data } = await axios.post(url, {
        item_id: id,
        title,
        author,
        category: 'fiction',
      });
      return data;
    } catch (err) {
      return err;
    }
  },
);

export const deleteBookFromApi = createAsyncThunk('books/deleteBookFromApi', async (id) => {
  try {
    const { data } = await axios.delete(url + id);
    return data;
  } catch (err) {
    return err;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksData.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getBooksData.fulfilled, (state, action) => (
        { ...state, isLoading: false, books: action.payload }))
      .addCase(getBooksData.rejected, (state) => (
        { ...state, isLoading: false, error: true }))
      .addCase(postBookToApi.pending, (state) => ({ ...state, ifSuccess: false }))
      .addCase(postBookToApi.fulfilled, (state) => ({ ...state, ifSuccess: true }))
      .addCase(postBookToApi.rejected, (state) => ({ ...state, ifSuccess: false }))
      .addCase(deleteBookFromApi.pending, (state) => ({ ...state, ifSuccess: false }))
      .addCase(deleteBookFromApi.fulfilled, (state) => ({ ...state, ifSuccess: true }))
      .addCase(deleteBookFromApi.rejected, (state) => ({ ...state, ifSuccess: false }));
  },
});

export default booksSlice.reducer;
