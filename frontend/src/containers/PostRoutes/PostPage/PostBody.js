import { Row, Col, Image, Typography } from "antd";
import styles from "./styles.module.css";

export const PostBody = ({post}) => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Row gutter={30}>
        <Col span={6}>
          <Image preview={false} src={post.image} />
        </Col>
        <Col span={18}>
          <div className={styles.textWrapper}>
            <Typography.Text>{post.content}</Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};
