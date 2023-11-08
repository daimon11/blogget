import style from './Content.module.css';
import PropTypes from 'prop-types';

export const Content = ({ postData }) => (
  <div className={style.content} >
    <h2 className={style.title}>
      <a className={style.linkPost} href='#post'>
        {postData.title}
      </a>
    </h2>
    <a className={style.linkAuthor} href='#author'>{postData.author}</a>
  </div >
);

Content.propTypes = {
  postData: PropTypes.object,
};
