import { Row, Col, Typography, Image } from "antd";
import faker from "faker";
import styles from "./styles.module.css"

export const AboutContent = () => {
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
