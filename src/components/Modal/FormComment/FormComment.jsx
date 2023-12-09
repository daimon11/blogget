import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { commentContext } from '../../../context/commentContext';
import { useContext } from 'react';
import { useStore } from 'react-redux';


export const FormComment = () => {
  const store = useStore();
  const value = store.getState().comment;
  const {setValue} = useContext(commentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit}>
      <Text
        As={'h3'}
        size={14}
        tsize={18}>Дмитрий</Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      />
      <button
        className={style.btn}
        onClick={() => { console.log('есть') }
        }>Отправить</button>
    </form>
  )
};