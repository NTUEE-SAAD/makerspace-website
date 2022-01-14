import React, { useContext } from "react";

const PostContext = React.createContext();

export const useCalc = () => {
  return useContext(PostContext);
};

export function PostProvider({ children }) {
  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
}
