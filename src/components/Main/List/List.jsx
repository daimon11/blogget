import { usePosts } from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
import { RingLoader } from 'react-spinners';

export const List = () => {
  const [ posts, loading ] = usePosts();

  return loading ? <RingLoader color='red' css={{display: 'block'}} size={300}/> : (
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
