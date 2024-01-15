export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCES = 'SEARCH_REQUEST_SUCCES';
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR';

export const searchRequest = ({ token, search }) => ({
  type: 'SEARCH_REQUEST',
  token,
  search,
});

export const searchRequestSucces = ({ children, after }) => ({
  type: 'SEARCH_REQUEST_SUCCES',
  post: children,
  after,
});

export const searchRequestError = ({ error }) => ({
  type: 'SEARCH_REQUEST_ERROR',
  error,
});
