import React, { useState, useEffect } from "react";
import { message, Input, Form, Button, Row, notification } from "antd";
import { EditableProTable } from "@ant-design/pro-table";
import { Text } from "../../components";
import { instance } from "../../instance";
import "@ant-design/pro-table/dist/table.css";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
const openNotificationWithIcon = (type, _id, duedate) => {
  if (type === "error") {
    notification[type]({
      message: `Can not be borrowed out`,
      description: `Please refer to Admin`,
    });
  } else {
    notification[type]({
      message: `Borrow Successfully with ID : ${_id}`,
      description: `Please return by ${duedate}`,
    });
  }
};
const defaultData = [
  {
    name: "STM32",
    type: "board",
    quantity: "1",
    id: "F1",
  },
  {
    name: "MPU6050",
    type: "module",
    quantity: "1",
    id: "F1",
  },
  {
    name: "MG-90",
    type: "motor",
    quantity: "1",
    id: "F1",
  },
];
export const BorrowItem = ({ toborrow, setToborrow }) => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [form] = Form.useForm();
  const position = "hidden";
  const handleBorrow = async (values) => {
    console.log("Success", values);
    if (toborrow && values.name && values.studentid) {
      console.log("in");
      const {
        data: { data },
      } = await instance.post("/staff/borrow", {
        studentid: values.studentid,
        items: toborrow,
      });
      if (data === "failed") {
        openNotificationWithIcon("error");
      } else {
        openNotificationWithIcon("success", data._id, data.duedate);
        setToborrow([]);
        form.resetFields();
      }
    } else {
      if (!values.studentid) {
        message.error("請輸入學號");
      }
      if (!values.name) {
        message.error("請輸入姓名");
      }
      if (!toborrow[0]) {
        message.error("請選擇欲借用物品");
      }
    }
  };
  const columns = [
    {
      title: "物品名稱",
      key: "item",
      dataIndex: "name",
      editable: (text, record, index) => {
        return false;
      },
      width: "30%",
    },
    {
      title: "類別",
      dataIndex: "type",
      valueType: "select",
      valueEnum: {
        // all: { text: "全部", status: "Default" },
        board: {
          text: "開發板",
          status: "Error",
        },
        module: {
          text: "模組",
          status: "Error",
        },
        motor: {
          text: "馬達",
          status: "Error",
        },
      },
      editable: (text, record, index) => {
        return false;
      },
    },
    {
      title: "數量",
      key: "quantity",
      dataIndex: "quantity",
      hideInSearch: true,
    },
    {
      title: "編輯",
      valueType: "option",
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          更改數量
        </a>,
        <a
          key="delete"
          onClick={() => {
            setToborrow(toborrow.filter((item) => item.id !== record.id));
            message.warning("刪除成功");
          }}
        >
          刪除
        </a>,
      ],
    },
  ];
  return (
    <div>
      <Text.SectionTitle.Black>借用品項</Text.SectionTitle.Black>
      <div style={{ backgroundColor: "white", paddingTop: "1vh" }}>
        <Row justify="center" align="middle" style={{ margin: "1vh auto" }}>
          <Form
            form={form}
            name="basic"
            layout="inline"
            onFinish={handleBorrow}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item label="姓名" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="學號" name="studentid">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                借出
              </Button>
            </Form.Item>
          </Form>
        </Row>
        <EditableProTable
          style={{ width: "70vw" }}
          recordCreatorProps={
            position !== "hidden"
              ? {
                  position: position,
                  record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
                }
              : false
          }
          rowKey="id"
          // headerTitle="借用品項"
          maxLength={5}
          columns={columns}
          request={async () => ({
            data: toborrow,
          })}
          value={toborrow}
          onChange={setToborrow}
          editable={{
            type: "multiple",
            editableKeys,
            onSave: async (rowKey, data, row) => {
              console.log(rowKey, data, row);
              await waitTime(2000);
            },
            onChange: setEditableRowKeys,
          }}
        />
      </div>
    </div>
  );
};
