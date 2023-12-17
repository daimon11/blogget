import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { thunk } from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import {postDataReducer} from './posts/postDataReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  postData: postDataReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
