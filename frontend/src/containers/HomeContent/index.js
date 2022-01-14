import { Row, Col } from "antd";
import { PostList, Calendar, Gallery, Progress } from "../../components";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import request from "../../instance";

const test = [
  {
    id: 3,
    color: "#3694DF",
    from: "2022-01-25T13:00:00+00:00",
    to: "2022-01-25T20:00:00+00:00",
    title: "專題說明會",
  },
];

export const HomeContent = () => {
  const [events, setEvents] = useState([]);
  useEffect(async () => {
    console.log(await request({method:'get', url:'/'}));
    setEvents(test);
  }, []);

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <Gallery />
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <Col span={12} className={styles.column}>
          <Progress />
        </Col>
        <Col span={12} className={styles.column}>
          <Calendar events={events} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={3} />
        <Col span={18}>
          <PostList />
        </Col>
      </Row>
    </div>
  );
};
