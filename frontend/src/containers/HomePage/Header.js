import { Menu, Row, Col } from "antd";
import { Text, SideMenu } from "../../components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Row justify="space-around" align="center">
      <Col span={1}>
        <SideMenu style={{ width: 20 }} />
      </Col>
      <Col span={11}>
        <Text.White>NTUEE MakerSpace</Text.White>
      </Col>
      <Col span={12}>
        <Menu mode="horizontal" theme="dark" style={{ float: "right" }}>
          <Menu.Item key="1">
            <Link to="/home/about">About</Link>
          </Menu.Item>
          <Menu.Item key="2">Option 1</Menu.Item>
          <Menu.Item key="3">Option 1</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
