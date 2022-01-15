import { useState } from "react";
import { Layout, ConfigProvider } from "antd";
import { SearchItem, BorrowItem } from "../../components";
import zh_TW from "antd/lib/locale/zh_TW";
export const Items = () => {
  const [toborrow, setToborrow] = useState([]);
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
          <SearchItem toborrow={toborrow} setToborrow={setToborrow} />
          <BorrowItem toborrow={toborrow} setToborrow={setToborrow} />
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
};
