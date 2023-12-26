import { useEffect, useRef } from 'react';
import style from './List.module.css';
import Post from './Post';
// import { PostsPreloader } from './PostsPreloader/PostsPreloader';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../../store/posts/postsDataAction';
import { Outlet, useParams } from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.postData.data);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();
  console.log(page);

  useEffect(() => {
    dispatch(getPostsAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(getPostsAsync());
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);

    // возможно здесь нужен return

  }, [endList.current]);

  return (
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
