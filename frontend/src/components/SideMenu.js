import { Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

let Item = styled(Menu.Item)`
  width: 10vw;
  height: 7vh;
`;

const menu = (
  <Menu>
    <Item>
      <Link to="/home/items">借用/查詢</Link>
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
    <Item>管理員</Item>
  </Menu>
);

export const SideMenu = () => {
  return (
    <Dropdown overlay={menu}>
      <div
        style={{ size: "large", color: "white", cursor: "pointer" }}
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        <MenuOutlined
          style={{
            fontSize: "24px",
            color: "white",
            transform: "translateY(4px)",
          }}
        />
      </div>
    </Dropdown>
  );
};
