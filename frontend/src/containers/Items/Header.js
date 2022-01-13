import { Menu, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Logo } from "../../components";

const rightStyle = { position: "absolute", top: 0, right: 0 };

export const Header = () => {
  return (
    <Space align="center">
      <Logo />
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="1">3DP</Menu.Item>
        <Menu.Item key="2">Laser</Menu.Item>
        <Menu.Item key="3">Item</Menu.Item>
      </Menu>
      <Menu mode="horizontal" theme="dark" style={rightStyle}>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Sign Out
        </Menu.Item>
      </Menu>
    </Space>
  );
};
