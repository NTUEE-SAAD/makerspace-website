import { Row, Col } from "antd";
import { PostList, Calendar, Gallery, Progress } from "../../components";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { instance } from "../../instance";

export const HomeContent = () => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const refreshEvents = async () => {
  //     setEvents(await instance.get("/event"));
  //   };
  //   refreshEvents();
  // }, []);

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
