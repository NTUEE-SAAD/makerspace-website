import { Menu, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { instance } from "../instance";
import styled from "styled-components";
<<<<<<< HEAD
import { useState } from "react";
=======
import { instance } from "../instance";

>>>>>>> staffheader change
const LogoImage = styled.img`
  height: 54px;
  width: auto;
  transform: translate(-20px, -2px);
`;

export const StaffHeader = () => {
<<<<<<< HEAD
=======
  const displayStatus = (payload) => {
    if (payload.msg) {
      const { type, msg } = payload;
      const content = {
        content: msg,
        duration: 0.5,
      };
      switch (type) {
        case "success":
          message.success(content);
          break;
        case "error":
        default:
          message.error(content);
          break;
      }
    }
  };

>>>>>>> staffheader change
  const [signedIn, setSignedIn] = useState(false);

  const checkLogin = async () => {
    const status = await instance.get("/staff/signin");
<<<<<<< HEAD
=======
    //console.log(remember.data);
>>>>>>> staffheader change
    if (status.data.data === "success") {
      setSignedIn(true);
    }
  };

<<<<<<< HEAD
  const signOut = () => {
    instance.delete("/staff/signout");
    checkLogin();
    window.location.reload();
  };
  checkLogin();

=======
>>>>>>> staffheader change
  return (
    <Row justify="space-around" align="center">
      <Col span={6}>
        <Link to="/staff">
          <LogoImage src="/mkslogo-h.png" />
        </Link>
      </Col>
      <Col span={18}>
<<<<<<< HEAD
        {signedIn ? (
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
<<<<<<< HEAD
              onClick={signOut}
=======
              onClick={instance.post("/staff/signout")}
>>>>>>> staffheader change
            >
              Sign Out
            </Menu.Item>
          </Menu>
        ) : (
          <></>
        )}
=======
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
>>>>>>> bug fix
      </Col>
    </Row>
  );
};
