import { PageHeader, Space } from "antd";
import { WebNav } from "./WebNav";

export const Header = () => {
  return (
    <Space size={20} style={{ width: "100%" }}>
      <PageHeader
        title="NTUEEMakerSpace"
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
        // breadcrumb={{ routes }}
      ></PageHeader>
      <WebNav />
    </Space>
  );
};
