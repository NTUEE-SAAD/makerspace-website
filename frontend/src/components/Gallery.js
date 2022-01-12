import { Carousel } from "antd";

export const Gallery = () => {
  return (
    <Carousel autoplay style={{ marginTop: "5vh" }}>
      <img
        src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        alt=""
      />
      <img
        src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        alt=""
      />
    </Carousel>
  );
};
