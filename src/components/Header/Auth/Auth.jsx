import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import useImg from './img/IMG_20210928_183056_0257.jpg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';

import { URL_API } from '../../../api/const';


export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});

  console.log('token', token);
  console.log('auth', auth);

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
          delToken();
          setAuth({});
          throw new Error('Unauthorized');
        }
        console.log('response.status', response.status);
        return response.json()})
      .then(({ features }) => {
        console.log(features);
        setAuth({ name: 'Дмитрий', img: './img/IMG_20210928_183056_0257.jpg' });
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
      });
  }, [token]);


  const handleLogout = () => {
    delToken();
    setAuth({});
  };
  console.log(auth);

  return (
    <div className={style.container}>
      {auth.name ? (
        <div>
          <button className={style.btn}>
            <img
              src={useImg}
              title={auth.name}
              alt={'Аватар пользователя'} />
          </button>
          <button
            className={style.logout}
            onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <Text As='a' href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
