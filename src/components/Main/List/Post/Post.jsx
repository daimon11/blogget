import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import { formateDate } from '../../../../utils/formateDate.js';

import { Content } from './Content/Content.jsx';
import { Rating } from './Rating/Rating.jsx';
import { ReactComponent as ButtonDel } from './img/delete.svg';

const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = notphoto;
};

const handleListClick = (e) => {
  console.log(e.target);
  // Дополнительные действия при клике на пост
};

export const Post = ({ postData }) => (
  <li className={style.post} >
    <img
      className={style.img}
      src={postData.thumbnail.length > 10 ? postData.thumbnail : notphoto}
      alt={postData.title}
      onError={handleImageError} />

    <Content postData={postData} />
    <Rating ups={postData.ups} />
    <button className={style.delete} onClick={handleListClick}>
      <ButtonDel />
    </button>


    <time
      className={style.date}
      dateTime={new Date().toISOString()}>
      {formateDate(new Date())}
    </time>

  </li >
);

Post.propTypes = {
  postData: PropTypes.object,
};
