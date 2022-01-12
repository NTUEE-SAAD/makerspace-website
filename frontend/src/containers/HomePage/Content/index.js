import { Row, Col } from "antd";
import { Calendar } from "./Calendar";
import { Gallery } from "./Gallery";
import { Progress } from "./Progress";

export const Content = () => {
  return (
    <>
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Gallery />
        </Col>
      </Row>
      <Row gutter={[16, 24]} style={{ marginTop: "3vh" }}>
        <Col span={12}>
          <Progress />
        </Col>
        <Col span={12}>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "1vh 1vw 1vh 1vw",
              borderRadius: "2px",
            }}
          >
            <Calendar />
          </div>
        </Col>
      </Row>
    </>
  );
};
