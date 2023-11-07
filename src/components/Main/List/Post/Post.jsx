import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;
  console.log(style);
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto}></img>

      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href='#post'>
            {title}
          </a>
        </h2>
        <a className={style.rating}>
        <div></div>
          <button className={style.up} aria-label='Увеличить рейтинг'></button>
          <p className={style.ups}>{ups}</p>
          <button className={style.down} aria-label='Уменьшить рейтинг'></button>
        </a>
      </div>

    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
}