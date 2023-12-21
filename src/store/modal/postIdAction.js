import axios from 'axios';

export const POSTDATA_REQUEST = 'POSTDATA_REQUEST';
export const POSTIDDATA_REQUEST_SUCCESS = 'POSTDATA_REQUEST_SUCCESS';
export const POSTDATA_REQUEST_ERROR = 'POSTDATA_REQUEST_ERROR';

export const postDataRequest = () => ({
  type: POSTDATA_REQUEST,
});

export const postDataRequestSuccess = (data) => ({
  type: POSTIDDATA_REQUEST_SUCCESS,
  data,
});

export const postDataRequestError = (error) => ({
  type: POSTDATA_REQUEST_ERROR,
  error,
});

export const getPostAsync = (id) => (dispatch) => {
  console.log('getPostAsync start', id);
  dispatch(postDataRequest());
  axios(`https://www.reddit.com/r/rusAskReddit/${id}.json`)
    .then((response) => {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      const post = response.data[0].data.children[0].data;
      const comment = response.data[1].data.children.map(item => item.data);
      if (post) {
        const data = {post, comment};
        dispatch(postDataRequestSuccess(data));
      }
    })
    .catch((error) => {
      dispatch(postDataRequestError(error));
      console.error(error);
    });
};
