import style from './Main.module.css';
import Layout from './Layout';
import Tabs from './Tabs';
import List from './List';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Modal from '../Modal';
import { Home } from './Layout/Home/Home';
import { NotFound } from './Layout/NotFound/NotFound';
import { LIST } from './Tabs/Tabs';

console.log('LIST', LIST);

export const Main = () => {
  const pageCategory = useLocation().pathname.match(/\/category\/(.*)/);
  console.log('page', pageCategory);

  let existingUrl = null;
  pageCategory && (existingUrl = LIST.some(item => pageCategory.includes(item.link)))
  console.log(existingUrl);
  return existingUrl || !pageCategory ? (<main className={style.main}>
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
  </main>
  ) : <Routes><Route path='*' element={<NotFound />} /></Routes>;
};
