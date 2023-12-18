import {
  POSTSDATA_REQUEST,
  POSTSDATA_REQUEST_SUCCESS,
  POSTSDATA_REQUEST_ERROR,
} from './postsDataAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const postDataReducer = (state = initialState, action) => {
  console.log('POSTSDATA action', action);
  console.log('POSTSDATA state', action);
  switch (action.type) {
    case POSTSDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POSTSDATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case POSTSDATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
