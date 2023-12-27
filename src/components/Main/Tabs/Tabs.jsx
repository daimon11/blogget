import { useEffect, useState } from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomNumber';
import { debounceRaf } from '../../../utils/debounce';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { useNavigate } from 'react-router-dom';


export const LIST = [
  { value: 'Главная', Icon: HomeIcon, link: 'home' },
  { value: 'Топ', Icon: TopIcon, link: 'top' },
  { value: 'Лучшие', Icon: BestIcon, link: 'best' },
  { value: 'Горячие', Icon: HotIcon, link: 'hot' },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [activePage, setActivePage] = useState(false);
  const navigate = useNavigate();


  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && <div className={style.wrapperBtn}>
        <button
          className={style.btn}
          onClick={() => setDropdownOpen(!isDropdownOpen)}>
          {activePage ? activePage : 'add'}
          <ArrowIcon width={15} height={15} />
        </button>
      </div>}

      {(isDropdownOpen || !isDropdown) &&
        (<ul className={style.list} onClick={() => setDropdownOpen(false)}>
          {LIST.map(({ value, link, id, Icon }) => (
            <li className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={() => {
                  setActivePage(value);
                  navigate( link !== 'home' ? `/category/${link}` : ``);
                }}>
                {value}
                {Icon && <Icon width={30} height={25} />}
              </button>

            </li>))}
        </ul>)}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};

