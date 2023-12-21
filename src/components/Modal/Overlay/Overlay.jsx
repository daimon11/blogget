import style from './Overlay.module.css';
import Markdown from 'markdown-to-jsx';
import { ReactComponent as CloseIcon } from '../img/close.svg';
import { FormComment } from './FormComment/FormComment.jsx';

import { Comments } from './Comments/Comments.jsx';
Comments;
import { Text } from '../../../UI/Text/Text.jsx';
import {ModalPreloader} from './ModalPreloader/ModalPreloader.jsx';


export const Overlay = (
  {
    postStatus,
    postData,
    commentsData,
    postLoading,
    buttonRef,
    overlayRef,
  }) => {
    console.log(postData);
  const { title, url, selftext, author } = postData || {};
  return (
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {postStatus === 'loading' && <ModalPreloader/>}
        {postStatus === 'error' && 'Ошибка'}
        {postStatus === 'loaded' && <div>
          <Text As={'h2'} className={style.title}>{title}</Text>
          <img src={url} width={400} />
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
              {selftext}
            </Markdown>
          </div>

          <Text As={'p'} className={style.author}>{author}</Text>

          <button className={style.close} ref={buttonRef}>
            <CloseIcon />
          </button>

          <FormComment />
          <Comments comments={commentsData} />
        </div>
        }
      </div>
    </div>
  );
};
