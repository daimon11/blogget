import { createSlice } from '@reduxjs/toolkit';
import { getPostsAsync } from './postsDataAction';

const initialState = {
  // loading: false,
  posts: [],
  status: 'idle',
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const getPostsSlice = createSlice({
  name: 'postData',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    resetPosts(state) {
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('action.payload', action.payload);
        if (state.after) {
          state.posts = [...state.posts, ...action.payload.children];
        } else {
          state.posts = action.payload.children;
        }
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetPosts } = getPostsSlice.actions;

export default getPostsSlice.reducer;
