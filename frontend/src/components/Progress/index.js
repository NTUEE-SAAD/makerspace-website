import { Row, Col } from "antd";
import { Instrument } from "./Instrument";
import { Text } from "../../components";

const vgut = 10;

export const Progress = () => {
  const desktopMode = true;
  return (
    <>
      {desktopMode ? (
        <>
          <Text.SectionTitle.Black>Instruments</Text.SectionTitle.Black>
          <Row gutter={[16, vgut]}>
            <Col span={24}>
              <Instrument
                name={"X1E-Plus"}
                begin={new Date().toISOString()}
                end={new Date(2022, 0, 14, 19, 30, 0).toISOString()}
              />
            </Col>
          </Row>
          <Row gutter={[16, vgut]}>
            <Col span={24}>
              <Instrument name={"HyperCube"} />
            </Col>
          </Row>
          <Row gutter={[16, vgut]}>
            <Col span={24}>
              <Instrument name={"Formlab"} />
            </Col>
          </Row>
          <Row gutter={[16, vgut]}>
            <Col span={24}>
              <Instrument name={"ThunderLaser"} />
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Text.SectionTitle.Black level={2}>
            Instruments
          </Text.SectionTitle.Black>
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
