export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCES = 'SEARCH_REQUEST_SUCCES';
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR';

export const searchRequest = ({ search }) => ({
  type: 'SEARCH_REQUEST',
  search,
});

export const searchRequestSucces = ({ children, after }) => ({
  type: 'SEARCH_REQUEST_SUCCES',
  posts: children,
  after,
});

export const searchRequestError = ({ error }) => ({
  type: 'SEARCH_REQUEST_ERROR',
  error,
});
