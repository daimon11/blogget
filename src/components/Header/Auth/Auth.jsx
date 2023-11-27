import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import useImg from './img/IMG_20210928_183056_0257.jpg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';

import { URL_API } from '../../../api/const';


export const Auth = ({ token }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      header: {
        Authorization: `bearer ${token}`
      },
    })
      .then(response => response.json())
      .then(({ features }) => {
        console.log(features);
        setAuth({ name: 'Дмитрий', img: './img/IMG_20210928_183056_0257.jpg' });
      })
      .catch(() => {
        console.err(err);
        setAuth({})
      });
  }, [token]);

  console.log(auth);

  return (
    <div className={style.container}>
      {auth ? (
        <button className={style.btn}>
          <img
            src={useImg}
            title={auth.name}
            alt={'Аватар пользователя'} />
          {/* <Text As='span'>{auth.name}</Text> */}
        </button>
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
};
