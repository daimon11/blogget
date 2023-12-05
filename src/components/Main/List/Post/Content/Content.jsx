import style from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';
import Modal from '../../../../Modal/index';
import { useState } from 'react';

export const Content = ({ author, title, markdown }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            setIsModalOpen(true);
            console.log(markdown);
          }}
          href="#"
        >
          {title}
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
        {author}
      </Text>
      {isModalOpen && <Modal
        title={title}
        author={author}
        markdown={markdown} />}
    </div >
  );
};

Content.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  markdown: PropTypes.string,
};
