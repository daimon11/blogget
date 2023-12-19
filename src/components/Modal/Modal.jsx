import style from './Modal.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';

import { Comments } from './Comments/Comments.jsx';
import { FormComment } from './FormComment/FormComment.jsx';

import { PulseLoader } from 'react-spinners';

export const Modal = ({ id, closeModal }) => {
  console.log('Modal', id);
  const [postData, commentsData, postLoading, postStatus] = useCommentsData(id);

  console.log('postStatus ============', postStatus);

  const overlayRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current ||
      target === buttonRef.current ||
      target.closest('.closeIcon')) {
      closeModal();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };


  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  console.log('postLoading 22222222222', postLoading)

  return ReactDOM.createPortal(
    // переписать в компонент
    // переписать предзагрузку в компонент
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {postStatus === 'loading' && <PulseLoader />}
        {postStatus === 'error' && 'Ошибка'}
        {postStatus === 'loaded' && <div>
          <h2 className={style.title}>{postData.title}</h2>
          <img src={postData.url} width={400} />
          <div className={style.content}>
            <Markdown options={
              {
                overrides: {
                  a: {
                    props: {
                      target: '_blanck',
                    }
                  }
                }
              }}>
              {postData.selftext}
            </Markdown>
          </div>

          {/* переписать на Text */}
          <p className={style.author}>{postData.author}</p>

          <button className={style.close} ref={buttonRef}>
            <CloseIcon />
          </button>

          <FormComment />
          <Comments comments={commentsData} />
        </div>
        }
      </div>
    </div >,
    document.getElementById('modal-root')
  );
};

Modal.PropTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
