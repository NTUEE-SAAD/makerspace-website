import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { AdminHeader } from "../components";

export const AdminRoot = () => {
  return (
    <Layout>
      <Layout.Header>
        <AdminHeader />
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
