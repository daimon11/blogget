import style from './Main.module.css';
import Layout from './Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../Modal';
import { Home } from './Layout/Home/Home';
import { NotFound } from './Layout/NotFound/NotFound';

export const Main = () =>
(  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  </main>)
