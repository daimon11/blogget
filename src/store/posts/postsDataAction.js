import axios from 'axios';

export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';

export const postsDataRequest = () => ({
  type: POSTSDATA_REQUEST,
});

export const postsDataRequestSucces = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS,
  data,
});

export const postsDataRequestError = (error) => ({
  type: POSTSDATA_REQUEST_ERROR,
  error,
});

export const getPosts = (limit = 20) => (dispatch) => {
  dispatch(postsDataRequest());
  axios(`https://www.reddit.com/r/rusAskReddit/best.json?limit=${limit}`)
    .then(function (response) {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      const data = response.json();
      if (data.data.children) {
        // setPosts(data.data.children);
        dispatch(postsDataRequestSucces(data.data.children))
      }
    })
    .catch(function (error) {
      dispatch(postsDataRequestError(error));
      console.error(error);
    })
};