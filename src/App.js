import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';

import { Provider } from 'react-redux';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postsContext';
import { store } from './store/';


const App = () => (
  <Provider store={store}>
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>

          <Header />
          <Main />

        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider >
  </Provider>
);

App.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

export default App;
