import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsAsync } from '../store/posts/postsDataAction';

export function usePosts(limit = 20) {
  const dispatch = useDispatch();

  const postData = useSelector(state => state.postData.data);
  const postLoading = useSelector(state => state.postData.loading);
  console.log('usePosts postData', postData);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(`https://www.reddit.com/r/rusAskReddit/best.json?limit=${limit}`);
    //     if (response.status === 401) {
    //       throw new Error('Unauthorized');
    //     }
    //     const data = await response.json();
    //     if (data.data.children) {
    //       setPosts(data.data.children);
    //     } else {
    //       setPosts('ничего нету');
    //     }
    //   } catch (err) {
    //     setPosts('ошибка');
    //     console.error(err);
    //   }
    // };

    // fetchData();
    dispatch(getPostsAsync());
  }, []);

  return [postData, postLoading];
}
