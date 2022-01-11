import { Tabs, Typography } from "antd";

export const Header = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      styles={{ width: "100%" }}
      tabBarExtraContent={{
        left: <Typography.Text>NTUEEMakerSpace</Typography.Text>,
      }}
    >
      <Tabs.TabPane
        tab={<Typography.Text type="secondary" style={{color: "white"}}>Tab 1</Typography.Text>}
        key="1"
      ></Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2"></Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3"></Tabs.TabPane>
    </Tabs>
  );
};
