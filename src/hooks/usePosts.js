import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsAsync } from '../store/posts/postsDataAction';

export function usePosts() {
  const dispatch = useDispatch();

  const postData = useSelector(state => state.postData.data);
  const postLoading = useSelector(state => state.postData.loading);

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

  return [postData, postLoading];
}
