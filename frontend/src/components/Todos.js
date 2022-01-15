import React, { useState } from "react";
import { Table, Button, message } from "antd";
import { Text } from ".";
import { instance } from "../instance";

const columns = [
  {
    title: "Task type",
    dataIndex: "task",
  },
  {
    title: "User",
    dataIndex: "user",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
];
const data = [
  {
    key: "1",
    task: "掃地",
    user: "",
    time: "",
  },
  {
    key: "2",
    task: "3DP",
    user: "周柏融",
    time: "13:00",
  },
  {
    key: "3",
    task: "Laser",
    user: "勞志毅",
    time: "14:00",
  },
  {
    key: "4",
    task: "Item Borrow",
    user: "莊詠翔",
    time: "15:00",
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const onDuty = async (name) => {
  const date = new Date();
  try {
    console.log(date);
    const message = await instance.post("/staff/onduty", {
      name: name.name.name,
      date: date,
    });
    return "success";
  } catch {
    return "error";
  }
};

const displayStatus = (payload) => {
  if (payload.msg) {
    const { type, msg } = payload;
    const content = {
      content: msg,
      duration: 0.5,
    };
    switch (type) {
      case "success":
        message.success(content);
        break;
      case "error":
      default:
        message.error(content);
        break;
    }
  }
};

export const Todos = (name) => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Text.SectionTitle.Black>Todos</Text.SectionTitle.Black>
      <Button
        onClick={async (event) => {
          event.preventDefault();
          const message = await onDuty(name);
          console.log(message);
          if (message !== "error") {
            displayStatus({
              type: "success",
              msg: "簽到成功",
            });
          } else {
            displayStatus({
              type: "error",
              msg: "fail",
            });
          }
        }}
      >
        簽到
      </Button>
      <div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  );
};
