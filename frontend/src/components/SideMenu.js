import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

let Item = styled(Menu.Item)`
  width: 10vw;
  height: 7vh;
`

const menu = (
  <Menu>
    <Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        預約
      </a>
    </Item>
    <Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        借用/查詢
      </a>
    </Item>
    <Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        活動
      </a>
    </Item>
    <Item>
      管理員
    </Item>
  </Menu>
);

export const SideMenu = () => {
  return (
    <>
      <Dropdown overlay={menu}>
        <div
          style={{ size: "large", color: "white", cursor: "pointer" }}
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          <MenuOutlined style={{ fontSize: "24px", color: "white" }} />
        </div>
      </Dropdown>
    </>
  );
};
