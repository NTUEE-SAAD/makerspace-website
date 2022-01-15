import { Menu, Dropdown, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const menu = () => {
  const items = [
    <Link to="/home/items">
      <Typography.Text>借用/查詢</Typography.Text>
    </Link>,
    <Link to="/home/modify">
      <Typography.Text>更改預約記錄</Typography.Text>
    </Link>,
    <Typography.Text>管理員</Typography.Text>,
  ];
  return (
    <Menu>
      {items.map((item) => (
        <div className={styles.item}>{item}</div>
      ))}
    </Menu>
  );
};

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
