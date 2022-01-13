import { Row, Col, Typography, Divider } from "antd";
import {
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <Row justify="space-around">
        <Col span={20}>
          <Divider />
        </Col>
      </Row>
      <Row
        justify="space-between"
        style={{ width: "80%", margin: "auto" }}
        align="center"
      >
        <Col span={6} align="center">
          <MailOutlined className={styles.footerIcon} />
          <Divider type="vertical" />
          <Typography.Text>ntueemakerspace@gmail.com</Typography.Text>
        </Col>
        <Col span={6} align="center">
          <FacebookOutlined className={styles.footerIcon} />
          <Divider type="vertical" />
          <Typography.Link
            href="https://www.facebook.com/ntuee.makerspace"
            target="_blank"
          >
            https://www.facebook.com/ntuee.makerspace
          </Typography.Link>
        </Col>
        <Col span={6} align="center">
          <InstagramOutlined className={styles.footerIcon} />
          <Divider type="vertical" />
          <Typography.Link
            href="https://www.instagram.com/makerspace_ntuee"
            target="_blank"
          >
            https://www.instagram.com/makerspace_ntuee
          </Typography.Link>
        </Col>
      </Row>
    </>
  );
};
