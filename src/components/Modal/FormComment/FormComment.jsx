import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';

export const FormComment = () => (
  <form className={style.form} onSubmit={(e) => e.preventDefault}>
    <Text 
    As={'h3'} 
    size={14} 
    tsize={18}>Дмитрий</Text>
    <textarea className={style.textarea}></textarea>
    <button className={style.btn} onClick={() => {console.log('есть')}}>Отправить</button>
  </form>
);