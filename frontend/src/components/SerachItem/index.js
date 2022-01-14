import { List, Card, Badge, Input, Select, Cascader, Divider } from "antd";
import { Text } from "../../components";
import { Filter } from "./locations";
const { Option } = Select;
export const SerachItem = () => {
  return (
    <>
      <Text.SectionTitle.Black
        style={{ marginTop: "5vh", justifyContent: "center" }}
      >
        Serach Items
      </Text.SectionTitle.Black>
      <Input.Group compact>
        <Select defaultValue="1" style={{ width: "20%" }}>
          <Option value="1">所有</Option>
          <Option value="2">模組</Option>
          <Option value="3">開發板</Option>
          <Option value="4">馬達</Option>
        </Select>
        <Cascader
          style={{ width: "40%" }}
          options={Filter.locations}
          placeholder="請選擇位置"
        />
        <Input.Search
          allowClear
          placeholder="input search text"
          style={{ width: "40%" }}
          enterButton
        />
      </Input.Group>
      <Divider />
      <List
        grid={{
          gutter: 16,
          xs: 2,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        dataSource={Filter.data}
        renderItem={(item, index) => (
          <List.Item>
            <Badge count={index}>
              <Card
                title={item.title}
                key={index}
                hoverable={index ? true : false}
              >
                {item.content}
              </Card>
            </Badge>
          </List.Item>
        )}
      />
    </>
  );
};