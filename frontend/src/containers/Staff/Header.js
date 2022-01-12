import { Menu, Space} from "antd";
import { Text } from "../../components";
import { UserOutlined } from "@ant-design/icons";

const rightStyle = {position: 'absolute', top: 0, right: 0}

export const Header = () => {
  return (
    <Space align="center">
      <Text.White>NTUEE MakerSpace</Text.White>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="1">3DP</Menu.Item>
        <Menu.Item key="2">Laser</Menu.Item>
        <Menu.Item key="3">Item</Menu.Item>
      </Menu>
      <Menu mode="horizontal" theme="dark" style = {rightStyle}>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Sign Out
        </Menu.Item>
      </Menu>
    </Space>
  );
};
