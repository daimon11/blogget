import { useEffect } from 'react';
import { getPostAsync } from '../store/modal/postIdAction';
import { useDispatch, useSelector } from 'react-redux';

export function useCommentsData(id) {
  const dispatch = useDispatch();

  const postData = useSelector(state => state.postDataId.data.post);
  const commentsData = useSelector(state => state.postDataId.data.comment);
  const postLoading = useSelector(state => state.postDataId.loading);
  const postStatus = useSelector(state => state.postDataId.status);

  useEffect(() => {
    console.log('useEffect useCommentsData');
    dispatch(getPostAsync(id));
  }, [dispatch, id]);

  return [ postData, commentsData, postLoading, postStatus ];
}
