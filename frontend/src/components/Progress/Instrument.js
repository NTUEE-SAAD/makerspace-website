import { useState, useRef } from "react";
import {
  Card,
  Progress,
  Typography,
  Row,
  Col,
  Tag,
  Divider,
  Button,
} from "antd";
import Countdown from "react-countdown";
import styles from "./styles.module.css";
import { Reservation } from "../Reservation";

/**
 * @param {string} begin - a date ISOstring like '1995-12-17T13:24:00
 * @param {string} end - a date ISOstring like '1995-12-17T13:24:00
 **/
export const Instrument = ({ name, begin, end, healthy }) => {
  const [percent, setPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const beginTimeRef = useRef(null);
  const durationRef = useRef();
  let isFree = !(begin && end) || isComplete;
  const [showModal, setShowModal] = useState(false);

  beginTimeRef.current = beginTimeRef.current
    ? beginTimeRef.current
    : new Date(begin);

  const endTime = new Date(end);
  durationRef.current = isFree
    ? 0
    : endTime.getTime() - beginTimeRef.current.getTime();

  if (durationRef.current <= 0) isFree = true;

  let StatusTag;
  if(!healthy) StatusTag = <Tag color="red">out of order</Tag>
  else if (isFree) StatusTag = <Tag color="green">free</Tag>;
  else StatusTag = <Tag color="orange">printing</Tag>;

  let progressStatus;
  if (!healthy) progressStatus = "exception";
  else if (isComplete) progressStatus = "complete";
  else progressStatus = "active";

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBook = () => {
    setShowModal(true);
  };

  return (
    <>
      <Reservation visible={showModal} onCancel={handleCloseModal} instrument={name}/>
      <Card
        title={
          <Row>
            <Col span={4} align="center">
              {StatusTag}
            </Col>
            <Col span={1} align="center">
              <Divider type="vertical" />
            </Col>
            <Col span={10}>
              <Typography className={styles.title}>{name}</Typography>
            </Col>
            <Col span={9} align="right">
              <Button
                shape="round"
                disabled={!isFree || !healthy}
                onClick={handleBook}
              >
                book
              </Button>
            </Col>
          </Row>
        }
      >
        <Row justify="center">
          <Col span={12}>
            <Progress percent={percent} size="small" status={progressStatus} />
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
    </>
  );
};
