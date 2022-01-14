import React, { useContext, useEffect, useState } from "react";
import request from "../instance";

const PostContext = React.createContext();

export const usePost = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const refreshPosts = async () => {
    setPosts(await request({ method: "get", url: "post" }));
  };

  useEffect(() => refreshPosts());

  return (
    <PostContext.Provider value={{ posts, refreshPosts }}>
      {children}
    </PostContext.Provider>
  );
};
