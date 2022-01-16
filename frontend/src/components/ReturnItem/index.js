import { useEffect, useRef, useState } from "react";
import { message } from "antd";
import ProTable, { TableDropdown } from "@ant-design/pro-table";
import { instance } from "../../instance";
import { Text } from "../../components";

export const ReturnItem = () => {
  const [borrowList, setBorrowList] = useState([]);
  useEffect(() => {
    console.log("UseEffect", borrowList);
  }, [borrowList]);
  const handleReturn = async (id) => {
    console.log(id);
    const {
      data: { data },
    } = await instance.delete("/staff/return", {
      params: {
        id,
      },
    });
    if (data === "successfully delete") {
      setBorrowList(borrowList.filter((item) => item._id !== id));
      console.log(borrowList);
      message.success("歸還成功");
    } else {
      message.error("歸還失敗");
    }
  };
  const columns = [
    {
      title: "借用ID",
      key: "_id",
      dataIndex: "_id",
      hideInSearch: true,
      width: "40%",
    },
    {
      title: "學號",
      dataIndex: "studentid",
      copyable: true,
      hideInTable: true,
    },
    {
      title: "應歸還日期",
      dataIndex: "duedate",
      valueType: "date",
      hideInSearch: true,
    },
    {
      title: "一鍵歸還",
      valueType: "option",
      render: (text, record, _, action) => [
        <a
          key={text}
          onClick={(e) => {
            console.log(record);
            handleReturn(record._id);
          }}
        >
          歸還
        </a>,
      ],
    },
  ];
  const expandedRowRender = (e) => {
    return (
      <ProTable
        columns={[
          { title: "物品名稱", dataIndex: "name", key: "name" },
          { title: "數量", dataIndex: "quantity", key: "quantity" },
        ]}
        headerTitle={false}
        search={false}
        options={false}
        dataSource={e.items}
        pagination={false}
      />
    );
  };
  const actionRef = useRef();
  return (
    <>
      <Text.SectionTitle.Black>歸還物品</Text.SectionTitle.Black>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}, sort, filter) => {
          const { studentid } = params;
          try {
            const {
              data: { data },
            } = await instance.get("/staff/borrow", {
              params: {
                studentid,
              },
            });
            await data.forEach((values) => {
              // console.log(Object.keys(values.items).length);
              // setBorrowList([...borrowList, values.items]);
              // console.log(values.items);
            });
            if (data !== "no borrows") {
              setBorrowList(data);
            } else {
              setBorrowList([]);
            }

            return { data: borrowList };
          } catch (e) {
            console.log(e);
            setBorrowList([]);
            return { data: borrowList };
          }
          //   await data.forEach((values) => {
          //     // console.log(Object.keys(values.items).length);
          //     // setBorrowList([...borrowList, values.items]);
          //     // console.log(values.items);
          //   });
          //   if (data !== "no borrows") {
          //     setBorrowList(data);
          //   } else {
          //     setBorrowList([]);
          //   }

          //   return { data: borrowList };
        }}
        rowKey="id"
        search={{
          labelWidth: "auto",
        }}
        onChange={setBorrowList}
        expandable={{ expandedRowRender }}
        headerTitle="查詢結果"
        pagination={{
          pageSize: 10,
        }}
      />
    </>
  );
};
