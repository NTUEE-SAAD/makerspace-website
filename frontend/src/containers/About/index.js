import { Row, Col } from "antd";
import { AboutContent } from "./AboutContent";
import { Banner } from "./Banner";

export const About = () => {
  return (
    <>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Banner />
        </Col>
      </Row>
      <Row gutter={[8, 24]}>
        <Col span={24}>
          <AboutContent />
        </Col>
      </Row>
    </>
  );
};
