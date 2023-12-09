import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postsContext';
import { CommentContextProvider } from './context/commentContext';

const initialState = {
  comment: 'Привет Redux',
};

const rootReducer = (state = initialState, action) => state;
const store = createStore(rootReducer);

console.log('store: ', store);

const App = () => (
  <Provider store={store}>
    <TokenContextProvider>
      <AuthContextProvider>
        <CommentContextProvider>
          <PostsContextProvider>

            <Header />
            <Main />

          </PostsContextProvider>
        </CommentContextProvider>
      </AuthContextProvider>
    </TokenContextProvider >
  </Provider>
);

App.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

export default App;
