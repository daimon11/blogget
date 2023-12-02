import { useContext } from 'react';
import style from './List.module.css';
import Post from './Post';
import { postsContext } from '../../../context/postsContext';

export const List = () => {
  const { posts } = useContext(postsContext);
  console.log('List', posts);

  // const postData = [
  //   {
  //     thumbnail: '',
  //     title: 'Title1',
  //     author: 'Nickname1',
  //     ups: 24,
  //     date: '2022-02-24T09:45:00.000Z',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title2',
  //     author: 'Nickname2',
  //     ups: 24,
  //     date: '2022-02-24T19:35:00.000Z',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title3',
  //     author: 'Nickname3',
  //     ups: 24,
  //     date: '2022-01-24T10:05:00.000Z',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title4',
  //     author: 'Nickname4',
  //     ups: 24,
  //     date: '2022-05-24T08:45:00.000Z',
  //   },
  // ];

  return (
    <ul className={style.list}>
      {
        // [<Post key='233141' postData={postData[0]}></Post>,
        // <Post key='2' postData={postData[1]}></Post>,
        // <Post key='3' postData={postData[2]}></Post>,
        // <Post key='4' postData={postData[3]}></Post>]
        posts.map(item => <Post 
          key={item.data.id} 
          postData={item.data}></Post>
        )
      }
    </ul>

  );
};
