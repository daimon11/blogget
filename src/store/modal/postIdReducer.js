import {
  POSTDATA_REQUEST,
  POSTIDDATA_REQUEST_SUCCESS,
  POSTDATA_REQUEST_ERROR,
} from './postIdAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
  status: 'loading',
};

export const postIdDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        status: 'loading',
      };
    case POSTIDDATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        status: 'loaded',
      };
    case POSTDATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
      };

    default:
      return state;
  }
};
