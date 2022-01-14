import { useRef, useState } from "react";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Button, Tag, Space, Menu, Dropdown } from "antd";
import ProTable, { TableDropdown } from "@ant-design/pro-table";
import { Text } from "../../components";
const addItem = (e) => {
  console.log(e.target);
};
const columns = [
  {
    title: "物品名稱",
    key: "item",
    dataIndex: "name",
    hideInSearch: true,
  },
  {
    title: "Search",
    dataIndex: "search",
    copyable: true,
    tip: "輸入欲查詢的物品",
    hideInTable: true,
  },
  {
    title: "類別",
    dataIndex: "type",
    valueType: "select",
    valueEnum: {
      all: { text: "全部", status: "Default" },
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
  },
  {
    title: "位置",
    dataIndex: "location",
    valueType: "select",
    valueEnum: {
      all: { text: "全部", status: "Default" },
      A: {
        text: "樹德櫃",
      },
      B: {
        text: "白板櫃",
        status: "Success",
        disabled: true,
      },
      C: {
        text: "層價區",
        status: "Processing",
        disabled: true,
      },
      D: {
        text: "拍拍手",
        status: "Processing",
      },
      E: {
        text: "HeHe",
        status: "Processing",
      },
    },
  },
  {
    title: "數量",
    key: "quantity",
    dataIndex: "quantity",
    hideInSearch: true,
  },
  {
    title: "借用",
    valueType: "option",
    render: (text, record, _, action) => [
      <a
        key={text}
        onClick={(e) => {
          // console.log(e.target.getAttribute("value"));
          console.log(record.name);
        }}
      >
        新增
      </a>,
    ],
  },
];
export const SearchItem = () => {
  const actionRef = useRef();
  return (
    <>
      <Text.SectionTitle.Black
        style={{ marginTop: "5vh", justifyContent: "center" }}
      >
        物品搜尋
      </Text.SectionTitle.Black>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}, sort, filter) => {
          console.log(params);
          return {
            data: [
              {
                key: 1,
                name: "STM32",
                type: "board",
                location: "A",
                quantity: 10,
              },
            ],
          };
        }}
        rowKey="id"
        search={{
          labelWidth: "auto",
        }}
        headerTitle="查詢結果"
        pagination={{
          pageSize: 10,
        }}
      />
    </>
  );
};
