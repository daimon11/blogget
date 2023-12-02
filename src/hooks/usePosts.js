import { useEffect, useState } from 'react';

export function usePosts() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.reddit.com/best.json`);
        if (response.status === 401) {
          throw new Error('Unauthorized');
        }
        const data = await response.json();
        if (data.data.children) {
          setPosts(data.data.children);
        } else {
          setPosts('ничего нету');
        }
      } catch (err) {
        setPosts('ошибка');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return [ posts, setPosts ];
}
