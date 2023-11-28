import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';
import { useToken } from './hooks/useToken';


function App() {
  const [token, delToken] = useToken('');

  // console.log(typeof delToken);

  return (
    <>
      <Header token={token} delToken={delToken} />
      <Main />
    </>
  );
}

App.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

export default App;
