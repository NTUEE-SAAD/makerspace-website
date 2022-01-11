import { Tabs, Divider } from "antd";

export const WebNav = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" styles={{width: "100%"}}>
        <Tabs.TabPane tab="Tab 1" key="1"></Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2"></Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3"></Tabs.TabPane>
      </Tabs>
    </>
  );
};
