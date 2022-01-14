import React, { useEffect } from "react";
import { Tag } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import ProList from "@ant-design/pro-list";
import { Text } from "..";
import styles from "./styles.module.css";
import faker from "faker";

const IconText = ({ icon, text }) => (
  <span style={{ marginRight: 8 }}>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

export const PostList = () => {
  const dataSource = [];

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      dataSource.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        description: (
          <>
            <Tag>语雀专栏</Tag>
            <Tag>设计语言</Tag>
            <Tag>蚂蚁金服</Tag>
          </>
        ),
        extra: <img width={272} alt="logo" src={faker.image.image()} />,
        actions: [
          <div className={styles.iconWrapper}>
            {[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
                className={styles.icon}
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
                className={styles.icon}
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
                className={styles.icon}
              />,
            ]}
          </div>,
        ],
      });
    }
  });

  return (
    <>
      <Text.SectionTitle.Black>Posts</Text.SectionTitle.Black>
      <ProList
        itemLayout="vertical"
        rowKey="id"
        headerTitle=""
        dataSource={dataSource}
        metas={{
          title: {},
          description: {},
          actions: {},
          extra: {},
          content: {},
        }}
      />
    </>
  );
};
