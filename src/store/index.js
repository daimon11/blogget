
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import { valueCommentReducer } from './comment/commentReducer';

import { authReducer } from './auth/authReducer';
import { postsDataReducer } from './posts/postsDataReducer';
import commentsReducer from './modal/commentsSlice';
import { configureStore } from '@reduxjs/toolkit';


console.log('postsDataReducer', postsDataReducer);
console.log('postIdDataReducer', typeof postIdDataReducer);

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    commentValue: valueCommentReducer,
    auth: authReducer,
    postData: postsDataReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
