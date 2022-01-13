import { Menu, Row, Col, Typography } from "antd";
import { SideMenu, LogoLink } from ".";
import { Link as RouterLink } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <Row justify="space-around" align="center">
      <Col span={1}>
        <SideMenu style={{ width: 20 }} />
      </Col>
      <Col span={11}>
        <LogoLink />
      </Col>
      <Col span={12}>
        <Menu mode="horizontal" theme="dark" style={{ float: "right" }}>
          <Menu.Item key="1">
            <RouterLink to="/home/about">About</RouterLink>
          </Menu.Item>
          <Menu.Item key="2">
            <Typography.Link
              href="https://ntueesaad.notion.site/d7c0947ce7fe4628851125032cde27b9"
              target="_blank"
            >
              Docunmentation
            </Typography.Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
