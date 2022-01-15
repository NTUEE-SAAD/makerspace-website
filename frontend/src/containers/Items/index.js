import { Layout, ConfigProvider } from "antd";
import { SearchItem } from "../../components";
import zh_TW from "antd/lib/locale/zh_TW";
export const Items = () => {
  return (
    <ConfigProvider locale={zh_TW}>
      <Layout>
        <Layout.Content
          style={{
            width: "70%",
            margin: "5vh auto",
            justifyContent: "center",
          }}
        >
          <SearchItem />
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
};
