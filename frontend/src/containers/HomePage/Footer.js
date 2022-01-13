import { Row, Col, Typography, Divider } from "antd";
import { MailOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <Row
      justify="space-around"
      style={{ width: "80%", margin: "auto" }}
      align="center"
    >
      <Col span={4} align="center">
        <MailOutlined />
        <Divider type="vertical"/>
        <Typography.Text>ntueemakerspace@gmail.com</Typography.Text>
      </Col>
      <Col span={4}>col2</Col>
      <Col span={4}>col3</Col>
    </Row>
  );
};
