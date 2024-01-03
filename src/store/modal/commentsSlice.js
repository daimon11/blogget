import { createSlice } from '@reduxjs/toolkit';
import { getPostAsync } from './postIdAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
  status: 'loading',
  max: 'dima',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.status = 'loading';
      })
      .addCase(getPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
        state.status = 'loaded';
      })
      .addCase(getPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.status = 'error';
      });
  },
});


export default commentsSlice.reducer;
