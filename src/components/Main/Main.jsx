import style from './Main.module.css';
import Layout from './Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes, useLocation } from 'react-router-dom';
import Modal from '../Modal';
import { Home } from './Layout/Home/Home';
import { NotFound } from './Layout/NotFound/NotFound';
import { LIST } from './Tabs/Tabs';


export const Main = () => {
  const location = useLocation();
  const existingUrl = LIST.some(item => location.pathname.includes(item.link));

  return ((!existingUrl && location.pathname !== '/') ? <NotFound/> :
    <main className={style.main}>
      <Layout>
        <Tabs />
        <Routes>
          <Route path='/category/:page' element={<List />}>
            <Route path='post/:id' element={<Modal />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          {/* {location.pathname !== '/' && <NotFound />} */}
        </Routes>
      </Layout>
    </main>
  );
}
