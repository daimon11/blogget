import style from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Content = ({ postData }) => (
  <div className={style.content} >
    <Text
      As='h2'
      className={style.title}>
      <Text
        As='a'
        size={18}
        tsize={24}
        className={style.linkPost}
        href='#post'>
        {postData.title}
      </Text>
    </Text>
    <Text
      As='a'
      color='orange'
      size={12}
      tsize={14}
      className={style.linkAuthor}
      href='#author'
    >
      {postData.author}
    </Text>
  </div >
);

Content.propTypes = {
  postData: PropTypes.object,
};
