export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';

  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');
    setToken(token);
  } else {console.log('что-то не работает - location.pathname')}

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  } else {console.log('что-то не работает - localStorage')}

  return token;
};

