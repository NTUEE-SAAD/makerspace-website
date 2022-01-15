import { Row, Col } from "antd";
import { Progress } from "../../components/Progress";
import { Todos } from "../../components/Todos";
import { Layout } from "antd";
import { Leave } from "../../components/Leave";

export const StaffPage = (name) => {
  return (
    <Layout>
      <Layout.Content style={{ width: "80%", margin: "auto" }}>
        <Row gutter={[16, 24]} style={{ marginTop: "3vh" }}>
          <Col span={12}>
            <Progress />
          </Col>
          <Col span={12}>
            <Todos name={name} />
          </Col>
        </Row>
        <Row gutter={[16, 24]} style={{ marginTop: "3vh" }}>
          <Leave />
        </Row>
      </Layout.Content>
    </Layout>
  );
};
