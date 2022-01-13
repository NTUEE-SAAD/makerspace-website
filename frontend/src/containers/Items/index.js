import { Layout } from "antd";
import { Body } from "./Body";
import { Header } from "./Header";

export const Items = () => {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ width: "70%", margin: "auto" }}>
        <Body />
      </Layout.Content>
    </Layout>
  );
};
