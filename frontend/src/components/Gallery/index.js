import { Carousel } from "antd";
import { Horse } from "./Horse";
import { usePost } from "../../contexts";

export const Gallery = () => {
  const { posts } = usePost();
  return (
    <Carousel autoplay style={{ marginTop: "5vh" }}>
      {posts.slice(0, 3).map((post) => (
        <Horse post={post} />
      ))}
    </Carousel>
  );
};
