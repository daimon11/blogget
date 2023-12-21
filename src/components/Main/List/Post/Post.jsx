import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import { formateDate } from '../../../../utils/formateDate.js';
import { defaultPost } from './defaultPostValue.js';

import { Content } from './Content/Content.jsx';
import { Rating } from './Rating/Rating.jsx';
import { ReactComponent as ButtonDel } from './img/delete.svg';

const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = notphoto;
};

export const Post = ({ postData }) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    selftext,
    id,
  } = postData;

  const markdown = selftext ? selftext : defaultPost;

  return (
    <li className={style.post} >
      {/* img перписать на компонент */}
      <img
        className={style.img}
        src={thumbnail.length > 10 ? thumbnail : notphoto}
        alt={title}
        onError={handleImageError} />

      <Content author={author} title={title} markdown={markdown} id={id}/>
      <Rating ups={ups} />
      <button className={style.delete}>
        <ButtonDel />
      </button>

      {/* time перписать на компонент */}
      <time
        className={style.date}
        dateTime={new Date().toISOString()}>
        {formateDate(new Date())}
      </time>

    </li >
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
