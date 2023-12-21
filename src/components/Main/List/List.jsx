import { usePosts } from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
import { PostsPreloader } from './PostsPreloader/PostsPreloader';

export const List = () => {
  const [posts, loading] = usePosts();

  return loading ? (
    <PostsPreloader/>
  ) : (
    <ul className={style.list}>
      {posts.map(item => (
        <Post key={item.data.id} postData={item.data} />
      ))}
    </ul>
  );
      };