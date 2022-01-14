import { Menu, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LogoLink } from ".";
import { Link } from "react-router-dom";

const rightStyle = { position: "absolute", top: 0, right: 0 };

export const StaffHeader = () => {
  return (
    <Row justify="space-around" align="center">
      <Col span={6}>
        <LogoLink />
      </Col>
      <Col span={18}>
        <Menu mode="horizontal" theme="dark" style={{ float: "right" }}>
          <Menu.Item key="1">
            <Link to="/3dp">3DP</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/laser">Laser</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/staff/items">Item</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Sign Out
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
