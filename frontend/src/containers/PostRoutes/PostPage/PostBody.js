import { Row, Col, Image, Typography } from "antd";
import styles from "./styles.module.css";
import { Parser as HtmlToReactParser } from "html-to-react";

export const PostBody = ({ post }) => {
  const htmlToReactParser = new HtmlToReactParser();
  const content = htmlToReactParser.parse(post.content);

  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Row gutter={30}>
        <Col span={6}>
          <Image preview={false} src={post.image} />
        </Col>
        <Col span={18}>
          <div className={styles.textWrapper}>
            <Typography.Text>{content}</Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};
