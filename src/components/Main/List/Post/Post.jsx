import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import { formateDate } from '../../../../utils/formateDate.js';

import { Content } from './Content/Content.jsx';
import { Rating } from './Rating/Rating.jsx';



export const Post = ({ postData }) => {
  const { title, ups, date, author } = postData;
  console.log(Content);
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title}></img>



      <Content postData={postData} />
      <Rating postData={ups} />



      <time className={style.date} dateTime={date}>{formateDate(date)}</time>

    </li >
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
