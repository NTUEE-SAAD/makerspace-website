import { Menu, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LogoLink } from ".";
import { Link } from "react-router-dom";
import { instance } from "../instance";
import styled from "styled-components";

const LogoImage = styled.img`
  height: 54px;
  width: auto;
  transform: translate(-20px, -2px);
`;

export const StaffHeader = () => {
  return (
    <Row justify="space-around" align="center">
      <Col span={6}>
        <Link to="/staff">
          <LogoImage src="/mkslogo-h.png" />
        </Link>
      </Col>
      <Col span={18}>
        <Menu mode="horizontal" theme="dark" style={{ float: "right" }}>
          <Menu.Item key="1">
            <Link to="/staff/3dp">3DP</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/staff/laser">Laser</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/staff/items">Item</Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<UserOutlined></UserOutlined>}
            onClick={instance.post("/staff/signout")}
          >
            Sign Out
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
