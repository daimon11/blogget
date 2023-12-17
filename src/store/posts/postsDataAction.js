import axios from 'axios';

export const POSTSDATA_REQUEST = 'POSTS_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

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