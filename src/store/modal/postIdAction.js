import axios from 'axios';
// import { commentsSlice } from './commentsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPostAsync2 = (id) => (dispatch) => {
  console.log('getPostAsync start', id);

};

export const getPostAsync = createAsyncThunk(
  'comments/fetch', (id) => (axios(`https://www.reddit.com/r/rusAskReddit/${id}.json`)
    .then((response) => {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      const post = response.data[0].data.children[0].data;
      const comment = response.data[1].data.children.map(item => item.data);
      console.log(post, comment);
      if (post) {
        const data = { post, comment };
        console.log('getPostAsync data', data);
        return data;
      }
    })
    .catch((error) => ({ error: error.toString() })
    )
  ));
