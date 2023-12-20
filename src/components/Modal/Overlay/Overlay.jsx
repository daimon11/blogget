import style from './Overlay.module.css';
import Markdown from 'markdown-to-jsx';
import { ReactComponent as CloseIcon } from '../img/close.svg';
import { FormComment } from './FormComment/FormComment.jsx';
import { PulseLoader } from 'react-spinners';
import { Comments } from './Comments/Comments.jsx';
Comments;


// PulseLoader стилизовать

export const Overlay = ({
  postStatus,
  postData,
  commentsData,
  postLoading,
  buttonRef,
  overlayRef,
}) => (
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
  </div>
)