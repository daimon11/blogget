import { useEffect, useState } from 'react';
import { usePostsContext } from '../context/postsContext';

function BestPostsComponent() {
  const [ posts, setPosts ] = useState({});

  useEffect(() => {
    fetch(`https://www.reddit.com/best.json`)
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data.children);
        setPosts(data.data.children);
        console.log('posts', posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <div className={'lexa'}>
    </div>
  );
}

export default BestPostsComponent;
