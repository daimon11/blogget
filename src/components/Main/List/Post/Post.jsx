import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import { formateDate } from '../../../../utils/formateDate.js';

import { Content } from './Content/Content.jsx';
import { Rating } from './Rating/Rating.jsx';
import { ReactComponent as ButtonDel } from './img/delete.svg';

const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = notphoto;
};

export const Post = ({ postData }) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    selftext,
    created: date,
    id,
  } = postData;

  const markdown = selftext ? selftext : `В свете текущих событий создаю один общий пост, в котором можно будет обсудить текущую политическую и/или военную ситуацию/событие в мире, а так же поделится своей инфой. Все остальные посты на эту тематику будут удаляться, нам политика на сабе не нужна.

  Повторяю, обсуждать это можно ТОЛЬКО в этом посте и создан он, чтобы люди не разводили это все на остальном сабе.
  
  Хочу напомнить вам, что несмотря на то, что на данный тред не распространяется правило о политике, все остальные правила в нем действуют. Старайтесь вести корректный диалог и уважать собеседника. И без срачей сейчас в мире хватает негатива.
  
  Так же подписывайтесь на наш телеграм канал: https://t.me/rekabufeed
  
  Сразу оговорюсь, что несмотря на то, что я поставил защиту от набегов/ботов/новорегов и.т.д. на время - они все равно лезут отовсюду. Удалять комментарии в этом треде, если это не нарушает правил реддита мы не будем (если конечно это не очевидный спам), однако автомодератор или сам реддит может. Так что если вдруг ваш комментарий удалился, то вероятно он содержал ссылку которую реддит не пропустил или что-то в этом духе.
  
  И да, вбросы и прочее тоже удалять из комментариев тут не будем, ибо очень сложно в этом инфополе отличать правду от лжи. В конце концов - думайте сами чему верить, а чему нет.`;

  return (
    <li className={style.post} >
      {/* img перписать на компонент */}
      <img
        className={style.img}
        src={thumbnail.length > 10 ? thumbnail : notphoto}
        alt={title}
        onError={handleImageError} />

      <Content author={author} title={title} markdown={markdown} id={id}/>
      <Rating ups={ups} />
      <button className={style.delete}>
        <ButtonDel />
      </button>

      {/* time перписать на компонент */}
      <time
        className={style.date}
        dateTime={new Date().toISOString()}>
        {formateDate(new Date())}
      </time>

    </li >
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
