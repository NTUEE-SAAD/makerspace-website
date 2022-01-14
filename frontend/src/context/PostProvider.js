import React, { useContext, useEffect, useState } from "react";
import { request } from "../instance";

const PostContext = React.createContext();

export const usePost = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const refreshPosts = async () => {
    const newPost = await request({ method: "get", url: "/post" });
    setPosts(newPost);
  };

  useEffect(() => refreshPosts(), []);

  return (
    <PostContext.Provider value={{ posts, refreshPosts }}>
      {children}
    </PostContext.Provider>
  );
};
