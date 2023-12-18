// import { useContext } from 'react';
import { usePosts } from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
// import { postsContext } from '../../../context/postsContext';

export const List = () => {
  const [ posts, loading ] = usePosts();
  console.log('List posts', posts);
  console.log('List loading', loading);

  return loading ? 'загрузка...' : (
    <ul className={style.list}>
      {
        posts.map(item => <Post
          key={item.data.id}
          postData={item.data}></Post>
        )
      }
    </ul>

  );
};
