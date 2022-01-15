import { Tag, Button, Row, List } from "antd";
import { Text } from "..";
import styles from "./styles.module.css";
import { usePost } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { NewPostModal } from "../NewPostModal";
import { useState } from "react";
import { request } from "../../instance";

export const PostList = ({ isStaff = true }) => {
  const [showModal, setShowModal] = useState(false);
  const { posts } = usePost();
  const navigate = useNavigate();

  const handleNewPost = () => {
    setShowModal(true);
  };

  const handleSubmit = async (data) => {
    await request({
      method: "POST",
      url: "/post/createPost",
      data: {
        data,
      },
    });
  };

  return (
    <>
      <NewPostModal
        visible={showModal}
        setVisible={setShowModal}
        handleSubmit={handleSubmit}
      />
      <Row justify="space-between">
        <Text.SectionTitle.Black>Posts</Text.SectionTitle.Black>
        {isStaff && (
          <Button type="primary" onClick={handleNewPost}>
            new
          </Button>
        )}
      </Row>
      <List
        className={styles.listWrapper}
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 10,
          pageSizeOptions: [10, 20, 50, 100],
          hideOnSinglePage: true,
        }}
        bordered={true}
        dataSource={posts}
        renderItem={(item) => (
          <List.Item
            onClick={() => navigate("/home/post/" + item.uuid)}
            className={styles.listItem}
            key={item.uuid}
            extra={
              <img
                width={272}
                alt=" "
                src={item?.image?.length > 0 ? item?.image[0] : 0}
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description.map((tag) => (
                <Tag color="#66bac6" key={uuid()}>
                  {tag}
                </Tag>
              ))}
            />
            {item.content.replace(/<[^>]*>/g, "").substring(0, 100) + " ..."}
          </List.Item>
        )}
      />
    </>
  );
};
