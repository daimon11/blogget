import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import style from './Search.module.css';
import { searchRequest } from '../../../store/search/searchAction';

import { ReactComponent as SearchIcon } from './img/search.svg';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    console.log('{search}', {search});
    dispatch(searchRequest({search}));
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
