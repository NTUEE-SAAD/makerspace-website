import { Route, Routes } from "react-router-dom";
import { PostPage } from "./PostPage";
import { HomeRoot } from "..";
import { v4 as uuid } from "uuid";
import { usePost } from "../../contexts";

/**
 * @param {list[post]} posts - an array of data to populate the pages
 **/
export const PostRoutes = () => {
  const { posts } = usePost();

  return (
    <Routes>
      <Route path="/home/post" element={<HomeRoot />}>
        {posts.map((post) => (
          <Route
            path={`/home/post/${post.uuid}`}
            element={<PostPage post={post} />}
            key={uuid()}
          />
        ))}
      </Route>
    </Routes>
  );
};
