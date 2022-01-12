import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import React from "react";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export const SideMenu = () => {
  return (
    <>
      <Dropdown overlay={menu}>
        <a
          style={{ size: "large", color: "white" }}
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          <MenuOutlined />
        </a>
      </Dropdown>
    </>
  );
};
