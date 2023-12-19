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

export const getPostsAsync = () => (dispatch) => {
  dispatch(postsDataRequest());
  axios(`https://www.reddit.com/r/rusAskReddit/best.json`)
    .then((response) => {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      const data = response.data.data.children;
      if (data) {
        dispatch(postsDataRequestSucces(data))
      }
    })
    .catch((error) => {
      dispatch(postsDataRequestError(error));
      console.error(error);
    });
};
