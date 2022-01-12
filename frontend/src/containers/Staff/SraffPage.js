import { Row, Col } from "antd";
import { Progress } from "../../components/Progress";
import {Todos} from "../../components/Todos"
import { Layout} from "antd";
import { Leave } from "../../components/Leave";
import { Header } from "./Header";

export const StaffPage = () => {
  return (
    <Layout>
    <Layout.Header>
      <Header />
    </Layout.Header>
    <Layout.Content style={{ width: "80%", margin: "auto" }}>
        <Row gutter={[16, 24]} style={{ marginTop: "3vh" }}>
            <Col span={12}>
                <Progress />
            </Col>
            <Col span={12}>
                <Todos />
            </Col>
        </Row>
        <Row gutter={[16, 24]} style={{ marginTop: "3vh" }}>
            <Leave />
        </Row>
    </Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
  );
};
