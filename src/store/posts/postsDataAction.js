import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
// export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
// export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';
// export const POSTSDATA_REQUEST_SUCCESS_AFTER =
//   'POSTSDATA_REQUEST_SUCCESS_AFTER';
// export const CHANGE_PAGE = 'CHANGE_PAGE';

// export const postsDataRequest = () => ({
//   type: POSTSDATA_REQUEST,
// });

// export const postsDataRequestSucces = (data) => ({
//   type: POSTSDATA_REQUEST_SUCCESS,
//   data: data.children,
//   after: data.after,
// });
// export const postsDataRequestSuccesAfter = (data) => ({
//   type: POSTSDATA_REQUEST_SUCCESS_AFTER,
//   data: data.children,
//   after: data.after,
// });

// export const postsDataRequestError = (error) => ({
//   type: POSTSDATA_REQUEST_ERROR,
//   error,
// });

// export const changePage = (page) => ({
//   type: CHANGE_PAGE,
//   page,
// });

export const getPostsAsync = createAsyncThunk('postData/fetch', (newPage) => {
  let page = state.postData.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(newPage));

    
  }
  const after = useSelector(state => state.postData.after);
  const loading = useSelector(state => state.postData.loading);
  const isLast = useSelector(state => state.postData.isLast);

  if (loading || isLast) return;

  dispatch(postsDataRequest());
  axios(`https://www.reddit.com/r/rusAskReddit/${page}.json?limit=8&${after ? `after=${after}` : ''}`)
    .then((response) => {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      const data = response.data.data;
      console.log(data);
      if (after) {
        console.log('getPostsAsync after');
        dispatch(postsDataRequestSuccesAfter(data));
      } else {
        console.log('else data');
        dispatch(postsDataRequestSucces(data));
      }
    })
    .catch((error) => {
      dispatch(postsDataRequestError(error));
      console.error(error);
    });
});
