import { Image, Typography } from "antd";
import styles from "./horse.module.css";
import { useNavigate } from "react-router-dom";

export const Horse = ({ post }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(navigate("/home/post/" + post.uuid));
  };
  return (
    <div
      style={{ position: "relative", height: "60vh", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Image
        src={post.image}
        width="100%"
        preview={false}
        style={{ filter: "brightness(70%)" }}
      />
      <HorseTitle>{post.title}</HorseTitle>
      <HorseDetail>{post.content}</HorseDetail>
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
    <Typography.Link style={{ color: "white", fontSize: "16px" }}>
      {children}
    </Typography.Link>
  </div>
);
