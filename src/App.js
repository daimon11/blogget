import { useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { URL } from './api/const';
import { useToken } from './hooks/useToken';

console.log(useToken);

function App() {
  const [token] = useToken('');
  console.log(token);
  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      header: {
        Authorization: `bearer ${token}`
      },
    });
  }, [token]);

  return (
    <>
      <Header token={token} />
      <Main />
    </>
  );
}

export default App;
