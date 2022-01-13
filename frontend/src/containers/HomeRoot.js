import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { HomeHeader, HomeFooter } from "../components";

export const HomeRoot = () => {
  return (
    <Layout>
      <Layout.Header>
        <HomeHeader />
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        <HomeFooter />
      </Layout.Footer>
    </Layout>
  );
};
