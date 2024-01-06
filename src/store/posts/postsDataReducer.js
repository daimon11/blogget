import { createSlice } from '@reduxjs/toolkit';
import { getPostsAsync } from './postsDataAction';

// import {
//   POSTSDATA_REQUEST,
//   POSTSDATA_REQUEST_SUCCESS,
//   POSTSDATA_REQUEST_ERROR,
//   POSTSDATA_REQUEST_SUCCESS_AFTER,
//   CHANGE_PAGE,
// } from './postsDataAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const getPostsSlice = createSlice({
  name: 'postData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.data;
        state.error = '';
        state.after = action.after;
        state.isLast = !action.after;
      })
      .addCase(getPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.data];
        state.error = '';
        state.after = action.after;
        state.isLast = !action.after;
      });
  },
});

export default getPostsSlice.reducer;
