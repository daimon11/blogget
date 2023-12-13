import axios from 'axios';
import { deleteToken } from '../tokenReducer';
import { URL_API } from '../../api/const';


export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSucces = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = (error) => ({
  type: AUTH_LOGOUT,
  error,
});


export const authRequestAsync = () => (dispatch, getState) => {
  console.log('authRequestAsync', getState());


  const token = getState().token.token;

  if (!token) {
    return;
  }

  dispatch(authRequest());
  axios(`${URL_API}/api/v1/me`, {
    header: {
      Authorization: `bearer ${token}`
    },
  })
    .then(({ data: { features } }) => {
      console.log('features', features);
      const img = './img/IMG_20210928_183056_0257.jpg';
      const data = { name: 'Дмитрий', img };
      dispatch(authRequestSucces(data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(deleteToken());
      dispatch(authRequestError(err.message));
    });
};
