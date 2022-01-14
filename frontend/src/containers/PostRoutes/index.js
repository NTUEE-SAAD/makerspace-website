import { Route, Routes } from "react-router-dom";
import { PostPage } from "./PostPage";
import { HomeRoot } from "..";

/**
 * @param {list[post]} posts - an array of data to populate the pages
 **/
export const PostRoutes = ({ posts = [{ id: "abc" }, { id: "def" }] }) => {
  return (
    <Routes>
      <Route path="/home" element={<HomeRoot />}>
        {posts.map((post) => (
          <Route
            path={`/home/post/${post.id}`}
            element={<PostPage data={post} />}
          />
        ))}
      </Route>
    </Routes>
  );
};
