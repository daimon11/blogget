// import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import useImg from './img/IMG_20210928_183056_0257.jpg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { useAuth } from '../../../hooks/useAuth';
import { AuthLoader } from './AuthLoader/AuthLoader';


export const Auth = () => {
  const dispatch = useDispatch();
  const [auth, loading, clearAuth] = useAuth();


  console.log('auth', auth);
  const logout = () => {
    dispatch(deleteToken());
    clearAuth({});
  };

  return (
    <div className={style.container}>
      {loading ? (<AuthLoader/>) :
      auth.name ? (
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
