import { Layout } from "antd";
import { Header } from "./Header";
import { Content } from "./Content";

export const HomePage = () => {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ width: "70%", margin: "auto" }}>
        <Content />
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};
