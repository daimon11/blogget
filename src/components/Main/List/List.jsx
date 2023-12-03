import { useContext } from 'react';
import style from './List.module.css';
import Post from './Post';
import { postsContext } from '../../../context/postsContext';

export const List = () => {
  const { posts } = useContext(postsContext);
  console.log('List', posts);

  return (
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
