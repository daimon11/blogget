import style from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';
import { useState } from 'react';

export const Content = ({ postData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log('Content');
  return (
    <div className={style.content}>
      <Text
        As='h2'
        className={style.title}>
        <Text
          As='a'
          bold
          size={18}
          tsize={24}
          className={style.linkPost}
          onClick={() => {
            console.log('открыто');
            setIsModalOpen(true);
            console.log(isModalOpen);
          }}
          href="#"
        >
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
      {isModalOpen && <p>Открыто</p>}
    </div >
  );
};

Content.propTypes = {
  postData: PropTypes.object,
};
