import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postsContext';
import BestPostsComponent from './hooks/usePosts';


function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>

        <Header />
        <PostsContextProvider>
          <Main>
          </Main>
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider >
  );
}

App.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

export default App;
