import { Layout } from "antd";
import { SerachItem } from "../../components";
export const Items = () => {
  return (
    <Layout>
      <Layout.Content style={{ width: "70%", margin: "auto" }}>
        <SerachItem />
      </Layout.Content>
    </Layout>
  );
};
