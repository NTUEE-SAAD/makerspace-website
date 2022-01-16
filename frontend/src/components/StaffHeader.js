import { Menu, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { instance } from "../instance";
import styled from "styled-components";
import { useState } from "react";
const LogoImage = styled.img`
  height: 54px;
  width: auto;
  transform: translate(-20px, -2px);
`;

export const StaffHeader = () => {
  const [signedIn, setSignedIn] = useState(false);

  const checkLogin = async () => {
    const status = await instance.get("/staff/signin");
    if (status.data.data === "success") {
      setSignedIn(true);
    }
  };

  const signOut = () => {
    instance.delete("/staff/signout");
    checkLogin();
    window.location.reload();
  };
  checkLogin();

  return (
    <Row justify="space-around" align="center">
      <Col span={6}>
        <Link to="/staff">
          <LogoImage src="/mkslogo-h.png" />
        </Link>
      </Col>
      <Col span={18}>
        {signedIn ? (
          <Menu mode="horizontal" theme="dark" style={{ float: "right" }}>
            <Menu.Item key="1">
              <Link to="/staff/threeDPrinter">3DP</Link>
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
              onClick={signOut}
            >
              Sign Out
            </Menu.Item>
          </Menu>
        ) : (
          <></>
        )}
      </Col>
    </Row>
  );
};
