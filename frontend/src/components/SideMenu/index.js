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
    <a href="https://ntueesaad.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fceef6614-54e5-40c9-9978-6a24efe074fd%2F%E6%88%AA%E5%9C%96_2021-10-20_22.11.08.png?table=block&id=e14ced81-2891-438d-bc91-3777ce820b7d&spaceId=1d6782d1-eb07-4742-bad4-751da39ad55a&width=2000&userId=&cache=v2">
      <Typography.Text>管理員</Typography.Text>,
    </a>,
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
