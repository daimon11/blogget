import { useEffect, useRef } from 'react';
// import { usePosts } from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
// import { PostsPreloader } from './PostsPreloader/PostsPreloader';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../../store/posts/postsDataAction';

// остановился на 13й минуте

export const List = () => {
  const posts = useSelector(state => state.postData.data);
  console.log(posts);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!posts.length) return;
    console.log('endList11111', endList);
    console.log('posts', posts);
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('вижу вижу');
        dispatch(getPostsAsync());
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);
  }, [endList.current]);

  return (
    <ul className={style.list}>
      {posts.map(item => (
        <Post key={item.data.id} postData={item.data} />
      ))}
      <li ref={endList} className={style.end} />
    </ul>
  );
};
