import {
  POSTSDATA_REQUEST,
  POSTSDATA_REQUEST_SUCCESS,
  POSTSDATA_REQUEST_ERROR,
  POSTSDATA_REQUEST_SUCCESS_AFTER,
} from './postsDataAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
};

export const postsDataReducer = (state = initialState, action) => {
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
        after: action.after,
        isLast: !action.after,
      };
    case POSTSDATA_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
        error: '',
        after: action.after,
        isLast: !action.after,
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
