import { Row, Col } from "antd";
import { Instrument } from "./Instrument";
import { Text } from "../../components";
import { request } from "../../instance";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "antd";
const vgut = 10;

export const Progress = () => {
  const [instruments, setInstruments] = useState([]);
  const desktopMode = true;

  const refreashInstruments = async () => {
    const data = await request({
      method: "get",
      url: "/instrument/status",
    });
    setInstruments(data);
  };
  useEffect(() => refreashInstruments(), []);

  return (
    <>
      {desktopMode ? (
        <>
          <Text.SectionTitle.Black>
            Instruments
            <Button
              type="primary"
              danger
              href="http://localhost:3000/home/modify"
            >
              modify reservation
            </Button>
          </Text.SectionTitle.Black>
          {instruments.map(({ name, busyBegin, busyUntil, healthy }) => (
            <Row gutter={[16, vgut]} key={uuid()}>
              <Col span={24}>
                <Instrument
                  name={name}
                  begin={busyBegin}
                  end={busyUntil}
                  healthy={healthy}
                />
              </Col>
            </Row>
          ))}
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
