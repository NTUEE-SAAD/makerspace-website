import React, { useLayoutEffect } from "react";
import { Tag, Button, Row, List } from "antd";
import { Text } from "..";
import styles from "./styles.module.css";
import faker from "faker";

export const PostList = () => {
  const dataSource = [];

  useLayoutEffect(() => {
    for (let i = 0; i < 10; i++) {
      dataSource.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        description: (
          <>
            <Tag>{faker.lorem.word()}</Tag>
            <Tag>{faker.lorem.word()}</Tag>
            <Tag>{faker.lorem.word()}</Tag>
          </>
        ),
        extra: <img width={272} alt="logo" src={faker.image.image()} />,
      });
    }
  });

  return (
    <>
      <Row justify="space-between">
        <Text.SectionTitle.Black>Posts</Text.SectionTitle.Black>
        <Button type="primary">new</Button>
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
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item
            onClick={() => console.log(item.title)}
            className={styles.listItem}
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
};
