import { useEffect, useRef } from 'react';
import style from './List.module.css';
import Post from './Post';
// import { PostsPreloader } from './PostsPreloader/PostsPreloader';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../../store/posts/postsDataAction';
import { resetPosts } from '../../../store/posts/postsDataSlice';
import { Outlet, useParams } from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.postData.posts);
  console.log('posts', posts);
  // const loading = useSelector(state => state.postData.loading);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();
  console.log('List', page);

  useEffect(() => {
    if (page) {
      dispatch(resetPosts());
    }
  }, [page, dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(getPostsAsync());
      }
    }, {
      rootMargin: '100px',
    });
    if (endList.current) {
      observer.observe(endList.current);
    }

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    // loading ? <PostsPreloader /> :
    <>
      <ul className={style.list}>
        {posts.map(item => (
          <Post key={item.data.id} postData={item.data} />
        ))}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
