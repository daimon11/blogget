import PropTypes from 'prop-types';


import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';

import { Overlay } from './Overlay/Overlay.jsx';
import { useNavigate, useParams } from 'react-router-dom';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const [postData, commentsData, postLoading, postStatus] = useCommentsData(id);

  console.log('postStatus ============', postStatus);

  const overlayRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = e => {
    const target = e.target;

    if (target === overlayRef.current ||
      target === buttonRef.current ||
      target.closest('.closeIcon')) {
      navigate(`/category/${page}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      navigate(`/category/${page}`);
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
