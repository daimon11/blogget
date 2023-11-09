import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import { formateDate } from '../../../../utils/formateDate.js';

import { Content } from './Content/Content.jsx';
import { Rating } from './Rating/Rating.jsx';
import { ButtonDel } from './ButtonDel/ButtonDel.jsx';

export const Post = ({ postData }) => (
  <li className={style.post}>
    <img className={style.img} src={notphoto} alt={postData.title} />

{/* Я создал компоненты Content, Rating, ButtonDel.
Вложенные структуры тегов терерь стали отдельными облоками, а компонент Post стал более понятным и читаемым. Новые компоненты можно переиспользовать в другом месте */}

    <Content postData={postData} />
    <Rating ups={postData.ups} />
    <ButtonDel />


    <time
      className={style.date}
      dateTime={postData.date}>
      {formateDate(postData.date)}
    </time>

  </li >
);

Post.propTypes = {
  postData: PropTypes.object,
};
