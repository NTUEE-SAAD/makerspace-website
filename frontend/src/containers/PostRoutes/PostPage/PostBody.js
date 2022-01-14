import { Row, Col, Image, Typography } from "antd";
import styles from "./styles.module.css";
import faker from "faker";

export const PostBody = () => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Row gutter={30}>
        <Col span={6}>
          <Image preview={false} src={faker.image.image()} />
        </Col>
        <Col span={18}>
          <div className={styles.textWrapper}>
            <Typography.Text>{faker.lorem.paragraphs()}</Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};
