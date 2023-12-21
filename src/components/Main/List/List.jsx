import { usePosts } from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
import { RingLoader } from 'react-spinners';

export const List = () => {
  const [posts, loading] = usePosts();

  return loading ? (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <RingLoader color='red' size={300} />
    </div>
  ) : (
    <ul className={style.list}>
      {posts.map(item => (
        <Post key={item.data.id} postData={item.data} />
      ))}
    </ul>
  );
      };