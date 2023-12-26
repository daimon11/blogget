import axios from 'axios';

export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';
export const POSTSDATA_REQUEST_SUCCESS_AFTER =
  'POSTSDATA_REQUEST_SUCCESS_AFTER';

export const postsDataRequest = () => ({
  type: POSTSDATA_REQUEST,
});

export const postsDataRequestSucces = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS,
  data: data.children,
  after: data.after,
});
export const postsDataRequestSuccesAfter = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS_AFTER,
  data: data.children,
  after: data.after,
});

export const postsDataRequestError = (error) => ({
  type: POSTSDATA_REQUEST_ERROR,
  error,
});

export const getPostsAsync = () => (dispatch, getState) => {
  console.log('getPostsAsync', getState());
  const after = getState().postData.after;
  const loading = getState().postData.loading;
  const isLast = getState().postData.isLast;

  if (loading || isLast) return;

  dispatch(postsDataRequest());
  axios(`https://www.reddit.com/r/rusAskReddit/best.json?limit=8&${after ? `after=${after}` : ''}`)
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
      // if (data) {
      //   console.log('getPostsAsync after', data);
      //   // dispatch(postsDataRequestSucces(data));
      // }
    })
    .catch((error) => {
      dispatch(postsDataRequestError(error));
      console.error(error);
    });
};
