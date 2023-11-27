import PropTypes from 'prop-types';
import Header from './components/Header';
import Main from './components/Main';
import { useToken } from './hooks/useToken';


function App() {
  const [token] = useToken('');

  return (
    <>
      <Header token={token} />
      <Main />
    </>
  );
}

App.propTypes = {
  token: PropTypes.string,
};

export default App;
