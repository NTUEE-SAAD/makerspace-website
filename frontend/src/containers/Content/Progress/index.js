import { Row, Col } from "antd";
import { Instrument } from "./Instrument";

const vgut = 16;

export const Progress = () => {
  return (
    <>
      <Row gutter={[16, vgut]}>
        <Col span={12}>
          <Instrument />
        </Col>
        <Col span={12}>
          <Instrument />
        </Col>
      </Row>
      <Row gutter={[16, vgut]}>
        <Col span={12}>
          <Instrument />
        </Col>
        <Col span={12}>
          <Instrument />
        </Col>
      </Row>
    </>
    // <Space direction="vertical" style={{ width: "100%" }}>
    //   <Instrument />
    //   <Instrument />
    //   <Instrument />
    //   <Instrument />
    // </Space>
  );
};
