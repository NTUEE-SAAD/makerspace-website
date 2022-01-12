import React, { useState } from 'react';
import {Table} from 'antd';
const columns = [
  {
    title: 'Task type',
    dataIndex: 'task',
  },
  {
    title: 'User',
    dataIndex: 'user',
  },
  {
    title: 'Time',
    dataIndex: 'time',
  },
];
const data = [
  {
    key: '1',
    task : '掃地',
    user: '',
    time: '',
  },
  {
    key: '2',
    task : '3DP',
    user: '周柏融',
    time: '13:00',
  },
  {
    key: '3',
    task : 'Laser',
    user: '勞志毅',
    time: '14:00',
  },
  {
    key: '4',
    task : 'Item Borrow',
    user: '莊詠翔',
    time: '15:00',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

export const Todos = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <h2>Todos</h2>
      <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination = {false}
      />
      </div>
    </div>
  );
};