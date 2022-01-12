import { Menu, Space } from "antd";
import { Text, SideMenu } from "../../components";

export const Header = () => {
  return (
    <Space align="center">
      <SideMenu style={{width:20}}/>
      <Text.White>NTUEE MakerSpace</Text.White>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 1</Menu.Item>
        <Menu.Item key="3">Option 1</Menu.Item>
      </Menu>
    </Space>
  );
};
