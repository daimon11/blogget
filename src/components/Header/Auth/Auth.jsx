import { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import useImg from './img/IMG_20210928_183056_0257.jpg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';

import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';


export const Auth = () => {
  const { delToken } = useContext(tokenContext);
  const {auth, clearAuth} = useContext(authContext);

  const logout = () => {
    delToken();
    clearAuth({});
  };

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
            onClick={logout}>Выйти</button>
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
