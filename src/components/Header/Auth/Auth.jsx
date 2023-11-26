import PropTypes from 'prop-types';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';

export const Auth = ({ token }) => (
  <div className={style.container}>
    {token ? token : (
      <Text As='a' href={urlAuth}>
        <LoginIcon className={style.svg} />
      </Text>
    )}
  </div>
);

Auth.PropTypes = {
  token: PropTypes.string,
};
