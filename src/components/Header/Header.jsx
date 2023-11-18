import style from './Header.module.css';

import Layout from '../Main/Layout';
import Logo from './Logo/';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

import PropTypes from 'prop-types';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text='Главная' />
          <Search />
          <Auth auth={false} />
        </div>
      </Layout>
    </header>
  );
};

Header.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
