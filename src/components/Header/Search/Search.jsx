import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Search.module.css';
import { searchRequest } from '../../../store/search/searchAction';

import { ReactComponent as SearchIcon } from './img/search.svg';

export const Search = () => {
  const dispatch = useDispatch();
  const [setSearch, search] = useState('');
  const token = useSelector(state => state.token.token);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchRequest({token, search}));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.search}
        type='search'
        onChange={e => {
          console.log(e.target.value);
          setSearch(e.target.value)}}
        value={search}
      />
      <button className={style.button} type='submit'>
        <SearchIcon
          className={style.svg}
        />
      </button>
    </form >
  );
};
