import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const postsContext = React.createContext({});

export function usePostsContext() {
  return useContext(postsContext);
}

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <postsContext.Provider value={{ posts, setPosts }}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
