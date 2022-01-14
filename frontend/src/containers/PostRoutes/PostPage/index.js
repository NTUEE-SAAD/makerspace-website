import { Row, Col } from "antd";
import { PostBody } from "./PostBody";
import { Banner } from "./Banner";

export const PostPage = ({ post }) => {
  return (
    <>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Banner title={post.title} />
        </Col>
      </Row>
      <Row gutter={[8, 24]}>
        <PostBody post={post} />
      </Row>
    </>
  );
};
