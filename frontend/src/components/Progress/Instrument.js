import { Card, Progress, Typography, Row, Col, Tag } from "antd";
import Countdown from "react-countdown";
import styles from "./styles.module.css";

export const Instrument = () => {
  return (
    <Card
      title={
        <Row justify="begin">
          <Typography className={styles.title}>Name</Typography>
          <Tag color="green">free</Tag>
        </Row>
      }
    >
      <Row justify="center">
        <Col span={12}>
          <Progress percent={30} size="small" />
        </Col>
        <Col span={6}>
          <div className={styles.counterWrapper}>
            <Countdown date={Date.now() + 10000} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};
