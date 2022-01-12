import { Row, Col } from "antd";
import { Instrument } from "./Instrument";

const vgut = 16;

export const Progress = () => {
  const desktopMode = true;
  return (
    <>
      {desktopMode ? (
        <>
          <h2>Instruments</h2>
          <Row gutter={[16, vgut]}>
            <Col span={24}>
              <Instrument />
            </Col>
          </Row>
          <Row gutter={[16, vgut]}>
            <Col span={24}>
              <Instrument />
            </Col>
          </Row>
          <Row gutter={[16, vgut]}>
            <Col span={24}>
              <Instrument />
            </Col>
          </Row>
          <Row gutter={[16, vgut]}>
            <Col span={24}>
              <Instrument />
            </Col>
          </Row>
        </>
      ) : (
        <>
          <h2>Instruments</h2>
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
      )}
    </>
  );
};
