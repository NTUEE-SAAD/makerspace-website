import { useRef, useState } from "react";
import { message, Row, Typography } from "antd";
import ProTable, { TableDropdown } from "@ant-design/pro-table";
import { instance } from "../../instance";
import { Text } from "../../components";
import "@ant-design/pro-table/dist/table.css";

const addItem = (e) => {
  console.log(e.target);
};

export const SearchItem = ({ toborrow, setToborrow }) => {
  const columns = [
    {
      title: "物品名稱",
      key: "item",
      dataIndex: "name",
      hideInSearch: true,
      width: "30%",
    },
    {
      title: "以名稱搜尋",
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
        // all: { text: "全部", status: "Default" },
        board: {
          text: "開發板",
          status: "Default",
        },
        module: {
          text: "模組",
          status: "Default",
        },
        motor: {
          text: "馬達",
          status: "Default",
        },
        power: {
          text: "電源",
          status: "Default",
        },
      },
    },
    {
      title: "位置",
      dataIndex: "location",
      valueType: "select",
      valueEnum: {
        // all: { text: "全部", status: "Default" },
        A: {
          text: "樹德櫃 A區",
          status: "Processing",
        },
        B: {
          text: "3DP B區",
          status: "Processing",
        },
        C: {
          text: "C區",
          status: "Error",
          disabled: true,
        },
        D: {
          text: "白板櫃 D區",
          status: "Error",
          disabled: true,
        },
        E: {
          text: "層價櫃 E區",
          status: "Error",
          disabled: true,
        },
        F: {
          text: "拍拍手 F區",
          status: "Processing",
        },
        G: {
          text: "重加工 G區",
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
            if (toborrow.find((item) => item.id == record.key)) {
              message.error("已經新增至借用品項");
            } else {
              setToborrow([
                ...toborrow,
                {
                  name: record.name,
                  type: record.type,
                  quantity: "1",
                  id: record.key,
                },
              ]);
            }
          }}
        >
          新增
        </a>,
      ],
    },
  ];
  const actionRef = useRef();
  return (
    <div>
      <Row>
        <Text.SectionTitle.Black>物品搜尋</Text.SectionTitle.Black>
      </Row>
      <Row justify="center">
        <ProTable
          style={{ width: "70vw" }}
          columns={columns}
          actionRef={actionRef}
          request={async (params = {}, sort, filter) => {
            const { search, type, location } = params;
            const {
              data: { data },
            } = await instance.get("/staff/search", {
              params: {
                search,
                type,
                location,
              },
            });
            return { data: data };
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
      </Row>
    </div>
  );
};
