import { Image, Typography } from "antd";
import faker from "faker";

export const Horse = ({ data: { title, detail, image } }) => {
  return (
    <div style={{ position: "relative" }}>
      <Image
        src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
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
  <div
    style={{
      position: "absolute",
      top: "40%",
      left: "3%",
      paddingRight: "20%",
    }}
  >
    <Typography.Title
      style={{
        color: "white",
      }}
    >
      {children}
    </Typography.Title>
  </div>
);

const HorseDetail = ({ children }) => (
  <div
    style={{
      position: "absolute",
      top: "60%",
      left: "0",
      padding: "0 40% 5% 5%"
    }}
  >
    <Typography.Text style={{ color: "white", fontSize: "16px" }}>{children}</Typography.Text>
  </div>
);
