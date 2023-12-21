import PropTypes from 'prop-types';


import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';

import { Overlay } from './Overlay/Overlay.jsx';

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

  return ReactDOM.createPortal(
    <Overlay
      postStatus={postStatus}
      postData={postData}
      commentsData={commentsData}
      postLoading={postLoading}
      buttonRef={buttonRef}
      overlayRef={overlayRef}
    />,
    document.getElementById('modal-root')
  );
};

Modal.PropTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
