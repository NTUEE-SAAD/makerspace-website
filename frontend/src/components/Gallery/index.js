import { Carousel } from "antd";
import { Horse } from "./Horse";

export const Gallery = () => {
  return (
    <Carousel autoplay style={{ marginTop: "5vh" }}>
      <Horse data={{ title: "Horse1" }} />
      <Horse data={{ title: "Horse2" }} />
    </Carousel>
  );
};
