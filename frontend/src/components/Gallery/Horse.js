import { Image, Typography } from "antd";
import faker from "faker";
import styles from "./horse.module.css";

export const Horse = ({ data: { title, detail, image } }) => {
  console.log(styles);
  return (
    <div style={{ position: "relative", height: "60vh" }}>
      <Image
        src={faker.image.image()}
        width="100%"
        preview={false}
        style={{ filter: "brightness(70%)" }}
      />
      <HorseTitle>{faker.lorem.sentence()}</HorseTitle>
      <HorseDetail>{faker.lorem.paragraphs()}</HorseDetail>
    </div>
  );
};

const HorseTitle = ({ children }) => (
  <div className={styles.horseTitleWrapper}>
    <Typography.Title style={{ color: "white" }}>{children}</Typography.Title>
  </div>
);

const HorseDetail = ({ children }) => (
  <div className={styles.horseDetailWrapper}>
    <Typography.Text style={{ color: "white", fontSize: "16px" }}>
      {children}
    </Typography.Text>
  </div>
);
