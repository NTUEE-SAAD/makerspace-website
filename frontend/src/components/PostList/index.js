import React, { useLayoutEffect } from "react";
import { Tag, Button, Row } from "antd";
import ProList from "@ant-design/pro-list";
import { Text } from "..";
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
      <ProList
        itemLayout="vertical"
        rowKey="id"
        dataSource={dataSource}
        metas={{
          title: {},
          description: {},
          extra: {},
          content: {},
        }}
      />
    </>
  );
};
