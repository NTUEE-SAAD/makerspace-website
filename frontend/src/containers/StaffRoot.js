import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { StaffHeader } from "../components";

export const StaffRoot = () => {
  return (
    <Layout>
      <Layout.Header>
        <StaffHeader />
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
