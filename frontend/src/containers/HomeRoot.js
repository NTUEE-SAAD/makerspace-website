import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export const HomeRoot = () => {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ width: "70%", margin: "auto" }}>
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};
