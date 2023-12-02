import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token, delToken} = useContext(tokenContext);

  useEffect(() => {
    if (!token) {
      setAuth({});
      return;
    }

    fetch(`${URL_API}/api/v1/me`, {
      header: {
        Authorization: `bearer ${token}`
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json()
      })
      .then(({ features }) => {
        console.log(features);
        setAuth({ name: 'Дмитрий', img: './img/IMG_20210928_183056_0257.jpg' });
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
        delToken();
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
