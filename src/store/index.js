import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import { valueCommentReducer } from './commentReducer';
import { thunk } from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { postsDataReducer } from './posts/postsDataReducer';
import { postIdDataReducer } from './modal/postIdReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  commentValue: valueCommentReducer,
  auth: authReducer,
  postData: postsDataReducer,
  postDataId: postIdDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
