import { Card, Progress, Typography, Row, Col, Tag } from "antd";
import styles from "./styles.module.css";

export const Instrument = () => {
  return (
    <Card
      title={
        <Row justify="space-between">
          <Col span={4} style={{ textAlign: "right" }}>
            <Typography className={styles.title}>Name</Typography>
          </Col>
          <Col span={19}>
            <Tag color="green">free</Tag>
          </Col>
        </Row>
      }
    >
      <Row justify="center">
        <Col span={12}>
          <Progress percent={30} size="small" />
        </Col>
        <Col span={6}>
          <div className={styles.textWrapper}>
            <Typography.Text>3:00:00</Typography.Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
