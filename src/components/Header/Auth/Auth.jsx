import style from './Auth.module.css';
import { ReactComponent as AuthIcon } from './img/login.svg';

export const Auth = ({ auth }) => {
  return (
    <buttom className={style.button}>
      {auth ? auth : <AuthIcon className={style.svg}></AuthIcon>
      }
    </buttom>
  )
}