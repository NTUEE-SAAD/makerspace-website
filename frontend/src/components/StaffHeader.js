import { Menu, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { request } from "../instance";
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
    const { message } = await request({ method: "GET", url: "/staff/signin" });
    if (message === "success") {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  };

  const signOut = async () => {
    await request({ method: "delete", url: "/staff/signout" });
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
            <Menu.Item key="4" icon={<UserOutlined></UserOutlined>}>
              <Link to="/staff" onClick={signOut}>
                Sign Out
              </Link>
            </Menu.Item>
          </Menu>
        ) : (
          <></>
        )}
      </Col>
    </Row>
  );
};
