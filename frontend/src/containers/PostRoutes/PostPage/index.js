import { Row, Col } from "antd";
import { PostBody } from "./PostBody";
import { Banner } from "./Banner";

export const PostPage = () => {
  return (
    <>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Banner />
        </Col>
      </Row>
      <Row gutter={[8, 24]}>
        <PostBody />
      </Row>
      <Row gutter={[8, 24]}>
        <PostBody />
      </Row>
      <Row gutter={[8, 24]}>
        <PostBody />
      </Row>
    </>
  );
};
