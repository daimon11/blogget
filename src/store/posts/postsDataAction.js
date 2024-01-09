import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPostsAsync = createAsyncThunk('postData/fetch',
  async (newPage, { getState }) => {
    const state = getState();
    console.log('getPostsAsync state', state);
    const after = state.postData.after;
    let page = state.postData.page;
    if (newPage) {
      page = newPage;
    }

    console.log('newPage', newPage);

    return axios(`https://www.reddit.com/r/rusAskReddit/${page}.json?limit=8&${after ? `after=${after}` : ''}`)
      .then((response) => {
        console.log('запрос');
        if (response.status === 401) {
          throw new Error('Unauthorized');
        }
        const data = response.data.data;
        console.log(data);
        if (after) {
          console.log('getPostsAsync after');
          return response.data.data;
          // dispatch(postsDataRequestSuccesAfter(data));
        } else {
          console.log('else data');
          return response.data.data;
          // dispatch(postsDataRequestSucces(data));
        }
      })
      .catch((error) => ({ error: error.toString() })
      );
  });
