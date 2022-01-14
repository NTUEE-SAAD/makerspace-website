import { useState, useRef } from "react";
import { Card, Progress, Typography, Row, Col, Tag } from "antd";
import Countdown from "react-countdown";
import styles from "./styles.module.css";

/**
 * @param {string} begin - a date ISOstring like '1995-12-17T13:24:00
 * @param {string} end - a date ISOstring like '1995-12-17T13:24:00
 **/
export const Instrument = ({ name, begin = null, end = null }) => {
  const [percent, setPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const beginTimeRef = useRef(null);
  const durationRef = useRef();
  const isFree = !(begin && end) || isComplete;

  beginTimeRef.current = beginTimeRef.current
    ? beginTimeRef.current
    : new Date(begin);

  const endTime = new Date(end);
  durationRef.current = isFree
    ? 0
    : endTime.getTime() - beginTimeRef.current.getTime();

  const StatusTag = isFree ? (
    <Tag color="green">free</Tag>
  ) : (
    <Tag color="red">printing</Tag>
  );

  const handleTick = () => {
    const elapsed = Date.now() - beginTimeRef.current.getTime();
    if (elapsed < durationRef.current.getTime) {
      handleComplete();
    }
    setPercent(Math.round((elapsed / durationRef.current) * 100));
  };

  const handleComplete = () => {
    if (isFree) return;
    
    beginTimeRef.current = null;
    setIsComplete(true);
    setPercent(100);
  };

  return (
    <Card
      title={
        <Row justify="begin">
          <Typography className={styles.title}>{name}</Typography>
          {StatusTag}
        </Row>
      }
    >
      <Row justify="center">
        <Col span={12}>
          <Progress percent={percent} size="small" />
        </Col>
        <Col span={6}>
          <div className={styles.counterWrapper}>
            <Countdown
              date={beginTimeRef.current.getTime() + durationRef.current}
              onTick={handleTick}
              onComplete={handleComplete}
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};
