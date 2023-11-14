import { useState } from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomNumber';

const LIST = [
  { value: 'Главная' },
  { value: 'Просмотренные' },
  { value: 'Сохраненные' },
  { value: 'Мои посты' },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const handleClick = id => {
  //   setList(list.filter(item => item.id !== id));
  // };

  return (
    <>
      <button onClick={() => setDropdownOpen(!isDropdownOpen)}>add item</button>

      {isDropdownOpen && <ul className={style.list}>
        {LIST.map(({ value, id }) => (
          <li key={id}>
            <button onClick={() => handleClick(id)}>{value}</button>
          </li>))}
      </ul>}
    </>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};

