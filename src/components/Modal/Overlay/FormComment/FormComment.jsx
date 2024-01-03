import style from './FormComment.module.css';
import { Text } from '../../../../UI/Text';
import { useDispatch, useSelector} from 'react-redux';
import { updateComment} from '../../../../store/comment/commentReducer';

export const FormComment = () => {
  const value = useSelector(state => state.commentValue.comment);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
    console.log(e.target.value);
  };

  const handleClick = e => {
    console.log(e.target.value);
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
        onClick={handleClick}>Отправить</button>
    </form>
  );
};
