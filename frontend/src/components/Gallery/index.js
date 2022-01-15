import { Carousel } from "antd";
import { Horse } from "./Horse";
import { usePost } from "../../contexts";
import { v4 as uuid } from "uuid";

export const Gallery = () => {
  const { posts } = usePost();
  return (
    <Carousel autoplay style={{ marginTop: "5vh" }}>
      {posts.slice(0, 3).map((post) => (
        <Horse post={post} key={uuid()} />
      ))}
    </Carousel>
  );
};
