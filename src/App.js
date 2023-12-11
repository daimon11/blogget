import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';

import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postsContext';
import { store } from './store/';


const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <PostsContextProvider>

        <Header />
        <Main />

      </PostsContextProvider>
    </AuthContextProvider>
  </Provider>
);

App.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

export default App;
