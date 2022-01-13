import { Row, Col } from "antd";
import { PostList, Calendar, Gallery, Progress } from "../../components";

export const Content = () => {
  return (
    <>
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Gallery />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "3vh" }}>
        <Col span={12}>
          <Progress />
        </Col>
        <Col span={12}>
          <Calendar />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "3vh" }}>
        <Col span={3} />
        <Col span={18}>
          <PostList />
        </Col>
      </Row>
    </>
  );
};
