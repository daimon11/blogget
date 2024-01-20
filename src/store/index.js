
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import { valueCommentReducer } from './comment/commentReducer';

import { authReducer } from './auth/authReducer';
import postsDataReducer from './posts/postsDataSlice';
import commentsReducer from './modal/commentsSlice';
import { searchReducer } from './search/searchReducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

console.log('postsDataReducer', postsDataReducer);
console.log('postIdDataReducer', typeof postIdDataReducer);

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    commentValue: valueCommentReducer,
    auth: authReducer,
    postData: postsDataReducer,
    comments: commentsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
