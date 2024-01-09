import { useEffect } from 'react';
import { getPostAsync } from '../store/modal/postIdAction';
import { useDispatch, useSelector } from 'react-redux';

export function useCommentsData(id) {
  const dispatch = useDispatch();

  console.log(useSelector(state => state.comments.data));

  const postData = useSelector(state => state.comments.data.post);
  const commentsData = useSelector(state => state.comments.data.comment);
  const postLoading = useSelector(state => state.comments.loading);
  const postStatus = useSelector(state => state.comments.status);

  useEffect(() => {
    console.log('useEffect useCommentsData');
    dispatch(getPostAsync(id));
  }, [dispatch, id]);

  return [postData, commentsData, postLoading, postStatus];
}