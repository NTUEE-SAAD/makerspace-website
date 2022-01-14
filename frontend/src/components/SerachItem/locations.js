const locations = [
  {
    value: "B區",
    label: "3DP",
    children: [
      {
        value: "B1",
        label: "B1",
        children: [
          {
            value: "B1-1",
            label: "B1-1",
          },
          {
            value: "B1-2",
            label: "B1-2",
          },
          {
            value: "B1-3",
            label: "B1-3",
          },
          {
            value: "B1-4",
            label: "B1-4",
          },
        ],
      },
      {
        value: "B2",
        label: "B2",
        children: [
          {
            value: "B2-1",
            label: "B2-1",
          },
          {
            value: "B2-2",
            label: "B2-2",
          },
          {
            value: "B2-3",
            label: "B2-3",
          },
          {
            value: "B2-4",
            label: "B2-4",
          },
        ],
      },
      {
        value: "B3",
        label: "B3",
        children: [
          {
            value: "B3-1",
            label: "B3-1",
          },
          {
            value: "B3-2",
            label: "B3-2",
          },
          {
            value: "B3-3",
            label: "B3-3",
          },
          {
            value: "B3-4",
            label: "B3-4",
          },
        ],
      },
    ],
  },
  {
    value: "ALL",
    label: "預設",
  },
];
const data = [
  {
    title: "馬達",
    content: "微型步進馬達",
  },
  {
    title: "開發板",
    content: "STM32F746",
  },
  {
    title: "模組",
    content: "雷射模組",
  },
  {
    title: "馬達",
    content: "微型步進馬達",
  },
  {
    title: "開發板",
    content: "STM32F746",
  },
  {
    title: "模組",
    content: "雷射模組",
  },
];

export const Filter = {
  locations,
  data,
};
